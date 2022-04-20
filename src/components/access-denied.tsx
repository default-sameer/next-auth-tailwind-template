import { signIn } from "next-auth/react"
import Link from "next/link"

export default function AccessDenied() {
    return (
        <>
            <div className='flex flex-col text-center p-5'>
            <h1>Access Denied</h1>
            <p>
                    <Link href={`/api/auth/signin`}>
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        signIn()
                    }}
                >
                    You must be signed in to view this page
                </a>
                </Link>
            </p>
            </div>
        </>
    )
}