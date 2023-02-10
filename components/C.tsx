import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='max-w-7xl mx-auto'>
      <hr className="border-[f7ab0a] m-10" />
    <h3 className='text-4xl'>
       <b>CONTACT INFO</b>
    </h3>
    <br />
    <h4 className='text-2xl'>
      Name
    </h4>
    <p>KEEZ (Sukh Grewal)</p>
    <br />
    <h4 className='text-2xl'>
      Email
    </h4>
    <p className='underline'><a href="mailto:nolimit.grewal@gmail.com">Nolimit.grewal@gmail.com</a></p>
    <br />
    <h4 className='text-2xl'>
      Phone
    </h4>
    <p className='underline'> <a href="tel:6044454042">604-445-4042</a></p>
    </div>
  )
}

export default Contact