import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import session from "express-session"
import userRoute from "./routes/user"
import { config } from "dotenv"
const main = () => {
  const app = express()
  config()
  app.use(express.json())

  app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:3001"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  )

  app.use(cookieParser())
  app.use(
    session({
      name: "qid",
      cookie: {
        maxAge: 60 * 60 * 24,
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
