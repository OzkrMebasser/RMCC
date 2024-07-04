"use client";
import { useEffect } from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";
// Components
import HeroSection from "./components/HeroSection";

import AboutHomePage from "./components/AboutHomePage";
import MisionVision from "./components/MisionVision";
import OurValues from "./components/OurValues"

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);
  return (
    <>
      <HeroSection />
      <AboutHomePage />
      <MisionVision />
      <OurValues/>
    </>
  );
}
