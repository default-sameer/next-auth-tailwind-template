import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
   <>
      <div className='flex flex-col text-center p-5'>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
      </div>
   </>
  )
}

export default Home
