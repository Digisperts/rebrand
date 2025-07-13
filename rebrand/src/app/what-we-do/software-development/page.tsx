'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import NavBar from '../../nav';
import Footer from '../../Footer';
import HeadlinesSection from '../../components/what-we-do-HeadlinesSection';


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

  return (
    <>
      <NavBar />
      
      <main className="bg-white text-gray-900">
      {/* Section 1: Hero */}
      <section id="overview" className="relative h-[700px] flex items-center justify-center text-white text-center px-6">
        <Image
          src="/images/SD-Banner.png" 
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Custom Software that Powers Your Growth.</h1>
          <p className="mb-6">We build high-quality, scalable applications that solve your unique challenges, overcome scalability hurdles, and give you a distinct competitive edge.</p>
          <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded">+ Schedule a Consultation</button>
        </div>
      </section>

      {/* Section 2: Built for You */}
      <section className="py-16 px-6 md:px-20 text-center" id="approach">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">Built for You. Built to Win.</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          In today’s market, generic software leads to generic results...
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/SD-a.png" alt="Laptop" width={500} height={400} className="mx-auto" />
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-lg font-semibold text-blue-900">Collaborative Discovery</h3>
              <p>We believe in collaboration...</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-lg font-semibold text-blue-900">Innovative and Agile Build</h3>
              <p>We embrace agile principles...</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-lg font-semibold text-blue-900">Security and Scalability</h3>
              <p>We build for resiliency from day one...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services  */}
<section id="services" className="py-20 bg-white-50 px-6 md:px-20">
  <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Our Software Development Services</h2>
  <p className="text-center text-gray-600 mb-12">We provide end-to-end development...</p>

  {/* First Row */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16 bg-gray-50">
    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-3">Custom Web Applications</h3>
      <p className="text-gray-500 mb-4">
        We build powerful, secure web apps tailored to your business needs. From intuitive dashboards to complex admin portals, we make it happen.
      </p>
      <button className="text-blue-600">Read More →</button>
    </div>
    <Image
      src="/images/SD-b.png" 
      alt="Custom Web Applications"
      width={500}
      height={400}
      className="rounded shadow-md"
    />
  </div>

  {/* Second Row - Two Columns */}
  <div className="grid md:grid-cols-2 gap-10 ">
    {/* Mobile App Development */}
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 shadow-lg rounded-md bg-gray-50">
      
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Mobile App Development</h3>
        <p className="text-gray-600">We help you successfully build and launch mobile applications with scalable architecture and clean UI.</p>
        <button className="text-blue-600 mt-4">Read More →</button>
      </div>
      <Image
        src="/images/SD-c.png"
        alt="Mobile App Development"
        width={120}
        height={120}
        className="rounded-md"
      />
    </div>

    {/* Enterprise Solutions */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 shadow-lg rounded-md bg-gray-50">
      <Image
        src="/images/SD-d.png" 
        alt="Enterprise & OEM Solutions"
        width={120}
        height={120}
        className="rounded-md"
      />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900 ">Enterprise & OEM Solutions</h3>
        <p className="text-gray-600">We develop sophisticated enterprise-level software and operational tools to streamline performance.</p>
        <button className="text-blue-600 mt-4">Read More →</button>
      </div>
    </div>
  </div>
</section>


      {/* Section 4: Case Studies */}
      <section id="success" className="py-20 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">How We’ve Engineered Success</h2>
        <p className="text-center text-gray-600 mb-10">Explore our case studies to see how we’ve helped businesses...</p>

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
                      <h4 className="text-md font-bold mt-2">{title}</h4>
                      <p className="text-sm text-gray-600">{desc}</p>
                      <button className="text-blue-600 text-sm mt-2">Explore Case Study →</button>
                    </div>
                  ))}
                </div>
      </section>

      {/* Section 5: Technology */}
      <section id="technologies" className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-xl font-bold mb-6">Exploring Emerging Technologies (AI & Blockchain)</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Our expert engineers can build AI-powered features...
        </p>
      </section>

      {/* Section 6: Logos */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-6">Powered by Industry-Leading Technology</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {['react', 'nodejs', 'django', 'aws'].map((tech, idx) => (
            <Image key={idx} src={`/images/${tech}.svg`} alt={tech} width={80} height={80} />
          ))}
        </div>
      </section>

      {/* Section 7: Headlines */}
      <HeadlinesSection />
      {/* Section 8: Call to Action */}
      <section id="cta" className="relative h-[300px] text-white flex items-center justify-center  px-6">
        <Image
          src="/images/reuseable-bottom-banner.png" 
          alt="CTA Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
        <div className="relative z-20 text-center max-w-xl">
          <h2 className="text-2xl font-bold mb-2">Ready to Build Your Future?</h2>
          <p className="text-gray-300 mb-4">Let’s discuss how a custom software solution can help you overcome inefficiencies and drive your business forward.</p>
          <button className="bg-blue-600 px-6 py-2 rounded text-white font-semibold">Talk to an Expert</button>
        </div>
      </section>
    </main>
      <Footer />
  </>
  
  );
} 