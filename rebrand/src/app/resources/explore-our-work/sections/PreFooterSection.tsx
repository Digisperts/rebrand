import Image from 'next/image';
import Link from "next/link";
import ScrollFadeSection from '../../../components/ScrollFadeSection';
import React from 'react';

export default function PreFooterSection({
  backgroundImage,
  heading,
  subheading,
  buttonText,
  buttonHref
}: {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHref: string;
}) {
  return (
    <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full h-[480px] md:h-[370px] flex items-center justify-center">
          <Image
            src={backgroundImage}
            alt="Footer Background"
            fill
            className="object-cover z-0"
            style={{ objectPosition: 'center' }}
            priority
          />
          <div className="absolute left-0 top-0 w-full h-full flex items-center" style={{zIndex: 2}}>
            <div className="p-6 md:p-27 max-w-full md:max-w-4xl text-white ml-8 mt-1 rounded-lg">
              <ScrollFadeSection>
                <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">{heading}</div>
                <div className="text-sm md:text-base font-normal mb-5">{subheading}</div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={buttonHref}
                    className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                    style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                  >
                    {buttonText}
                  </Link>
                </div>
              </ScrollFadeSection>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>
    </section>
  );
}
