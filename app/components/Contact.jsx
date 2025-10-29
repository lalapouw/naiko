import React from 'react'
import { assets } from '@assets/assets'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id='contact'>
      <div  className="bg-lightNaiko w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 shadow-xl">
        
        {/* Sosmed Section */}
        <div className="flex flex-col items-center text-darkNaiko w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl mb-6">Our Sosmed</h2>
          <div className="flex items-center gap-4 mb-4">
            <Image src={assets.instagram} alt="Instagram" className="w-8 h-8" />
            <a href="https://www.instagram.com/naikoeats/" className="text-lg md:text-xl font-Calistoga">@naikoeats</a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={assets.tiktok} alt="Tiktok" className="w-8 h-8" />
            <a href="https://www.tiktok.com/@naikoeats" className="text-lg md:text-xl font-Calistoga">@naikoeats</a>
          </div>
        </div>

        {/* Order Section */}
        <div className="flex flex-col items-center text-darkNaiko w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-center">Order via</h2>
          <p className='mb-4 font-Calistoga'>(min. H-1)</p>
          <a
            href="https://wa.me/6285711075790"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={assets.whatsapp}
              alt="WhatsApp"
              className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
