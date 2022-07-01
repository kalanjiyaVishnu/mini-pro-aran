import Axios from 'axios'

import { useEffect, useState } from 'react'
import Product from '../components/Product'
type ProductSectionProps = {
  type: string
}
const ProductSection: React.FC<ProductSectionProps> = ({ type }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:4000/api/products/cat/${type}`).then((res) => {
      console.log('products  ', res.data)
      if (res.data) {
        setProducts(res.data)
      }
    })
  }, [])
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 opacity-90 sm:text-4xl">
        {type} :]
      </h2>
      <div className="flex h-auto flex-wrap">
        {products.map((product: any, index) => {
          return <Product product={product} />
        })}
      </div>
    </>
  )
}
const Home = () => {
  return (
    <>
      <ProductSection type={'Windows'} />
      <ProductSection type={'Doors'} />
    </>
  )
}

export default Home
