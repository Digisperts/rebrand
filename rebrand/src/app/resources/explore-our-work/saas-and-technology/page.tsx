"use client";
import React from 'react';
import NavBar from '../../../nav';
import Footer from '../../../Footer';
import Image from 'next/image';
import Link from "next/link";
import ScrollFadeSection from '../../../components/ScrollFadeSection';
import { FaCheckCircle, FaCheck } from "react-icons/fa";

export default function SaasAndTechnologyExploreOurWork() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>

      {/* Hero Section with Custom Shape */}
      <section className="relative text-white overflow-hidden">
        {/* Hero Image */}
        <div className="relative w-full h-[450px] md:h-[520px] lg:h-[680px]">
          <Image
            src="/images/explore-our-work/saas-and-technology/saas-hero.png"
            alt="Hero banner"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
          {/* Overlayed Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-left bg-black/60">
            <h1 className="text-2xl md:text-4xl lg:text-5xl ml-20 font-bold mb-4">
              Building a Better Digital Future, Together.
            </h1>
            <p className="text-base text-left md:text-lg ml-20 max-w-2xl">
              We harness the power of technology to streamline workflows, automate tasks, and unlock new possibilities for businesses and individuals.
            </p>
          </div>
          {/* Curved SVG at the bottom */}
          <svg
            className="absolute bottom-0 left-0 w-full block"
            viewBox="0 0 1440 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ height: '86px', display: 'block', marginBottom: '-2px' }}
          >
            <path
              d="M0,100
            Q260,0 720,60
            T1440,100
            L1440,124
            L0,124
            Z"
              fill="#fff"
            />
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white z-30" style={{height: '1px'}} />
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent"
        >
          The Challenge
        </h2>
        <p className="mb-10 font-semibold text-gray-900">
          A majority of support tickets were for common, easily solvable issues like password resets, 
          billing questions, and basic feature usage.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'High Ticket Volume',
              text: (
                <>
                  A majority of support tickets were for<br />
                  common, easily solvable issues like<br />
                  password resets, billing questions, and<br />
                  basic feature usage.
                </>
              ),
            },
            {
              title: 'Slow First-Response Time',
              text: (
                <>
                  Customers with simple questions<br />
                  were forced to wait in long<br />
                  queues, leading to frustration and<br />
                  potential churn.
                </>
              ),
            },
            {
              title: 'Inefficient Agent Utilization',
              text: (
                <>
                  Highly skilled support agents were<br />
                  spending most of their time answering<br />
                  repetitive questions instead of tackling<br />
                  complex customer problems.
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border shadow-md p-8 bg-white rounded transition-all"
              style={{ minHeight: 300 }}
            >
              <Image 
                src="/images/explore-our-work/saas-and-technology/pin.png"
                width={40}
                height={40}
                alt="Pin"
                className="mb-4"
              />
              <h3 className="font-bold text-xl text-[#003399] text-center mb-3">{item.title}</h3>
              <p className="text-base text-gray-700 text-center leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl ml-8 font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent"
          >
            Our Process
          </h2>
          {/* Responsive version: mobile = stacked, desktop = row with arrows */}
          <div className="block md:hidden">
            {/* Step 1 */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl">Support Ticket Analysis</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">
                  We analyzed thousands of past support tickets to identify the most common questions and resolution paths.
                </p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[90px]">
                <svg width="180" height="90" viewBox="0 0 180 90">
                  <polygon points="0,0 140,0 180,45 140,90 0,90 40,45" fill="#AFC6F7" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#001133] w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl">AI Model Training & Integration</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">
                  We selected the appropriate AI framework and trained the model on the client&apos;s specific data, then integrated it with their existing helpdesk software.
                </p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[90px]">
                <svg width="180" height="90" viewBox="0 0 180 90">
                  <polygon points="0,0 140,0 180,45 140,90 0,90 40,45" fill="#F7C6C6" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#3B0A0A] w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl">Conversation Design</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">
                  We designed natural, helpful, and on-brand conversation flows for the chatbot.
                </p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[90px]">
                <svg width="180" height="90" viewBox="0 0 180 90">
                  <polygon points="0,0 140,0 180,45 140,90 0,90 40,45" fill="#FFE7B2" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#7A5A00] w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl">Beta Testing & Continuous Learning</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">
                  We launched the chatbot to a segment of users and used the feedback to continuously improve its accuracy and helpfulness.
                </p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[90px]">
                <svg width="180" height="90" viewBox="0 0 180 90">
                  <polygon points="0,0 140,0 180,45 140,90 0,90 40,45" fill="#AFC6F7" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#001133] w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop version: arrows and horizontal row */}
          <div className="hidden md:block">
            <div className="relative mt-60 mb-50 w-full">
              {/* Top Row: Text and Arrows for Steps 1 & 3 */}
              <div className="absolute w-full left-0" style={{top: '-197px'}}>
                <div className="flex flex-row justify-between w-full">
                  {/* Step 1 Text+Arrow */}
                  <div className="flex flex-col items-center w-1/4">
                    <div className="mb-2 text-left ml-10 w-[200px]">
                      <h3 className="font-bold text-gray-800 text-xl">Support Ticket Analysis</h3>
                      <p className="text-gray-900 text-sm">
                        We analyzed thousands of past support tickets to identify the most common questions and resolution paths.
                      </p>
                    </div>
                    <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" /><defs><marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#222" /></marker></defs></svg>
                  </div>
                  {/* Step 2: Empty */}
                  <div className="w-1/4" />
                  {/* Step 3 Text+Arrow */}
                  <div className="flex flex-col items-center w-1/4">
                    <div className="mb-2 text-left ml-10 w-[200px]">
                      <h3 className="font-bold text-gray-800 text-xl">Conversation Design</h3>
                      <p className="text-gray-900 text-sm">
                        We designed natural, helpful, and on-brand conversation flows for the chatbot.
                      </p> <br /> <br />
                    </div>
                    <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#7A5A00" strokeWidth="2" markerEnd="url(#arrowhead3)" /><defs><marker id="arrowhead3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#7A5A00" /></marker></defs></svg>
                  </div>
                  {/* Step 4: Empty */}
                  <div className="w-1/4" />
                </div>
              </div>
              {/* Chevron Row */}
              <div className="flex flex-row justify-between items-center w-full relative z-10">
                {/* Step 1 */}
                <div className="relative w-1/4 flex justify-center">
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill="#AFC6F7" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#001133] w-14 h-14 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative w-1/4 flex justify-center -ml-16">
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill="#F7C6C6" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#3B0A0A] w-14 h-14 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative w-1/4 flex justify-center -ml-16">
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill="#FFE7B2" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#7A5A00] w-14 h-14 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="relative w-1/4 flex justify-center -ml-16">
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill="#AFC6F7" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#001133] w-14 h-14 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Row: Text and Arrows for Steps 2 & 4 */}
              <div className="absolute w-full left-0" style={{top: '200px'}}>
                <div className="flex flex-row justify-between w-full">
                  {/* Step 1: Empty */}
                  <div className="w-1/4" />
                  {/* Step 2 Text+Arrow */}
                  <div className="flex flex-col items-center w-1/4">
                    <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead2)" /><defs><marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#222" /></marker></defs></svg>
                    <div className="mb-2 text-left w-[260px]">
                      <h3 className="font-bold text-gray-800 text-xl">AI Model Training & Integration</h3>
                      <p className="text-gray-900 text-sm">
                        We selected the appropriate AI framework and trained the model on the client&apos;s specific data, then integrated it with their existing helpdesk software.
                      </p>
                    </div>
                  </div>
                  {/* Step 3: Empty */}
                  <div className="w-1/4" />
                  {/* Step 4 Text+Arrow */}
                  <div className="flex flex-col items-center w-1/4">
                    <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#001133" strokeWidth="2" markerEnd="url(#arrowhead4)" /><defs><marker id="arrowhead4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#001133" /></marker></defs></svg>
                    <div className="mb-2 mr-15 text-left w-[260px]">
                      <h3 className="font-bold text-gray-800 text-xl">Beta Testing & Continuous Learning</h3>
                      <p className="text-gray-900 text-sm">
                        We launched the chatbot to a segment of users and used the feedback to continuously improve its accuracy and helpfulness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Digisperts Solution Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <Image
          src="/images/explore-our-work/saas-and-technology/hero2.jpg"
          alt="Hexagon background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative px-4 md:px-12 mx-auto z-10">
          <h2 className="text-3xl font-bold mb-2 text-white">The Digisperts Solution</h2>
          <p className="mb-10 text-lg text-white max-w-2xl">Digisperts designed and deployed a custom AI-powered chatbot integrated directly into the company’s website and application.</p>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Card */}
            <div className="bg-white text-black rounded shadow-md p-8 flex-1 flex flex-col justify-center min-w-[340px] max-w-[420px]">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-900 text-2xl mr-3" />
                <h4 className="font-bold text-lg text-[#003399] m-0">Automated Issue Resolution</h4>
              </div>
              <p className="text-base text-gray-800">
                The bot autonomously handles the top 80% of repetitive queries, guiding users through solutions step-by-step.
              </p>
            </div>
            {/* Right Column: 2 stacked cards */}
            <div className="flex flex-col gap-6 flex-1 min-w-[340px]">
              <div className="bg-white text-black rounded shadow-md p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <FaCheckCircle className="text-blue-900 text-2xl mr-3" />
                  <h4 className="font-bold text-lg text-[#003399] m-0">Natural Language Understanding (NLU)</h4>
                </div>
                <p className="text-base text-gray-800">
                  The chatbot was trained on the company’s knowledge base and past support tickets to understand and accurately answer user questions in a conversational way.
                </p>
              </div>
              <div className="bg-white text-black rounded shadow-md p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <FaCheckCircle className="text-blue-900 text-2xl mr-3" />
                  <h4 className="font-bold text-lg text-[#003399] m-0">Intelligent Human Handoff</h4>
                </div>
                <p className="text-base text-gray-800">
                  For complex issues, the chatbot seamlessly escalates the conversation to a live agent, providing the agent with the full context and chat history.
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
            className=" object-cover z-0"
          />
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent"
        >
          The Outcome
        </h2>
        <p className="text-lg text-gray-800 mb-10 max-w-3xl">The AI chatbot transformed the company&apos;s support model, dramatically improving both efficiency and customer satisfaction.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-[#D3E1FF] rounded-lg p-8 flex flex-col items-start min-h-[200px]">
            <Image
              src="/images/explore-our-work/saas-and-technology/outcome1.png"
              alt="Ticket reduction"
              width={40}
              height={40}
              className="mb-4"
            />
            <div className="text-left w-full">
              <div className="font-bold text-2xl text-gray-900 mb-1">70% Reduction</div>
              <div className="text-base text-gray-800 font-medium mb-1">In incoming support tickets for repetitive issues.</div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-[#FFD0D0] rounded-lg p-8 flex flex-col items-start min-h-[200px]">
            <Image
              src="/images/explore-our-work/saas-and-technology/outcome2.png"
              alt="Improvement"
              width={40}
              height={40}
              className="mb-4"
            />
            <div className="text-left w-full">
              <div className="font-bold text-2xl text-gray-900 mb-1">90% Improvement</div>
              <div className="text-base text-gray-800 font-medium mb-1">In first-response time, providing instant answers to most customer queries.</div>
            </div>
              </div>
          {/* Box 3 */}
          <div className="bg-[#FFEBC4] rounded-lg p-8 flex flex-col items-start min-h-[200px]">
            <Image
              src="/images/explore-our-work/saas-and-technology/outcome3.png"
              alt="Increase"
              width={40}
              height={40}
              className="mb-4"
            />
            <div className="text-left w-full">
              <div className="font-bold text-2xl text-gray-900 mb-1">45% Increase</div>
              <div className="text-base text-gray-800 font-medium mb-1">In agent capacity, allowing the team to focus on proactive support and complex cases.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent"
        >
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          {/* Botpress */}
          <div className="flex flex-col items-center w-40">
            <Image
              src="/images/explore-our-work/saas-and-technology/botpress.png"
              alt="Botpress"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-xl font-medium text-black mt-2">Botpress</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center w-40">
            <Image
              src="/images/explore-our-work/saas-and-technology/nodejs.png"
              alt="Node.js"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-xl font-medium text-black mt-2">Node.js</span>
          </div>
          {/* Python (SVG) */}
          <div className="flex flex-col items-center w-40">
          <Image
              src="/images/explore-our-work/saas-and-technology/python.png"
              alt="Zendesk"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-xl font-medium text-black mt-2">Python</span>
          </div>
          {/* Zendesk */}
          <div className="flex flex-col items-center w-40">
            <Image
              src="/images/explore-our-work/saas-and-technology/zendesk.png"
              alt="Zendesk"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-xl font-medium text-black mt-2">Zendesk</span>
          </div>
          {/* Webhook Integrations */}
          <div className="flex flex-col items-center w-40">
            <Image
              src="/images/explore-our-work/saas-and-technology/webhook.png"
              alt="Webhook Integrations"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-xl font-medium text-black mt-2 text-center">Webhook<br/>Integrations</span>
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
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">Ready to Automate Your Customer Support?</div>
                  <div className="text-sm md:text-base font-normal mb-5">Stop answering the same questions over and over. Let&apos;s build an AI chatbot that works for you 24/7.</div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href="#"
                      className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                      style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
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