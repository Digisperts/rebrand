'use client';
import { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import NavBar from '../../nav';
import Footer from '../../Footer';
import { FaPhone } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import Headlines from '../../components/what-we-do-HeadlinesSection';


const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Our Strategic Approach' },
  { id: 'services', label: 'Services' },
  { id: 'success', label: 'Case Studies' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'headlines', label: 'Headlines' },
  { id: 'cta', label: 'Call to Action' },
];

export default function SoftwareDevelopment() {

 useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // HERO SLIDER LOGIC
  const heroSlides = [
    {
      image: "/images/what-we-do/software-dev/SD-Banner.png",
      heading: "Custom Software that Powers Your Growth.",
      desc: "We build high-quality, scalable applications that solve your unique challenges,\novercome scalability hurdles, and give you a distinct competitive edge.",
      cta: "SCHEDULE A CONSULTATION"
    },
    {
      image: "/images/what-we-do/software-dev/SD-Banner2.png",
      heading: "Your Brand Stands Out and Takes the Lead.",
      desc: "We build high-quality, scalable applications that solve your unique challenges,\novercome scalability hurdles, and give you a distinct competitive edge.",
      cta: "SCHEDULE A CONSULTATION"
    }
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const swipeThreshold = 50;

  // Helper to trigger fade transition
  const triggerFade = useCallback((newIndex: number) => {
    if (newIndex === heroIndex) return;
    setPrevHeroIndex(heroIndex);
    setHeroIndex(newIndex);
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
      setPrevHeroIndex(null);
    }, 500); // match duration-500
  }, [heroIndex]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerFade((heroIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [heroIndex, heroSlides.length, triggerFade]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > swipeThreshold) {
        let newIndex;
        if (diff > 0) {
          // Swipe left (next)
          newIndex = (heroIndex + 1) % heroSlides.length;
        } else {
          // Swipe right (prev)
          newIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
        }
        triggerFade(newIndex);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <div className="min-h-screen flex overflow-hidden flex-col bg-white pt-16">
      {/* Header/NavBar */}
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>
      
      {/* Section 1: Hero */}
      <section
        id="overview"
        className="relative w-full min-h-[520px] flex items-center justify-left text-white text-left px-6 pt-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fade transition: render current and previous slide if fading */}
        {prevHeroIndex !== null && isFading && (
          <div
            className={`absolute inset-0 transition-opacity duration-500`}
            style={{ opacity: 0, zIndex: 10 }}
          >
            <Image
              src={heroSlides[prevHeroIndex].image}
              alt="Hero Background"
              fill
              className="object-cover object-center z-0"
              priority={prevHeroIndex === 0}
            />
            <div className="absolute inset-0 bg-black/10 z-10" />
          </div>
        )}
        <div
          className={`absolute inset-0 transition-opacity duration-500`}
          style={{ opacity: isFading ? 1 : 1, zIndex: 20 }}
        >
          <Image
            src={heroSlides[heroIndex].image}
            alt="Hero Background"
            fill
            className="object-cover object-center z-0"
            priority={heroIndex === 0}
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        {/* Text content, always in normal flex flow, vertically centered */}
        <div className="relative z-30 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{heroSlides[heroIndex].heading}</h1>
          <p className="mb-6">{heroSlides[heroIndex].desc.split('\n').map((line, i) => <span key={i}>{line}{i < heroSlides[heroIndex].desc.split('\n').length - 1 && <br />}</span>)}</p>
          <a href='/schedule-a-consultation' className="flex items-center gap-2 border border-white text-white font-semibold px-5 py-2 w-fit mb-2 hover:bg-white hover:text-black rounded">
            <FaPhone className="mr-2 transform -rotate-270" />
            {heroSlides[heroIndex].cta}
          </a>
        </div>
        {/* Pagination Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-2 z-30">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${heroIndex === idx ? 'bg-[#233876] scale-110 shadow-lg' : 'bg-gray-300'} inline-block`}
              onClick={() => triggerFade(idx)}
              aria-label={`Go to slide ${idx+1}`}
              style={{outline: 'none'}}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Built for You */}
      <section className="py-16 px-6 text-left" id="approach">
      <h2 className="mb-7 pl-6 text-left">
          <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
          Built for You. Built to Win.
          </span>
        </h2>

        <p className="text-gray-600 pl-6 text-center max-w-5xl w-full mb-12">
          In today&apos;s market, generic software leads to generic results. To truly exceed your 
          goals, you need technology solutions built specifically for you. At Digisperts, we move 
          beyond the limitations of outdated technology stacks to deliver robust, custom software. 
          As your unwavering partner, we dive deep into your vision to build applications that not 
          only solve today&apos;s problems but also create tomorrow&apos;s opportunities.

        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image 
            src="/images/what-we-do/software-dev/SD-a.png" 
            alt="Laptop" 
            width={500} 
            height={400} 
            className="mx-auto" 
          />
          <div className="space-y-6 text-left">
            <h2 className="text-2xl font-bold mb-0 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
              Our Strategic Approach to Software Development
            </h2>

            <p className="text-black text-left justify-center max-w-2xl mx-auto mb-1 font-19px">
          Our process is built on a foundation of partnership and a commitment to <br/> quality excellence.
            </p>
            <div className="bg-gray-100 p-6 shadow-md rounded-md flex flex-row items-center gap-3">
              <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                <FaCheck className="text-blue-900 text-sm" />
              </span>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-blue-900 mb-1">Collaborative Discovery</h3>
              <p className="text-[#000000]">We begin by listening. Our client-centric approach means we work closely with you to understand your goals, workflows, and challenges, ensuring the final product is a perfect fit.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 shadow-md rounded-md flex flex-row items-center gap-3">
              <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                <FaCheck className="text-blue-900 text-sm" />
              </span>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-blue-900 mb-1">Innovative and Agile Build</h3>
              <p className="text-[#000000]">We leverage cutting-edge technologies and an agile <br/> development process. This allows us to remain <br/> adaptable , incorporate feedback, and deliver <br/> innovative solutions efficiently.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 shadow-md rounded-md flex flex-row items-center gap-3">
              <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                <FaCheck className="text-blue-900 text-sm" />
              </span>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-blue-900 mb-1">Security and Scalability</h3>
              <p className="text-[#000000]">We bake in enterprise-grade security and build for scalability from day one, empowering your business with a secure and future-proof technological foundation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services  */}
      <section id="services" className="py-14 px-2 md:px-8">
        <div className="border-2 border-dashed border-[#D9D9D9] rounded-[8px] bg-white px-4 md:px-10 py-8">
          <h2 className="mb-2 text-left">
            <span
              className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #001133 0%,  #003399 90%)'
              }}
            >
              Our Software Development Services
            </span>
          </h2>
          <p className="text-left text-gray-900 mb-8">We provide end-to-end development to bring your vision to life.</p>

          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch mb-8 bg-[#F8F8F8] p-4 rounded">
            <div className="flex-1 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold text-black mb-3">Custom Web Applications</h3>
              <p className="text-gray-900 mb-4">
                We build powerful, secure web apps with robust back-ends and intuitive, visually appealing user interfaces. From enterprise dashboards to customer portals, our solutions are designed to streamline your operations.
              </p>
              <a
                href="#"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
              >
                KNOW MORE <span className="ml-1">→</span>
              </a>
            </div>
            <div className="flex items-center justify-center w-full md:w-[45%] max-w-[260px] mx-auto">
              <Image
                src="/images/what-we-do/software-dev/SD-b.png" 
                alt="Custom Web Applications"
                width={260}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Mobile App Development */}
            <div className="flex flex-1 flex-row items-center gap-4 bg-[#F8F8F8] p-4 rounded">
              <div className="flex-1 flex flex-col justify-center items-start">
                <h3 className="text-xl font-bold text-black mb-2">Mobile App Development</h3>
                <p className="text-gray-900">
                  We help you successfully design, build, and launch mobile apps for iOS and Android. 
                  We balance performance with possibility, creating scalable solutions that grow with you 
                  and delight your users.
                </p>
                <a
                  href="#"
                  className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  KNOW MORE <span className="ml-1">→</span>
                </a>
              </div>
              <div className="flex items-center justify-center w-[45%] max-w-[180px]">
                <Image
                  src="/images/what-we-do/software-dev/SD-c.png"
                  alt="Mobile App Development"
                  width={180}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="flex flex-1 flex-row items-center gap-4 bg-[#F8F8F8] p-4 rounded">
              <div className="flex items-center justify-center w-[45%] max-w-[180px]">
                <Image
                  src="/images/what-we-do/software-dev/SD-d.png" 
                  alt="Enterprise & OEM Solutions"
                  width={180}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start">
                <h3 className="text-xl font-bold text-black mb-2">Enterprise & OEM Solutions</h3>
                <p className="text-gray-900">
                  We develop specialized software tailored for unique business environments, 
                  including custom integrations and OEM software. Our focus is on creating reliable, 
                  high-performance tools that enhance your core business functions.
                </p>
                <a
                  href="#"
                  className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  KNOW MORE <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 4: Case Studies */}
      <section id="success" className="py-20 px-6 md:px-20">
        <h2 className="mb-2 text-left">
          <span
            className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #001133 0%,  #003399 90%)'
            }}
          >
            How We&apos;ve Engineered Success
          </span>
        </h2>
        
        <p className="text-left font-semibold font-poppins text-gray-600 mb-10">Don&apos;t just take our word for it. Explore our case studies to see how we have helped businesses like yours transform their operations and achieve measurable success.</p>

        <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'FINANCE',
                      desc: 'Fintech Solutions for Growth and Insight',
                      img: '/images/reuseable-SD-a.png',
                    },
                    {
                      title: 'RETAIL AND CONSUMER GOODS',
                      desc: 'Driving Consumer Loyalty',
                      img: '/images/reuseable-SD-b.png',
                    },
                    {
                      title: 'HEALTHCARE',
                      desc: 'Improving Lives, One Innovation at a Time',
                      img: '/images/reuseable-SD-c.png',
                    },
                  ].map(({ title, desc, img }, i) => (
                    <div key={i}>
                      <Image src={img} alt={title} width={400} height={250} className="rounded shadow-md" />
                      <h4 className="text-md text-[#000000] font-extrabold mt-2">{title}</h4>
                      <p className="text-base font-semibold text-[#001F5C]">{desc}</p>
                      <a
                        href="#"
                        className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                        style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                      >
                        Explore Case Study <span className="ml-1">→</span>
                      </a>
                    </div>
                  ))}
                </div>
      </section>

      {/* Section 5: Technology */}
      <section id="technologies" className="text-white py-0 px-0 text-center">
        <div className="relative w-full h-64 flex items-center justify-center mb-8">
          <Image
            src="/images/what-we-do/software-dev/software-hero-2.jpg"
            alt="Hero 2 Background"
            fill
            className="object-cover object-center z-0 rounded"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-6 md:py-10">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-extrabold mb-4 text-center">Exploring Emerging Technologies (AI & Blockchain)</h2>
            <p className="max-w-[950px] mx-auto text-left text-white text-sm md:text-lg font-normal">
              Our commitment to innovation means we are always exploring the frontier of technology. For clients with specific needs, our expert engineers can build AI-powered features into custom applications or architect decentralized blockchain solutions. We approach these specialized projects with the same commitment to quality excellence and partnership that defines all our work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Powered By */}
      <section className="w-full bg-[#F9F9F9] py-8 flex flex-col">
        <div className="max-w-7xl w-full flex flex-col items-start px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-8 w-full text-left ml-0 md:ml-10" style={{letterSpacing: 0}}>
            Powered by Industry-Leading Technology
          </h2>
          <div className="relative w-full max-w-full pr-6 md:pr-10 ml-0 md:ml-10 box-border">
            <div
              className="flex gap-28 animate-platform-scroll items-center w-max"
              style={{ animation: 'platform-scroll 50s linear infinite' }}
            >
              {[1,2].map((repeat) => (
                <div className="flex flex-row items-center gap-28" key={repeat}>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/react.png" alt="React" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">React</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/nodejs.png" alt="Node.js" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">Node.js</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/django.png" alt="Django" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222] whitespace-nowrap">Django</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/aws.png" alt="AWS" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">AWS</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/postgre.png" alt="PostgrSQL" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">PostgreSQL</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/react.png" alt="React" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">React</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/nodejs.png" alt="Node.js" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">Node.js</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/django.png" alt="Django" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222] whitespace-nowrap">Django</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/aws.png" alt="AWS" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">AWS</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/what-we-do/software-dev/postgre.png" alt="PostgrSQL" width={80} height={80} className="object-contain" />
                    <span className="text-lg font-medium text-[#222]">PostgreSQL</span>
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
      </section>

      {/* Section 7: Headlines */}
      <Headlines />

      {/* Section 8: Call to Action */}
      {/* <BannerCTA
  title="Ready to Build Your Future?"
  description="Let's discuss how a custom software solution can help you overcome inefficiencies and drive your business forward."
  buttonText="Talk to an Expert"
  buttonLink="#contact"
  backgroundImage="/images/footer.jpg"
      /> */}

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
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>
      </section>

      <Footer />
      </div>
  </>
  
  );
} 