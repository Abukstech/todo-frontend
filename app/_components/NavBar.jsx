import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.svg";
import Link from 'next/link';

const NavBar = () => {
  return (
    <main className='mt-4 bg-white px-5 flex justify-between items-center border-b-2 '>
<div>
<Image src={logo} alt='logo'/>
</div>

 <div className='flex justify-around gap-4'>
   <Link href="#"
   >
    <p>About Us</p>
    </Link>
    <Link href="#">
    <p>Projects</p>
    </Link> 
  <Link href="#">
  <p>Contact Us</p>
  </Link>
  
 </div>
    </main>
  )
}

export default NavBar