import type { ReactChildren } from "react"
import Navbar from './NavBar'
import Head from 'next/head'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>

            <Navbar />
            <Head>
                <title>Next-auth-tailwind</title>
            </Head>
            <main>{children}</main>
        </>
    )
}