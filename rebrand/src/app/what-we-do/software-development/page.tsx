'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import NavBar from '../../nav';
import Footer from '../../Footer';
import HeadlinesSection from '../../components/what-we-do-HeadlinesSection';
import BannerCTA from '../../components/what-we-do-BannerCTA';
import { FaPhoneAlt } from 'react-icons/fa';


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
      <section id="overview" className="relative w-full min-h-[520px] flex items-left justify-left text-white text-left px-6 pt-50">
        <Image
          src="/images/SD-Banner.png" 
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Custom Software that Powers Your Growth.</h1>
          <p className="mb-6">We build high-quality, scalable applications that solve your unique challenges,<br/> overcome scalability hurdles, and give you a distinct competitive edge.</p>
          <button className="flex items-center gap-2 border border-white text-white font-semibold px-5 py-2 rounded"><FaPhoneAlt className="text-white" /> SCHEDULE A CONSULTATION</button>
        </div>
      </section>

      {/* Section 2: Built for You */}
      <section className="py-16 px-6  text-left" id="approach">
        <h2
  className="text-3xl font-bold mb-4"
  style={{
    background: 'conic-gradient(from 89.57deg at 0% 50.75%, #003399 0deg, #001133 360deg)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Built for You. Built to Win.
</h2>

        <p className="text-gray-600 text-left max-w-3xl mx-auto mb-12">
          In today’s market, generic software leads to generic results. To truly exceed your goals, you need technology solutions built specifically for you. At Digisperts, we move beyond the limitations of outdated technology stacks to deliver robust, custom software. As your unwavering partner, we dive deep into your vision to build applications that not only solve today's problems but also create tomorrow's opportunities.

        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/SD-a.png" alt="Laptop" width={500} height={400} className="mx-auto" />
          <div className="space-y-6 text-left">
            <h2
  className="text-lg font-bold mb-0"
  style={{
    background: 'conic-gradient(from 89.57deg at 0% 50.75%, #003399 0deg, #001133 360deg)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>Our Strategic Approach to Software Development
</h2>

        <p className="text-black text-left max-w-3xl mx-auto mb-1 font-19px">
          Our process is built on a foundation of partnership and a commitment to <br/> quality excellence.

        </p>
            <div className="bg-gray-100 p-6 shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-900">Collaborative Discovery</h3>
              <p>We begin by listening. Our client-centric approach means we work closely with you to understand your goals, workflows, and challenges, ensuring the final product is a perfect fit.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-900">Innovative and Agile Build</h3>
              <p>We leverage cutting-edge technologies and an agile development process. This allows us to remain adaptable , incorporate feedback, and deliver innovative solutions efficiently.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-900">Security and Scalability</h3>
              <p>We bake in enterprise-grade security and build for scalability from day one, empowering your business with a secure and future-proof technological foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services  */}
<section id="services" className="py-20 bg-white-50 px-6 md:px-20">
  <h2 className="text-2xl font-bold font-poppins text-blue-900 text-left">Our Software Development Services</h2>
  <p className="text-left text-gray-600 mb-12">We provide end-to-end development to bring your vision to life.</p>

  {/* First Row */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16 bg-gray-50">
    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-3">Custom Web Applications</h3>
      <p className="text-gray-500 mb-4">
        We build powerful, secure web apps with robust back-ends and intuitive, visually appealing user interfaces. From enterprise dashboards to customer portals, our solutions are designed to streamline your operations.
      </p>
      <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded">Read More →</button>
    </div>
    <Image
      src="/images/SD-b.png" 
      alt="Custom Web Applications"
      width={500}
      height={400}
      // className="rounded shadow-md"
    />
  </div>

  {/* Second Row */}
  <div className="grid md:grid-cols-2 gap-10 ">
    {/* Mobile App Development */}
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 shadow-lg rounded-md bg-gray-50">
      
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Mobile App Development</h3>
        <p className="text-gray-600">We help you successfully design, build, and launch mobile apps for iOS and Android. We balance performance with possibility, creating scalable solutions that grow with you and delight your users.</p>
        <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded">Read More →</button>
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
        <p className="text-gray-600">We develop specialized software tailored for unique business environments, including custom integrations and OEM software. Our focus is on creating reliable, high-performance tools that enhance your core business functions.</p>
        <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded">Read More →</button>
      </div>
    </div>
  </div>
</section>


      {/* Section 4: Case Studies */}
      <section id="success" className="py-20 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-left">How We’ve Engineered Success</h2>
        <p className="text-left font-poppins text-gray-600 mb-10">Don't just take our word for it. Explore our case studies to see how we've helped businesses like yours transform their operations and achieve measurable success.</p>

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
                      <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded">Explore Case Study →</button>
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
      <BannerCTA
  title="Ready to Build Your Future?"
  description="Let's discuss how a custom software solution can help you overcome inefficiencies and drive your business forward."
  buttonText="Talk to an Expert"
  buttonLink="#contact"
  backgroundImage="/images/footer.jpg"
/>
    </main>
      <Footer />
  </>
  
  );
} 