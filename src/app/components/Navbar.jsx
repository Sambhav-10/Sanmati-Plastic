import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
    <nav className=' w-full flex justify-around  bg-gradient-to-r from-cyan-500 to-blue-500  p-2  fixed z-50 align-center shadow-2xl '>
        <div className=''>
            <Link href={"/"}><h1 className='text-4xl '>Sanmati Plastic</h1></Link>
        </div>
        <div className='space-x-4 text-xl'>
            <Link href={"/products"}>Products</Link>
            <Link href={"/partner"}>Become Partner</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
