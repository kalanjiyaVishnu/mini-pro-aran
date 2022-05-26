import Axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import useUser from '../utils/use-user'

const cart = () => {
  const [user, logged, err] = useUser()
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    if (user) {
      user.cart.map((pid) => {
        Axios.get(`http://localhost:4000/api/products/` + pid?.toString()).then(
          (res) => {
            if (res.data) {
              setProducts((oldState) => {
                return [...oldState, res.data]
              })
              console.log(res.data)
            }
          }
        )
      })
    }
  }, [user])

  if (!user) {
    return <p>login first</p>
  } else
    return (
      <div className="">
        {products.map((product) => {
          return <Product product={product} key={product.id} />
        })}
      </div>
    )
}
export default cart
