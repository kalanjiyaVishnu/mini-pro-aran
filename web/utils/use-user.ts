import { IUser } from './globals'
import Axios from 'axios'
import { useEffect, useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState()

  const [logged, setLogged] = useState<Boolean>()
  const [err, setErr] = useState<String>('')

  useEffect(() => {
    Axios.get('http://localhost:4000/api/user/me').then((res) => {
      if (!res) {
        console.log('Server down')
        setErr('server down')
      }
      if (res.data.err) {
        setLogged(false)
        setErr(res.data.err)

        return
      } else setLogged(true)
      console.log('juser init ', res.data.user)

      setUser(res.data.user)
    })
  }, [])
  return [user, logged, err]
}
export default useUser
