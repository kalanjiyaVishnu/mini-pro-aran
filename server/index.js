const cookieParser = require("cookie-parser")
const express = require("express")
const { add, find, userData, findByName } = require("./module/user")
const cors = require("cors")
const session = require("express-session")
const userRoute = require("./routes/user")
const main = () => {
  const app = express()
  app.use(express.json())
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  )

  app.use(cookieParser())
  app.use(
    session({
      name: "qid",
      cookie: {
        expires: 60 * 60 * 24,
      },
      secret: "soemtiosdfads",
      saveUninitialized: false,
      resave: false,
    })
  )
  app.use("/api/user", userRoute)
  app.get("/bob", (req, res) => {
    console.log(req.session)
    res.send("bob")
  })

  app.listen(4000, () => {
    console.log("up and running")
  })
}
main()
