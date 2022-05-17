import Axios from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [User, setUser] = useState({
    name: '',
  })
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    Axios.get('http://localhost:4000/api/user/me').then((res) => {
      console.log('user init ', res.data)
      if (res.data) {
      }
      setLogged(true)
      setUser({ ...res.data })
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <p>intro page</p>
      {logged ? User.name : 'not logge'}
    </div>
  )
}

export default Home
