import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import prisma from '../../../lib/prisma'



export default async function handle(req: NextApiRequest, res:NextApiResponse) {
    const session = await getSession({ req })
    const email = session?.user?.email
    console.log(email);
    
    // const userbyEmail: User | null = await prisma.user.findUnique({
    //     where:{
    //         email: email
    //     }
    // })
    res.send('hello')
 }