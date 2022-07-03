import Axios from 'axios'

import { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useFetch } from '../utils/useFetch'
type ProductSectionProps = {
  type: string
}
const ProductSection: React.FC<ProductSectionProps> = ({ type }) => {
  const [products, loading, err] = useFetch(
    `http://localhost:4000/api/products/cat/${type}`
  )

  if (loading) {
    return null
  }

  if (!loading && err) {
    return <div>{err}</div>
  }
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 opacity-90 sm:text-4xl">
        {type}
      </h2>
      <div className="flex h-auto w-full flex-wrap">
        {products!.map((product: any) => {
          return <Product product={product} key={product.id} />
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
