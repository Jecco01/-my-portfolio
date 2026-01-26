    "use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react'
import Image from 'next/image';
import Textt from '@/components/textt';
import Grid from '@/components/ui/Grid';

const page = () => {
  return (
<div className="min-h-screen w-full absolute flex items-center justify-center">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
    }}
  />

  {/* Overlay Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      Welcome to Aniphic Lab
    </h1>

    <p className="mt-4 text-lg md:text-xl text-white">
      Where ideas become reality
    </p>
    <Image src="/1638350559350.jpg" alt="Aniphic Lab" className="mt-6 w-30 h-30 relative z-10 object-cover mx-auto rounded-lg shadow-lg" width={256} height={256}/>
    <p className="mt-4 text-lg md:text-xl text-white">
      OGBODO FRANKLIN
    </p>

  <p className="mt-4 text-lg md:text-xl text-white">
    FULL-STACK DEVELOPER ,BLOCKCHAIN DEVELOPER
  </p>
    < TextGenerateEffect
     words="Aniphic Lab™ is a cutting-edge technology company specializing in innovative software solutions and blockchain development. Our mission is to revolutionize the digital landscape through creativity, expertise, and a commitment to excellence."
      className="mt-6 block text-white mx-auto max-w-2xl" 
      duration={0.5}
      />

      <Textt/>
     <Grid/>

    
</div>
</div>

)
};
export default page;