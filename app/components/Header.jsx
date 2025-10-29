import { assets } from '@assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const handleOrder = () => {
  const url = `https://wa.me/6285711075790`;
  window.open(url, "_blank");
  };

  return (
    <section id="top" className='pt-20'>
      <div className='w-full h-auto flex flex-col md:flex-row-reverse items-center justify-center gap-2 md:gap-6 px-6 md:px-10 bg-lightNaiko'>
        
        {/* Gambar */}
        <div className='flex-1 flex justify-center'>
          <Image src={assets.header} alt='' className='w-3/5 md:w-3/4 object-contain self-end pt-15' />
        </div>

        {/* Teks */}
        <div className='flex-1 text-center'>
          <h3 className='text-xl md:text-4xl mb-4 text-darkNaiko text-center'>
            Bingung Mau Makan Apa? <br /> <span className='text-accentNaiko'>Naiko Aja!!!</span>
          </h3>

          <button
            onClick={handleOrder}
            className='inline-block bg-accentNaiko text-darkNaiko px-6 py-3 md:mb-0 mb-10 rounded-xl text-lg hover:bg-opacity-80 transition border-2 bg-lightNaiko hover:bg-darkNaiko hover:text-lightNaiko shadow-md shadow-accentNaiko'
          >Pesan Sekarang</button>
        </div>

      </div>
    </section>
  )
}

export default Header
