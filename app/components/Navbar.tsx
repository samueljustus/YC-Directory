

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"

const Navbar = async () => {


  const session = await auth()


  // if user is logged in we want to show the create logout and thumbnail component


  return (
    <header className="bg-[#F7F7F7] px-5 py-3 font-work-sans">

      <nav className="flex justify-between items-center">

        <Link href="/">
          <Image src="/group 5.svg" alt="my logo" width={143} height={30}>

          </Image>
        </Link>

        <div className="text-black">



          {session && session?.user ?

            (

              <div className="flex gap-4 items-center justify-center">

                <Link href="" >
                  <span>create</span>
                </Link>

                <form action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}>
                  <button className="bg-transparent border-0 p-0 m-0 text-black hover:underline cursor-pointer" type="submit">Logout</button>
                </form>



                <Link href="">
                  <span>{session?.user?.name}</span>
                </Link>
              </div>


            ) :

            (

              <form action={async () => {
                "use server"
                await signIn()
              }}>
                <button className="bg-transparent border-0 p-0 m-0 text-black hover:underline cursor-pointer" type="submit">Login</button>
              </form>

            )
          }
        </div>

      </nav >

    </header >
  )
}

export default Navbar


const name = "samuel"

console.log(name)