import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
