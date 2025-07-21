"use client";
import React from 'react';
import NavBar from '../../../nav';
import Footer from '../../../Footer';
import Image from 'next/image';
import ScrollFadeSection from '../../../components/ScrollFadeSection';

export default function SaasAndTechnologyExploreOurWork() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>

            {/* Hero Section with Custom Shape */}
      <section className="relative text-white overflow-hidden">
  {/* Hero Image with Curved Bottom */}
  <div className="relative">
    <img
      src="/images/explore-our-work/saas-and-technology/saas-her0.png"
      alt="Hero banner"
      className="w-full h-auto object-cover"
    />

    {/* Curved SVG wave at bottom */}
    <div className="w-full -mt-1">
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          "visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#002233"></rect><path d="M0 488L18.8 476C37.7 464 75.3 440 112.8 429.2C150.3 418.3 187.7 420.7 225.2 424C262.7 427.3 300.3 431.7 337.8 445C375.3 458.3 412.7 480.7 450.2 495.3C487.7 510 525.3 517 562.8 525C600.3 533 637.7 542 675.2 537.5C712.7 533 750.3 515 787.8 488.2C825.3 461.3 862.7 425.7 881.3 407.8L900 390L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path>
        />
      </svg>
    </div>
  </div>

  {/* Overlayed Content */}
  <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center px-4 text-center">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Scale Your Support with an Intelligent AI Chatbot
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Deliver instant, 24/7 answers to your customers...
      </p>
    </div>
  </div>
</section>




      {/* The Challenge */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-[#003399] mb-6">The Challenge</h2>
        <p className="mb-10 text-gray-700">
          A fast-growing SaaS company’s support team was overwhelmed by a high volume of repetitive customer <br />
          inquiries, leading to slow response times and agent burnout.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'High Ticket Volume',
              text: 'A majority of support tickets were for common, easily solvable issues like password resets, billing questions, and basic feature usage.',
            },
            {
              title: 'Slow First-Response Time',
              text: 'Users were forced to wait hours for responses to basic questions, resulting in frustration.',
            },
            {
              title: 'Inefficient Agent Utilization',
              text: 'Highly skilled support agents were spending most of their time answering repetitive questions instead of solving complex customer problems.',
            },
          ].map((item, idx) => (
            <div key={idx} className="relative border shadow p-6 bg-white pt-10 rounded">
              <PiMapPinBold className="text-[#003399] absolute top-2 left-1/2 transform -translate-x-1/2 text-2xl" />
              <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our Process</h2>
    <div className="flex justify-center flex-wrap gap-8 items-start">
      {/* STEP 1 */}
      <div className="flex flex-col items-center w-[240px]">
        <div className="relative">
          <div className="bg-[#003399] w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative">
            1
          </div>
          <div className="w-[160px] h-[120px] bg-[#cdd9f3] -mt-6 transform -skew-x-12 rounded shadow-md" />
        </div>
        <svg
          className="mt-4 w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
        <div className="mt-4 text-left">
          <h3 className="text-base font-bold text-blue-900">Support Ticket Analysis</h3>
          <p className="text-sm text-gray-700">We analyzed thousands of support tickets...</p>
        </div>
      </div>

      {/* STEP 2 (Arrow pointing down) */}
      <div className="flex flex-col items-center w-[240px]">
        <div className="text-left mb-4">
          <h3 className="text-base font-bold text-blue-900">AI Model Training & Integration</h3>
          <p className="text-sm text-gray-700">We trained a model and integrated...</p>
        </div>
        <svg
          className="mb-4 w-6 h-6 rotate-180 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
        <div className="relative">
          <div className="bg-[#BD4A4A] w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative">
            2
          </div>
          <div className="w-[160px] h-[120px] bg-[#fcdcdc] -mt-6 transform -skew-x-12 rounded shadow-md" />
        </div>
      </div>

      {/* STEP 3 */}
      <div className="flex flex-col items-center w-[240px]">
        <div className="relative">
          <div className="bg-[#996400] w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative">
            3
          </div>
          <div className="w-[160px] h-[120px] bg-[#ffe5b4] -mt-6 transform -skew-x-12 rounded shadow-md" />
        </div>
        <svg
          className="mt-4 w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
        <div className="mt-4 text-left">
          <h3 className="text-base font-bold text-blue-900">Conversation Design</h3>
          <p className="text-sm text-gray-700">We built out human-like flows...</p>
        </div>
      </div>

      {/* STEP 4 (Arrow pointing down) */}
      <div className="flex flex-col items-center w-[240px]">
        <div className="text-left mb-4">
          <h3 className="text-base font-bold text-blue-900">Beta Testing & Learning</h3>
          <p className="text-sm text-gray-700">Feedback led to continuous improvement...</p>
        </div>
        <svg
          className="mb-4 w-6 h-6 rotate-180 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
        <div className="relative">
          <div className="bg-[#003366] w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative">
            4
          </div>
          <div className="w-[160px] h-[120px] bg-[#d1e0f0] -mt-6 transform -skew-x-12 rounded shadow-md" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Digisperts Solution */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">The Digisperts Solution</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
      {/* Item 1 */}
      <div className="bg-white text-black p-6 rounded shadow-md flex gap-4 items-start">
        <FaCheckCircle className="text-blue-600 text-xl mt-1" />
        <div>
          <h4 className="font-semibold text-blue-800 mb-1">Automated Issue Resolution</h4>
          <p className="text-sm">
            The chatbot resolved most of the recurring queries by offering step-by-step guidance.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="bg-white text-black p-6 rounded shadow-md flex gap-4 items-start">
        <FaCheckCircle className="text-blue-600 text-xl mt-1" />
        <div>
          <h4 className="font-semibold text-blue-800 mb-1">
            Natural Language Understanding (NLU)
          </h4>
          <p className="text-sm">
            Trained with company-specific vocabulary and past support tickets to ensure natural, helpful answers.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="bg-white text-black p-6 rounded shadow-md flex gap-4 items-start">
        <FaCheckCircle className="text-blue-600 text-xl mt-1" />
        <div>
          <h4 className="font-semibold text-blue-800 mb-1">Intelligent Human Handoff</h4>
          <p className="text-sm">
            Chatbot escalates to live agents when needed, giving agents full context.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Chatbot */}
      <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
        <div className="shadow-lg border p-4 rounded">
          <Image
            src="/images/explore-our-work/saas-and-technology/chatbot.png"
            alt="Chatbot UI"
            width={1400}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-[#003399] mb-6">The Outcome</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { label: '70% Reduction', desc: 'in incoming support tickets for repetitive issues.' },
            { label: '90% Improvement', desc: 'in first-response time, providing instant answers to most queries.' },
            { label: '45% Increase', desc: 'in agent capacity to handle complex and escalated issues.' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="w-6 h-6 mx-auto mb-2 border-2 border-[#003399] rounded-full flex items-center justify-center">
                <FaCheck className="text-[#003399] text-sm" />
              </div>
              <p className="font-bold text-xl">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
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