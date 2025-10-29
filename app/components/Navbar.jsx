"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 w-full bg-darkNaiko z-50 shadow-md shadow-black/30'>
        <div className='max-w-6xl mx-auto flex justify-between items-center p-2'>
            <a href="#top">
              <Image src={assets.logo} alt="logo" className='w-[100px] sm:w-[160px] md:w-[180px] aspect-[1.9] h-auto object-contain cursor-pointer'/>
            </a>

            <ul className="hidden md:flex items-center gap-8 px-10 ml-150 list-none text-lightNaiko text-xl">
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menus">Menus</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setOpen(!open)}
              className='block md:hidden ml-3 z-[60]'
            >
              <Image src={open ? assets.close_icon : assets.menu_icon} alt='' className='w-7'/>
            </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex md:hidden flex-col items-center gap-6 py-20 px-10 fixed top-0 bottom-0 w-64 h-screen bg-darkNaiko text-lightNaiko text-xl transition-all duration-500
        ${open ? "right-0" : "-right-64"}`}>
          <li><a onClick={() => setOpen(false)} href="#top" className="transition-all duration-200 hover:text-[#f59300] hover:scale-110">Home</a></li>
          <li><a onClick={() => setOpen(false)} href="#about" className="transition-all duration-200 hover:text-[#f59300] hover:scale-110">About</a></li>
          <li><a onClick={() => setOpen(false)} href="#menus" className="transition-all duration-200 hover:text-[#f59300] hover:scale-110">Menus</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact" className="transition-all duration-200 hover:text-[#f59300] hover:scale-110">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
