"use client";
import Image from "next/image";
import NavBar from "./nav";
import { useState } from "react";
import ScrollFadeSection from "./components/ScrollFadeSection";
import CountUpOnView from "./components/CountUpOnView";
import HeroFadeIn from "./components/HeroFadeIn";
import Footer from "./Footer";

export default function Home() {
  const [activeCard, setActiveCard] = useState("software");

  const cardDetails = {
    software: {
      title: "Software Development",
      svg: "/images/software.svg",
      description:
        "Gain Competitive advantages by standing out with an industry Standard website app/website, highly responsive mobile apps and specially crafted software solutions for your brand.",
    },
    automation: {
      title: "Business Automations",
      svg: "/images/automation.svg",
      description:
        "Streamline your business processes with cutting-edge automation solutions tailored to your needs, increasing efficiency and reducing manual effort.",
    },
    project: {
      title: "Project Management",
      svg: "/images/project.svg",
      description:
        "Ensure your projects are delivered on time and within budget with our expert project management services, leveraging best practices and modern tools.",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pt-16">
      {/* Header/NavBar */}
      <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
      </div>


      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/background.jpg"
          alt="Hero Background"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-start justify-start z-10">
          <div className="bg-[#f3f4f6]/10 bg-opacity-10 w-[95%] ml-[2.5%] mt-[9%] custom-py-8 px-8 text-left">
          <HeroFadeIn>
            <h1 className="text-2xl sm:text-4xl text-white font-light mb-4">
              Democratizing Projects with you all the way
            </h1>
          
            <p className="text-white mb-6 text-base sm:text-lg">
              Your Project Success comes with zero doubt. It is guaranteed
            </p>
            <a href="#" className="border border-gray-400 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-blue-900 hover:text-white inline-block">
              EXPLORE
            </a>
            </HeroFadeIn>
          </div>
        </div>
      </section>


      <ScrollFadeSection>
      {/* Professionals Section */}
      <section className="py-10 sm:py-16 text-center bg-gray-100 flex-1">
        <h2 className="text-xl sm:text-2xl text-blue-900 mb-8">We are Professionals in…</h2>
        <ScrollFadeSection>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-8">
          <div className="text-black">
            <div
              className={`bg-white rounded-xl shadow-md w-full max-w-xs md:w-64 py-6 px-4 flex flex-col items-center transition-transform duration-300 hover:scale-95 cursor-pointer ${activeCard === "software" ? "ring-2 ring-gray-100" : ""}`}
              onClick={() => setActiveCard("software")}
            >
              <Image
                src="/images/software.png"
                alt="Software Development Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <div className="text-lg font-medium">Software Development</div>
            </div>
          </div>
          <div className="text-black">
            <div
              className={`bg-white rounded-xl w-full max-w-xs md:w-64 py-6 px-4 flex flex-col items-center transition ease-out duration-300 hover:shadow-md cursor-pointer ${activeCard === "automation" ? "ring-2 ring-gray-100" : ""}`}
              onClick={() => setActiveCard("automation")}
            >
              <Image
                src="/images/automation.png"
                alt="Business Automations Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <div className="text-lg font-medium">Business Automations</div>
            </div>
          </div>
          <div className="text-black">
            <div
              className={`bg-white rounded-xl w-full max-w-xs md:w-64 py-6 px-4 flex flex-col items-center transition ease-out duration-300 hover:shadow-md cursor-pointer ${activeCard === "project" ? "ring-2 ring-gray-100" : ""}`}
              onClick={() => setActiveCard("project")}
            >
              <Image
                src="/images/project.png"
                alt="Project Management Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <div className="text-lg font-medium">Project Management</div>
            </div>
          </div>
        </div>
        </ScrollFadeSection>
        <ScrollFadeSection>
        <div className="min-h-[140px] flex justify-start md:justify-center">
          {activeCard === "software" && (
            <div className="w-full max-w-[64rem] md:max-w-[40rem] sm:max-w-full text-left px-4 text-gray-500 transition-opacity duration-300 opacity-100 ml-0 md:mx-auto">
          <h3 className="font-semibold mb-2 flex items-center">
                <img src="/images/software.svg" alt="Software Development Icon" width={32} height={32} className="opacity-50 rounded-full mr-2" style={{ display: 'inline-block' }} />
            Software Development
          </h3>
          <p className="mb-4 text-sm sm:text-base">
                {cardDetails.software.description}
              </p>
              <a href="#" className="border border-gray-400 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-blue-900 hover:text-white inline-block">KNOW MORE</a>
            </div>
          )}
          {activeCard === "automation" && (
            <div className="w-full max-w-[64rem] md:max-w-[40rem] sm:max-w-full text-left px-4 text-gray-500 transition-opacity duration-300 opacity-100 ml-0 md:mx-auto">
              <h3 className="font-semibold mb-2 flex items-center">
                <img src="/images/automation.svg" alt="Business Automations Icon" width={32} height={32} className="opacity-50 rounded-full mr-2" style={{ display: 'inline-block' }} />
                Business Automations
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                {cardDetails.automation.description}
              </p>
              <a href="#" className="border border-gray-400 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-blue-900 hover:text-white inline-block">KNOW MORE</a>
            </div>
          )}
          {activeCard === "project" && (
            <div className="w-full max-w-[64rem] md:max-w-[40rem] sm:max-w-full text-left px-4 text-gray-500 transition-opacity duration-300 opacity-100 ml-0 md:mx-auto">
              <h3 className="font-semibold mb-2 flex items-center">
                <img src="/images/project.svg" alt="Project Management Icon" width={32} height={32} className="opacity-50 rounded-full mr-2" style={{ display: 'inline-block' }} />
                Project Management
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                {cardDetails.project.description}
              </p>
              <a href="#" className="border border-gray-400 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-blue-900 hover:text-white inline-block">KNOW MORE</a>
            </div>
          )}
        </div>
        </ScrollFadeSection>
      </section>
      </ScrollFadeSection>

      <ScrollFadeSection>
      {/* Features Section */}
      <section className="w-full py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl text-blue-900 font-light text-center mb-10">
          With Digisperts, you get
        </h2>
        <ScrollFadeSection>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          {/* Left: Features */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-1 text-gray-600">Flexibility</h3>
              <p className="text-gray-800 text-sm">
                With our Agile approach to project processes, we work effectively with the goals of giving you a Time bound, High quality and cost effective deliverables
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-1 text-gray-600">Transparency</h3>
              <p className="text-gray-700 text-sm">
                We believe leaving you in the dark about your projects is very bad, because we care about you, you are always up to date with our progress and feel every bit of our growth.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-1 text-gray-600">Security</h3>
              <p className="text-gray-700 text-sm">
                We ensure compliance with international IT standards like ISO 27000 Series and GDPR. Your passwords are safe, your project data are kept confidential
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 text-gray-600">Professionalism</h3>
              <p className="text-gray-700 text-sm">
                Our intuitive project approach, our clear work process and the professional team of experts are where we draw our super powers.
              </p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/images/Lovepik.png"
              alt="Feature Illustration"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </div>
        </div>
        </ScrollFadeSection>
        <ScrollFadeSection>
        <div className="text-center mt-12">
          <h3 className="text-xl text-blue-900 font-light">We Feature</h3>
        </div>
        </ScrollFadeSection>
      </section>
      </ScrollFadeSection>

      
      {/* Second Feature Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background image: Place your background at public/images/thinker.png */}
        <Image
          src="/images/thinker.png"
          alt="Agriculture"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
        <ScrollFadeSection>
          <div className="bg-[#f3f4f6]/40 bg-opacity-10 w-[95%] ml-[2.5%] custom-py-8 px-8 text-left">
            <p className="text-[#046C4E]/80 mb-6 text-base sm:text-lg">
              AGRICULTURE
            </p>
            <h1 className="text-2xl sm:text-4xl text-[#046C4E]/80 font-light mb-4">
              Your voice gets heard, the Green world thrives.
            </h1>
            <p className="text-white font-bold mb-6 text-base sm:text-lg">
              Digisperts revolutionizes agriculture through technology. From precision
              farming to sustainable practices, we cultivate a future where technology
              meets the soil.
            </p>
            <a href="#" className="font-bold border border-2 border-green-600 px-4 py-2 transition-colors duration-600 ease-in-out hover:bg-green-900 hover:text-white inline-block">View Case Study</a>
          </div>
          </ScrollFadeSection>
        </div>
      </section>
      

      {/* Testimonial Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollFadeSection>
          <h2 className="text-center text-[#233876] text-xl font-light mb-8">
            Our Deeds in words...
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <div className="max-w-3xl mx-auto border rounded-md p-8 bg-white border-[#f7eebc]">
            <p className="text-gray-600 text-base italic mb-6 text-left">
            &quot;Digisperts LLC has been instrumental in transforming our digital marketing efforts. 
            Their strategic approach and deep understanding of our industry helped us reach our target 
            audience effectively. From creating engaging content to running successful ad campaigns, 
            they consistently delivered outstanding results. Our online visibility and lead generation 
            have significantly improved, and we are thrilled to have digisperts as our trusted digital 
            marketing partner. &quot;
            </p>
            <div className="text-right text-[#233876] text-base">
              + Alan, M CTO Social Cranes
            </div>
          </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Solving Business Problems Section */}
      <section className="w-full bg-[#0d1224] h-[360px] flex items-center justify-center">
      <ScrollFadeSection>
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 mx-auto h-full">
          
          <div className="flex-1 flex flex-col items-center md:items-start justify-center h-full">
            <h2 className="text-white text-2xl md:text-3xl font-light text-center md:text-left leading-snug">
              Solving Business Problems better than<br />Puzzles
            </h2>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end items-end h-full">
            <img
              src="/images/buss.png"
              alt="Business Chess"
              className="object-contain max-h-[400px] w-auto"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
        </ScrollFadeSection>
      </section>

      
      {/* Supported Platforms Section */}
      <section className="relative w-full py-16">
        {/* Background image with blur and dark overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/platform/laptop2.jpg"
            alt="Supported Platforms Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
        <ScrollFadeSection>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-light text-center text-white mb-12">Supported Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Row 1 */}
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">AWS</span>
              <Image src="/images/platform/aws.png" alt="AWS" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Figma</span>
              <Image src="/images/platform/figma.png" alt="Figma" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Google Cloud</span>
              <Image src="/images/platform/google-cloud.png" alt="Google Cloud" width={36} height={36} />
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Microsoft</span>
              <Image src="/images/platform/microsoft.png" alt="Microsoft" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Azure</span>
              <Image src="/images/platform/azure.png" alt="Azure" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Salesforce</span>
              <Image src="/images/platform/saleforce.png" alt="Salesforce" width={36} height={36} />
            </div>
            {/* Row 3 */}
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Digital Ocean</span>
              <Image src="/images/platform/digital-ocean.png" alt="Digital Ocean" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">SAP Ariba</span>
              <Image src="/images/platform/sap-ariba.png" alt="SAP Ariba" width={36} height={36} />
            </div>
            <div className="flex items-center justify-between w-80 h-16 border border-white rounded-lg bg-white/5 px-6">
              <span className="text-white text-lg font-normal">Adobe</span>
              <Image src="/images/platform/adobe.png" alt="Adobe" width={36} height={36} />
            </div>
          </div>
        </div>
        </ScrollFadeSection>
      </section>
      

      {/* Making the Headlines Section */}
      <ScrollFadeSection>
      <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-light text-center text-gray-700 mb-12">Making the Headlines</h2>
          <ScrollFadeSection>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {/* Social Cranes Card */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 p-8 max-w-md w-full">
              <h3 className="font-bold text-base uppercase text-gray-900 mb-3">Social Cranes</h3>
              <p className="text-gray-700 text-sm mb-6">
                As a leading social media marketing (SMM) company, Social Cranes partnered with us to enhance their online presence.
                We designed and developed their website, implementing strategic user systems to optimize their operations.
                Additionally, we crafted compelling site content that resonated with their target audience, further elevating their brand impact.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
            {/* Smart Finance Card */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 p-8 max-w-md w-full">
              <h3 className="font-bold text-base uppercase text-gray-900 mb-3">Smart Finance</h3>
              <p className="text-gray-700 text-sm mb-6">
                At digisperts LLC, our commitment to client confidentiality is unwavering. While we have worked on numerous projects and achieved remarkable results, we respect the anonymity of our clients and their desire to take full credit for their success. As a result, we are limited in the number of case studies we can publicly showcase. However, we are thrilled to highlight a few impactful projects that demonstrate the breadth of our expertise.
              </p>
              <a
                href="#"
                className="border border-gray-800 px-4 py-2 text-gray-900 text-sm hover:bg-blue-900 hover:text-white transition-colors duration-200 inline-block"
              >
                KNOW MORE
              </a>
            </div>
          </div>
          </ScrollFadeSection>
        </div>
      </section>
      </ScrollFadeSection>

      
      {/* We've got the Numbers Section */}
      <section className="w-full bg-[#232b36] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeSection>
          <h2 className="text-white text-2xl font-light text-center mb-10">We&apos;ve got the Numbers</h2>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            {/* Client Card */}
            <div className="bg-[#313947] rounded-md px-10 py-8 flex flex-col items-center min-w-[160px]">
              <span className="text-white text-2xl font-semibold mb-1"><CountUpOnView end={100} duration={900} suffix="+" /></span>
              <span className="text-gray-300 text-sm">Clients</span>
            </div>
            {/* Completed Projects Card */}
            <div className="bg-[#313947] rounded-md px-10 py-8 flex flex-col items-center min-w-[160px]">
              <span className="text-white text-2xl font-semibold mb-1"><CountUpOnView end={250} duration={900} suffix="+" /></span>
              <span className="text-gray-300 text-sm">Completed Projects</span>
            </div>
            {/* Hours Card */}
            <div className="bg-[#313947] rounded-md px-10 py-8 flex flex-col items-center min-w-[160px]">
              <span className="text-white text-2xl font-semibold mb-1"><CountUpOnView end={30000} duration={900} suffix="+" format /></span>
              <span className="text-gray-300 text-sm">Hours</span>
            </div>
            {/* Revenue Generated Card */}
            <div className="bg-[#313947] rounded-md px-10 py-8 flex flex-col items-center min-w-[160px]">
              <span className="text-white text-2xl font-semibold mb-1"><CountUpOnView end={1} duration={900} prefix="$" suffix="M+" /></span>
              <span className="text-gray-300 text-sm">Revenue Generated</span>
            </div>
          </div>
          </ScrollFadeSection>
          <ScrollFadeSection>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-200 text-sm text-left">
              Be rest assured that when you partner with digisperts LLC, you can expect the same level of dedication, expertise and success, even if we are unable to publicly disclose project details. Trust us to work tirelessly behind the scenes, empowering your brand to flourish while ensuring your confidentiality.
            </p>
          </div>
          </ScrollFadeSection>
        </div>
      </section>
      

      <Footer />
      
    </div>
  );
}
