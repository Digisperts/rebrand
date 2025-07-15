"use client";
import Image from "next/image";
import NavBar from "./nav";
import { useState, useEffect, useRef } from "react";
import ScrollFadeSection from "./components/ScrollFadeSection";
import CountUpOnView from "./components/CountUpOnView";
import HeroFadeIn from "./components/HeroFadeIn";
import Footer from "./Footer";
import { FaPhone, FaChevronDown, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Headlines from './components/what-we-do-HeadlinesSection';

export default function Home() {
  
  const slides = [
    {
      image: "/images/homepage/agriculture-slide1.webp",
      title: "Agriculture",
      heading: "Your voice gets heard, the Green world thrives.",
      desc: "Digisperts revolutionizes agriculture through technology. From precision farming to sustainable practices, we cultivate a future where technology meets the soil.",
    },
    {
      image: "/images/homepage/technology-slide2.webp", 
      title: "Technology",
      heading: "Building a Better Digital Future, Together.",
      desc: "We drive healthcare forward with digital solutions, AI-powered diagnostics, and telehealth platforms for accessible, personalized care.",
    },
    {
      image: "/images/homepage/real-estate-slide3.webp", 
      title: "Real Estate",
      heading: "Building tomorrow, redefining real estate solutions.",
      desc: "Our solutions elevate property management, streamline processes, and enhance the overall real estate experience.",
    },
    {
      image: "/images/homepage/health-slide4.webp", 
      title: "Health",
      heading: "Improving Lives, One Innovation at a Time.",
      desc: "We drive healthcare forward with digital solutions, AI-powered diagnostics, and telehealth platforms for accessible, personalized care.",
    },
    {
      image: "/images/homepage/transportation-slide5.webp", 
      title: "Transportation",
      heading: "Efficiency in Motion, Revolutionizing Transportation.",
      desc: "At Digisperts, we pave the way for smarter transportation solutions. From logistics optimization to real-time tracking, we redefine efficiency in motion.",
    },
    {
      image: "/images/homepage/retail-slide6.webp", 
      title: "Retail and Consumer Goods",
      heading: "Empowering Retail Excellence, Driving Consumer Loyalty.",
      desc: "Transforming retail brands with innovative strategies, data-driven engagement, and tailored solutions to boost sales, enhance loyalty, and ensure growth.",
    },
    {
      image: "/images/homepage/finance-slide7.webp", 
      title: "Finance",
      heading: "Fintech Solutions for Growth and Insight.",
      desc: "We streamline financial processes,  create finance tracking system and unlock growth potential for businesses of all sizes.",
    },
  ];
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, slides.length]);

  // HERO SLIDES (3 slides, same content for now)
  const heroSlides = [
    {
      image: "/images/homepage/hero.png",
      heading1: "Building Your Vision.",
      heading2: "Engineering Your Success.",
      desc: "As your dedicated technology partner, we build the powerful digital foundation your ambition deserves.",
    },
    {
      image: "/images/homepage/hero2.jpg",
      heading1: "Break Free From Legacy",
      heading2: "Systems Drawback.",
      desc: "We replace inefficient systems with scalable, custom solutions built to power your growth.",
    },
    {
      image: "/images/homepage/hero3.jpg",
      heading1: "Visualize The",
      heading2: "Outcome.",
      desc: "Experience seamless operations, engaged customers, and a business fully prepared for tomorrow&apos;s opportunities.",
    },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50); // trigger fade-in
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
      setFade(false);
      setTimeout(() => setFade(true), 50);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);


  return (
    <div className="min-h-screen flex overflow-hidden flex-col bg-white pt-16">
      {/* Header/NavBar */}
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>


      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] flex items-stretch overflow-hidden">
        <div className="flex w-full min-h-[520px] relative">
          {/* Black background as a separate absolutely positioned div, always visible */}
          {heroIndex === 0 && (
          <div className="hidden lg:block absolute left-0 top-0 h-full z-0" style={{width: 'calc(100%)', background: 'black'}} />
          )}
          {heroIndex === 1 && (
            <div className="hidden lg:block absolute left-0 top-0 h-full z-0" style={{width: 'calc(100%)', background: 'black'}} />
          )}
          {heroIndex === 2 && (
            <div className="hidden lg:block absolute left-0 top-0 h-full z-0" style={{width: 'calc(100%)', background: 'black'}} />
          )}
          {/* Text box overlays black bg and hero image, always visible */}
          <div className="absolute left-0 top-0 h-full items-center pointer-events-none z-20 w-full flex">
            <div className="relative pl-4 sm:pl-6 md:pl-12 pr-2 sm:pr-4 md:pr-8 py-6 sm:py-8 md:py-12 max-w-[700px] w-full pointer-events-auto">
              {/* Soft dark overlay under text */}
              <div className="absolute inset-0 bg-black/46 rounded-xl blur-sm -z-10" />
              <HeroFadeIn>
              <div className={`transition-opacity duration-[1500ms] ${fade ? 'opacity-100' : 'opacity-0'}`} key={heroIndex}>
              <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight md:leading-[1.1] mb-2" style={{letterSpacing:0}}>
                  <span className="block text-2xl sm:text-4xl md:text-5xl">{heroSlides[heroIndex].heading1}</span>
                  <span className="block text-2xl sm:text-4xl md:text-5xl">{heroSlides[heroIndex].heading2}</span>
              </h1>
                <p className="text-white text-lg md:text-xl font-normal mb-8 max-w-[95%]" style={{lineHeight:'1.4'}}>{heroSlides[heroIndex].desc}</p>
              <div className="flex flex-col gap-3">
                <a href="/schedule-a-consultation" className="flex items-center font-semibold text-white text-lg md:text-[18px] px-6 py-3 border-2 border-white rounded transition hover:bg-white hover:text-black w-fit mb-2">
                <FaPhone className="mr-2 transform -rotate-270" />
                  Schedule a Consultation
                </a>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStarHalfAlt className="text-yellow-400 text-xl" />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white font-semibold text-base">4.5 Rating on</span>
                    <div className="w-[60px] h-[22px] overflow-hidden flex items-center">
                      <Image src="/images/homepage/clutch.png" alt="Clutch" width={70} height={22} className="object-contain object-center" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </HeroFadeIn>
            </div>
          </div>
          {/* Right: Hero image */}
          <div className={`flex-1 relative z-10 min-h-[520px] ${
            heroIndex === 0 ? 'w-full' :
            heroIndex === 1 ? 'max-w-2xl ml-auto w-full' :
            'w-full ml-auto'
          }`}>
        <Image
              src={heroSlides[heroIndex].image}
              alt="Hero" 
          fill
              className={`w-full h-full transition-opacity duration-[1500ms] ${
                heroIndex === 0 ? 'object-cover object-right' :
                heroIndex === 1 ? 'object-cover object-left' :
                'object-contain object-right'
              }`}
              style={{ border: 'none', boxShadow: 'none', opacity: fade ? 1 : 0 }}
          priority
            />
          </div>
          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${heroIndex === idx ? 'bg-[#233876] scale-110 shadow-lg' : 'bg-gray-300'} inline-block`}
                onClick={() => { setHeroIndex(idx); setFade(false); setTimeout(() => setFade(true), 50); }}
                aria-label={`Go to slide ${idx+1}`}
                style={{outline: 'none'}}
              />
            ))}
          </div>
        </div>
      </section>


      <ScrollFadeSection>
      {/* Professionals Section */}
      <section className="w-full bg-[#F9F9F9] py-12 px-4 sm:px-6 md:px-12 flex flex-col items-start">
        <h2 className="mb-10 text-left">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
            We Are Professionals In
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Software Development Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-6 w-full">
              <Image src="/images/homepage/software.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-lg mb-2 text-black">Software Development</h3>
              <p className="text-gray-800 text-base mb-4 leading-snug">Gain a competitive edge with high-quality, custom technology. We build scalable software, web, and mobile applications engineered to solve your unique challenges and help your business exceed its goals.</p>
              <a href="#" className="text-blue-900 font-bold text-base hover:underline flex items-center gap-1">DISCUSS YOUR PROJECT <span className="ml-1">→</span></a>
            </div>
          </div>
          {/* Business Automations Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-6 w-full">
              <Image src="/images/homepage/business.jpg" alt="Business Automations" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-lg mb-2 text-black">Business Automations</h3>
              <p className="text-gray-800 text-base mb-4 leading-snug">Unlock new levels of efficiency and empower your team. We automate complex workflows and repetitive tasks, from financial controls to customer support, freeing you to focus on strategic growth and innovation.</p>
              <a href="#" className="text-blue-900 font-bold text-base hover:underline flex items-center gap-1">AUTOMATE YOUR WORKFLOW <span className="ml-1">→</span></a>
            </div>
          </div>
          {/* Digital Marketing Card (centered on tablet) */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-auto md:justify-self-center lg:justify-self-auto">
            <div className="px-6 pt-6 w-full">
              <Image src="/images/homepage/digital.jpg" alt="Digital Marketing" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-lg mb-2 text-black">Digital Marketing</h3>
              <p className="text-gray-800 text-base mb-4 leading-snug">Amplify your brand&apos;s voice and achieve measurable success. We develop and execute data-driven digital marketing strategies that connect you with your target audience and convert engagement into tangible results.</p>
              <a href="#" className="text-blue-900 font-bold text-base hover:underline flex items-center gap-1">GET YOUR MARKETING PLAN <span className="ml-1">→</span></a>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      
      {/* Features Section */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-12 bg-[#FFFFFF]">
      <ScrollFadeSection>
        <h2 className="mb-10 text-left">
          <span className="block text-2xl h-[45px] sm:text-3xl md:text-4xl lg:text-4xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
            With Digisperts, You Get
          </span>
        </h2>
        </ScrollFadeSection>
        <ScrollFadeSection>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          {/* Features: Each in its own box */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 mx-auto">
            <div className="bg-white shadow-md px-4 py-6 my-4 max-w-md w-full mx-auto">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Flexibility</h3>
              <p className="text-gray-700 font-semibold text-sm">With our Agile approach to project processes, we work effectively with the goals of giving you a Time bound, High quality and cost effective deliverables</p>
            </div>
            <div className="bg-white shadow-md px-4 py-6 my-4 max-w-md w-full mx-auto">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Transparency</h3>
              <p className="text-gray-700 font-semibold text-sm">We believe leaving you in the dark about your projects is very bad, because we care about you, you are always up to date with our progress and feel every bit of our growth.</p>
            </div>
            <div className="bg-white shadow-md px-4 py-6 my-4 max-w-md w-full mx-auto">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Security</h3>
              <p className="text-gray-700 font-semibold text-sm">We ensure compliance with international IT standards like ISO 27000 Series and GDPR. Your passwords are safe, your project datas are kept confidential</p>
            </div>
            <div className="bg-white shadow-md px-4 py-6 my-4 max-w-md w-full mx-auto">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Professionalism</h3>
              <p className="text-gray-700 font-semibold text-sm">Our intuitive project approach, our clear work process and the professional team of experts are where we draw our super powers.</p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <Image
              src="/images/Lovepik.png"
              alt="Feature Illustration"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </div>
        </div>
        </ScrollFadeSection>
      </section>
      

      {/* We've got the Numbers Section */}
      <section className="relative w-full py-14">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/homepage/numbers.png"
            alt="we got the the numbers"
            fill
            className="object-cover object-top w-full h-full"
            priority
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" /> */}
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeSection>
          <h2 className="mb-10 text-left">
            <span className="block text-2xl h-[45px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white">
              We&apos;ve got the Numbers
            </span>
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            {/* Client Card */}
            <div className="bg-[#FFFFFF] w-[200px] py-8 px-6 flex flex-col items-start">
              <Image src="/images/homepage/clients.svg" alt="Clients" width={80} height={80} className="mb-2" />
              <span className="text-[#00297A] text-2xl font-semibold mb-1 mt-2"><CountUpOnView end={100} duration={900} suffix="+" /></span>
              <span className="text-[#3C3C3C] text-sm">Clients</span>
            </div>
            {/* Completed Projects Card */}
            <div className="bg-[#FFFFFF] w-[200px] py-8 px-6 flex flex-col items-start">
              <Image src="/images/homepage/completed.svg" alt="Completed Projects" width={80} height={80} className="mb-2" />
              <span className="text-[#00297A] text-2xl font-semibold mb-1 mt-2"><CountUpOnView end={250} duration={900} suffix="+" /></span>
              <span className="text-[#3C3C3C] text-sm">Completed Projects</span>
            </div>
            {/* Hours Card */}
            <div className="bg-[#FFFFFF] w-[200px] py-8 px-6 flex flex-col items-start">
              <Image src="/images/homepage/hours.svg" alt="Hours" width={80} height={80} className="mb-2" />
              <span className="text-[#00297A] text-2xl font-semibold mb-1 mt-2"><CountUpOnView end={30000} duration={900} suffix="+" format /></span>
              <span className="text-[#3C3C3C] text-sm">Hours</span>
            </div>
            {/* Revenue Generated Card */}
            <div className="bg-[#FFFFFF] w-[200px] py-8 px-6 flex flex-col items-start">
              <Image src="/images/homepage/revenue.svg" alt="Revenue Generated" width={102} height={102} className="mb-2" />
              <span className="text-[#00297A] text-2xl font-semibold mb-1 mt-2"><CountUpOnView end={1} duration={900} prefix="$" suffix="M+" /></span>
              <span className="text-[#3C3C3C] text-sm">Revenue Generated</span>
            </div>
          </div>
          </ScrollFadeSection>
          {/* <ScrollFadeSection>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-200 text-sm text-left">
              Be rest assured that when you partner with digisperts LLC, you can expect the same level of dedication, expertise and success, even if we are unable to publicly disclose project details. Trust us to work tirelessly behind the scenes, empowering your brand to flourish while ensuring your confidentiality.
            </p>
          </div>
          </ScrollFadeSection> */}
        </div>
      </section>

      
      {/* Featured Industry Section */}
      <section className="w-full flex flex-col items-center bg-white py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-6 w-full max-w-6xl px-4 text-left" style={{letterSpacing: 0, }}>
          Featured Industry
        </h2>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[480px] md:h-[520px] flex items-center justify-center">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute left-0 top-0 w-full h-full transition-opacity duration-700 ease-in-out ${active === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
        <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  style={{zIndex: 1}}
                  priority={idx === 0}
                />
                <div className="absolute left-0 top-0 w-full h-full flex items-center" style={{zIndex: 2}}>
                  <div className="bg-black/60 p-6 md:p-8 max-w-[75%] md:max-w-[60%] text-white ml-8 mt-8 rounded-lg">
                    <div className="font-semibold text-xl mb-2">{slide.title}</div>
                    <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">{slide.heading.split(' ').slice(0, -1).join(' ')}</div>
                    <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight flex flex-wrap">{slide.heading.split(' ').slice(-1)}</div>
                    <div className="text-sm md:text-base font-normal mb-5">{slide.desc}</div>
                    <div className="flex gap-3 flex-wrap">
                      <button className="bg-transparent border border-white text-white font-bold px-4 py-2 hover:bg-white hover:text-[#233876] transition">VIEW CASE STUDY</button>
                      <button className="bg-transparent px-4 py-2 font-bold text-white underline underline-offset-2 decoration-white hover:bg-blue-50 hover:text-[#233876] hover:decoration-[#233876] hover:decoration-2 transition">VIEW USE CASES</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Pagination Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${active === idx ? 'bg-[#233876] scale-110 shadow-lg' : 'bg-gray-300'} inline-block`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to slide ${idx+1}`}
                  style={{outline: 'none'}}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      

      {/* Reviews Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollFadeSection>
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-10 w-full max-w-6xl px-10 text-left" style={{letterSpacing: 0, }}>
            Reviews
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <div className="max-w-6xl mx-auto border p-8 bg-[#EAF1FF] shadow-xl">
            <p className="text-[#3C3C3CE5] text-base font-semibold italic mb-6 text-left">
              &quot;Digisperts LLC has been instrumental in transforming our digital marketing efforts. 
              Their strategic approach and deep understanding of our industry helped us reach our target 
              audience effectively. From creating engaging content to running successful ad campaigns, 
              they consistently delivered outstanding results. Our online visibility and lead generation 
              have significantly improved, and we are thrilled to have digisperts as our trusted digital 
              marketing partner.&quot;
            </p>
            <div className="text-left text-[#1E1E1E] font-bold">
              Alan, M CTO Social Cranes
            </div>
          </div>
          </ScrollFadeSection>

          <ScrollFadeSection>
          <div className="max-w-6xl mt-10 mx-auto border p-8 bg-[#EAF1FF] shadow-xl">
            <p className="text-[#3C3C3CE5] text-base font-semibold italic mb-6 text-left">
            &quot;Digisperts LLC has been instrumental in transforming our digital marketing efforts. 
            Their strategic approach and deep understanding of our industry helped us reach our target 
            audience effectively. From creating engaging content to running successful ad campaigns, 
            they consistently delivered outstanding results. Our online visibility and lead generation 
            have significantly improved, and we are thrilled to have digisperts as our trusted digital 
              marketing partner.&quot;
            </p>
            <div className="text-left text-[#1E1E1E] font-bold">
              Alan, M CTO Social Cranes
            </div>
          </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="w-full bg-[#F9F9F9] py-8 flex flex-col">
      <ScrollFadeSection>
          <div className="max-w-7xl w-full flex flex-col items-start px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-8 w-full text-left ml-0 md:ml-10" style={{letterSpacing: 0}}>
              Powered by Industry-Leading Technology
            </h2>
            <div className="relative w-full max-w-6xl overflow-x-auto md:overflow-hidden ml-0 md:ml-10">
              <div
                className="flex gap-28 animate-platform-scroll items-center w-max"
                style={{ animation: 'platform-scroll 50s linear infinite' }}
              >
                {[1,2].map((repeat) => (
                  <div className="flex flex-row items-center gap-28" key={repeat}>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/aws.png" alt="AWS" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">AWS</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/figma.png" alt="Figma" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Figma</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/google-cloud.png" alt="Google Cloud" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222] whitespace-nowrap">Google Cloud</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/microsoft.png" alt="Microsoft" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Microsoft</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/azure.png" alt="Azure" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Azure</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/salesforce.png" alt="Salesforce" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Salesforce</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/digital-ocean.png" alt="Digital Ocean" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222] whitespace-nowrap">Digital Ocean</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/sap-ariba.png" alt="SAP Ariba" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">SAP Ariba</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/adobe.png" alt="Adobe" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Adobe</span>
          </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/aws.png" alt="AWS" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">AWS</span>
          </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/figma.png" alt="Figma" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Figma</span>
        </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/google-cloud.png" alt="Google Cloud" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222] whitespace-nowrap">Google Cloud</span>
        </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/microsoft.png" alt="Microsoft" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Microsoft</span>
            </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/azure.png" alt="Azure" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Azure</span>
            </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/salesforce.png" alt="Salesforce" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Salesforce</span>
            </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/digital-ocean.png" alt="Digital Ocean" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222] whitespace-nowrap">Digital Ocean</span>
            </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/sap-ariba.png" alt="SAP Ariba" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">SAP Ariba</span>
            </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image src="/images/homepage/platform/adobe.png" alt="Adobe" width={80} height={80} className="object-contain" />
                      <span className="text-lg font-medium text-[#222]">Adobe</span>
            </div>
            </div>
                ))}
            </div>
              <style jsx>{`
                  @keyframes platform-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}
              </style>
          </div>
        </div>
        </ScrollFadeSection>
      </section>
      

      {/* Making the Headlines Section */}
      <ScrollFadeSection>
      <Headlines />
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
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">Ready to Build Your Future?</div>
                  <div className="text-sm md:text-base font-normal mb-5">Let&apos;s discuss how a custom software solution can help you overcome inefficiencies and drive your business forward.</div>
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
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}
