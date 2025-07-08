"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <main className="flex-1 flex flex-row" style={{ minHeight: "calc(100vh - 64px - 64px)" }}>
        {/* Left Column */}
        <div className="flex-1 bg-white flex flex-col px-10 pt-24 py-10 justify-start" style={{ minWidth: 0 }}>
          <div>
            <div className="text-black text-base mb-4">Book a meet with us</div>
            <div className="flex justify-left">
              <div className="border-2 border-blue-200 rounded-md overflow-hidden" style={{ width: 500, height: 260 }}>
                <Image
                  src="/images/book1.jpg"
                  alt="Book Meeting"
                  width={400}
                  height={260}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <ul className="text-black text-sm mt-6 mb-4 pl-5 list-disc">
              <li>You'll be talking to our product and project manager</li>
              <li>We respond within 24 hours</li>
              <li>We'll sign an NDA if required</li>
            </ul>
            <div className="text-sm text-blue-700 mb-2">
                Together we will embark on a digital transformative journey.
            </div>
            <div className="flex items-center text-sm text-blue-700 mb-1">
              <a
                href="mailto:product@digisperts.com"
                className="flex items-center text-sm text-blue-700 mb-1 hover:underline"
              >
                <svg className="w-4 h-4 mr-1 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.51L12 13.01l9.99-6.5A2 2 0 0 0 20 4H4a2 2 0 0 0-1.99 2.51z"/><path d="M22 8.98l-10 6.5-10-6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.98z"/></svg>
                product@digisperts.com
              </a>
            </div>
            <div className="flex items-center text-sm text-black">
                <FontAwesomeIcon icon={faPhone} className="text-red-600 w-4 h-4 mr-1 inline" />
              +1 510 824 5365
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 relative flex items-center justify-start min-h-full">
          <Image
            src="/images/book2.png"
            alt="Book a Call"
            fill
            className="object-cover"
            style={{ zIndex: 0 }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
          <div className="relative z-20 pl-16">
            <h1 className="text-white text-3xl font-semibold mb-2 mt-[-60px]">Book A Call</h1>
            <p className="text-white text-base font-light">Lets talk and collaborate to achieve your goals</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 