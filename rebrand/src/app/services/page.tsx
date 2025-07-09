"use client";
import Image from "next/image";
import NavBar from "../nav";
import Footer from "../Footer";
import ScrollFadeSection from "../components/ScrollFadeSection";
import HeroFadeIn from "../components/HeroFadeIn";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[570px] flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/background.jpg"
          alt="Hero Background"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-start justify-start z-10">
          <div className="bg-[#f3f4f6]/10 bg-opacity-10 w-[95%] ml-[2.5%] mt-[9%] custom-py-8 px-8 text-left">
          <HeroFadeIn>
            <h1 className="text-2xl sm:text-4xl text-white font-light mb-4">
              STUNNING AND ENGAGING USER INTERFACES<br /> SKILLFULLY CRAFTED BY DIGISPERTS PRODUCT<br />DESIGN TEAM
            </h1>
          
            
            <a href="#" className="border border-gray-400 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-blue-900 hover:text-white inline-block">
              GET STARTED
            </a>
            </HeroFadeIn>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-full bg-white py-12">
        <ScrollFadeSection>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-[#e74c3c] text-2xl md:text-3xl font-light text-center mb-2 leading-snug">
              Transform your digital platforms with cutting-edge UI designs.
            </h2>
            <p className="text-gray-800 text-base text-left max-w-xl leading-relaxed">
              n the digital landscape, exceptional user experiences are vital. With our expertise in UI/UX 
              design, we create intuitive interfaces that engage and delight your target audience. Our 
              process begins with a deep understanding of users, business goals, and best practices. 
              Meticulously blending aesthetics with functionality, we ensure an immersive experience 
              across platforms. From wireframing to usability testing, our holistic approach drives 
              satisfaction and success. Collaborating closely with your team, we incorporate your vision 
              and brand identity into every design aspect. Stand out with visually captivating and user-
              friendly experiences that leave a lasting impression.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/images/services.jpg"
              alt="UI Design Illustration"
              className="max-w-xs w-full h-auto rounded"
              style={{ minWidth: 220 }}
            />
          </div>
        </div>
        </ScrollFadeSection>
      </section>

      {/* Features Row */}
      <section className="w-full bg-[#f5f7fa] py-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4">
          <ScrollFadeSection>
          <div className="flex items-start">
            <span className="inline-block bg-[#C81E1E] w-1 h-6 mr-3"></span>
            <span className="text-gray-700 text-sm md:text-base text-left">
              Seamlessly blend aesthetics and functionality with our expert UI design services.
            </span>
          </div>
          </ScrollFadeSection>

          <ScrollFadeSection>
          <div className="flex items-start">
            <span className="inline-block bg-[#C81E1E] w-1 h-6 mr-3"></span>
            <span className="text-gray-700 text-sm md:text-base text-left">
              Experience the perfect balance that keeps users coming back for more.
            </span>
          </div>
          </ScrollFadeSection>

          <ScrollFadeSection>
          <div className="flex flex-row gap-8">
            <div className="flex items-start">
              <span className="inline-block bg-[#C81E1E] w-1 h-6 mr-3"></span>
              <span className="text-gray-700 text-sm md:text-base text-left">
                We have great history of sellout during presale, hardcap fills fast
              </span>
            </div>
            <div className="flex items-start">
              <span className="inline-block bg-[#C81E1E] w-1 h-6 mr-3"></span>
              <span className="text-gray-700 text-sm md:text-base text-left">
                User-centric designs that prioritize ease of use
              </span>
            </div>
          </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* What we offer Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-black mb-12">What we OFFER!</h2>
          <ScrollFadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="font-bold text-base uppercase text-black mb-2">PROTYPING</h3>
              <p className="text-gray-700 text-sm mb-6 text-left">
                Transform your ideas into interactive prototypes. Test and refine your concepts early on, ensuring a seamless user experience. Accelerate development and mitigate risks.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
            
            <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="font-bold text-base uppercase text-black mb-2">WIREFRAMING</h3>
              <p className="text-gray-700 text-sm mb-6 text-left">
                Visualize the structure and layout of your application through wireframing. Efficiently communicate design concepts and streamline the development process. Achieve optimal user engagement and satisfaction.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
            
            <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="font-bold text-base uppercase text-black mb-2">UX PLAN</h3>
              <p className="text-gray-700 text-sm mb-6 text-left">
                Craft an exceptional user experience (UX) strategy tailored to your business objectives. Identify user needs, design intuitive interactions, and optimize user journeys. Stand out and make a lasting impression.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
            
            <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="font-bold text-base uppercase text-black mb-2">MOBILE AND DESKTOP APP DESIGN</h3>
              <p className="text-gray-700 text-sm mb-6 text-left">
                Create stunning and user-friendly applications. Our expert designers craft captivating interfaces optimized for mobile and desktop. Elevate your brand and engage your audience on any platform.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
            {/* i added empty divs for grid alignment */}
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
          </div>
          </ScrollFadeSection>
        </div>
      </section>
      
      {/* Delightful UI designs Section */}
      <section className="relative w-full h-[180px] flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/services-2.jpg"
          alt="Delightful UI Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-white/10" />
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <ScrollFadeSection>
          <h2 className="text-white text-2xl md:text-3xl font-light text-center mb-2">
            Delightful UI designs that captivate users.
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <p className="text-white text-sm text-center">
          &quot;With our well tailored technological infrastructure, 
          your brand voice gets heard and your sales skyrocket to that Mars.&quot;
          </p>
          </ScrollFadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
} 