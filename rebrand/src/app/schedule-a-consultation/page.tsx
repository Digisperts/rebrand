"use client";
import { useState } from "react";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function BookACallPage() {

   const [openService, setOpenService] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    {
      name: "Software Development",
      activities: ["Custom Software", "API Development", "System Integration"]
    },
    {
      name: "Website and App Development Services",
      activities: ["UI/UX Design", "Frontend Development", "Backend Development"]
    },
    {
      name: "Business Automations",
      activities: ["Workflow Automation", "CRM Integration", "ERP Systems"]
    },
    {
      name: "Marketing and Advertising Services",
      activities: ["SEO", "Social Media Marketing", "Email Campaigns"]
    },
    {
      name: "Enterprise Solutions",
      activities: ["ERP Implementation", "Enterprise Security", "Data Management"]
    },
    {
      name: "Block chain development Services",
      activities: ["Smart Contracts", "DApp Development", "Blockchain Integration"]
    },
    {
      name: "Others",
      activities: ["Consulting", "Training"]
    }
  ];



  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      {/* Mobile image */}
<div className="flex md:hidden w-full relative min-h-[250px] px-0">
  <Image
    src="/images/book2.png"
    alt="Book a Call"
    className="object-cover w-full h-full rounded-none"
    width={800}
    height={800}
    priority
  />
</div>
      {/* Booking Form and Image - first content after NavBar */}
      <section className="relative w-full flex flex-col items-center bg-white pb-0 mb-0 -mb-32 z-30 flex flex-row items-stretch w-full mb-8 md:mb-0" style={{ minHeight: "calc(100vh - 64px - 64px)" }}>
        {/* Form Card */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-12 py-10">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-lg md:text-3xl font-extrabold mb-6 -ml-7 mt-5 leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">Book a Meet With Us<br /></span>
            </h2>
            <form className="font-semibold space-y-5">

              <h4 className="text-gray-500 "><span className="text-red-500">* </span> indicates required input</h4>
              {/* Name Row */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">Name <span className="text-red-500">*</span></label>
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
                <label className="block text-sm font-bold text-gray-900 mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Companyemail23@gmail.com" className="border rounded px-2 py-2 w-full text-gray-700" />
              </div>
              {/* Phone */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">Phone number <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <select className="border rounded px-2 py-2 w-1/3 text-gray-700 bg-white">
                    <option>+234</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input type="text" placeholder="1234567890" className="border rounded px-2 py-2 w-2/3 text-gray-700" />
                </div>
              </div>
              {/* Company */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">Company <span className="text-red-500">*</span> </label>
                <input type="text" placeholder="Company name" className="border rounded px-2 py-2 w-full text-gray-700" />
              </div>

              {/* Company Url */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">Company Url <span className="text-red-500">*</span></label>
                <input type="text" placeholder="E.g Digisperts.com" className="border rounded px-2 py-2 w-full text-gray-700" />
              </div>

              {/* Service */}
              <div className="relative w-full">
      {/* Label */}
      <label className="block font-bold text-gray-900 mb-1">
        Choose a Service <span className="text-red-500">*</span>
      </label>

      {/* Main Field */}
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="border border-gray-500 rounded px-3 py-2 w-full bg-white cursor-pointer flex justify-between items-center hover:border-gray-600 focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-gray-500 transition"
      >
        <span className="text-gray-500">Software Development</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-600 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute mt-1 w-full border rounded-lg bg-white shadow-lg z-50 max-h-80 overflow-auto">
          {services.map((service, index) => (
            <div key={index} className="border-b last:border-0">
              {/* Service Row */}
              <div
                onClick={() => setOpenService(openService === index ? null : index)}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border border-gray-300 flex items-center justify-center rounded-sm">
                  <ChevronRightIcon
                    className={`h-4 w-4 text-gray-700 transition-transform ${openService === index ? "rotate-90" : ""}`}
                  />
                  </div>
                  <span className="text-gray-900 font-medium">{service.name}</span>
                </div>
              </div>

              {/* Activities */}
              {openService === index && (
                <div className="bg-gray-50 pl-9 pr-3 py-2 space-y-1">
                  {service.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer text-gray-800 text-sm"
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>

              {/* <div>
                <label className="block font-bold text-gray-900 mb-1">Choose a Service <span className="text-red-500">*</span></label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>Web and App Development</option>
                  <option>Software Development</option>
                  <option>Marketing and Advertising Services</option>
                  <option>Branding Services</option>
                  <option>Automation Services</option>
                  <option>Enterprise Solution</option>
                  <option>Others</option>
                </select>
              </div> */}
              {/* What are you looking to build */}
              <div>
                <label className="inline-flex items-center text-sm font-bold text-gray-900 mb-1">
                  <span>What are you looking to build with Digisperts?</span>
                  <span className="text-red-500 ml-1 text-sm">*</span>
                </label>
                <textarea
                placeholder="Share your vision with us here..."
                className="border rounded px-2 py-2 w-full text-gray-700"
                rows={4}
                required/>
              </div>

              {/* Budget
              <div>
                <label className="block font-bold text-gray-900 mb-1">Budget</label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>less than a $1000</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10,000</option>
                  <option>Above $10,000</option>
                </select>
              </div> */}
              
              {/* Schedule a Consultation */}
              {/* <div>
                <label className="block font-bold text-gray-900 mb-1">Schedule a Consultation</label>
                <select className="border rounded px-2 py-2 w-full text-gray-700 bg-white">
                  <option>Choose a Date and Time</option>
                  <option>Tomorrow 10:00 AM</option>
                  <option>Tomorrow 2:00 PM</option>
                  <option>Next Monday 11:00 AM</option>
                </select>
              </div> */}
              {/* NDA Checkbox */}
              <div className="flex items-center gap-2">
                <input
                type="checkbox"
                id="nda"
                className="border-gray-300 rounded"/>
                <label htmlFor="nda" className="text-gray-900 text-sm">
                  This Project requires an NDA.
                </label>
                
              </div>


              {/* Submit Button */}
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: '4px 4px 4px 0px #00000040' }}
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden md:flex flex-1 relative items-center justify-center min-h-full px-0">
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
      <section className="relative w-full flex flex-col items-center bg-white pb-0 mb-10 md:mb-0 z-30">
        {/* Bullets Info */}
        <div className="w-full flex items-center justify-center bg-white border-t border-gray-200 py-3 px-4 text-base font-semibold text-black mb-4 md:-mb-2" style={{minHeight: 40}}>
        <span className="flex flex-col md:flex-row items-start gap-2 w-full justify-center text-center md:text-left">
          <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
            <span className="text-[#003399] text-xl mr-2">●</span>
            You will be talking to our Product and Project manager.
          </span>
          <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
            <span className="text-[#003399] text-xl mr-2">●</span>
            We respond within 24 hours.
          </span>
          <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
            <span className="text-[#003399] text-xl mr-2">●</span>
            We will sign an NDA if required.
          </span>
        </span>

        </div>
      </section>
      <Footer />
    </div>
  );
} 