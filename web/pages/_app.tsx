import '../styles/globals.css'
import Layout from '../components/Layout'
import Axios from 'axios'
import { AppProps } from 'next/app'
import UserProvider from '../hooks/UserContext'

Axios.defaults.withCredentials = true
type Props = AppProps & {
  Component: any
}
export default ({ Component, pageProps }: Props) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
