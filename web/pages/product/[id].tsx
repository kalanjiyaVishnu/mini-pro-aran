import Axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modals from '../../components/Modals'

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]
interface IProduct {
  name: { type: String; required: true; trim: true }
  price: Number
  desc: string
  thumb: String
  size: []
  images: []
  category: []
}
export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { id } = router.query
  console.log('id is ', id)
  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    if (id)
      Axios.get(`http://localhost:4000/api/products/` + id?.toString()).then(
        (res) => {
          if (res.data) {
            setProduct(res.data)
            console.log(res.data)
          }
        }
      )
  }, [id])

  return (
    <div className="mx-auto grid h-full  max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        {isOpen && (
          <Modals
            body="Are you sure you want to buy the product? You have to fill the form and you are good to go."
            head={'Confirm to Buy'}
            trigFn={() => {}}
          />
        )}
        <div className="flex w-full ">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Specifications
          </h2>
          <button
            className="ml-8 block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            Buy
          </button>
        </div>

        <p className="mt-4 text-gray-500">
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid  grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {product &&
          product.images.slice(0, 4).map((img) => {
            return (
              <img
                src={img}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="h-52 rounded-lg border-b bg-gray-100 shadow-md"
              />
            )
          })}
      </div>
    </div>
  )
}
