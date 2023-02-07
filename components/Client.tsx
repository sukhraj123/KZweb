import React from 'react'
import "../styles/globals.css"

function Client() {
  return (
    
    <div id='Clients' className='grid grid-cols-1 md:grid-cols-1 px-10 gap-10 gap-y-16 pb-24 '>
      <h1 className='text-center text-3xl'>EXPERIENCES WE'VE MADE</h1>
<div className='py-50'>
<div className='lg:flex  gap-4 '>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/1.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/2.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/3.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/4.jpg" alt="" /></a>
</div>
<br />
<div className='lg:flex gap-4 '>
<a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/5.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/6.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/7.jpg" alt="" /></a>
    <a href="" className='hover:opacity-20 transition duration-300 ease-in-out bg-black shadow-lg'><img src="/8.jpg" alt="" /></a>

</div>


</div>
    </div>
  )
}

export default Client