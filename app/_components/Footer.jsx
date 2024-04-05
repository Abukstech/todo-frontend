import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.svg"
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
   <main className='bg-[#EFF0FA] py-5'>
     <div className='flex justify-around'>
        <div>
<Image src={logo} alt=''/>
        </div>

        <div className='flex justify-between gap-5'>
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

        <div className='flex justify-between gap-5' >
        <FaFacebook/>
        <FaSquareXTwitter/>
        <RiInstagramFill/>
        </div>
     </div>
   </main>
  )
}

export default Footer