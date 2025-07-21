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
      <section className="relative w-full bg-white pt-24 pb-10 flex flex-col items-center">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
          style={{ color: '#1A237E', letterSpacing: '-1px' }}
        >
          Case Studies
        </h1>
        {/* Image */}
        <div className="flex justify-center w-full">
          <div className="relative" style={{ width: '760px', maxWidth: '95vw', minWidth: '320px', height: 'auto' }}>
            <Image
              src="/images/case-studies/case-studies-hero.png"
              alt="Case Studies Hero"
              width={760}
              height={500}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              className="rounded-xl shadow-none"
              priority
            />
          </div>
        </div>
        {/* Text Box */}
        <div
          className="mx-auto mt-8 mb-2"
          style={{
            maxWidth: '1000px',
            width: '100%',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.13)',
            padding: '28px 32px',
            textAlign: 'left',
            position: 'relative',
            zIndex: 2
          }}
        >
          <p className="text-[#3C3C3C] text-base font-medium mb-0 leading-relaxed">
            Your challenges are unique, but the principles of success are universal: a deep 
            understanding of your business, a transparent process, and a perfectly executed 
            technical solution. While our commitment to client confidentiality is absolute, 
            these use cases illustrate the real-world problems we solve and the tangible results 
            we deliver every day.<br />
            Explore the stories below to see how we apply our expertise in custom software 
            development, AI implementation, and business process automation to drive growth, 
            efficiency, and innovation across industries. Find a challenge that mirrors your 
            own and discover how we can engineer your success.
          </p>
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
              <Image src="/images/use-cases/retail.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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
              <Image src="/images/use-cases/healthcare.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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
              <Image src="/images/use-cases/saas.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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
              <Image src="/images/use-cases/agriculture.jpg" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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
              <Image src="/images/use-cases/realestate.png" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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
              <Image src="/images/use-cases/financial.png" alt="Software Development" width={365} height={199} className="w-full h-[199px] object-cover" />
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