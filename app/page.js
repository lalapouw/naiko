'use client';

import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "@components/Header";
import About from "@components/About";
import Menu from "@components/Menu";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  // ✅ Inisialisasi AOS saat komponen dimount
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya muncul sekali
      easing: 'ease-in-out', // efek transisi halus
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}
