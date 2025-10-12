import React from 'react'
import Image from 'next/image'
import { assets } from '@assets/assets'
const Navbar = () => {
  return (
    <>
      <nav className='fixed top-0 w-full bg-darkNaiko '>
        <div className='max-w-6xl mx-auto flex justify-between items-center p-2'>
            <a href="#top" className=''>
            <Image src={assets.logo} alt="logo" className='w-[100px] sm:w-[160px] md:w-[180px] aspect-[1.9] h-auto object-contain cursor-pointer'/>
            </a>

            <ul className="hidden md:flex items-center  gap-8 px-10 ml-150 list-none text-lightNaiko text-xl">
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menus">Menus</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className='block md:hidden ml-3 z-[60]'>
              <Image src={assets.menu_icon} alt='' className='w-7'/>
            </button>
        </div>

        {/* {mobile menu} */}

        <ul className='flex md:hidden flex-col items-center gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-40 h-screen bg-darkNaiko text-lightNaiko text-xl list-none transition duration-500'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menus">Menus</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
