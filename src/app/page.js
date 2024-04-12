"use client";
import { useEffect } from "react";


// import aos
import Aos from "aos";
import "aos/dist/aos.css";
// Components
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Footer/>

    </>
    
  );
}
