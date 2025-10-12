import React from 'react'
import { assets } from '@assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-24 shadow-xl"
      style={{ backgroundImage: `url(${assets.about.src})` }}
    >
      {/* Card 1 - Dark Section */}
      <div className="bg-darkNaiko/90 text-lightNaiko p-10 md:p-16 rounded-t-2xl text-center w-[90%] md:w-[70%] backdrop-blur-xl border-b-2 border-lightNaiko">
        <h1 className="text-2xl md:text-3xl mb-4">Yuk Kenalan Sama Naiko!</h1>
        <p className="text-base md:text-lg font-Calistoga leading-relaxed">
          Naikoeats adalah brand rumahan yang memproduksi berbagai jenis makanan dan minuman, salah satunya makanan nya
          adalah Mentai Rice dan Donburi sedangkan untuk minuman nya sendiri ada Matcha dan Milktea. Makanan dan minuman kami
          berbeda dari produk pada umumnya, karena dibuat dengan sepenuh hati 100% buatan rumahan, dan berbeda menu tiap minggunya lho!
        </p>
      </div>

      {/* Card 2 - Light Section */}
      <div className="bg-lightNaiko/95 text-darkNaiko p-10 md:p-14 rounded-b-2xl text-center w-[90%] md:w-[70%] backdrop-blur-md shadow-lg">
        <h2 className="text-xl md:text-2xl mb-4">Apa sih yang bikin Naiko SPESIAL?</h2>
        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm md:text-base font-Calistoga list-none">
          <li className="flex flex-col items-center">
            <Image src={assets.homemade} alt="" className="w-10 md:w-12 mb-2" />
            <span>100% Homemade</span>
          </li>
          <li className="flex flex-col items-center">
            <Image src={assets.recycle} alt="" className="w-10 md:w-12 mb-2" />
            <span>Kemasan Eco-friendly</span>
          </li>
          <li className="flex flex-col items-center">
            <Image src={assets.menu_variation} alt="" className="w-10 md:w-12 mb-2" />
            <span>Menu Bervariasi</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
