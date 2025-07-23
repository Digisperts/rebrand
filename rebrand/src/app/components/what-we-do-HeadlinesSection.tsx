import React from 'react'
import Image from 'next/image'
import Link from "next/link";


export default function Headlines() {
  return (
    <>
      {/* Section 7: Headlines */}
      <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-8 w-full text-left whitespace-nowrap" style={{letterSpacing: 0}}>
          Making the Headlines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Social Cranes Card */}
        <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
          <div className="w-full">
            <Image src="/images/homepage/headline.png" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
          </div>
          <div className="px-6 pt-6 pb-7 w-full">
            <h3 className="font-bold text-lg mb-2 text-black">Social Cranes</h3>
            <p className="text-gray-800 text-base mb-4 leading-snug">As a leading social media marketing (SMM) company, Social Cranes partnered with us to enhance their online presence. We designed and developed their website, implementing........</p>
            <Link
              href="#"
              className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
              style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
            >
              KNOW MORE <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Smaat Finance Card */}
        <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
          <div className="w-full">
            <Image src="/images/homepage/headline.png" alt="Business Automations" width={365} height={199} className="w-full h-[199px] object-cover" />
          </div>
          <div className="px-6 pt-6 pb-7 w-full">
            <h3 className="font-bold text-lg mb-2 text-black">Smaat Finance</h3>
            <p className="text-gray-800 text-base mb-4 leading-snug">At Digisperts LLC, our commitment to client confidentiality is unwavering. While we have worked on numerous projects and achieved remarkable results, we respect the anonymity of our clients and........</p>
            <Link
              href="#"
              className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
              style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
            >
              KNOW MORE <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
        {/* Social Cranes Card */}
        <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-auto md:justify-self-center lg:justify-self-auto">
          <div className="w-full">
            <Image src="/images/homepage/headline.png" alt="Digital Marketing" width={365} height={199} className="w-full h-[199px] object-cover" />
          </div>
          <div className="px-6 pt-6 pb-7 w-full">
            <h3 className="font-bold text-lg mb-2 text-black">Social Cranes</h3>
            <p className="text-gray-800 text-base mb-4 leading-snug">As a leading social media marketing (SMM) company, Social Cranes partnered with us to enhance their online presence. We designed and developed their website, implementing........</p>
            <Link
              href="#"
              className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
              style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
            >
              KNOW MORE <span className="ml-1">→</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
} 
