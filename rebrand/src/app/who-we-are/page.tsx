"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import ScrollFadeSection from "../components/ScrollFadeSection";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center">
        <Image
          src="/images/who-we-are.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-2xl md:text-3xl font-light text-center mt-8">
            The Best Hands needed for<br />
            your project success
          </h1>
          <p className="text-white text-base md:text-lg font-light text-center mt-2">
            Time bound, cost effective and quality oriented delivery
          </p>
        </div>
      </section>

      {/* Who are we? Section */}
      <section className="w-full py-12 bg-white">
        <h2 className="text-2xl text-[#233876] font-regular text-center mb-4">Who are we?</h2>
        <p className="text-gray-700 text-base max-w-4xl mx-auto text-left mb-10">
        We are team of experts in various fields who came together for one common goal, to help your business achieve its desire success goals. Since the establishment, Digisperts LLC has been dedicated to helping businesses thrive in the digital age. We understand the challenges faced by organizations when it comes to managing complex operations and staying ahead of the competition. Our mission is to simplify these processes and create systems that enhance productivity, efficiency, and growth.
        </p>
      </section>

      {/* Our Approach Section */}
      <ScrollFadeSection>
      <section className="w-full py-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* SVG */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="/images/approach.svg"
              alt="Our Approach"
              width={260}
              height={100}
              className="w-[260px] h-auto"
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col items-start md:items-start max-w-2xl">
            <h3 className="text-xl font-regular text-[#233876] mb-2 text-left">Our Approach</h3>
            <p className="text-gray-700 text-base text-left">
            At Digisperts, we believe in a customer-centric approach that puts your needs at the forefront. We take the time to understand your unique requirements, challenges, and goals, allowing us to craft tailored solutions that yield tangible results. With a deep understanding of consumer perspectives and industry trends, we deliver innovative technology solutions that drive your business forward.
            </p>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      {/* Our Team Section */}
      <ScrollFadeSection>
      <section className="w-full py-8 bg-white">
        <h2 className="text-2xl font-regular text-[#233876] text-center mb-4">Our Team</h2>
        <p className="text-gray-700 text-base max-w-5xl mx-auto text-center mb-10">
          Our team of skilled professionals combines technical prowess with creative thinking. With expertise in Software development, Project management, User
          interface design, Digital marketing, Blockchain development, and Cloud engineering, we have the knowledge and experience to tackle any challenge. Together, we
          are passionate about helping your business achieve its full potential.
        </p>
      </section>
      </ScrollFadeSection>

      {/* Meet the Team */}
      <ScrollFadeSection>
      <section className="w-full py-8 bg-white">
        <h3 className="text-xl font-regular text-[#233876] text-center mb-8">meet the team</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Project Manager and CSO */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/harvey.png"
              alt="Stanley N"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Harvey, N</span>
            <span className="text-xs text-gray-600 text-center">Project Manager and CSO</span>
          </div>
          {/* Creative Designer and Copywriter */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/samuel-d.png"
              alt="Samuel D"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, D</span>
            <span className="text-xs text-gray-600 text-center">Creative Designer and Copywriter</span>
          </div>
          {/* CTO and Cloud Engineer */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/richard.png"
              alt="Richard K"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Richard, K</span>
            <span className="text-xs text-gray-600 text-center">CTO and Cloud Engineer</span>
          </div>
          {/* Blockchain and Cyber Security */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/samuel-o.png"
              alt="Samuel O"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <span className="font-semibold text-sm text-[#1E429F] text-center">Samuel, O</span>
            <span className="text-xs text-gray-600 text-center">Blockchain and Cyber Security</span>
          </div>
        </div>
      </section>
      </ScrollFadeSection>

      {/* Customer Success Officer Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center mt-12">
        <Image
          src="/images/who-we-are-banner.png"
          alt="Customer Success"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <ScrollFadeSection>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-2xl mx-auto px-4">
          {/* Text */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-white text-base md:text-xl font-semibold mb-2">
              Speak to the Customer Success Officer
            </h3>
            <p className="text-white text-xs md:text-sm font-light mb-0">
              We are interested in your success story and dynamic goals. Our responsibility is to offer a hand in ensuring your business succeeds.
            </p>
          </div>
          {/* Officer Image */}
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
            <Image
              src="/images/customer-success-officer.png"
              alt="Customer Success Officer"
              width={100}
              height={100}
              className="w-24 md:w-40 h-40 object-cover object-top rounded-md"
            />
          </div>
        </div>
        </ScrollFadeSection>
      </section>

      <Footer />
    </div>
  );
} 