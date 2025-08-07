"use client";
import React from "react";
import NavBar from "../../nav";
import Footer from "../../Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "../../components/ScrollFadeSection";

export default function UseCasesResource() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero/Intro Section */}
      <section className="relative w-full bg-white pb-10">
        <div className="max-w-8xl mx-auto px-4 w-full relative">
          {/* Centered background image, not full width */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-full max-w-8xl h-full relative">
              <Image
                src="/images/use-cases/use-case-bg.jpg"
                alt="Background"
                fill
                className="object-cover object-center rounded-2xl"
                style={{ opacity: 5.18 }}
                priority
              />
            </div>
          </div>
          {/* Top Capsule And Headings */}
          <div className="relative z-10 -ml-4 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 w-full">
            {/* Image At The Left */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
              <div className="relative w-[540px] h-[710px]">
                <div
                  className="absolute left-0 top-0 w-full h-full bg-white rounded-r-full rounded-l-[60px] shadow-xl"
                  style={{
                    borderTopLeftRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                />
                <Image
                  src="/images/use-cases/use-cases.jpg"
                  alt="Use Cases"
                  fill
                  className="object-cover rounded-r-full rounded-l-[60px]"
                  style={{
                    borderTopLeftRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                  priority
                />
              </div>
            </div>
            {/* Headings To The Right */}
            <div className="flex-1 flex flex-col justify-center items-start pl-0 md:pl-4 h-[710px]">
              <ScrollFadeSection>
                <h1
                  className="text-2xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-md text-left md:text-center w-full bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, #003399 0%, #003399 45%, #001133 55%, #001133 100%)",
                  }}
                >
                  USE CASES
                </h1>
                <h2 className="text-[#3C3C3C] text-base md:text-lg font-extrabold mb-0 text-left md:text-center w-full">
                  Solutions in Action: How we Engineer Business Success
                </h2>
              </ScrollFadeSection>
            </div>
          </div>

          {/* Bottom Paragraphs And Capsule */}
          <ScrollFadeSection>
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-6 md:gap-10 w-full mt-8">
              {/* Bottom Paragraphs To The Left */}
              <div className="flex-1 flex flex-col ml-10 justify-center items-start">
                <p className="text-[#3C3C3C] text-sm md:text-base font-semibold mb-2 leading-relaxed">
                  Your challenges are unique, but the principles of success are
                  universal: a deep understanding of your business, a
                  transparent process, and a perfectly executed technical
                  solution. While our commitment to client confidentiality is
                  absolute, these use cases illustrate the real-world problems
                  we solve and the tangible results we deliver every day.
                </p>
                <p className="text-[#3C3C3C] text-sm md:text-base font-semibold mb-2 leading-relaxed">
                  Explore the stories below to see how we apply our expertise in
                  custom software development, AI implementation, and business
                  process automation to drive growth, efficiency, and innovation
                  across industries. Find a challenge that mirrors your own and
                  discover how we can engineer your success.
                </p>
              </div>
              {/* Bottom Image Right */}
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
                <div className="relative w-[380px] h-[320px]">
                  <div
                    className="absolute left-0 top-0 w-full h-full bg-white rounded-l-full rounded-r-[60px] shadow-xl"
                    style={{
                      borderTopRightRadius: "60px",
                      borderBottomRightRadius: "60px",
                    }}
                  />
                  <Image
                    src="/images/use-cases/use-case1.jpg"
                    alt="Use Case 1"
                    fill
                    className="object-cover rounded-l-full rounded-r-[60px]"
                    style={{
                      borderTopRightRadius: "60px",
                      borderBottomRightRadius: "60px",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="w-full py-12 px-4 max-w-7xl mx-auto sm:px-6 md:px-12 flex flex-col items-start">
        <h1
          className="text-2xl md:text-4xl ml-1 lg:mb-4 font-bold mb-2 tracking-tight drop-shadow-md text-left md:text-left w-full bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to top, #003399 0%, #003399 45%, #001133 55%, #001133 100%)",
          }}
        >
          Explore Our Work: Proven Results Across Industries
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-full max-w-auto mx-auto">
          {/* Retail & Ecommerce Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/retail.jpg"
                alt="Retail & Ecommerce"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Retail & Ecommerce
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Scale Your Business with Unified Commerce
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                See how we eliminated stockouts and manual work for a growing
                retailer by integrating their e-commerce and POS systems. This
                custom software solution resulted in a 95% reduction in order
                cancellations and a 40% boost in operational efficiency.
              </p>
              <Link
                href="/resources/explore-our-work/retail-and-ecommerce"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Healthcare Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/healthcare.jpg"
                alt="Healthcare"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Healthcare
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Modernize Patient Care with a Custom Mobile App
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                Discover how a HIPAA-compliant mobile app streamlined clinic
                operations, reduced patient no-shows by 35%, and cut
                administrative phone calls by 60%. Our solution enhanced both
                patient engagement and the overall quality of care.
              </p>
              <Link
                href="/resources/explore-our-work/healthcare"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* SaaS & Technology Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/saas.png"
                alt="SaaS & Technology"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Technology
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Building a Better Digital Future, Together.
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                We harness the power of technology to streamline workflows,
                automate tasks, and unlock new possibilities for businesses and
                individuals.
              </p>
              <Link
                href="/resources/explore-our-work/saas-and-technology"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Agriculture Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/agriculture.jpg"
                alt="Agriculture"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Agriculture
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Modernize Your Cooperative with a Digital AgriTech Platform
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                Learn how a custom digital platform brought an agricultural
                co-op into the modern age, providing 100% produce traceability,
                automating payments, and reducing administrative time by 80%.
              </p>
              <Link
                href="/resources/explore-our-work/agriculture"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Real Estate Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/realestate.png"
                alt="Real Estate"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Real Estate
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Generate More Leads with a High-Performance Website
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                See how a lead-focused real estate website with advanced IDX
                integration became an agency&apos;s #1 lead source, tripling
                their qualified leads and cutting their website bounce rate in
                half.
              </p>
              <Link
                href="/resources/explore-our-work/real-estate"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Financial Services Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/financial.png"
                alt="Financial Services"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Financial Services
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Increase Efficiency and Reduce Risk with Process Automation
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                Discover how we automated critical back-office operations for a
                financial services firm, achieving 99.9% accuracy in data
                processing and reducing time spent on manual tasks by 90%.
              </p>
              <Link
                href="/resources/explore-our-work/financial-services"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Hardware & Manufacturing Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/hardware.jpg"
                alt="Hardware & Manufacturing"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Hardware & Manufacturing
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Elevate Your Hardware with World-Class OEM Software
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                Learn how our embedded software partnership enabled a hardware
                manufacturer to get to market 6 months faster and reduce support
                calls by 40%, turning their custom software into a key
                competitive advantage.
              </p>
              <Link
                href="/resources/explore-our-work/hardware-and-manufacturing"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Blockchain Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/blockchain.png"
                alt="Blockchain"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Blockchain
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Engineering Trust, Securing the Future.
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                We build decentralized solutions that enhance transparency,
                automate trust, and secure digital assets. From immutable
                ledgers to smart contracts, we empower your business with the
                unbreakable integrity of blockchain technology..
              </p>
              <Link
                href="/resources/explore-our-work/blockchain"
                onClick={(e) => e.preventDefault()}
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image
                src="/images/use-cases/education.png"
                alt="Education"
                width={365}
                height={199}
                className="w-full h-[199px] object-cover"
              />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">
                Education
              </h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">
                Powering the Future of Learning.
              </h5>
              <p className="text-[#3C3C3C] text-base font-medium text-sm mb-4 leading-snug">
                We empower educational institutions with transformative
                technology. From immersive e-learning platforms to streamlined
                administrative workflows, we build intelligent solutions that
                personalize learning, boost student engagement, and create
                accessible knowledge for all.
              </p>
              <Link
                href="/resources/explore-our-work/education"
                onClick={(e) => e.preventDefault()}
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre Footer Section */}
      <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[480px] md:h-[370px] flex items-center justify-center">
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
                <ScrollFadeSection>
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">
                    Have a Challenge You Don&apos;t See Here?
                  </div>
                  <div className="text-sm md:text-base font-normal mb-5">
                    Every project is a new journey. If you&apos;re facing a
                    unique operational or technical challenge, we&apos;re ready
                    to listen. Let&apos;s talk about how we can build your
                    success story.
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href="/schedule-a-consultation"
                      className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                      style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                    >
                      TALK TO AN EXPERT
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
