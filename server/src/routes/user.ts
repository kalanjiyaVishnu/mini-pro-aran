import userOptions from "../module/user"

import { Router } from "express"
const route = Router()
route.get("/", (_, res) => {
  return res.json(userOptions.userData)
})

route.post("/reg", (req, res) => {
  console.log("req ", req.body)

  const id = userOptions.add(req.body)
  const user = userOptions.find(id)
  console.log("user after afddign ->", user)
  const resDdata = user ? { user } : { err: "no user found" }
  res.send(resDdata)
})

route.post("/login", (req: any, res) => {
  console.log(req.body)
  if (!req.body.name) {
    res.status(300).send({ err: "tyep the duckign mmae" })
  }
  const user = userOptions.findByName(req.body.name)

  console.log("user after login ->", user)

  if (!user) {
    res.send({ err: "no user found" })
  }
  req.session.qid = user.id
  console.log("session ", req.session.qid)
  res.send({ user })
})
route.get("/me", (req: any, res) => {
  // if (req.session.qid) {
  //   res.send(find(req.session.qid))
  //   res.end()
  // }
  res.json(userOptions.find(req.session.qid))
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
