"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";

const industries = [
  {
    key: "retail-and-ecommerce",
    title: "Retail & Ecommerce",
    desc: "Scale Your Business with Unified Commerce",
    desc2:
      "See how we eliminated stockouts and manual work for a growing retailer by integrating their e-commerce and POS systems. This custom software solution resulted in a 95% reduction in order cancellations and a 40% boost in operational efficiency.",
    image: "/images/use-cases/retail.jpg",
    href: "/resources/explore-our-work/retail-and-ecommerce",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    desc: "Modernize Patient Care with a Custom Mobile App",
    desc2:
      "Discover how a HIPAA-compliant mobile app streamlined clinic operations, reduced patient no-shows by 35%, and cut administrative phone calls by 60%. Our solution enhanced both patient engagement and the overall quality of care.",
    image: "/images/use-cases/healthcare.jpg",
    href: "/resources/explore-our-work/healthcare",
  },
  {
    key: "saas-and-technology",
    title: "Technology",
    desc: "Building a Better Digital Future, Together.",
    desc2:
      "We harness the power of technology to streamline workflows, automate tasks, and unlock new possibilities for businesses and individuals.",
    image: "/images/use-cases/saas.png",
    href: "/resources/explore-our-work/saas-and-technology",
  },
  {
    key: "agriculture",
    title: "Agriculture",
    desc: "Modernize Your Cooperative with a Digital AgriTech Platform",
    desc2:
      "Learn how a custom digital platform brought an agricultural co-op into the modern age, providing 100% produce traceability, automating payments, and reducing administrative time by 80%.",
    image: "/images/use-cases/agriculture.jpg",
    href: "/resources/explore-our-work/agriculture",
  },
  {
    key: "real-estate",
    title: "Real Estate",
    desc: "Generate More Leads with a High-Performance Website",
    desc2:
      "See how a lead-focused real estate website with advanced IDX integration became an agency's #1 lead source, tripling their qualified leads and cutting their website bounce rate in half.",
    image: "/images/use-cases/realestate.png",
    href: "/resources/explore-our-work/real-estate",
  },
  {
    key: "financial-services",
    title: "Financial Services",
    desc: "Increase Efficiency and Reduce Risk with Process Automation",
    desc2:
      "Discover how we automated critical back-office operations for a financial services firm, achieving 99.9% accuracy in data processing and reducing time spent on manual tasks by 90%.",
    image: "/images/use-cases/financial.png",
    href: "/resources/explore-our-work/financial-services",
  },
  {
    key: "hardware-and-manufacturing",
    title: "Hardware & Manufacturing",
    desc: "Elevate Your Hardware with World-Class OEM Software",
    desc2:
      "Learn how our embedded software partnership enabled a hardware manufacturer to get to market 6 months faster and reduce support calls by 40%, turning their custom software into a key competitive advantage.",
    image: "/images/use-cases/hardware.jpg",
    href: "/resources/explore-our-work/hardware-and-manufacturing",
  },
  {
    key: "blockchain",
    title: "Blockchain",
    desc: "Engineering Trust, Securing the Future.",
    desc2:
      "We build decentralized solutions that enhance transparency, automate trust, and secure digital assets. From immutable ledgers to smart contracts, we empower your business with the unbreakable integrity of blockchain technology.",
    image: "/images/use-cases/blockchain.png",
    href: "#",
  },
  {
    key: "education",
    title: "Education",
    desc: "Powering the Future of Learning.",
    desc2:
      "We empower educational institutions with transformative technology. From immersive e-learning platforms to streamlined administrative workflows, we build intelligent solutions that personalize learning, boost student engagement, and create accessible knowledge for all.",
    image: "/images/use-cases/education.png",
    href: "#",
  },
];

function Arrow({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-10 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center
        ${direction === "left" ? "left-1 sm:-left-8" : "right-1 sm:-right-8"}`}
      aria-label={direction === "left" ? "Previous" : "Next"}
      style={{ outline: "none", border: "none" }}
    >
      <span className="text-2xl sm:text-3xl text-[#001F5C]">
        {direction === "left" ? "←" : "→"}
      </span>
    </button>
  );
}

export default function ProfessionalsSection() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const filtered = industries.filter((item) => item.key !== currentSlug);

  const sliderRef = useRef<Slider>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
  infinite: filtered.length > 1,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  beforeChange: (_old: number, next: number) => setCenterIndex(next),
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 2, centerMode: false, variableWidth: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, centerMode: false, variableWidth: false },
    },
  ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#003399] opacity-40 slick-dot" />
    ),
  };

  return (
    <section className="w-full py-8 md:py-12 max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center relative">
      <style>
        {`
          .slick-dots li.slick-active .slick-dot {
            opacity: 1 !important;
          }
        `}
      </style>
      <h1
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-md text-left w-full bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, #003399 0%, #003399 45%, #001133 55%, #001133 100%)",
        }}
      >
        Explore Our Work: Proven Results Across Industries
      </h1>
      <div className="relative w-full max-w-6xl mx-auto">
        <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
        <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
        {mounted && (
          <Slider ref={sliderRef} {...settings}>
            {filtered.map((industry, idx) => {
              const isCenter =
                idx === centerIndex % filtered.length ||
                (centerIndex >= filtered.length &&
                  idx === centerIndex % filtered.length);

              return (
                <div key={industry.key} className="px-1 sm:px-2 md:px-3">
                  <div
                    className={`bg-white shadow-lg flex flex-col items-start w-full mx-auto rounded-lg overflow-hidden h-[420px] sm:h-[440px] md:h-[480px] transition-all duration-300
                      ${isCenter ? "scale-105 z-20 shadow-2xl" : "scale-95 z-10"}`}
                    style={{
                      boxShadow: isCenter
                        ? "0 12px 32px 0 rgba(0,51,153,0.18)"
                        : "0 4px 16px 0 rgba(0,0,0,0.08)",
                      
                    }}
                  >
                    <div className="w-full">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        width={365}
                        height={199}
                        className="w-full h-[140px] sm:h-[170px] md:h-[199px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 px-3 sm:px-4 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-3 sm:pb-6 md:pb-7 w-full">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 text-[#001F5C]">
                        {industry.title}
                      </h3>
                      <h5 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 text-[#232323]">
                        {industry.desc}
                      </h5>
                      <p
                        className="text-[#3C3C3C] text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-4 leading-snug overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          minHeight: "48px",
                          maxHeight: "66px",
                        }}
                      >
                        {industry.desc2}
                      </p>
                      <div className="mt-auto">
                        <Link
                          href={industry.href}
                          className="border bg-[#003399] border-[#003399] px-3 py-2 sm:px-4 text-white font-bold text-xs sm:text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                          style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                        >
                          {industry.key === "saas-and-technology"
                            ? "READ CASE STUDY"
                            : "READ THE FULL STORY"}{" "}
                          <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}
