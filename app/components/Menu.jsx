import React, { useState } from "react";
import { assets } from "@assets/assets";
import Image from "next/image";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuList = [
    {
      name: "Mentai Rice",
      price: "Rp22.000",
      desc: "Nasi yang dicampur dengan bumbu nori ditambah dengan toping kani, smoked beef, ayam dan saos mentai.",
      img: assets.mentai,
      bg: "bg-[#FFDFB7]",
      variants: [
        { name: "Original", price: "Rp22.000", img: assets.ori },
        { name: "Keju", price: "Rp25.000", img: assets.keju },
        { name: "Melted Mozza", price: "Rp28.000", img: assets.mozza },
      ],
    },
    {
      name: "Minuman",
      price: "Rp8.000",
      desc: "Matcha yang dipadukan dengan susu sehingga menciptakan matcha drink yang lezat. Teh yang di-roasted kemudian dicampur dengan susu menciptakan milktea yang yummy.",
      img: assets.drink,
      bg: "bg-[#AB8368]",
      variants: [
        { name: "Matcha", price: "Rp10.000", img: assets.matcha },
        { name: "Milktea", price: "Rp8.000", img: assets.milktea },
      ],
    },
    {
      name: "Donburi",
      price: "Rp13.000",
      desc: "Nasi dengan lauk ayam yang dimasak dengan berbagai rasa yang berbeda setiap harinya.",
      img: assets.donburi,
      bg: "bg-[#FFDFB7]",
      variants: [
        { name: "Sambel Oseng", img: assets.oseng },
        { name: "Teriyaki", img: assets.teriyaki },
        { name: "Salted Egg", img: assets.saltedegg },
        { name: "Asam Manis", img: assets.asammanis },
        { name: "Lada Hitam", img: assets.ladahitam },
        { name: "Cabe Garam", img: assets.oseng },
        { name: "Nasi Putih", price: "Rp13.000", img: assets.nasiputih },
        { name: "Nasi Daun Jeruk", price: "Rp15.000", img: assets.daunjeruk },
      ],
    },
  ];

  const handleOrder = () => {
  const menuName = selectedMenu?.name || "";

  const message = encodeURIComponent(
    `Halo kak, saya mau pesan *${menuName}*, varian: , jumlah: ,\nApakah tersedia untuk besok?`
  );

  const waUrl = `https://wa.me/6285711075790?text=${message}`;
  window.open(waUrl, "_blank");
  };


  return (
    <section id="menus">
      <div
        className="relative w-full min-h-screen bg-darkNaiko flex flex-col justify-center items-center py-24 shadow-xl"
        id="menu"
      >
        <h1 className="text-3xl md:text-4xl text-lightNaiko mb-12 font-Calistoga">
          Menu Kami
        </h1>

        <div className="flex flex-wrap justify-center items-stretch gap-10 px-6">
          {menuList.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedMenu(item)}
              className={`${item.bg} cursor-pointer text-darkNaiko w-72 md:w-80 p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-300`}
            >
              <Image
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-contain mb-4 drop-shadow-lg"
              />
              <h2 className="text-2xl mb-2">{item.name}</h2>
              <p className="text-base mb-3 font-Calistoga">
                start from {item.price}
              </p>
              <p className="text-sm text-darkNaiko/80 font-Calistoga">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedMenu && (
          <div className="fixed inset-0 overflow-y-scroll no-scrollbar flex justify-center items-center bg-black/40 backdrop-blur-sm z-50 p-4">
            <div className="bg-[#B69074] rounded-3xl p-6 md:p-10 relative shadow-xl text-darkNaiko w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar">

              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-5 text-2xl font-bold text-darkNaiko hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl md:text-3xl text-center mb-8 font-Calistoga">
                Varian {selectedMenu.name} 
              </h2>

              {/* Jika Donburi → split lauk & nasi */}
              {selectedMenu.name === "Donburi" ? (() => {
                const lauk = selectedMenu.variants.filter(v => !v.name.toLowerCase().includes("nasi"));
                const nasi = selectedMenu.variants.filter(v => v.name.toLowerCase().includes("nasi"));

                return (
                  <>
                    {/* Lauk */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mb-8">
                      {lauk.map((variant, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                          <Image
                            src={variant.img}
                            alt={variant.name}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover mb-2"
                          />
                          <p className="font-bold text-sm md:text-base font-Calistoga">{variant.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* Nasi */}
                    <h3 className="text-center text-lg font-Calistoga mb-4">Pilih Nasi</h3>
                    <div className="grid grid-cols-2 gap-6 justify-items-center mb-10">
                      {nasi.map((variant, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                          <Image
                            src={variant.img}
                            alt={variant.name}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover mb-2"
                          />
                          <p className="font-bold text-sm md:text-base font-Calistoga">{variant.name}</p>
                          <p className="text-xs md:text-sm opacity-80">{variant.price}</p>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })() : (
                /* Untuk Mentai & Minum → semuanya center */
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                  {selectedMenu.variants?.map((variant, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <Image
                        src={variant.img}
                        alt={variant.name}
                        width={150}
                        height={150}
                        className="
                          w-[120px] h-[120px]       /* mobile */
                          sm:w-[140px] sm:h-[140px] /* tablet */
                          md:w-[150px] md:h-[150px] /* desktop */
                          object-cover object-center 
                          rounded-full mb-2
                        "
                      />

                      <p className="font-bold text-sm md:text-base font-Calistoga">{variant.name}</p>
                      {variant.price && (
                        <p className="text-xs md:text-sm opacity-80">{variant.price}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                <button onClick={handleOrder} className="bg-[#E6CBB5] hover:bg-[#d6b8a0] transition px-8 py-3 rounded-full font-Calistoga text-lg shadow">
                  Pesan Sekarang
                </button>
              </div>

            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default Menu;
