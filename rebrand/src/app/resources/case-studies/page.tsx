"use client";
import React from 'react';
import NavBar from '../../nav';
import Footer from '../../Footer';
import Image from 'next/image';
import ScrollFadeSection from '../../components/ScrollFadeSection';

export default function CasesStudiesResource() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>
      
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] grid md:grid-cols-2">
       {/* Right Text with Background */} 
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/case-studies/right-text-background-banner.jpg"
          alt="Hero left"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Left Image */}
      <div className="relative bg-[#0a0a0a] text-white flex items-center px-6 py-12 md:px-12">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 mt-10 mb-6">
          <Image
            src="/images/case-studies/left-hero-image.jpg"
            alt="Hex background"
            fill
            className="object-cover opacity-60"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-xl ">
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6">CASE STUDIES</h2>
          <p className="mb-4 leading-relaxed text-gray-100">
            Your challenges are unique, but the principles of success are universal: a deep understanding of your business, a transparent process, and a perfectly executed technical solution. While our commitment to client confidentiality is absolute, these use cases illustrate the real-world problems we solve and the tangible results we deliver every day.
          </p>
          <p className="text-gray-300 ">
            Explore the stories below to see how we apply our expertise in custom software development, AI implementation, and business process automation to drive growth, efficiency, and innovation across industries. Find a challenge that mirrors your own and discover how we can engineer your success.
          </p>
        </div>
      </div>
    </section>

      
      {/* Professionals Section */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-12 flex flex-col items-start">
        <h1 
          className="text-2xl md:text-4xl ml-4 font-bold mb-2 tracking-tight drop-shadow-md text-left md:text-left w-full bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to top, #003399 0%, #003399 45%, #001133 55%, #001133 100%)'
          }}
        >
          Explore Our Work: Proven Results Across Industries
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Retail & Ecommerce Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/retail.jpg" alt="Retail & Ecommerce" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Retail & Ecommerce</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Scale Your Business with Unified Commerce</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">See how we eliminated stockouts and manual work for a growing retailer by integrating their e-commerce and POS systems. This custom software solution resulted in a 95% reduction in order cancellations and a 40% boost in operational efficiency.</p>
              <a
                  href="/resources/explore-our-work/retail-and-ecommerce"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* Healthcare Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/healthcare.jpg" alt="Healthcare" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Healthcare</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Modernize Patient Care with a Custom Mobile App</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">Discover how a HIPAA-compliant mobile app streamlined clinic operations, reduced patient no-shows by 35%, and cut administrative phone calls by 60%. Our solution enhanced both patient engagement and the overall quality of care.</p>
              <a
                  href="/resources/explore-our-work/healthcare"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* SaaS & Technology Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/saas.png" alt="SaaS & Technology" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">SaaS & Technology</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Scale Your Support with an Intelligent AI Chatbot</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">See how an AI-powered chatbot resolved 70% of repetitive support tickets for a SaaS company. This automation provided instant 24/7 answers and increased agent capacity for high-value tasks by 45%.</p>
              <a
                  href="/resources/explore-our-work/saas-and-technology"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* Agriculture Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/agriculture.jpg" alt="Agriculture" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Agriculture</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Modernize Your Cooperative with a Digital AgriTech Platform</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">Learn how a custom digital platform brought an agricultural co-op into the modern age, providing 100% produce traceability, automating payments, and reducing administrative time by 80%.</p>
              <a
                  href="/resources/explore-our-work/agriculture"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* Real Estate Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/realestate.png" alt="Real Estate" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Real Estate</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Generate More Leads with a High-Performance Website</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">See how a lead-focused real estate website with advanced IDX integration became an agency&apos;s #1 lead source, tripling their qualified leads and cutting their website bounce rate in half.</p>
              <a
                  href="/resources/explore-our-work/real-estate"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* Financial Services Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/financial.png" alt="Financial Services" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Financial Services</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Increase Efficiency and Reduce Risk with Process Automation</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">Discover how we automated critical back-office operations for a financial services firm, achieving 99.9% accuracy in data processing and reducing time spent on manual tasks by 90%.</p>
              <a
                  href="/resources/explore-our-work/financial-services"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
          {/* Hardware & Manufacturing Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/hardware.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Hardware & Manufacturing</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Elevate Your Hardware with World-Class OEM Software</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">Learn how our embedded software partnership enabled a hardware manufacturer to get to market 6 months faster and reduce support calls by 40%, turning their custom software into a key competitive advantage.</p>
              <a
                href="/resources/explore-our-work/hardware-and-manufacturing"
                className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
              >
                READ THE FULL STORY <span className="ml-1">→</span>
              </a>
            </div>
          </div>
          {/* Blockchain Card */}
          <div className="bg-white shadow-lg flex flex-col items-start w-full max-w-[370px] min-w-[280px] mx-auto">
            <div className="px-6 pt-0 pl-0 pr-0 w-full">
              <Image src="/images/use-cases/blockchain.png" alt="Blockchain" width={365} height={199} className="w-full h-[199px] object-cover" />
            </div>
            <div className="px-6 pt-6 pb-7 w-full">
              <h3 className="font-bold text-2xl mb-2 text-[#001F5C]">Blockchain</h3>
              <h5 className="font-bold text-base mb-2 text-[#3C3C3C]">Engineering Trust, Securing the Future.</h5>
              <p className="text-[#3C3C3C] text-base font-semibold text-sm mb-4 leading-snug">We build decentralized solutions that enhance transparency, automate trust, and secure digital assets. From immutable ledgers to smart contracts, we empower your business with the unbreakable integrity of blockchain technology..</p>
              <a
                  href="/resources/explore-our-work/blockchain"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  READ THE FULL STORY <span className="ml-1">→</span>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Section */}
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
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">Have a Challenge You Don&apos;t See Here?</div>
                  <div className="text-sm md:text-base font-normal mb-5">Every project is a new journey. If you&apos;re facing a unique operational or technical challenge, we&apos;re ready to listen. Let&apos;s talk about how we can build your success story.</div>
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