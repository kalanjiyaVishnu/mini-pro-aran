import Axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Modals from '../../components/Modals'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { UserContext } from '../../hooks/UserContext'

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
  id: string
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
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const [product, setProduct] = useState<IProduct>()

  const { user, logged, err, cart, addToCart, removeFromCart } =
    useContext(UserContext)
  const [products, setProducts] = useState<any[]>([])
  const pid = router.query.id
  useEffect(() => {
    if (pid)
      Axios.get(`http://localhost:4000/api/products/` + pid.toString()).then(
        (res) => {
          if (res.data) {
            setProduct(res.data)
          }
        }
      )

    if (cart) {
      console.log(cart)
    }
  }, [pid])

  const getSum = () => {
    let sum: number = 0
    cart!.forEach((p) => {
      sum += p.price
    })
    return sum
  }

  return (
    <div className="mx-auto grid h-full  max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        {isOpen && (
          <Modals
            body="Are you sure you want to buy the product? You have to fill the form and you are good to go."
            head={'Confirm to Buy'}
            disable={!logged}
            trigFn={() => {
              addToCart(product)
              Axios.post('http://localhost:4000/api/products/addToCart', {
                pid: pid,
                uid: user._id,
              }).then((res) => {
                if (res.data.err) {
                  console.log(res.data.err)
                  return
                }
                setOpen(true)
                // router.push('/cart')
                console.log(res.data)
              })
            }}
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
          <button
            className="ml-8 block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md"
            onClick={() => setOpen(!open)}
          >
            Cart
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
                key={img}
              />
            )
          })}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {' '}
                            Shopping cart{' '}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.thumb}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {' '}
                                            {product.name}{' '}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() => {
                                            removeFromCart(pid)
                                            setOpen(false)
                                          }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{getSum()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            onClick={() => {
                              Axios.post(
                                'http://localhost:4000/api/products/checkout',
                                {
                                  uid: user._id,
                                }
                              ).then((res) => {
                                if (res.data.err) {
                                  console.log(res.data.err)
                                  return
                                }
                                // refetch()
                                // setOpen(true)
                                // router.push('/cart')
                                console.log(res.data)
                              })
                              
                              alert('mail sent checkout')
                            }}
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
