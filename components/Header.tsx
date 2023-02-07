import Link from 'next/link'
import React from 'react'
import "../styles/globals.css"


function Header() {
  return (
    
<header className='lg:flex justify-between mx-auto sm:block sm:space-x-0 sm:w-screen  '>
<div className=' mx-auto lg:flex items-center sm:block  sm:w-screen gap-10'>
<div>
<Link href="/">
    <img src="KZ.jpg" alt="" className='w-40 object-contain cursor-pointer sm:w-25'/>
</Link>
</div>


<div className='sm:block  md:flex w-full '>
    <Link href="/api/exit-preview" className=' lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Home</h3></Link>
    <Link href="/About" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>About</h3></Link>
    <Link href="/Clients" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Clients</h3></Link>
    <Link href="/Services" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Services</h3></Link>
    <Link href="/Contact" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Contact</h3></Link>
    <Link href="/api/preview" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Blog</h3></Link>

</div>

</div>



</header>
  )
}

export default Header