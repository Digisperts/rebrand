"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    key: "retail-and-ecommerce",
    title: "Retail & Ecommerce",
    desc: "Scale Your Business with Unified Commerce",
    desc2: "See how we eliminated stockouts and manual work for a growing retailer by integrating their e-commerce and POS systems. This custom software solution resulted in a 95% reduction in order cancellations and a 40% boost in operational efficiency.",
    image: "/images/use-cases/retail.jpg",
    href: "/resources/explore-our-work/retail-and-ecommerce",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    desc: "Modernize Patient Care with a Custom Mobile App",
    desc2: "Discover how a HIPAA-compliant mobile app streamlined clinic operations, reduced patient no-shows by 35%, and cut administrative phone calls by 60%. Our solution enhanced both patient engagement and the overall quality of care.",
    image: "/images/use-cases/healthcare.jpg",
    href: "/resources/explore-our-work/healthcare",
  },
  {
    key: "saas-and-technology",
    title: "Technology",
    desc: "Building a Better Digital Future, Together.",
    desc2: "We harness the power of technology to streamline workflows, automate tasks, and unlock new possibilities for businesses and individuals.",
    image: "/images/use-cases/saas.png",
    href: "/resources/explore-our-work/saas-and-technology",
  },
  {
    key: "agriculture",
    title: "Agriculture",
    desc: "Modernize Your Cooperative with a Digital AgriTech Platform",
    desc2: "Learn how a custom digital platform brought an agricultural co-op into the modern age, providing 100% produce traceability, automating payments, and reducing administrative time by 80%.",
    image: "/images/use-cases/agriculture.jpg",
    href: "/resources/explore-our-work/agriculture",
  },
  {
    key: "real-estate",
    title: "Real Estate",
    desc: "Generate More Leads with a High-Performance Website",
    desc2: "See how a lead-focused real estate website with advanced IDX integration became an agency's #1 lead source, tripling their qualified leads and cutting their website bounce rate in half.",
    image: "/images/use-cases/realestate.png",
    href: "/resources/explore-our-work/real-estate",
  },
  {
    key: "financial-services",
    title: "Financial Services",
    desc: "Increase Efficiency and Reduce Risk with Process Automation",
    desc2: "Discover how we automated critical back-office operations for a financial services firm, achieving 99.9% accuracy in data processing and reducing time spent on manual tasks by 90%.",
    image: "/images/use-cases/financial.png",
    href: "/resources/explore-our-work/financial-services",
  },
  {
    key: "hardware-and-manufacturing",
    title: "Hardware & Manufacturing",
    desc: "Elevate Your Hardware with World-Class OEM Software",
    desc2: "Learn how our embedded software partnership enabled a hardware manufacturer to get to market 6 months faster and reduce support calls by 40%, turning their custom software into a key competitive advantage.",
    image: "/images/use-cases/hardware.jpg",
    href: "/resources/explore-our-work/hardware-and-manufacturing",
  },
  {
    key: "blockchain",
    title: "Blockchain",
    desc: "Engineering Trust, Securing the Future.",
    desc2: "We build decentralized solutions that enhance transparency, automate trust, and secure digital assets. From immutable ledgers to smart contracts, we empower your business with the unbreakable integrity of blockchain technology..",
    image: "/images/use-cases/blockchain.png",
    href: "/resources/explore-our-work/blockchain",
  },
];

export default function ProfessionalsSection() {
  const pathname = usePathname();

  const currentSlug = pathname.split("/").pop(); // get last part of URL
  const filtered = industries.filter((item) => item.key !== currentSlug);

  return (
    <section className="w-full py-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-start">
      <h1
        className="text-2xl md:text-3xl font-bold mb-2 tracking-tight drop-shadow-md text-left w-full bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, #003399 0%, #003399 45%, #001133 55%, #001133 100%)",
        }}
      >
        Explore Our Work: Proven Results Across Industries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {filtered.map((industry) => (
          <div
            key={industry.key}
            className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto"
          >
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src={industry.image}
                alt={industry.title}
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                {industry.title}
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                {industry.desc}
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                {industry.desc2}
              </p>
              <Link
                href={industry.href}
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
