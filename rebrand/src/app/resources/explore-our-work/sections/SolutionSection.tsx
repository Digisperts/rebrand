import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export type Solution = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function SolutionSection({
  title,
  description,
  solutions,
  backgroundImage = "/images/explore-our-work/saas-and-technology/hero2.jpg",
  backgroundAlt = "Hexagon background"
}: {
  title: string;
  description: string;
  solutions: Solution[];
  backgroundImage?: string;
  backgroundAlt?: string;
}) {
  return (
    <section className="relative text-white py-16 overflow-hidden">
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative px-4 md:px-12 mx-auto z-10">
        <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
        <p className="mb-10 text-lg text-white max-w-2xl">{description}</p>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Card */}
          {solutions[0] && (
            <div className="bg-white text-black rounded shadow-md p-8 flex-1 flex flex-col justify-center min-w-[340px] max-w-[420px]">
              <div className="flex items-center mb-4">
                <span className="text-blue-900 text-2xl mr-3">{solutions[0].icon}</span>
                <h4 className="font-bold text-lg text-[#003399] m-0">{solutions[0].title}</h4>
              </div>
              <p className="text-base text-gray-800">{solutions[0].text}</p>
            </div>
          )}
          {/* Right Column: 2 stacked cards */}
          <div className="flex flex-col gap-6 flex-1 min-w-[340px]">
            {solutions[1] && (
              <div className="bg-white text-black rounded shadow-md p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="text-blue-900 text-2xl mr-3">{solutions[1].icon}</span>
                  <h4 className="font-bold text-lg text-[#003399] m-0">{solutions[1].title}</h4>
                </div>
                <p className="text-base text-gray-800">{solutions[1].text}</p>
              </div>
            )}
            {solutions[2] && (
              <div className="bg-white text-black rounded shadow-md p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="text-blue-900 text-2xl mr-3">{solutions[2].icon}</span>
                  <h4 className="font-bold text-lg text-[#003399] m-0">{solutions[2].title}</h4>
                </div>
                <p className="text-base text-gray-800">{solutions[2].text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
