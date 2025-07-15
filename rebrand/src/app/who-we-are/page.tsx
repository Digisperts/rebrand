"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import { FaCheck, FaPhone } from 'react-icons/fa';
import ScrollFadeSection from "../components/ScrollFadeSection";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen flex overflow-hidden flex-col bg-white pt-16">
      {/* NavBar */}
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>

        {/* Section 1: Hero */}
        <section className="relative w-full min-h-[520px] flex items-left justify-center text-white text-center px-6 pt-50">
          <Image
            src="/images/who-we-are/who-we-are-hero.png" 
            alt="Hero Background"
            fill
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="relative z-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">The Best Hands needed for your project success</h1>
            <p className="mb-6 text-xl">Time bound, cost effective and quality oriented delivery.</p>
          </div>
        </section>

        {/* Who are we? Section */}
        <section className="w-full py-12 bg-white">
        <h2 className="mb-7 pl-10 text-left">
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <p className="text-gray-900 pl-10 font-semibold text-left max-w-5xl w-full mb-12">
            We are team of experts in various fields who came together for one common goal, to help your 
            business achieve its desire success goals. Since the establishment, Digisperts LLC has been 
            dedicated to helping businesses thrive in the digital age. We understand the challenges 
            faced by organizations when it comes to managing complex operations and staying ahead of 
            the competition. Our mission is to simplify these processes and create systems that enhance 
            productivity, efficiency, and growth.
          </p>
        </section>

        {/* Mission, Vision */}
        <div className="relative w-full flex flex-col lg:flex-row justify-center items-end gap-4 lg:gap-28 pl-4 pr-4 lg:pl-10 lg:pr-10 pb-0 lg:pb-8">
          {/* Dotted lines connecting the center image to the cards (only on large screens) */}
          <svg
            className="hidden lg:block absolute left-1/2 z-0 pointer-events-none"
            style={{ top: 155, transform: 'translateX(-50%)' }}
            width="800"
            height="480"
          >
            {/* From center image to mission card (upwards) */}
            <line x1="400" y1="110" x2="240" y2="40" stroke="#bbb" strokeWidth="2" strokeDasharray="6,6" />
            {/* From center image to vision card (upwards) */}
            <line x1="400" y1="110" x2="560" y2="40" stroke="#bbb" strokeWidth="2" strokeDasharray="6,6" />
            {/* From center image to Our Approach card (downwards) */}
            <line x1="400" y1="110" x2="400" y2="220" stroke="#bbb" strokeWidth="2" strokeDasharray="6,6" />
          </svg>
          {/* Mission Card */}
          <div className="w-full lg:w-[320px] bg-[#F8C6C6] rounded-lg shadow-lg p-6 mb-2 lg:mb-0">
            <h3 className="text-3xl font-bold text-[#3B1F1F] mb-2 text-center">The mission</h3>
            <p className="text-sm text-[#222] text-center">
              At Digisperts, we believe in a customer-centric approach that puts your needs at the 
              forefront. We take the time to understand your unique requirements, challenges, and goals, 
              allowing us to craft tailored solutions that yield tangible results. With a deep 
              understanding of consumer perspectives and industry trends, we deliver innovative 
              technology solutions that drive your business forward.
            </p>
          </div>
          {/* Center Image (only on large screens) */}
          <div className="hidden lg:flex flex-shrink-0 items-end z-10">
            <div className="w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Image
                src="/images/who-we-are/favicon.png"
                alt="Digisperts Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
          {/* Vision Card */}
          <div className="w-full lg:w-[320px] bg-[#FFE6A7] rounded-lg shadow-lg p-6 mt-2 lg:mt-0">
            <h3 className="text-3xl font-bold text-[#7A5A00] mb-2 text-center">The vision</h3>
            <p className="text-sm text-[#222] text-center">
              At Digisperts, we believe in a customer-centric approach that puts your needs at the 
              forefront. We take the time to understand your unique requirements, challenges, and goals, 
              allowing us to craft tailored solutions that yield tangible results. With a deep understanding 
              of consumer perspectives and industry trends, we deliver innovative technology solutions 
              that drive your business forward.
            </p>
          </div>
        </div>
        {/* Our Approach Section */}
        <section className="relative w-full flex justify-center items-center py-0 bg-white">
          {/* Card */}
          <div className="relative w-full lg:w-[800px] h-[370px] flex items-center mr-4 lg:mr-0 justify-center">
            {/* Bottom Card */}
            <div className="absolute left-1/2 top-[50px] -translate-x-1/2 w-full lg:w-[320px] bg-[#A7B6F8] rounded-lg lg:mt-0 shadow-lg p-6 mx-2 lg:mx-0">
              <h3 className="text-3xl font-bold text-[#1A2257] mb-2 text-center">Our Approach</h3>
              <p className="text-sm text-[#222] text-center">
                At Digisperts, we believe in a customer-centric approach that puts your needs at the 
                forefront. We take the time to understand your unique requirements, challenges, and goals, 
                allowing us to craft tailored solutions that yield tangible results. With a deep 
                understanding of consumer perspectives and industry trends, we deliver innovative technology 
                solutions that drive your business forward.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <ScrollFadeSection>
        <section className="w-full py-2 bg-white">
          <h2 className="mb-7 pl-10 text-left">
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-gray-900 pl-10 font-semibold text-left max-w-5xl w-full mb-12">
            Our team of skilled professionals combines technical prowess with creative thinking. 
            With expertise in Software development, Project management, User interface design,
            Digital marketing, Blockchain development, and Cloud engineering, we have the knowledge 
            and experience to tackle any challenge. Together, we are passionate about helping your 
            business achieve its full potential.
          </p>
        </section>
        </ScrollFadeSection>

        {/* Meet the Team Section */}
        <ScrollFadeSection>
        <section className="w-full py-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {/* Project Manager and CSO */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/harvey.png"
                alt="Stanley N"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-semibold text-sm text-[#1E429F] text-center">Harvey, N</span>
              <span className="text-xs text-gray-600 text-center">Project Manager and CSO</span>
            </div>
            {/* Creative Designer and Copywriter */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/samuel-d.png"
                alt="Samuel D"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, D</span>
              <span className="text-xs text-gray-600 text-center">Creative Designer and Copywriter</span>
            </div>
            {/* CTO and Cloud Engineer */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/richard.png"
                alt="Richard K"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-semibold text-sm text-[#1E429F] text-center">Richard, K</span>
              <span className="text-xs text-gray-600 text-center">CTO and Cloud Engineer</span>
            </div>
            {/* Blockchain and Cyber Security */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/samuel-o.png"
                alt="Samuel O"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, O</span>
              <span className="text-xs text-gray-600 text-center">Blockchain and Cyber Security</span>
            </div>
          </div>
        </section>
        </ScrollFadeSection>

        {/* Pre Footer Section */}
        <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
          <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">
            {/* Image */}
            <div
              className="
                relative
                w-full h-[200px] lg:w-[45%] lg:h-auto
                order-1 lg:order-2
                flex-shrink-0
              "
              style={{ zIndex: 2 }}
            >
                <Image
                  src="/images/who-we-are/customer-success.jpg"
                  alt="Pre Footer Background"
                  fill={false}
                  width={0}
                  height={0}
                  sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'right',
                }}
                  className="rounded-none"
                  priority
                />
              </div>
            {/* Text and BG */}
            <div
              className="
                bg-[#D9DADF] flex items-center
                w-full lg:w-[55%] order-2 lg:order-1
                min-h-[220px] lg:min-h-[370px]
                px-4 py-6 lg:py-0
              "
              style={{ zIndex: 0 }}
            >
              <div className="w-full lg:max-w-4xl text-white lg:ml-8 mt-1 rounded-lg">
                  <ScrollFadeSection>
                  <div className="font-extrabold text-2xl text-black lg:text-3xl mb-2 leading-tight">
                    Speak to the Customer Success Officer
                  </div>
                  <div className="text-sm lg:text-base font-normal text-black mb-5">
                    We are interested in your success story and dynamic goals. Our responsibility is to offer a hand in ensuring your business suceeds.
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="#"
                            className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                            style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                    >
                            TALK TO AN EXPERT
                    </a>
                  </div>
                  </ScrollFadeSection>
                </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
} 