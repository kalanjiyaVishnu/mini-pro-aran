import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const Register: NextPage = () => {
  const [nameOrEmail, setNameOrEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    // axios.get('http://localhost:4000/bob').then((res) => console.log(res.data))
  }, [])

  const router = useRouter()
  return (
    <div className="flex h-full flex-col  items-center  justify-center py-2 ">
      <main className="flex">
        <form
          className="w-full max-w-sm"
          onSubmit={(e) => {
            e.preventDefault()
            axios
              .post('http://localhost:4000/api/user/reg', { nameOrEmail, pass })
              .then((res) => {
                console.log('after register')
                if (res.data.err) {
                  setErr(res.data.err)
                  return
                }
                router.push('/login')
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
                 Name or Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                value={nameOrEmail}
                onChange={({ target: { value } }) => setNameOrEmail(value)}
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
          {err && (
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <label className="block font-bold text-gray-500 md:w-2/3">
                <span className="text-sm">{err}</span>
              </label>
            </div>
          )}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="focus:shadow-outline 0 transform rounded bg-indigo-700 bg-opacity-60 py-2 px-4 font-bold text-white shadow transition-all duration-150 hover:bg-opacity-100 focus:outline-none"
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
