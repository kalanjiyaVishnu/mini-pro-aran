import { Schema, model } from "mongoose"

export interface IProduct {
  name: { type: String; required: true; trim: true }
  price: Number
  desc: string
  thumb: String
  size: []
  images: []
  category: []
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    thumb: { type: String, required: true },
    desc: { type: String },
    size: { type: [String], default: [] },
    images: { type: [String], default: [] },
    category: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
)

const Product = model<IProduct>("Product", productSchema)
// const p1 = new Product({
//   name: "Picture Windows",
//   price: 16000,
//   image:
//     "https://cdn.homecrux.com/wp-content/uploads/2018/11/picture-windows_6.jpg",
//   desc: "If you ever wanted to replace your opaque doors or walls with see-through glass windows, then picture windows are recommended. They are commonly used in combination with additional windows for an attractive aesthetic. The best place to install picture windows is where they will offer the best views of the outside.",
//   size: ["sm", "lg", "xl"],
//   category: ["Windows", "Picture Windows"],
// })
// console.log(p1)
// // p1.save()
export default Product
