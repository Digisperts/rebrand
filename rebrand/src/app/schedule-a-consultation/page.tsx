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
      {/* Booking Form and Image - first content after NavBar */}
      <section className="relative w-full flex flex-col items-center bg-white pb-0 mb-0 -mb-32 z-30 flex flex-row items-stretch w-full mb-8 md:mb-0" style={{ minHeight: "calc(100vh - 64px - 64px)" }}>
        {/* Form Card */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-12 py-10">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-lg md:text-3xl font-extrabold mb-6 -ml-5 leading-tight">
              <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">Book a Meet With Us<br /></span>
            </h2>
            <form className="font-semibold space-y-5">
              {/* Name Row */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Name</label>
                <div className="flex gap-2">
                  <select className="border rounded px-2 py-2 w-1/4 text-gray-700 bg-white">
                    <option>Title</option>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                  </select>
                  <input type="text" placeholder="First name" className="border rounded px-2 py-2 w-1/2 text-gray-700" />
                  <input type="text" placeholder="Last name" className="border rounded px-2 py-2 w-1/2 text-gray-700" />
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Email</label>
                <input type="email" placeholder="Companyemail23@gmail.com" className="border rounded px-2 py-2 w-full text-gray-700" />
              </div>
              {/* Phone */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Phone number</label>
                <div className="flex gap-2">
                  <select className="border rounded px-2 py-2 w-1/3 text-gray-700 bg-white">
                    <option>+234</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input type="text" placeholder="1234567890" className="border rounded px-2 py-2 w-2/3 text-gray-700" />
                </div>
              </div>
              {/* Service */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Choose a Service</label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>Web and App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Consulting</option>
                </select>
              </div>
              {/* Budget */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Budget</label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>less than a $1000</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10,000</option>
                  <option>Above $10,000</option>
                </select>
              </div>
              {/* Company Url */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Company Url</label>
                <input type="text" placeholder="E.g Digisperts.com" className="border rounded px-2 py-2 w-full text-gray-700" />
              </div>
              {/* Schedule a Consultation */}
              <div>
                <label className="block font-bold text-gray-900 mb-1">Schedule a Consultation</label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>Choose a Date and Time</option>
                  <option>Tomorrow 10:00 AM</option>
                  <option>Tomorrow 2:00 PM</option>
                  <option>Next Monday 11:00 AM</option>
                </select>
              </div>
              {/* Submit Button */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden md:flex flex-1 relative items-center justify-center min-h-full">
          <Image
            src="/images/book2.png"
            alt="Book a Call"
            className="object-cover rounded-none"
            width={800}
            height={800}
            style={{ zIndex: 0, minWidth: 0, width: '100%', height: '100%' }}
            priority
          />
        </div>
      </section>
      {/* Pre-footer section and other content follows here */}
      <section className="relative w-full flex flex-col items-center bg-white pb-0 mb-10 -mb-32 z-30">
        {/* Bullets Info */}
        <div className="w-full flex items-center justify-center bg-white border-t border-gray-200 py-3 px-4 text-base -mb-80 font-semibold text-black" style={{minHeight: 40}}>
          <span className="flex items-center gap-2 flex-wrap w-full justify-center">
            <span className="flex items-center"><span className="text-[#003399] text-xl mr-2">●</span> You will be talking to our Product and Project manager.</span>
            <span className="text-[#003399] text-xl mx-2">●</span>
            <span className="flex items-center">We respond within 24 hours.</span>
            <span className="text-[#003399] text-xl mx-2">●</span>
            <span className="flex items-center">We will sign an NDA if required.</span>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
} 