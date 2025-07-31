import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function HeroSection({
  title,
  subtitle,
  image
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative w-full h-[450px] md:h-[520px] lg:h-[680px]">
        <Image
          src={image}
          alt="Hero banner"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
        />
        {/* Overlayed Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-left bg-black/80">
          <h1 className="text-2xl md:text-4xl lg:text-5xl ml-20 font-bold mb-4">
            {title}
          </h1>
          <p className="text-base text-left md:text-lg ml-20 max-w-auto mr-20">
            {subtitle}
          </p>
        </div>
        {/* Curved SVG at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full block"
          viewBox="0 0 1440 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: '86px', display: 'block', marginBottom: '-2px' }}
        >
          <path
            d="M0,100
          Q260,0 720,60
          T1440,100
          L1440,124
          L0,124
          Z"
            fill="#fff"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-px bg-white z-30" style={{height: '1px'}} />
      </div>
    </section>
  );
}
