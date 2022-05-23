import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Axios from 'axios'

const navigation = [
  { name: 'Features', href: '/Features' },
  { name: 'Marketplace', href: '/home' },
  { name: 'Company', href: '/about' },
  { name: 'Cart', href: '/cart' },
]
const Nav: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
  })

  const [logged, setLogged] = useState<Boolean>()
  useEffect(() => {
    Axios.get('http://localhost:4000/api/user/me').then((res) => {
      console.log('user init ', res.data)
      if (!res) {
        console.log('Server down')
      }
      if (res.data.err) {
        setLogged(false)
        return
      } else setLogged(true)
      setUser(res.data.user)
      console.log(logged)
    })
  }, [])
  return (
    <>
      {/* <header className="absolute top-0 z-50 flex w-screen items-center justify-between border-b bg-primary-bg-color  font-sans  shadow-sm">
        <nav className="relative  mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 text-sm">
          <Link href={'/'}>
            <div className="flex h-10 cursor-pointer items-center   text-center font-cur text-2xl text-warmGray-900 text-opacity-80 drop-shadow-sm">
              Aran windows
            </div>
          </Link>

          <div className="flex">
            <ul className="flex">
              <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
                <Link href={'/login'}>login</Link>
              </li>
              <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
                <Link href={'/register'}>register</Link>
              </li>
              <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
                <Link href={'/home'}>home</Link>
              </li>{' '}
              <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
                <Link href={'/login'}>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      Axios.get('http://localhost:4000/api/user/logout')
                    }}
                  >
                    logout
                  </span>
                </Link>
              </li>
              <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
                <Link href={'/about'}>about</Link>
              </li>
            </ul>
            <div className="flex">
              <div className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:scale-110 hover:text-sec-color-dark-1">
                <Link href={'/profile'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="sm:block  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </header> */}
      <Popover>
        <div className="absolute top-0 z-50 w-screen items-center justify-between border-b bg-primary-bg-color py-4    shadow-sm">
          <nav
            className="relative mx-auto flex max-w-screen-2xl items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between px-8 md:w-auto">
                <a href="/">
                  <div className="flex h-10 cursor-pointer items-center   text-center font-cur text-2xl text-warmGray-900 text-opacity-80 drop-shadow-sm">
                    Aran windows
                  </div>
                </a>
                <div className="flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-indigo-100 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </a>
              {/* {logged ? (
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              ) : (
                <Link href={'/profile'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )} */}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-4 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="h-20 w-auto" src="logo1.png" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href="/login"
                className="block w-full bg-gray-50 px-5 py-2 text-center font-medium text-indigo-600 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
export default Nav
