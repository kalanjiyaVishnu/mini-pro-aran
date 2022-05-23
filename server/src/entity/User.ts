import { Schema, model } from "mongoose"

interface IUser {
  nameOrEmail: string
  pass: string
  avatar?: string
}

const userSchema = new Schema<IUser>({
  nameOrEmail: { type: String, required: true },
  pass: { type: String, required: true },
  avatar: String,
})

const User = model<IUser>("User", userSchema)
export default User
