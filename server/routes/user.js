const { userData, add, find, findByName } = require("../module/user")

const route = require("express").Router()

route.get("/", (_, res) => {
  return res.json(userData)
})

route.post("/reg", (req, res) => {
  console.log("req ", req.body)

  const id = add(req.body)
  const user = find(id)
  console.log("user after afddign ->", user)
  const resDdata = user ? user : { err: "no user found" }
  res.send(resDdata)
})

route.post("/login", (req, res) => {
  console.log(req.body)
  if (!req.body.name) {
    res.status(300).send({ err: "tyep the duckign mmae" })
  }
  const user = findByName(req.body.name)

  console.log("user after login ->", user)

  if (!user) {
    res.send({ err: "no user found" })
  }
  req.session.qid = user.id
  console.log("session ", req.session.qid)
  res.send(user)
})
route.get("/me", (req, res) => {
  // if (req.session.qid) {
  //   res.send(find(req.session.qid))
  //   res.end()
  // }
  res.json(find(req.session.qid))
})

route.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      res.send(false)
    }

    res.clearCookie()
    res.send(true)
  })
})
module.exports = route
