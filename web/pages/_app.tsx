import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Axios from 'axios'

Axios.defaults.withCredentials = true
function app({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default app
