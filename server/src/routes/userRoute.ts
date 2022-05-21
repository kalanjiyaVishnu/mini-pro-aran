import * as argon from "argon2"
import { Router } from "express"
import User from "../entity/User"
import userOptions from "../module/user"
const route = Router()
route.get("/", (_, res) => {
  return res.json(userOptions.userData)
})

route.post("/reg", async (req, res) => {
  console.log("req ", req.body)
  const options = req.body
  if (!options.nameOrEmail) {
    res.send({ err: "enter a valid name or email" })
  } else if (
    !options.nameOrEmail.includes("@") &&
    options.nameOrEmail.length < 3
  ) {
    res.send({ err: "length should be greater" })
  } else if (
    options.nameOrEmail.includes("@") &&
    options.nameOrEmail.length < 6
  ) {
    res.send({ err: "Enter a valid email" })
  } else if (options.pass.length < 3) {
    res.send({ err: "pass length must be greater than 3" })
  }
  options.pass = await argon.hash(options.pass)

  const user = new User(options)
  try {
    await user.save()
  } catch (err) {
    res.send({ err: "not stored in the db" })
  }

  res.send({ user })
})

route.post("/login", async (req: any, res) => {
  console.log("req ", req.body)
  const options = req.body
  if (!options.nameOrEmail) {
    res.send({ err: "enter a valid name or email" })
  } else if (
    !options.nameOrEmail.includes("@") &&
    options.nameOrEmail.length < 3
  ) {
    res.send({ err: "length should be greater" })
  } else if (
    options.nameOrEmail.includes("@") &&
    options.nameOrEmail.length < 6
  ) {
    res.send({ err: "Enter a valid email" })
  } else if (options.pass.length < 3) {
    res.send({ err: "pass length must be greater than 3" })
  }
  const user = await User.findOne({ nameOrEmail: options.nameOrEmail })

  console.log("user after login ->", user)

  if (!user) {
    res.send({ err: "no user found" })
  }
  req.session.qid = user!.id
  console.log("session ", req.session.qid)
  res.send({ user })
})
route.get("/me", async (req: any, res) => {
  console.log("session", req.session.qid)

  if (req.session.qid === undefined || req.session.qid === null) {
    res.send({ err: "unAuth" })
    res.end()
  }
  const user = await User.findById(req.session.qid)
  if (!user) {
    res.end({ err: "unAuth" })
  }
  console.log("user ", user)

  res.json({ user })
})

route.get("/logout", (req: any, res: any) => {
  req.session.destroy((err: any) => {
    if (err) {
      console.log(err)
      res.send(false)
    }

    res.clearCookie()
    res.send(true)
  })
})
export default route
