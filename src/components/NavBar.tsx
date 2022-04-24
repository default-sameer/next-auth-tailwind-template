import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BASE_URL } from "../utils/config";

export default function Navbar(){
    const {data:session, status} = useSession();
    
    const loading = status === "loading";
    
    return(
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link href='/'>
                                <a>Home</a>
                                </Link>
                            </li>
                           
                            <li>
                                <Link href='/protected'>
                                    <a>Protected</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href='/'>
                    <a className="btn btn-ghost normal-case text-xl">Next-Auth</a>
                    </Link>
                    {/* {status === 'authenticated' ? (<>Authenticated</>) : (<>Unauthenticated</>)} */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>

                        <li className="ml-1">
                            <Link href='/protected'>
                                <a>Protected</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {!session && (
                    <Link href={`/api/auth/signin`}>
                        <a onClick={(e) => {
                            e.preventDefault()
                            // signIn('github',{callbackUrl: `${BASE_URL}/protected`})
                            signIn()
                        }} className="btn">Log In</a>
                    </Link>
                    )}
                    {session?.user && (
                        <>
                    <div className="dropdown dropdown-end ml-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* {session.user.image &&(
                                    <img src={`${session.user.image}`} />
                                )} */}

                                        {session.user.image ? (<> <img src={`${session.user.image}`} /></>) : (<> <img src={`./favicon.ico`} /></>)}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={`/user/profile`}>
                                <a className="justify-between">
                                    Profile
                                </a>
                                </Link>
                            </li>
                            <li>
                            <Link href={`/api/auth/signout`}>
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    signOut({callbackUrl: 'http://localhost:3000'})
                                }}>Logout</a>
                            </Link>
                            </li>
                        </ul>
                    </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}