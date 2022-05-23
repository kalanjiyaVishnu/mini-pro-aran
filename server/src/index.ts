import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import session from "express-session"
import userRoute from "./routes/userRoute"
import { config } from "dotenv"
import { connect } from "mongoose"
import productRoute from "./routes/productRoutes"
const main = async () => {
  const app = express()
  try {
    await connect("mongodb://localhost:27017/test")
  } catch (err) {
    console.log("Connection error->", err)
    return
  }

  config()

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
        maxAge: 1000 * 60 * 60 * 24,
      },
      secret: "soemtiosdfads",
      saveUninitialized: false,
      resave: false,
    })
  )
  app.use("/api/user", userRoute)
  app.use("/api/products", productRoute)
  app.get("/bob", (req, res) => {
    console.log(req.session)
    res.send("bob")
  })

  app.listen(4000, () => {
    console.log("up and running")
  })
}
main()
