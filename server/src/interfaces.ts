import { Request } from "express"
export type IGetUserAuthInfoRequest = Request & {
  user: string
  params: any
}
