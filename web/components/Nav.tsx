import Axios from 'axios'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link href={'#'}>
        <span className="font-cur text-3xl text-slate-50">Aran windows</span>
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
  )
}
export default Nav
