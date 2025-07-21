"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import { FaCheck, FaPhone } from 'react-icons/fa';
import ScrollFadeSection from "../components/ScrollFadeSection";
import { useState } from "react";

export default function WhoWeArePage() {
  // Add state for read more toggles
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullApproach, setShowFullApproach] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  // Mission text
  const missionShort = `Our mission is to empower businesses to thrive in a dynamic digital landscape, serving diverse industries such as blockchain, fintech, supply chain, health, transportation, e-commerce, and agriculture.`;
  const missionRest = ` We achieve this by crafting innovative, end-to-end solutions through our three core services: Software Development, Business Automation, and Digital Marketing. We are dedicated to delivering bespoke solutions that drive measurable success, address inefficiencies, overcome scalability hurdles, and modernize outdated technology stacks.`;

  // Approach text
  const approachShort = `At Digisperts, our approach is rooted in transformative innovation and unwavering partnership. We combine deep technical know-how with genuine care for our clients' challenges, speaking with a professional yet friendly, and confident tone.`;
  const approachRest = ` We pride ourselves on a client-centric philosophy, listening intently to understand unique requirements and tailoring solutions. We uphold the highest standards of Integrity, Quality Excellence, Professionalism, and Transparency, ensuring adaptability to evolving needs and a commitment to sustainable practices.`;

  // Vision text
  const visionShort = `To be the most trusted partner in digital transformation, seamlessly bridging global talent with cutting-edge technology. We envision a future where businesses of all sizes from agile startups to large enterprises are `;
  const visionRest = ` empowered to not only meet but consistently exceed their goals through innovative and tailored technology solutions.`;

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
              We are Digital Experts
            </span>
          </h2>
          <p className="text-gray-900 pl-10 font-semibold text-left max-w-5xl w-full mb-12">
            At Digisperts, we are more than just a technology company; we are your dedicated partners 
            in digital transformation. We empower businesses, from agile startups to large enterprises, 
            to not just meet, but consistently exceed their goals. Our foundation is built on a 
            commitment to transformative innovation, unwavering partnership, and bridging global 
            talent with cutting-edge technology to deliver bespoke solutions that drive measurable 
            success
          </p>
        </section>

        {/* Mission, Vision */}
        <div className="relative w-full flex flex-col lg:pl-10 lg:pr-10 pb-0 lg:pb-8">
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
          {/* Mission and Vision cards in a flex row */}
          <div className="flex w-full flex-col lg:flex-row justify-center items-end gap-4 lg:gap-88 lg:mt-0">
            {/* Mission Card (vertically centered on large screens) */}
            <div className="relative w-full lg:w-[320px] lg:h-[340px] flex items-center justify-center mb-2 lg:mb-0">
              <div className="w-full bg-[#F8C6C6] rounded-lg shadow-lg p-6 lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2">
                <h3 className="text-3xl font-bold text-[#3B1F1F] mb-2 text-center">The mission</h3>
                <p className="text-sm text-[#222] text-left">
                  {missionShort}
                  {!showFullMission && <span>... </span>}
                  {showFullMission && missionRest}
                  <button
                    className="text-blue-900 font-semibold ml-1 underline cursor-pointer text-xs"
                    onClick={() => setShowFullMission((v) => !v)}
                  >
                    {showFullMission ? "Show less" : "Read more"}
                  </button>
                </p>
              </div>
            </div>
            {/* Vision Card (vertically centered on large screens) */}
            <div className="relative w-full lg:w-[320px] lg:h-[340px] flex items-center justify-center mt-2 lg:mt-0">
              <div className="w-full bg-[#FFE6A7] rounded-lg shadow-lg p-6 lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2">
                <h3 className="text-3xl font-bold text-[#7A5A00] mb-2 text-center">The vision</h3>
                <p className="text-sm text-[#222] text-left">
                  {visionShort}
                  {!showFullVision && <span>... </span>}
                  {showFullVision && visionRest}
                  <button
                    className="text-blue-900 font-semibold ml-1 underline cursor-pointer text-xs"
                    onClick={() => setShowFullVision((v) => !v)}
                  >
                    {showFullVision ? "Show less" : "Read more"}
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* Center Image: absolutely positioned on large screens, in flow on mobile */}
          <div>
            {/* On desktop: absolutely position the image in the center of the parent */}
            <div className="hidden lg:block absolute left-1/2 top-[250px] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20 pointer-events-none">
              <Image
                src="/images/who-we-are/favicon.png"
                alt="Digisperts Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            {/* On mobile, show image in flow */}
            <div className="lg:hidden flex flex-shrink-0 items-end z-10 w-[130px] h-[130px] bg-white rounded-full mx-auto my-4 shadow-lg border-4 border-white">
              <Image
                src="/images/who-we-are/favicon.png"
                alt="Digisperts Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Our Approach Section */}
        <section className="relative w-full flex justify-center items-center py-0 lg:-mt-20">
          {/* Card */}
          <div className="relative w-full lg:w-[800px] h-[370px] flex items-center mr-4 lg:mr-0 justify-center">
            {/* Bottom Card */}
            <div className={`absolute left-1/2 top-[50px] -translate-x-1/2 w-full lg:${showFullApproach ? 'w-[600px]' : 'w-[320px]'} bg-[#A7B6F8] rounded-lg lg:mt-16 shadow-lg p-6 mx-2 lg:mx-0 transition-all duration-500`}>
              <h3 className="text-3xl font-bold text-[#1A2257] mb-2 text-center">Our Approach</h3>
              <p className="text-sm text-[#222] text-left">
                {approachShort}
                {!showFullApproach && <span>... </span>}
                {showFullApproach && approachRest}
                <button
                  className="text-blue-900 font-semibold ml-1 underline cursor-pointer text-xs"
                  onClick={() => setShowFullApproach((v) => !v)}
                >
                  {showFullApproach ? "Show less" : "Read more"}
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <ScrollFadeSection>
        <section className="w-full py-2 bg-white">
          <h2 className="mb-7 pl-10 text-left">
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
              Meet Our Digital Transformation Experts
            </span>
          </h2>
          <p className="text-gray-900 pl-10 font-semibold text-left max-w-5xl w-full mb-12">
            At Digisperts, our strength lies in our people. We are a collective of trusted experts 
            and dedicated professionals, passionate about technology and committed to your success. 
            Each member of our team brings a wealth of experience, a collaborative spirit, and a drive 
            for continuous learning, ensuring we deliver innovative and tailored solutions with 
            unwavering professionalism.
          </p>
        </section>
        </ScrollFadeSection>

        {/* Meet the Team Section */}
        <ScrollFadeSection>
        <section className="w-full py-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {/* Project Manager and CSO */}
            <div className="flex flex-col items-left">
              <Image
                src="/images/harvey.png"
                alt="Stanley N"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-extrabold text-sm text-[#1E429F] text-left">Harvey, N</span>
              <span className="text-xs font-semibold text-gray-600 text-left">Senior Project Manager / Business Development Manager</span>
            </div>
            {/* Blockchain and Cyber Security */}
            <div className="flex flex-col items-left">
              <Image
                src="/images/who-we-are/samuel-o.jpg"
                alt="Samuel O"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-extrabold text-sm text-[#1E429F] text-left">Samuel, O</span>
              <span className="text-xs font-semibold text-gray-600 text-left">Blockchain and Cyber Security</span>
            </div>
            {/* Creative Designer and Copywriter */}
            <div className="flex flex-col items-left">
              <Image
                src="/images/who-we-are/samuel-d.png"
                alt="Samuel D"
                width={224}
                height={224}
                className="w-56 h-56 bg-[#FFE6B5] object-cover object-top rounded-md mb-2"
              />
              <span className="font-extrabold text-sm text-[#1E429F] text-left">Samuel, D</span>
              <span className="text-xs font-semibold text-gray-600 text-left">Team Lead, Creatives</span>
            </div>
            {/* CTO and Cloud Engineer */}
            <div className="flex flex-col items-left">
              <Image
                src="/images/richard.png"
                alt="Richard K"
                width={224}
                height={224}
                className="w-56 h-56 object-cover rounded-md mb-2"
              />
              <span className="font-extrabold text-sm text-[#1E429F] text-left">Richard, J</span>
              <span className="text-xs font-semibold text-gray-600 text-left">Chief Technology Officer</span>
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
                    Empowering Growth Through Digital Excellence.
                  </div>
                  <div className="text-sm lg:text-base font-normal text-black mb-5">
                    Let's build your business success through better tech.
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