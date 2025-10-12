import React from 'react'
import { assets } from '@assets/assets'
import Image from 'next/image'

const Menu = () => {
  const menuList = [
    {
      name: 'Mentai Rice',
      price: 'Rp22.000',
      desc: 'Nasi yang dicampur dengan bumbu nori ditambah dengan toping kani, smoked beef, ayam dan saos mentai.',
      img: assets.mentai,
      bg: 'bg-[#FFDFB7]',
    },
    {
      name: 'Milktea & Matcha',
      price: 'Rp8.000',
      desc: 'Matcha yang dipadukan dengan susu sehingga menciptakan matcha drink yang lezat. Teh yang di-roasted kemudian dicampur dengan susu menciptakan milktea yang yummy.',
      img: assets.drink,
      bg: 'bg-[#AB8368]',
    },
    {
      name: 'Donburi',
      price: 'Rp13.000',
      desc: 'Nasi dengan lauk ayam yang dimasak dengan berbagai rasa yang berbeda setiap harinya.',
      img: assets.donburi,
      bg: 'bg-[#FFDFB7]',
    },
  ]

  return (
    <div 
      className="relative w-full min-h-screen bg-darkNaiko flex flex-col justify-center items-center py-24 shadow-xl"
      id="menu"
    >
      <h1 className="text-3xl md:text-4xl text-lightNaiko mb-12">
        Menu Kami
      </h1>

      <div className="flex flex-wrap justify-center items-stretch gap-10 px-6">
        {menuList.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} text-darkNaiko w-72 md:w-80 p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-300`}
          >
            <Image
              src={item.img}
              alt={item.name}
              className="w-40 h-40 object-contain mb-4 drop-shadow-lg"
            />
            <h2 className="text-2xl mb-2">{item.name}</h2>
            <p className="text-base mb-3 font-Calistoga">start from {item.price}</p>
            <p className="text-sm text-darkNaiko/80 font-Calistoga">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
