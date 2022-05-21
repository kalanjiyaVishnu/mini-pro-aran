import Axios from 'axios'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <header className="absolute top-0 z-50 flex w-screen items-center  justify-between   font-sans">
      <nav className="relative  mx-auto flex w-full max-w-screen-2xl items-center justify-between py-4 text-sm">
        {/* <Link href={'/about'}> */}
        <div className="flex h-10 items-center   text-center font-cur text-2xl text-warmGray-900 text-opacity-80 drop-shadow-sm">
          Aran windows
        </div>
        {/* </Link> */}

        <ul className="flex ">
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/login'}>login</Link>
          </li>
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/register'}>register</Link>
          </li>
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/home'}>services</Link>
          </li>{' '}
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/login'}>
              <span
                className="cursor-pointer"
                onClick={() => {
                  Axios.get('http://localhost:4000/logout')
                }}
              >
                logout
              </span>
            </Link>
          </li>
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/about'}>about</Link>
          </li>
          <li className="mr-6 transform font-bold uppercase text-primary-bg-color-2 opacity-80 transition-all duration-300 hover:scale-110 hover:text-sec-color-dark-1">
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
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav
