import { IProduct } from "./Product"
import { Schema, model } from "mongoose"

interface IUser {
  nameOrEmail: string
  pass: string
  avatar: string
  cart: IProduct[]
}

const userSchema = new Schema<IUser>({
  nameOrEmail: { type: String, required: true },
  pass: { type: String, required: true },
  avatar: String,
  cart: [String],
  //  {
  //   type: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //   ],
  //   default: [],
  // },
})

const User = model<IUser>("User", userSchema)
export default User
