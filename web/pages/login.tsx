import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useRouter } from 'next/router'
Axios.defaults.withCredentials = true
const Login: NextPage = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState(null)
  const router = useRouter()

  return (
    <div className="flex  flex-col items-center justify-center py-2">
      <main className="flex">
        <form
          className="w-full max-w-sm"
          onSubmit={(e) => {
            e.preventDefault()
            Axios.post('http://localhost:4000/api/user/login', {
              name,
              pass,
            }).then(({ data }) => {
              if (data.err) {
                setErr(data.err)
                return
              }
              console.log('after register')
              router.push('/home')
              console.log(data)
            })
          }}
        >
          <div className="mb-6 md:flex md:items-center">
            <div className=" md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="flex-row md:w-2/3">
              <input
                className={`${
                  err && 'border-red-400'
                } w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none`}
                id="inline-full-name "
                type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
              <span className="text-sm  text-red-500 opacity-50">{err}</span>
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="inline-password"
                type="password"
                placeholder="******************"
                value={pass}
                onChange={({ target: { value } }) => setPass(value)}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <label className="block font-bold text-gray-500 md:w-2/3">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="focus:shadow-outline 0 transform rounded bg-indigo-700 bg-opacity-60 py-2 px-4 font-bold text-white shadow transition-all duration-150 hover:bg-opacity-100 focus:outline-none"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Login
