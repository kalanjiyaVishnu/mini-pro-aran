import * as argon from "argon2"
import { Router } from "express"
import User from "../entity/User"
const route = Router()
route.get("/", async (_, res) => {
  res.json(await User.find({}))
})

const validate = (nameOrEmail: any, pass: any) => {
  if (!nameOrEmail) {
    return { err: "enter a valid name or email" }
  } else if (!nameOrEmail.includes("@") && nameOrEmail.length < 3) {
    return { err: "length should be greater" }
  } else if (nameOrEmail.includes("@") && nameOrEmail.length < 6) {
    return { err: "Enter a valid email" }
  } else if (pass.length < 3) {
    return { err: "pass length must be greater than 3" }
  }
  return null
}
route.post("/reg", async (req, res) => {
  const options = req.body
  console.log(options)

  const error = validate(options.nameOrEmail, options.pass)
  console.log(error)

  if (error) {
    res.send({ err: error.err })
    return
  }
  const isUserExists = await User.find({ nameOrEmail: options.nameOrEmail })
  console.log(isUserExists)

  if (isUserExists.length > 0) {
    res.send({ err: "user already exits" })
    return
  }
  options.pass = await argon.hash(options.pass)

  const user = new User(options)
  try {
    await user.save()
  } catch (err) {
    res.send({ err: "not stored in the db" })
    res.end()
  }

  res.send({ user })
})

route.post("/login", async (req: any, res) => {
  const options = req.body
  const error = validate(options.nameOrEmail, options.pass)
  if (error) {
    res.send({ err: error.err })
    return
  }
  const user = await User.findOne({ nameOrEmail: options.nameOrEmail })

  if (!user) {
    res.send({ err: "no user found" })
    return
  } else if (!(await argon.verify(user.pass, options.pass))) {
    res.send({ err: "password not match" })
    return
  }
  req.session.qid = user!.id
  res.send({ user })
})
route.get("/me", async (req: any, res) => {
  if (req.session.qid === undefined || req.session.qid === null) {
    res.send({ err: "unAuth" })
    return
  }
  const user = await User.findById(req.session.qid)
  if (!user) {
    res.send({ err: "unAuth" })
    return
  }

  res.send({ user })
})

route.get("/logout", (req: any, res: any) => {
  for (var prop in req.cookies) {
    if (!req.cookies.hasOwnProperty(prop)) {
      continue
    }
    res.cookie(prop, "", { expires: new Date(0) })
  }
  req.session.destroy((err: any) => {
    if (err) {
      res.status(404).json({
        errors: ["canr destroy session", "user not found with session id", err],
      })
      return
    }
    res.end(true)
  })
  res.end(false)
})
export default route
