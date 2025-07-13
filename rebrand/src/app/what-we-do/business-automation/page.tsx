'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import NavBar from '../../nav';
import Footer from '../../Footer';



export default function BusinessAutomation() {
  return (
    <>
      <NavBar />

      <main className="bg-white text-blue-900">
      {/* Section 1: Banner */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/images/business-automation-banner.png"
          alt="Business Automation Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Automate the Routine. Amplify Your Impact.
          </h1>
          <p className="max-w-2xl text-base md:text-lg">
            We design intelligent automation systems that eliminate repetitive tasks,
            streamline complex workflows, and empower your team to focus on strategic growth.
          </p>
          <button className="mt-6 bg-white text-blue-800 font-medium px-6 py-2 rounded">
            + Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Optimize What Slows You Down.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/robot-left.png"
              alt="Automation Robot"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our Strategic Approach to Business Automation
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">Analyze & Identify</h4>
                <p className="text-gray-600">
                  We begin by thoroughly analyzing your existing workflows to identify improvement areas and automation opportunities.
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">Design & Implement</h4>
                <p className="text-gray-600">
                  We design innovative, cutting-edge technology to automate your business functions and ensure measurable efficiency gains.
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">Empower & Optimize</h4>
                <p className="text-gray-600">
                  We empower your team with the right tools and training, then monitor performance to optimize for peak efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Business Automation Services */}
      <section id="services" className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
      Our Business Automation Services
    </h2>
    <p className="text-center text-gray-600 mb-12">
      We create tailored solutions to address your most pressing operational challenges.
    </p>

    {/* First Row */}
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      {/* Left - AI-Powered Automation & Support + Image */}
      <div className="md:w-7/12 flex flex-col md:flex-row bg-white p-6 shadow-lg rounded-md">
        {/* Text Content */}
        <div className="md:w-7/12">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">AI-Powered Automation & Support</h3>
          <p className="text-gray-600">
            We build and train custom AI models to power intelligent systems. This includes AI-enhanced chatbots that learn your business to provide instant, human-like customer support...
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Read More →</button>
        </div>
        {/* Robot Image */}
        <div className="md:w-5/12 flex items-center justify-center mt-6 md:mt-0">
          <Image
            src="/images/robot-right.png"
            alt="AI Robot"
            width={200}
            height={200}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Right - Financial & Accounting Automation */}
      <div className="md:w-5/12 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">
            Financial & Accounting Automation
          </h3>
          <p className="text-gray-600">
            Enhance financial accuracy and gain control over finances...
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Read More →</button>
        </div>
        <Image
          src="/images/accounting-icon.png"
          alt="Finance Icon"
          width={150}
          height={150}
          className="self-end mt-4"
        />
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left - Workflow & Data Automation */}
      <div className="md:w-5/12 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Workflow & Data Automation</h3>
          <p className="text-gray-600">
            Connect disparate systems and automate the flow of data across your organization. Our solutions eliminate manual processes, reduce errors, and minimize delays — all while offering a unified view of your operations.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-max">Read More →</button>
        </div>
        <Image
          src="/images/data-workflow.png"
          alt="Workflow"
          width={112}
          height={112}
          className="self-end mt-4"
        />
      </div>

      {/* Right - CRM Automation */}
      <div className="md:w-7/12 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">
            Customer Relationship Management (CRM) Automation
          </h3>
          <p className="text-gray-600">
            Build stronger, more lasting customer relationships by automating interactions, communication, and tracking. From personalized messaging to streamlined reporting, our CRM automation improves retention and satisfaction.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-max">Read More →</button>
        </div>
        <Image
          src="/images/crm-support.png"
          alt="CRM Robot"
          width={144}
          height={144}
          className="self-end mt-4"
        />
      </div>
    </div>
  </div>
</section>


      {/* Section 4: Case Studies */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
          See Our Solutions in Action
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Don’t just take our word for it. Explore case studies to see how we’ve helped businesses like yours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Case Study Cards */}
          {[
            { title: "FINANCE", desc: "Fintech Solutions for Growth and Insight" },
            { title: "RETAIL", desc: "Empowering Retail Excellence, Driving Loyalty" },
            { title: "HEALTHCARE", desc: "Improving Lives, One Innovation at a Time" },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white shadow rounded-md p-4">
              <Image
                src={`/images/case-${title.toLowerCase()}.jpg`}
                alt={title}
                width={300}
                height={200}
                className="rounded-md mb-4 w-full object-cover"
              />
              <h4 className="font-bold text-blue-900">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
              <button className="mt-2 text-blue-600 text-sm">Explore Case Study →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Proof + Tech Logos + Headlines */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="text-center bg-black text-white py-10 rounded-md mb-10">
          <h3 className="text-xl md:text-2xl font-bold">
            The Proof is in the Productivity
          </h3>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Proven track record of helping our clients achieve results, including increased productivity,
            better retention, and reduced cost overhead.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-4 text-blue-900">Powered by Industry-Leading Technology</h2>
        <div className="flex flex-wrap items-center gap-8">
          {["microsoft", "zapier", "uipath", "salesforce"].map((tech) => (
            <Image
              key={tech}
              src={`/images/${tech}.png`}
              alt={tech}
              width={80}
              height={40}
              className="object-contain"
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mt-12 mb-4 text-blue-900">Making the Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Social Cranes", "Smaat Finance", "Social Cranes"].map((headline, idx) => (
            <div key={idx} className="bg-white shadow p-4 rounded">
              <h4 className="font-semibold">{headline}</h4>
              <p className="text-gray-600 text-sm mt-2">
                As a leading company, we partnered to deliver solutions that transformed their presence...
              </p>
              <button className="text-blue-600 text-sm mt-2">Know More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="relative w-full h-[250px] mt-10">
        <Image
          src="/images/final-cta-bg.png"
          alt="Final CTA Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white px-4 text-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Ready to Build Your Future?</h2>
            <p className="text-sm md:text-base">
              Let’s discuss how a custom software solution can help you overcome inefficiencies and drive your business forward.
            </p>
            <button className="mt-4 bg-white text-blue-800 px-4 py-2 rounded font-medium text-sm">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
} 