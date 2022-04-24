import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ProtectedRoute = ({ children }: { children: React.ReactNode}) => {
    const {status} = useSession()
    const router = useRouter()

    useEffect(() => {
        if(status === 'unauthenticated'){
           router.push('/')
        }
    }, [router, status])
    if (status === 'unauthenticated') return null
  return (
    <>{children}</>
  )
}

export default ProtectedRoute