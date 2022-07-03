import Axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import useUser from '../utils/useFetch'

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
      <div>
        <Link href={'/BuyProduct'}>
          <button className="block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
            Proceed to Buy : {products && products.length}
          </button>
        </Link>
        <br />

        <div className="flex  flex-wrap">
          {products.map((product) => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    )
}
export default cart
