export interface IProduct {
  name: { type: String; required: true; trim: true }
  price: Number
  desc: string
  thumb: String
  size: []
  images: []
  category: []
}

export interface IUser {
  _id: string
  nameOrEmail: string
  pass: string
  avatar?: string
  cart: IProduct[]
}
