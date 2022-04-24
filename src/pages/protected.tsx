import type { NextPage } from 'next'
import AccessDenied from '../components/access-denied'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

const Protected: NextPage = () => {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const [content, setContent] = useState()

    // Fetch content from protected route
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/examples/protected")
            const json = await res.json()
            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData()
    }, [session])

    // When rendering client side don't display anything until loading is complete
    // if (typeof window !== "undefined" && loading) return null

    // if (status === 'unauthenticated') return null

    if (!session) {
        return (
            <AccessDenied />
        )
    } 

    return (
        <>
            <div className='flex flex-col text-center p-5'>
            <h1>Protected Page</h1>
                <p>
                    <strong>{content ?? "\u00a0"}</strong>
                </p>
            </div>
            
        </>
    )
}

export default Protected
