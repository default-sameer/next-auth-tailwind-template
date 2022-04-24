import React from 'react'
import type { NextPage } from 'next'
import prisma from '../../lib/prisma'
import { useSession } from 'next-auth/react'



const Profile: NextPage = () => {
    const {data: session} = useSession()
    
    

  return (
    <>
    <div className='flex justify-center items-center p-5'>
      <div className="stats shadow">
        {session?.user && (<>
        {session.user.name ? 
        <div className="stat">
            <div className="stat-title">{session.user.name ? ('Name'): ('')}</div>
              <div className="stat-value">{session.user.name}</div>
        </div>
        : ''}

        <div className="stat">
            <div className="stat-title">Email</div>
              <div className="stat-value">{session.user.email}</div>
        </div>
        </>)}
      </div>
    </div>
    </>
  )
}


// export const getServerSideProps = async ({ req }) => {
//   const email = 
// }

export default Profile