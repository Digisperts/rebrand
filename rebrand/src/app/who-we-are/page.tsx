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

        {/* Mission, Vision, Our Approach Section */}
        <ScrollFadeSection>
        <section className="w-full py-8 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
            {/* SVG */}
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
              <Image
                src="/images/approach.svg"
                alt="Our Approach"
                width={260}
                height={100}
                className="w-[260px] h-auto"
              />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col items-start md:items-start max-w-2xl">
              <h3 className="text-xl font-regular text-[#233876] mb-2 text-left">Our Approach</h3>
              <p className="text-gray-700 text-base text-left">
              At Digisperts, we believe in a customer-centric approach that puts your needs at the forefront. We take the time to understand your unique requirements, challenges, and goals, allowing us to craft tailored solutions that yield tangible results. With a deep understanding of consumer perspectives and industry trends, we deliver innovative technology solutions that drive your business forward.
              </p>
            </div>
          </div>
        </section>
        </ScrollFadeSection>

      {/* Our Team Section */}
      <ScrollFadeSection>
      <section className="w-full py-8 bg-white">
        <h2 className="text-2xl font-regular text-[#233876] text-center mb-4">Our Team</h2>
        <p className="text-gray-700 text-base max-w-5xl mx-auto text-center mb-10">
          Our team of skilled professionals combines technical prowess with creative thinking. With expertise in Software development, Project management, User
          interface design, Digital marketing, Blockchain development, and Cloud engineering, we have the knowledge and experience to tackle any challenge. Together, we
          are passionate about helping your business achieve its full potential.
        </p>
      </section>
      </ScrollFadeSection>

      {/* Meet the Team */}
      <ScrollFadeSection>
      <section className="w-full py-8 bg-white">
        <h3 className="text-xl font-regular text-[#233876] text-center mb-8">meet the team</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Project Manager and CSO */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/harvey.png"
              alt="Stanley N"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Harvey, N</span>
            <span className="text-xs text-gray-600 text-center">Project Manager and CSO</span>
          </div>
          {/* Creative Designer and Copywriter */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/samuel-d.png"
              alt="Samuel D"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, D</span>
            <span className="text-xs text-gray-600 text-center">Creative Designer and Copywriter</span>
          </div>
          {/* CTO and Cloud Engineer */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/richard.png"
              alt="Richard K"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Richard, K</span>
            <span className="text-xs text-gray-600 text-center">CTO and Cloud Engineer</span>
          </div>
          {/* Blockchain and Cyber Security */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/samuel-o.png"
              alt="Samuel O"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, O</span>
            <span className="text-xs text-gray-600 text-center">Blockchain and Cyber Security</span>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      {/* Pre Footer Section */}
      <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[480px] md:h-[370px] flex items-center justify-center">
            <div className="absolute right-0 top-0 h-full" style={{ width: '45%', zIndex: 2 }}>
              <Image
                src="/images/who-we-are/customer-success.jpg"
                alt="Pre Footer Background"
                fill={false}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right' }}
                className="rounded-none"
                priority
              />
            </div>
            <div className="absolute left-0 top-0 bg-[#D9DADF] h-full flex items-center" style={{ width: '55%', zIndex: 0}}>
              <div className="p-6 md:p-27 max-w-full md:max-w-4xl text-white ml-8 mt-1 rounded-lg">
                <ScrollFadeSection>
                <div className="font-extrabold text-2xl text-black md:text-3xl mb-2 leading-tight">Speak to the Customer Success Officer</div>
                <div className="text-sm md:text-base font-normal text-black mb-5">We are interested in your success story and dynamic goals. Our responsibility is to offer a hand in ensuring your business suceeds.</div>
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
            {/* <div className="absolute inset-0 bg-black/70" /> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 