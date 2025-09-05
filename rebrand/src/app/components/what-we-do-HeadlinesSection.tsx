import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Headlines() {
  return (
    <>
      {/* Section 7: Headlines */}
      <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent mb-8 w-full text-left whitespace-nowrap"
            style={{ letterSpacing: 0 }}
          >
            Making the Headlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {/* Social Cranes Card */}
            <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
              <div className="w-full">
                <Image
                  src="/images/homepage/headline-a.jpg"
                  alt="Software Development"
                  width={365}
                  height={199}
                  className="w-full h-[199px] object-cover"
                />
              </div>
              <div className="px-6 pt-6 pb-7 w-full">
                <h3 className="font-bold text-lg mb-2 text-black">
                  5 Social Media Hacks That Drive Engagement for B2B SaaS{" "}
                </h3>
                <p className="text-gray-800 text-base mb-4 leading-snug">
                  {" "}
                  In today&apos;s competitive social media landscape, the
                  conventional strategy of publishing generic corporate updates
                  is not effective. The stakes are higher than ever for SaaS
                  companies trying to......{" "}
                </p>
                <Link
                  href="/work-in-progress"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                >
                  KNOW MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Smaat Finance Card */}
            <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
              <div className="w-full">
                <Image
                  src="/images/homepage/headline-b.png"
                  alt="Business Automations"
                  width={365}
                  height={199}
                  className="w-full h-[199px] object-cover"
                />
              </div>
              <div className="px-6 pt-6 pb-7 w-full">
                <h3 className="font-bold text-lg mb-2 text-black">
                  10 High-Impact SEO Strategies for Tech Startups
                </h3>
                <p className="text-gray-800 text-base mb-4 leading-snug">
                  Organic search remains one of the most cost-effective,
                  long-term customer-acquisition channels for tech startups.
                  These ten practical, data-driven SEO strategies will help your
                  startup turn search into......{" "}
                </p>
                <Link
                  href="/work-in-progress"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                >
                  KNOW MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            {/* Social Cranes Card */}
            <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-auto md:justify-self-center lg:justify-self-auto">
              <div className="w-full">
                <Image
                  src="/images/homepage/headline-c.jpg"
                  alt="Digital Marketing"
                  width={365}
                  height={199}
                  className="w-full h-[199px] object-cover"
                />
              </div>
              <div className="px-6 pt-6 pb-7 w-full">
                <h3 className="font-bold text-lg mb-2 text-black">
                  Top Business Automation Tools Every Growing Company Needs
                </h3>
                <p className="text-gray-800 text-base mb-4 leading-snug">
                  Growing a business without automation is like trying to sail
                  fast with anchor chains tied to the hull. The good news?
                  Today’s automation tools......
                </p>
                <Link
                  href="/work-in-progress"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                >
                  KNOW MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
