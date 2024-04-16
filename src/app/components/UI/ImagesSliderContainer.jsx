"use client";
import { motion } from "framer-motion";
import React from "react";
import ImagesSlider from "./ImagesSlider";

export default function ImagesSliderContainer() {

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16",
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages2.jpeg?alt=media&token=6d903ac4-255b-4123-9c5a-1452b970d82e",
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages3.jpeg?alt=media&token=1178c857-2caf-4a46-8f9f-eca1557dde72",
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages4.jpeg?alt=media&token=40c8611e-5839-45f7-b591-d1f66dc46789",
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages5.jpeg?alt=media&token=f6f8b7ea-9059-43c6-8941-103fd3cc04d6",
    "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages6.jpeg?alt=media&token=6c4e4dd5-2f26-425e-a0da-7907eb75e12c",
    
  ];
  return (
    <ImagesSlider className="" images={images}>
      <motion.div
        initial={{
          opacity: 1,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="mb-3 [text-shadow:_3px_2px_0_rgb(0_0_0_/_50%)] px-4 font-bold text-lg md:text-5xl sm:px-8 text-center bg-clip-text  bg-white py-4 ">
        Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.
        </motion.p>
        <em className="text-red-600 [text-shadow:_3px_2px_0_rgb(0_0_0_/_50%)] font-bold text-lg md:text-5xl">John 11:25</em> */}
      </motion.div>
    </ImagesSlider>
  );
}
