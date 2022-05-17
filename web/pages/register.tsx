import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Register: NextPage = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  useEffect(() => {
    // axios.get('http://localhost:4000/bob').then((res) => console.log(res.data))
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex">
        <form
          className="w-full max-w-sm"
          onSubmit={(e) => {
            e.preventDefault()

            axios
              .post('http://localhost:4000/api/user/reg', { name, pass })
              .then((res) => {
                console.log('after register')

                console.log(res.data)
              })
            console.log(name, pass)
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
                className="focus:shadow-outline rounded bg-indigo-700 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
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

export default Register
