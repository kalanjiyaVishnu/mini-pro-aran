import { NextPage } from 'next'
import { useState } from 'react'
import Axios from 'axios'
Axios.defaults.withCredentials = true
const Login: NextPage = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>login form</h1>
      <main className="flex">
        <form
          className="w-full max-w-sm"
          onSubmit={(e) => {
            e.preventDefault()
            Axios.post('http://localhost:4000/api/user/login', {
              name,
              pass,
            }).then((res) => {
              console.log('after register')

              console.log(res.data)
            })
          }}
        >
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
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
                className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Login
