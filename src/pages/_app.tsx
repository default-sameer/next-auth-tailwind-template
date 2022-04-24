import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"
import AuthWrapper from '../components/AuthWrapper'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <AuthWrapper>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp
