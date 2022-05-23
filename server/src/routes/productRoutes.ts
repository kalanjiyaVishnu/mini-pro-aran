import { Response, Router } from "express"
import Product from "../entity/Product"
const route = Router()

route.get("/", async (req: any, res: any) => {
  res.send(await Product.find({}))
})
route.get("/add", async (req: any, res: any) => {
  res.send("adding the products")
})
route.get("/:id", async (req: any, res: Response) => {
  const id = req.params.id
  console.log(id)

  const product = await Product.findById(id)
  if (!product) {
    res.send({ err: "no suxh product" })
    return
  }
  res.send(product)
})

export default route
