import Axios from 'axios'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <div className="fixed top-0 flex w-screen items-center justify-between bg-black font-sans text-white ">
      <nav className=" mx-auto  flex w-full max-w-screen-2xl items-center justify-between py-4">
        <Link href={'/about'}>
          <span className="text-slate-50s font-cur text-3xl drop-shadow-xl">
            Aran windows
          </span>
        </Link>
        <div className="ml-auto">
          <ul className="flex">
            <li className="mr-6">
              <Link href={'/login'}>
                <button className="text-blue-500 hover:text-blue-800">
                  login
                </button>
              </Link>
            </li>
            <li className="mr-6">
              <Link href={'/register'}>
                <button className="text-blue-500 hover:text-blue-800">
                  register
                </button>
              </Link>
            </li>
            <li className="mr-6">
              <Link href={'/'}>
                <button className="text-blue-500 hover:text-blue-800">
                  home
                </button>
              </Link>
            </li>{' '}
            <li className="mr-6">
              <Link href={'/login'}>
                <button
                  className="text-blue-500 hover:text-blue-800"
                  onClick={() => {
                    Axios.get('http://localhost:4000/logout')
                  }}
                >
                  logout
                </button>
              </Link>
            </li>
            <li className="mr-6">
              <Link href={'/about'}>
                <button className="text-blue-500 hover:text-blue-800">
                  about
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Nav
