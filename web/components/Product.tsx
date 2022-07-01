import Link from 'next/link'
import { useState } from 'react'

export default function Product({
  product,
  extra,
}: {
  product: any
  extra?: boolean
}) {
  const [thumb, setThumb] = useState(product.thumb)
  return (
    <div className="ml-8 mb-8 flex">
      <div className=" transform rounded-xl bg-primary-bg-color-transparent p-6 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="mx-auto h-32 w-72 overflow-hidden rounded-t-md rounded-b-sm object-cover"
          src={thumb}
          alt=""
        />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
          <p className="mt-2 text-sm text-gray-700">Two sizes</p>
          <div className="mt-3 flex space-x-4 p-1">
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-green-200">
              <span
                className="block h-6 w-6 rounded-full bg-green-400"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[0])
                }}
              >
                {' '}
              </span>
            </div>
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-blue-200">
              <span
                className="block h-6 w-6 rounded-full bg-blue-400"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[1])
                }}
              >
                {' '}
              </span>
            </div>
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-yellow-200">
              <span
                className="block h-6 w-6 rounded-full bg-yellow-400"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[2])
                }}
              >
                {' '}
              </span>
            </div>
          </div>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="block cursor-auto text-xl font-semibold text-gray-700">
              ₹{product.price}
            </button>
            <Link href={'product/' + product._id}>
              <button className="block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
