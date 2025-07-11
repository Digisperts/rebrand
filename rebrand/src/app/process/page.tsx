"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import HeroFadeIn from "../components/HeroFadeIn";
import ScrollFadeSection from "../components/ScrollFadeSection";

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-white flex overflow-hidden pt-16 flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] flex items-stretch overflow-hidden">
        <div className="flex w-full min-h-[520px] relative">
          {/* Text box overlays black bg and hero image, always visible */}
          <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center pointer-events-none z-20">
            <div className="relative py-6 sm:py-8 md:py-12 max-w-[700px] w-full pointer-events-auto text-center">
              <HeroFadeIn>
                <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight md:leading-[1.1] mb-2 text-center" style={{letterSpacing:0}}>
                  <span className="block text-2xl sm:text-4xl md:text-5xl">Our Process</span>
                </h1>
                <p className="text-white text-lg md:text-xl font-semibold mb-8 max-w-[95%] mx-auto text-center" style={{lineHeight:'1.4'}}>How we craft your projects into processes</p>
              </HeroFadeIn>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex-1 relative min-h-[520px] w-full">
            <Image
              src="/images/process/process.jpg" 
              alt="Hero" 
              fill
              className="object-cover object-center w-full h-full" 
              priority
              style={{ border: 'none', boxShadow: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Unveiling Your Vision Section */}
      <section className="w-full flex flex-col md:flex-row justify-start items-start md:items-start">
        <div className="mt-8 md:mt-12 md:ml-32 flex flex-col md:flex-row items-start px-4 md:px-12 py-6 md:py-10 max-w-4xl w-full gap-4 md:gap-0">
          {/* Circle */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#003399] flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#000F2E] flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-bold">1</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="ml-0 md:ml-10 mt-4 md:mt-10 flex-1">
            <h2 className="text-[#2a3b8f] text-lg md:text-2xl font-light mb-1 leading-tight">
              Unveiling Your Vision -<br />
              <span className="font-normal">Let&apos;s Dive Deep Into Your Idea!</span>
            </h2>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
              At digisperts LLC, we start by understanding your vision inside out. We gather comprehensive research, from market numbers to
              competitor benchmarks, to create a detailed project brief. This ensures we have all the necessary information to avoid any obstacles
              during our immersive sessions together. With a clear roadmap in hand, we can fully focus on bringing your vision to life and crafting
              tailored solutions for your success. Join us on this extraordinary journey!
            </p>
            <div>
              <span className="text-[#000000] font-semibold">What we do</span>
              <ul className="list-disc pl-6 mt-1 text-gray-800 text-sm md:text-base">
                <li>Discovery Workshop</li>
                <li>Product Strategy</li>
                <li>Pitch Deck</li>
                <li>US Audit</li>
                <li>Analytics Audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Design Section */}
      <ScrollFadeSection>
      <section className="w-full flex flex-col md:flex-row justify-start items-start md:items-start">
        <div className="mt-8 md:mt-12 md:ml-32 flex flex-col md:flex-row items-start px-4 md:px-12 py-6 md:py-10 max-w-4xl w-full gap-4 md:gap-0">
          {/* Circle */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#1A56DB] flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#233876] flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-bold">2</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="ml-0 md:ml-10 mt-4 md:mt-10 flex-1">
            <h2 className="text-[#2a3b8f] text-lg md:text-2xl font-light mb-1 leading-tight">
              Product Design
            </h2>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
              At digisperts LLC, we leverage our deep understanding of your business, story, goals, and motivations to develop a dynamic prototype
              that aligns perfectly with the project scope. Our expertise in translating your vision into a tangible representation ensures resonance and
              sets the stage for a successful collaboration.
            </p>
            <div>
              <span className="text-[#000000] font-semibold">What we do</span>
              <ul className="list-disc pl-6 mt-1 text-gray-800 text-sm md:text-base">
                <li>UX Research</li>
                <li>UX Design</li>
                <li>UI Design</li>
                <li>Budgeting</li>
                <li>Risk and Compliance analysis</li>
                <li>Branding</li>
                <li>Usability Testing</li>
                <li>Design Sprint</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      {/* Unleashing Unique Experiences Section */}
      <ScrollFadeSection>
      <section className="w-full flex flex-col md:flex-row justify-start items-start md:items-start">
        <div className="mt-8 md:mt-12 md:ml-32 flex flex-col md:flex-row items-start px-4 md:px-12 py-6 md:py-10 max-w-4xl w-full gap-4 md:gap-0">
          {/* Circle */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#1A56DB] flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#233876] flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-bold">3</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="ml-0 md:ml-10 mt-4 md:mt-10 flex-1">
            <h2 className="text-[#2a3b8f] text-lg md:text-2xl font-light mb-1 leading-tight">
              Unleashing Unique Experiences
            </h2>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
              At Digisperts LLC, we meticulously adhere to project scopes, ensuring timely and cost-effective delivery that aligns with your exacting
              standards of quality. Our commitment to precision and efficiency enables us to surpass your expectations, delivering solutions that meet
              your unique business requirements.
            </p>
            <div>
              <span className="text-[#000000] font-semibold">What we do</span>
              <ul className="list-disc pl-6 mt-1 text-gray-800 text-sm md:text-base">
                <li>Mobile Development</li>
                <li>Web Development</li>
                <li>Backend Development</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      {/* Maintenance Section */}
      <ScrollFadeSection>
      <section className="w-full flex flex-col md:flex-row justify-start items-start md:items-start">
        <div className="mt-8 md:mt-12 md:ml-32 flex flex-col md:flex-row items-start px-4 md:px-12 py-6 md:py-10 max-w-4xl w-full gap-4 md:gap-0">
          {/* Circle */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#1A56DB] flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#233876] flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-bold">4</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="ml-0 md:ml-10 mt-4 md:mt-10 flex-1">
            <h2 className="text-[#2a3b8f] text-lg md:text-2xl font-light mb-1 leading-tight">
              Maintenance
            </h2>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
              Every infrastructure needs good maintenance, thinking of product upgrade? New implementations or security check, worry not, we are
              here to help you keep your system running.
            </p>
            <div>
              <span className="text-[#000000] font-semibold">What we do</span>
              <ul className="list-disc pl-6 mt-1 text-gray-800 text-sm md:text-base">
                <li>Uptime and Downtime report</li>
                <li>System Administration</li>
                <li>Product Upgrade</li>
                <li>Product Performance Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      <section className="w-full bg-white py-12">
        <ScrollFadeSection>
        <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start md:items-start mt- max-w-sm">
            <p className="text-[#233876] text-xl mb-1 text-left">
              Got a project?
            </p>
            <p className="text-[#233876] px-5 text-base text-left">
              Let&apos;s discuss
            </p>
          </div>
          {/* Right: SVG */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/images/got-a-project.svg"
              alt="Got a project"
              className="w-[280px] max-w-full h-auto"
              style={{ minWidth: 160 }}
            />
          </div>
        </div>
        </ScrollFadeSection>
      </section>

      <Footer />
    </div>
  );
} 