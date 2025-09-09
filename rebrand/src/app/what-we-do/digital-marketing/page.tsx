"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../nav";
import Footer from "../../Footer";
import { FaCheck, FaPhone } from "react-icons/fa";
import Headlines from "../../components/what-we-do-HeadlinesSection";

export default function DigitalMarketing() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // HERO SLIDER LOGIC
  const heroSlides = [
    {
      image: "/images/what-we-do/digital-marketing/marketing-banner.jpg",
      heading: "Connect with Purpose. Grow with Intent.",
      desc: "We craft data-driven digital marketing strategies, powered by intelligent automation, to \namplify your brand's voice and deliver the measurable success your business deserves.",
      cta: "SCHEDULE A CONSULTATION",
    },
    {
      image: "/images/what-we-do/digital-marketing/marketing-banner2.png",
      heading: "Reach Out to the World to Get Your Brand Seen.",
      desc: "If you run a Business, you should make Sales. We provide cross-platform marketing that drives in \npaying customers.",
      cta: "SCHEDULE A CONSULTATION",
    },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const swipeThreshold = 50;

  // Helper to trigger fade transition
  const triggerFade = useCallback(
    (newIndex: number) => {
      if (newIndex === heroIndex) return;
      setPrevHeroIndex(heroIndex);
      setHeroIndex(newIndex);
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setPrevHeroIndex(null);
      }, 500); // match duration-500
    },
    [heroIndex]
  );

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

  // --- HERO SLIDER CLICK LOGIC ---
  const handleHeroAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      // Left area: previous slide
      setPrevHeroIndex(heroIndex);
      setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setPrevHeroIndex(null);
      }, 900);
    } else {
      // Right area: next slide
      setPrevHeroIndex(heroIndex);
      setHeroIndex((i) => (i + 1) % heroSlides.length);
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setPrevHeroIndex(null);
      }, 900);
    }
  };

  return (
    <>
      <div className="min-h-screen flex overflow-hidden flex-col bg-white">
        {/* Header/NavBar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        {/* Section 1: Hero */}
        <section
          id="overview"
          className="relative w-full min-h-[580px] flex items-center justify-left text-white text-left px-6 pt-20"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div onClick={handleHeroAreaClick} style={{ cursor: "pointer" }}>
            {/* Overlay left/right click areas */}
            <div
              className="absolute left-0 top-0 h-full w-1/2 z-30"
              style={{ cursor: "pointer" }}
            />
            <div
              className="absolute right-0 top-0 h-full w-1/2 z-30"
              style={{ cursor: "pointer" }}
            />
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
            <div className="relative left-4 sm:left-6 md:left-12 z-30 max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">
                {heroSlides[heroIndex].heading}
              </h1>
              <p className="mb-6">
                {heroSlides[heroIndex].desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < heroSlides[heroIndex].desc.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
              <Link
                href="/schedule-a-consultation"
                className="flex items-center gap-2 border border-white text-white font-semibold px-5 py-2 w-fit mb-2 hover:bg-white hover:text-black rounded"
              >
                <FaPhone className="mr-2 transform -rotate-270" />
                {heroSlides[heroIndex].cta}
              </Link>
            </div>
            {/* Pagination Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-2 z-30">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    heroIndex === idx
                      ? "bg-[#233876] scale-110 shadow-lg"
                      : "bg-gray-300"
                  } inline-block`}
                  onClick={() => triggerFade(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{ outline: "none" }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section className="py-16 px-6 text-left">
          <h2 className="mb-7 text-left">
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
              Marketing That Cuts Through the Noise.
            </span>
          </h2>

          <p className="text-gray-600 font-semibold text-left max-w-auto w-full md:w-full lg:w-full mb-12">
            In a crowded digital world, a strong message is not enough. You need
            a strategic partner who can help you cut through the noise and
            connect with the right audience. At Digisperts, we see digital
            marketing as a core pillar of your business success. We move beyond
            generic tactics, leveraging our deep expertise in automation to make
            your marketing smarter. We build and execute comprehensive
            strategies that foster brand loyalty, drive meaningful engagement,
            and help you exceed your goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/what-we-do/digital-marketing/digital-marketing-h2.jpg"
              alt="Laptop"
              width={500}
              height={500}
              className="mx-auto rounded-xl sm:h-full md:h-[60%] lg:h-full w-full"
            />
            <div className="space-y-6 text-left">
              <h2 className="text-2xl font-bold mb-0 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
                Our Strategic Approach to Digital Marketing
              </h2>

              <p className="text-black font-semibold text-sm text-left max-w-2xl mx-auto mb-1 font-19px">
                Our approach is rooted in partnership and a commitment to
                delivering transparent, tangible results.
              </p>
              {/* Deep Dive & Strategy */}
              <div className="bg-gray-100 p-6 shadow-md rounded-md flex flex-row items-center gap-3">
                <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                  <FaCheck className="text-blue-900 text-sm" />
                </span>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    Deep Dive & Strategy.
                  </h3>
                  <p className="text-sm text-[#000000]">
                    Our process begins with a deep understanding of your
                    business, your audience, and your objectives. This
                    client-centric approach ensures we develop a tailored
                    strategy that aligns perfectly with your brand.
                  </p>
                </div>
              </div>
              {/* Execute & Engage */}
              <div className="bg-gray-100 p-6 shadow-md rounded-md flex w-full md:w-full lg:w-[80%] sm:w-full flex-row items-center gap-3">
                <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                  <FaCheck className="text-blue-900 text-sm" />
                </span>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    Execute & Engage
                  </h3>
                  <p className="text-sm text-[#000000]">
                    We launch innovative, multi-channel campaigns designed to
                    capture attention and convert interest into action. From
                    compelling content to targeted ads, every element is crafted
                    with quality excellence in mind.
                  </p>
                </div>
              </div>
              {/* Measure & Refine */}
              <div className="bg-gray-100 p-6 shadow-md rounded-md flex w-full md:w-full lg:w-[60%] sm:w-full flex-row items-center gap-3">
                <span className="flex items-center justify-center border-2 border-blue-900 bg-transparent rounded-full w-6 h-6 mr-3 self-center shrink-0">
                  <FaCheck className="text-blue-900 text-sm" />
                </span>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    Measure & Refine
                  </h3>
                  <p className="text-sm text-[#000000]">
                    We believe in transparency and continuous learning. We
                    meticulously track performance, providing you with clear
                    analytics and insights to constantly refine our approach and
                    maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section  */}
        <section className="py-14 px-2 md:px-8">
          <div className="border-2 border-dashed border-[#D9D9D9] rounded-[8px] bg-white px-4 md:px-10 py-8">
            <h2 className="mb-2 text-left">
              <span
                className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #001133 0%,  #003399 90%)",
                }}
              >
                Our Digital Marketing Services
              </span>
            </h2>
            <p className="text-left text-lg font-semibold text-gray-900 mb-8">
              We offer a full suite of services designed to build a powerful and
              cohesive brand presence.
            </p>

            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Left - Marketing Automation & Lead Nurturing */}
              <div className="md:w-7/12 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Marketing Automation & Lead Nurturing
                  </h3>
                  <p className="text-gray-900">
                    Bridge the gap between marketing and sales with intelligent
                    automation. We build automated workflows for lead
                    generation, scoring, and nurturing, ensuring no opportunity
                    goes cold. This increases lead efficiency and empowers your
                    sales team with better-qualified prospects.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                  >
                    KNOW MORE <span className="ml-1">→</span>
                  </Link>
                </div>
                <Image
                  src="/images/what-we-do/digital-marketing/digital-marketing-a.png"
                  alt="Marketing"
                  width={220}
                  height={220}
                  className="self-end mt-4"
                />
              </div>

              {/* Right - Financial & Accounting Automation */}
              <div className="md:w-6/14 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Content Marketing & Strategy
                  </h3>
                  <p className="text-gray-900">
                    Become a trusted voice in your industry. We develop and
                    distribute valuable content that educates your audience,
                    builds community, and nurtures leads through the sales
                    funnel.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                  >
                    KNOW MORE <span className="ml-1">→</span>
                  </Link>
                </div>
                <Image
                  src="/images/what-we-do/digital-marketing/digital-marketing-b.png"
                  alt="Financia"
                  width={150}
                  height={150}
                  className="self-end mt-4"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left - Workflow & Data Automation */}
              <div className="md:w-6/14 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Paid Advertising (PPC & Social Ads)
                  </h3>
                  <p className="text-gray-900">
                    Generate immediate, targeted traffic and leads. We manage
                    your paid advertising campaigns across search and social
                    platforms, focusing on optimizing for the highest possible
                    return on investment.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                  >
                    KNOW MORE <span className="ml-1">→</span>
                  </Link>
                </div>
                <Image
                  src="/images/what-we-do/digital-marketing/digital-marketing-c.png"
                  alt="Workflow"
                  width={150}
                  height={150}
                  className="self-end mt-4"
                />
              </div>

              {/* Right - Customer Relationship Management (CRM) Automation */}
              <div className="md:w-7/12 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Search Engine Optimization (SEO)
                  </h3>
                  <p className="text-gray-900">
                    Achieve long-term, sustainable growth by improving your
                    visibility in search results. We focus on foundational SEO
                    to attract high-quality organic traffic and build your
                    brand&apos;s authority online.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                  >
                    KNOW MORE <span className="ml-1">→</span>
                  </Link>
                </div>
                <Image
                  src="/images/what-we-do/digital-marketing/digital-marketing-d.png"
                  alt="Marketing"
                  width={220}
                  height={220}
                  className="self-end mt-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-20 px-6 md:px-20">
          <h2 className="mb-8 text-left">
            <span
              className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #001133 0%,  #003399 90%)",
              }}
            >
              See Our Strategies in Action
            </span>
          </h2>

          {/* <p className="text-left font-semibold font-poppins text-gray-600 mb-10">Don&apos;t just take our word for it. Explore our case studies to see how we have helped businesses like yours transform their operations and achieve measurable success.</p> */}

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "FINANCE",
                desc: "Fintech Solutions for Growth and Insight",
                img: "/images/reuseable-SD-a.png",
              },
              {
                title: "RETAIL AND CONSUMER GOODS",
                desc: "Driving Consumer Loyalty",
                img: "/images/reuseable-SD-b.png",
              },
              {
                title: "HEALTHCARE",
                desc: "Improving Lives, One Innovation at a Time",
                img: "/images/reuseable-SD-c.png",
              },
            ].map(({ title, desc, img }, i) => (
              <div key={i}>
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={250}
                  className="rounded shadow-md"
                />
                <h4 className="text-md text-[#000000] font-extrabold mt-2">
                  {title}
                </h4>
                <p className="text-base font-semibold text-[#001F5C]">{desc}</p>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="border mt-4 bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                >
                  Explore Case Study <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Statement Section*/}
        <section className="text-white py-0 px-0 text-center">
          <div className="relative w-full h-64 flex items-center justify-center mb-8">
            <Image
              src="/images/what-we-do/business-auto/business-automation-bottombanner.jpg"
              alt="Hero 2 Background"
              fill
              className="object-cover object-center z-0 rounded"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-6 md:py-10">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-extrabold mb-4 text-center">
                Your Partner in Building a Powerful Brand
              </h2>
              <p className="max-w-auto mx-auto text-center text-white text-sm md:text-lg font-normal">
                Consistent messaging is key to a strong brand. We ensure that
                every marketing activity, from a social media post to an
                automated email sequence, perfectly aligns with your
                brand&apos;s core values and personality. As your unwavering
                partner, we are dedicated to building a brand identity that is
                not only visible but also trusted and respected.
              </p>
            </div>
          </div>
        </section>

        {/* Powered By Section */}
        <section className="w-full bg-[#F9F9F9] py-8 flex flex-col">
          <div className="max-w-7xl w-full flex flex-col items-start px-6 mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-8 w-full text-left ml-0 md:ml-10"
              style={{ letterSpacing: 0 }}
            >
              Powered by Industry-Leading Technology
            </h2>
            <div className="relative w-full max-w-full pr-6 md:pr-10 ml-0 md:ml-10 box-border">
              <div
                className="flex gap-28 animate-platform-scroll items-center w-max"
                style={{ animation: "platform-scroll 50s linear infinite" }}
              >
                {[1, 2].map((repeat) => (
                  <div
                    className="flex flex-row items-center gap-28"
                    key={repeat}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/zapier.png"
                        alt="Zapier"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Zapier
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/hootsuite.png"
                        alt="Hootsuite"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Hootsuite
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/analytics.png"
                        alt="Google Analytics"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222] whitespace-nowrap">
                        Google Analytics
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/hotjar.png"
                        alt="Hotjar"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Hotjar
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/zoho.png"
                        alt="ZOHO"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]"></span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/salesforce.png"
                        alt="Salesforce"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Salesforce
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/mailchimp.png"
                        alt="Mailchimp"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Mailchip
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/ubbersuggest.png"
                        alt="UbberSuggest"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        UbberSuggest
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/hubspot.png"
                        alt="Hubspot"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Hubspot
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/images/what-we-do/digital-marketing/meta.png"
                        alt="Meta"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <span className="text-lg font-medium text-[#222]">
                        Meta
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <style jsx>
                {`
                  @keyframes platform-scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                `}
              </style>
            </div>
          </div>
        </section>

        {/* Headlines Section */}
        <Headlines />

        {/* Pre Footer Section */}
        <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 lg:px-0">
            <div className="relative w-full h-[280px] lg:h-[480px] md:h-[370px] flex items-center justify-center">
              <Image
                src="/images/footer.jpg"
                alt="Footer Background"
                fill
                className="object-cover z-0"
                style={{ objectPosition: "center" }}
                priority
              />
              <div
                className="absolute left-0 top-0 w-full h-full flex items-center"
                style={{ zIndex: 2 }}
              >
                <div className="p-6 md:p-27 max-w-full md:max-w-4xl text-white ml-8 mt-1 rounded-lg">
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">
                    Ready to Amplify Your Brand&apos;s Voice?
                  </div>
                  <div className="text-sm md:text-base font-normal mb-5">
                    Let&apos;s create a marketing strategy that delivers real,
                    measurable results and drives your business forward.
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href="/schedule-a-consultation"
                      className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                      style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                    >
                      TALK TO A MARKETING EXPERT
                    </Link>
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
