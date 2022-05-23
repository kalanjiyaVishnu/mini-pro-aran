import Axios from 'axios'
import { useEffect, useState } from 'react'

const profile = () => {
  const [logged, setLogged] = useState<Boolean>()
  useEffect(() => {
    Axios.get('http://localhost:4000/api/user/me').then((res) => {
      console.log('user init ', res.data)
      if (!res) {
        console.log('Server down')
      }
      if (res.data.err) {
        setLogged(false)
        return
      } else setLogged(true)
    })
  }, [])

  return <div className="">{logged ? 'yes logged' : 'not logged'}</div>
}
export default profile
