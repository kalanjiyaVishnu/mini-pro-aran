import Axios from 'axios'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <header className="fixed top-0 flex w-screen items-center justify-between  font-sans  ">
      <nav className="relative  mx-auto flex w-full max-w-screen-2xl items-center justify-between py-4 text-sm">
        <Link href={'/about'}>
          <span className=" h-10 font-cur text-2xl drop-shadow-sm">
            Aran windows
          </span>
        </Link>

        <ul className="flex ">
          <li className="mr-6 transform font-normal uppercase text-sec-text-color opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/login'}>login</Link>
          </li>
          <li className="mr-6 transform font-normal uppercase text-sec-text-color opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/register'}>register</Link>
          </li>
          <li className="mr-6 transform font-normal uppercase text-sec-text-color opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/'}>services</Link>
          </li>{' '}
          <li className="mr-6 transform font-normal uppercase text-sec-text-color opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
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
          <li className="mr-6 transform font-normal uppercase text-sec-text-color opacity-80 transition-all duration-300 hover:text-sec-color-dark-1">
            <Link href={'/about'}>about</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav
