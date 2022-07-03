import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Product from '../components/Product'
let defaultuser: any = null
export const UserContext = createContext(defaultuser)

export default function UserProvider(props: any) {
  const [user, setUser] = useState<any>()
  const [cart, setCart] = useState<any>([])

  const [logged, setLogged] = useState<Boolean>(false)
  const [err, setErr] = useState<string>('No errors')

  useEffect(() => {
    Axios.get('http://localhost:4000/api/user/me').then((res) => {
      if (!res) {
        console.log('Server down')
        setErr('server down')
        setUser(null)
        setLogged(false)
      }
      if (res.data.err) {
        setLogged(false)
        setErr(res.data.err)
        return null
      } else setLogged(true)

      console.log('user init ', res.data.user)
      setUser(res.data.user)
      fetchCart(res.data.user.cart)
    })
  }, [logged])

  const logout = () => {
    setUser(null)
    setLogged(false)
    setErr('')
  }
  const addToCart = (data: any) => {
    setCart([...cart, data])
  }
  async function fetchCart(cart: [string]) {
    let data: any[] = []
    await Promise.all(
      cart.map(async (pid) => {
        const contents = await Axios.get(
          `http://localhost:4000/api/products/${pid}`
        )
        data.push(contents.data)
      })
    )

    setCart(data)
  }
  const removeFromCart = (pid: string) => {
    console.log(pid, 'removed from cart')
    console.log(cart.filter((p: any) => p._id !== pid))
    try {
      Axios.post('http://localhost:4000/api/products/removeFromCart', {
        pid: pid,
        uid: user._id,
      }).then((res) => {
        if (res.data.err) {
          throw new Error(res.data.err)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserContext.Provider
      value={{ user, logged, err, cart, addToCart, fetchCart, removeFromCart }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
