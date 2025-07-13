import React from 'react';
import Image from 'next/image';
import NavBar from '../../nav';
import Footer from '../../Footer';
import BannerCTA from '../../components/what-we-do-BannerCTA';
import HeadlinesSection from '../../components/what-we-do-HeadlinesSection';

export default function DigitalMarketing() {
  return (
    <>
      <NavBar />

      <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: 'url(/images/digital-banner.png)' }}>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Connect with Purpose. Grow with Intent.</h1>
        <p className="max-w-xl text-lg">We craft data-driven digital marketing strategies powered by intelligent automation...</p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">DISCUSS YOUR GROWTH STRATEGY</button>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="shadow-md p-6 rounded-md border-l-4 border-blue-600 relative">
            <span className="absolute right-4 top-4 text-blue-600 text-2xl font-bold">✔</span>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Marketing That Cuts Through the Noise.</h2>
            <p>In a crowded digital world, a strong message is not enough...</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Image src="/images/digital-marketing-strategy.png" alt="Digital Strategy" width={600} height={400} className="rounded shadow-lg" />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="shadow-md p-4 rounded-md border-l-4 border-blue-600 relative">
                <span className="absolute right-4 top-4 text-blue-600 text-2xl font-bold">✔</span>
                <h3 className="text-blue-900 font-semibold">Deep Dive & Strategy</h3>
                <p>We take time to deeply understand your business...</p>
              </div>
              <div className="shadow-md p-4 rounded-md border-l-4 border-blue-600 relative">
                <span className="absolute right-4 top-4 text-blue-600 text-2xl font-bold">✔</span>
                <h3 className="text-blue-900 font-semibold">Execute & Engage</h3>
                <p>From email automation to messaging, we execute timely campaigns...</p>
              </div>
              <div className="shadow-md p-4 rounded-md border-l-4 border-blue-600 relative">
                <span className="absolute right-4 top-4 text-blue-600 text-2xl font-bold">✔</span>
                <h3 className="text-blue-900 font-semibold">Measure & Refine</h3>
                <p>We track performance rigorously to maximize ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-left">Our Digital Marketing Services</h2>
          <p className='font-medium text-black text-left mb-12'>We offer a full suite of services designed to build a powerful and cohesive brand presence.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Marketing Automation & Lead Nurturing',
                desc: 'Bridge the gap between marketing and sales...',
                icon: '/images/marketing-automation.png',
              },
              {
                title: 'Content Marketing & Strategy',
                desc: 'Become a trusted voice in your industry...',
                icon: '/images/content-marketing.png',
              },
              {
                title: 'Paid Advertising (PPC & Social Ads)',
                desc: 'Generate immediate, targeted traffic...',
                icon: '/images/paid-ads.png',
              },
              {
                title: 'Search Engine Optimization (SEO)',
                desc: 'Achieve long-term, sustainable growth...',
                icon: '/images/seo-icon.png',
              },
            ].map(({ title, desc, icon }, i) => (
              <div key={i} className="bg-white p-6 rounded shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4">{desc}</p>
                </div>
                <div className="flex justify-between items-end">
                  <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded">Read More →</button>
                  <Image src={icon} alt={title} width={60} height={60} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-10 text-center">See Our Strategies in Action</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'FINANCE',
              desc: 'Fintech Solutions for Growth and Insight',
              img: '/images/finance-case.png',
            },
            {
              title: 'RETAIL AND CONSUMER GOODS',
              desc: 'Driving Consumer Loyalty',
              img: '/images/retail-case.png',
            },
            {
              title: 'HEALTHCARE',
              desc: 'Improving Lives, One Innovation at a Time',
              img: '/images/healthcare-case.png',
            },
          ].map(({ title, desc, img }, i) => (
            <div key={i}>
              <Image src={img} alt={title} width={400} height={250} className="rounded shadow-md" />
              <h4 className="text-md font-bold mt-2">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
              <button className="text-blue-600 text-sm mt-2">Explore Case Study →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Statement */}
      <section className="bg-black text-white py-12 px-4 text-center">
        <p className="max-w-3xl mx-auto">
          <strong>Your Partner in Building a Powerful Brand</strong><br />
          Consistent messaging is key to a strong brand. From a social media post to an automated email sequence, every action aligns with your identity.
        </p>
      </section>

      {/* Trusted Tools */}
      <section className="bg-white py-12 px-4">
        <h3 className="text-center text-lg font-bold text-blue-900 mb-6">Powered by Industry-Leading Technology</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {['zapier', 'hootsuite', 'google-analytics', 'hotjar'].map((tool, i) => (
            <Image key={i} src={`/images/${tool}.png`} alt={tool} width={80} height={40} />
          ))}
        </div>
      </section>

      {/* Headlines Section */}
      <HeadlinesSection />


      {/* CTA */}
      <BannerCTA
        title="Ready to Amplify Your Brand’s Voice?"
        description="Let’s create a marketing strategy that delivers real, measurable results and drives your business forward."
        buttonText="Talk to a Marketing Expert"
      />
    </main>
      
      <Footer />
    </>
  );
} 