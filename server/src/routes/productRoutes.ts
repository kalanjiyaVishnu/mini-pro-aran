import { Response, Router } from "express"
import User from "../entity/User"
import Product from "../entity/Product"
import sendMail from "../module/mail"
const route = Router()

type handler = (req: Request, res: any) => Promise<void>

const getAllProducts: handler = async (req, res) => {
  res.send(await Product.find({}))
}
const addProducts: handler = async (req: any, res: any) => {
  res.send("adding the products")
}
const checkout = async (req: any, res: any) => {
  console.log("body ,", req.body)
  const { uid } = req.body
  const user = await User.findById(uid)
  sendMail(user!.nameOrEmail, `${uid} is ${user?.nameOrEmail}`).catch(
    console.error
  )
  console.log(user)

  User.updateOne({ _id: uid }, { $set: { cart: [] } }, { multi: true })
  res.send("adding the products to the cart")
}
const removeFromCart = async (req: any, res: any) => {
  console.log("body ,", req.body)
  const { pid, uid } = req.body
  // const user = await User.findById(uid)
  // user?.cart?.push(pid)
  // await user?.save()
  await User.updateOne({ _id: uid }, { $pull: { cart: pid } })
  // console.log(user)

  res.send("removed the products to the cart")
}

const addToCart = async (req: any, res: any) => {
  console.log("body ,", req.body)
  const { pid, uid } = req.body
  const user = await User.findById(uid)
  user?.cart?.push(pid)
  await user?.save()
  console.log(user)

  res.send("adding the products to the cart")
}
const getSingleProduct: handler = async (req: any, res: Response) => {
  const id = req.params.id
  console.log(id)

  const product = await Product.findById(id)
  if (!product) {
    res.send({ err: "no suxh product" })
    return
  }
  res.send(product)
}

const getCategory: handler = async (req: any, res: Response) => {
  const type = req.params.type
  console.log(type)

  if (!type) {
    res.json({})
  }
  const products = await Product.find({ category: type })
  if (!products) {
    res.send({ err: "no such cat" })
    return
  }
  res.json(products)
}

route.get("/", getAllProducts)
route.get("/add", addProducts)
route.post("/addToCart", addToCart)
route.post("/removeFromCart", removeFromCart)
route.post("/checkout", checkout)
route.get("/:id", getSingleProduct)
route.get("/cat/:type", getCategory)

export default route
