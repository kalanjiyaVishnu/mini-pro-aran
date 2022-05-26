import { Response, Router } from "express"
import User from "../entity/User"
import Product from "../entity/Product"
const route = Router()

type handler = (req: Request, res: any) => Promise<void>

const getAllProducts: handler = async (req, res) => {
  res.send(await Product.find({}))
}
const addProducts: handler = async (req: any, res: any) => {
  res.send("adding the products")
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

route.get("/", getAllProducts)
route.get("/add", addProducts)
route.post("/addToCart", addToCart)
route.get("/:id", getSingleProduct)

export default route
