import { useEffect, useState } from 'react'

export const useFetch = (api: string) => {
  const [state, setState] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [err, setErr] = useState<string | null>(null)
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          console.log('Server down')
          setErr('server down')
        }
        if (data.err) {
          setErr(data.err)
          return []
        } else {
          setState(data)
          setLoading(false)
        }

        console.log('data', data)
      })
  }, [])
  return [state, loading, err]
}
