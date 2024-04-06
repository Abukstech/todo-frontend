"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../../public/logo.svg";
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className='mt-4 bg-white px-5 flex justify-between items-center border-b-2 '>
<div>
<Image src={logo} alt='logo'/>
</div>

 <div className=' hidden md:flex justify-around gap-4'>
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

 <div className="md:hidden">
            <div
              id="hamburger"
              className={`md:hidden ${showMenu ? "hidden" : ""}`}
            >
              <AiOutlineMenu
                size={24}
                color="black"
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>


 <div
              className={`md:hidden cursor-pointer ${
                showMenu ? "" : "hidden"
              } bg-white w-fit p-5 pt-3 border absolute right-8 top-4 z-50 rounded-lg`}
            >
              <div
                id="hamburger"
                className={`md:hidden ${
                  showMenu ? "" : "hidden"
                } flex justify-end mb-4`}
              >
                <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
              </div>

              <ul className='"grid gap-10'>
              <Link href="#"
   >
    <li>About Us</li>
    </Link>
    <Link href="#">
    <li>Projects</li>
    </Link> 
  <Link href="#">
  <li>Contact Us</li>
  </Link>
              </ul>
</div>

</div>
    </main>
  )
}

export default NavBar