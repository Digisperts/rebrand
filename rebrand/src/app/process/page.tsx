"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
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
      <ScrollFadeSection>
        <section className="w-full flex flex-col md:flex-row justify-center items-start md:items-stretch max-w-6xl mx-auto px-4 md:px-8 py-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start gap-4 md:gap-0">
              {/* Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#003399] flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#000F2E] flex items-center justify-center">
                    <span className="text-white text-2xl md:text-4xl font-bold">1</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="ml-0 md:ml-10 mt-4 md:mt-0 flex-1">
                <h2 className="text-lg md:text-3xl font-extrabold mb-1 leading-tight">
                  <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Unveiling Your Vision –<br /></span>
                  <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Let&apos;s Dive Deep Into Your Ideal!</span>
                </h2>
                <p className="text-gray-800 text-sm font-semibold md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
                  At Digisperts Technology Company Limited, we start by understanding your vision inside out. 
                  We gather comprehensive research, from market numbers to competitor benchmarks, to create a 
                  detailed project brief. This ensures we have all the necessary information to avoid any 
                  obstacles during our immersive sessions together. With a clear roadmap in hand, we can 
                  fully focus on bringing your vision to life and crafting tailored solutions for your success. 
                  Join us on this extraordinary journey!
                </p>
                <div>
                  <span className="text-[#2a3b8f] text-lg md:text-2xl font-extrabold">What we do</span>
                  <ul className="list-disc font-semibold pl-6 mt-1 text-gray-800 text-sm md:text-base">
                    <li>Discovery Workshop</li>
                    <li>Product Strategy</li>
                    <li>Pitch Deck</li>
                    <li>US Audit</li>
                    <li>Analytics Audit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image for desktop */}
          <div className="hidden md:flex ml-10 mt-30 flex-shrink-0 items-stretch">
            <Image
              src="/images/process/unveil.jpg"
              alt="Unveiling Your Vision"
              width={420}
              height={520}
              className="shadow-xl object-cover h-full"
              style={{ minWidth: 320, maxWidth: 420, height: '100%' }}
            />
          </div>
          {/* Mobile Image below content */}
          <div className="md:hidden w-full mt-6 flex justify-center">
            <Image
              src="/images/process/unveil.jpg"
              alt="Unveiling Your Vision"
              width={320}
              height={200}
              className="rounded-xl shadow-xl object-cover w-full max-w-[320px]"
            />
          </div>
        </section>
      </ScrollFadeSection>

      {/* Product Design Section */}
      <ScrollFadeSection>
        <section className="w-full flex flex-col md:flex-row justify-center items-start md:items-stretch max-w-6xl mx-auto px-4 md:px-8 py-10">
          {/* Left Image for desktop */}
          <div className="hidden md:flex ml-10 mt-30 flex-shrink-0 items-stretch">
            <Image
              src="/images/process/product.jpg"
              alt="Unveiling Your Vision"
              width={420}
              height={520}
              className="shadow-xl object-cover h-full"
              style={{ minWidth: 320, maxWidth: 420, height: '100%' }}
            />
          </div>
          {/* Mobile Image below content */}
          <div className="md:hidden w-full mt-6 flex justify-center">
            <Image
              src="/images/process/product.jpg"
              alt="Unveiling Your Vision"
              width={320}
              height={200}
              className="rounded-xl shadow-xl object-cover w-full max-w-[320px]"
            />
          </div>
          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start gap-4 md:gap-0">
              {/* Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#003399] flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#000F2E] flex items-center justify-center">
                    <span className="text-white text-2xl md:text-4xl font-bold">2</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="ml-0 md:ml-10 mt-4 md:mt-0 flex-1">
                <h2 className="text-lg md:text-3xl font-extrabold mb-1 leading-tight">
                  <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Product Design<br /></span>
                </h2>
                <p className="text-gray-800 text-sm font-semibold md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
                  At Digisperts Technology Company Limited, we leverage our deep understanding of your 
                  business, story, goals, and motivations to develop a dynamic prototype that aligns perfectly 
                  with the project scope. Our expertise in translating your vision into a tangible 
                  representation ensures resonance and sets the stage for a successful collaboration.
                </p>
                <div>
                  <span className="text-[#2a3b8f] text-lg md:text-2xl font-extrabold">What we do</span>
                  <ul className="list-disc font-semibold pl-6 mt-1 text-gray-800 text-sm md:text-base">
                    <li>UX Research</li>
                    <li>UX Design</li>
                    <li>UI Design</li>
                    <li>Budgeting</li>
                    <li>Risk and Compliance Analysis</li>
                    <li>Branding</li>
                    <li>Usability Testing</li>
                    <li>Design Sprint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </ScrollFadeSection>

      {/* Development and Testing Section */}
      <ScrollFadeSection>
        <section className="w-full flex flex-col md:flex-row justify-center items-start md:items-stretch max-w-6xl mx-auto px-4 md:px-8 py-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start gap-4 md:gap-0">
              {/* Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#003399] flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#000F2E] flex items-center justify-center">
                    <span className="text-white text-2xl md:text-4xl font-bold">3</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="ml-0 md:ml-10 mt-4 md:mt-0 flex-1">
                <h2 className="text-lg md:text-3xl font-extrabold mb-1 leading-tight">
                  <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Development and Testing<br /></span>
                </h2>
                <p className="text-gray-800 text-sm font-semibold md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
                  At Digisperts Technology Company Limited, we meticulously adhere to project scopes, ensuring 
                  timely and cost-effective delivery that aligns with your exacting standards of quality. 
                  Our commitment to precision and efficiency enables us to surpass your expectations, delivering 
                  solutions that meet your unique business requirements.
                </p>
                <div>
                  <span className="text-[#2a3b8f] text-lg md:text-2xl font-extrabold">What we do</span>
                  <ul className="list-disc font-semibold pl-6 mt-1 text-gray-800 text-sm md:text-base">
                    <li>Mobile Development</li>
                    <li>Web Development</li>
                    <li>Backend Development</li>
                    <li>Quality Assurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image for desktop */}
          <div className="hidden md:flex ml-10 mt-30 flex-shrink-0 items-stretch">
            <Image
              src="/images/process/development.jpg"
              alt="Unveiling Your Vision"
              width={420}
              height={520}
              className="shadow-xl object-cover h-full"
              style={{ minWidth: 320, maxWidth: 420, height: '100%' }}
            />
          </div>
          {/* Mobile Image below content */}
          <div className="md:hidden w-full mt-6 flex justify-center">
            <Image
              src="/images/process/development.jpg"
              alt="Unveiling Your Vision"
              width={320}
              height={200}
              className="rounded-xl shadow-xl object-cover w-full max-w-[320px]"
            />
          </div>
        </section>
      </ScrollFadeSection>

      {/* Maintenance Section */}
      <ScrollFadeSection>
        <section className="w-full flex flex-col md:flex-row justify-center items-start md:items-stretch max-w-6xl mx-auto px-4 md:px-8 mb-40 py-10">
          {/* Left Image for desktop */}
          <div className="hidden md:flex ml-10 mt-30 flex-shrink-0 items-stretch">
            <Image
              src="/images/process/maintenance-2.jpg"
              alt="Unveiling Your Vision"
              width={420}
              height={520}
              className="shadow-xl object-cover object-right h-full"
              style={{ minWidth: 320, maxWidth: 420, height: '150%' }}
            />
          </div>
          {/* Mobile Image below content */}
          <div className="md:hidden w-full mt-6 flex justify-center">
            <Image
              src="/images/process/maintenance-2.jpg"
              alt="Unveiling Your Vision"
              width={320}
              height={200}
              className="rounded-xl shadow-xl object-cover object-right w-full max-w-[320px]"
            />
          </div>
          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start gap-4 md:gap-0">
              {/* Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-8 border-[#003399] flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#000F2E] flex items-center justify-center">
                    <span className="text-white text-2xl md:text-4xl font-bold">4</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="ml-0 md:ml-10 mt-4 md:mt-0 flex-1">
                <h2 className="text-lg md:text-3xl font-extrabold mb-1 leading-tight">
                  <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Maintenance<br /></span>
                </h2>
                <p className="text-gray-800 text-sm font-semibold md:text-base mt-4 mb-4 max-w-2xl leading-relaxed">
                  Every infrastructure needs good maintenance, thinking of product upgrade? New implementations 
                  or security check, worry not, we are here to help you keep your system running.
                </p>
                <div>
                  <span className="text-[#2a3b8f] text-lg md:text-2xl font-extrabold">What we do</span>
                  <ul className="list-disc font-semibold pl-6 mt-1 text-gray-800 text-sm md:text-base">
                    <li>Uptime and Downtime Report</li>
                    <li>System Administration</li>
                    <li>Product Upgrade</li>
                    <li>Product Performance Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </ScrollFadeSection>

      {/* Pre Footer Section */}
      <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[480px] md:h-[370px] flex items-center justify-center">
            <Image
              src="/images/footer.jpg"
              alt="Footer Background"
              fill
              className="object-cover z-0"
              style={{ objectPosition: 'center' }}
              priority
            />
            <div className="absolute left-0 top-0 w-full h-full flex items-center" style={{zIndex: 2}}>
              <div className="p-6 md:p-27 max-w-full md:max-w-4xl text-white ml-8 mt-1 rounded-lg">
                <ScrollFadeSection>
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">Work with our Agile-Driven Team</div>
                  <div className="text-sm md:text-base font-normal mb-5">
                    Ready to build something incredible? Our transparent, step-by-step 
                    process ensures your vision transforms into a high-quality digital solution. With an 
                    agile approach at our core, we collaborate closely, adapt swiftly, and deliver results that 
                    drive your business forward. Let&apos;s make your next project a success, together.
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href="#"
                      className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                      style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                    >
                      BEGIN YOUR PROJECT JOURNEY
                    </Link>
                  </div>
                </ScrollFadeSection>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
} 