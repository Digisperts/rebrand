"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass =
    "group relative font-bold text-gray-700 px-3 md:px-2 py-2 rounded transition-colors duration-600 ease-in-out whitespace-nowrap custom-nav-text";
  const buttonClass =
    "bg-blue-900 text-white px-4 md:px-2 py-2 rounded transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900 whitespace-nowrap custom-nav-text";

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white relative z-20 font-poppins">
      <div className="flex items-center">
        {/* Logo image */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={158} height={48} className="cursor-pointer" />
        </Link>
        {/* <span className="ml-2 text-xl font-bold text-blue-900">Digisperts</span> */}
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center space-x-6 custom-nav-text">
        <div
          className="relative"
          onMouseEnter={() => setWhatWeDoOpen(true)}
          onMouseLeave={() => setWhatWeDoOpen(false)}
        >
          <button
            type="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={whatWeDoOpen}
            className={
              navLinkClass +
              (whatWeDoOpen ? " bg-blue-100 text-blue-900" : "")
            }
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            What We Do
            <FaChevronDown className="ml-1 text-xs" />
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </button>
          {whatWeDoOpen && (
            <div className="absolute left-0 top-full w-46 bg-white shadow-lg z-30 py-2">
              <a href="/what-we-do/software-development" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/what-we-do/software-development" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Software Development</a>
              <a href="/what-we-do/business-automation" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/what-we-do/business-automation" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Business Automation</a>
              <a href="/what-we-do/digital-marketing" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/what-we-do/digital-marketing" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Digital Marketing</a>
            </div>
          )}
        </div>

        <a href="/who-we-are" className={navLinkClass}>
          Who we are
          {pathname === "/who-we-are" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>

        <a href="/process" className={navLinkClass}>
          Process
          {pathname === "/process" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>

        <div
          className="relative"
          onMouseEnter={() => setResourcesOpen(true)}
          onMouseLeave={() => setResourcesOpen(false)}
        >
          <button
            type="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={resourcesOpen}
            className={
              navLinkClass + (resourcesOpen ? " bg-blue-100 text-blue-900" : "") + " flex items-center gap-1"}
          >
            Resources
            <FaChevronDown className="ml-1 text-xs" />
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </button>
          {resourcesOpen && (
            <div className="absolute left-0 top-full w-44 bg-white shadow-lg z-30 py-2">
              <a href="/resources/sample" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a>
              {/* <a href="/resources/sample" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a>
              <a href="/resources/sample" className={`block px-4 py-2 font-semibold text-sm transition-colors rounded ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a> */}
            </div>
          )}
        </div>

        <Link href="/schedule-a-consultation" className={buttonClass + " flex font-semibold items-center"}>
          <FaPhone className="mr-2 transform -rotate-270" />
          Schedule a Consultation
        </Link>
      </nav>
      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden animate-fade-in z-30">
          {/* What We Do Dropdown */}
          <button
            type="button"
            className={navLinkClass + ` w-full text-left flex items-center justify-between ${whatWeDoOpen ? 'bg-blue-100 text-blue-900' : ''}`}
            onClick={() => setWhatWeDoOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={whatWeDoOpen}
          >
            <span>What We Do</span>
            <FaChevronDown className={`ml-2 transition-transform ${whatWeDoOpen ? 'rotate-180' : ''}`} />
          </button>
          {whatWeDoOpen && (
            <div className="w-full bg-white shadow-inner">
              <a href="/what-we-do/software-development" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/what-we-do/software-development" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Software Development</a>
              <a href="/what-we-do/business-automation" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/what-we-do/business-automation" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Business Automation</a>
              <a href="/what-we-do/digital-marketing" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/what-we-do/digital-marketing" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Digital Marketing</a>
            </div>
          )}

          {/* Who We Are */}
          <a href="/who-we-are" className={navLinkClass + " w-full text-left"}>
            Who we are
            {pathname === "/who-we-are" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
          </a>

          {/* Process */}
          <a href="/process" className={navLinkClass + " w-full text-left"}>
            Process
            {pathname === "/process" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
          </a>

          {/* Resources Dropdown */}
          <button
            type="button"
            className={navLinkClass + ` w-full text-left flex items-center justify-between ${resourcesOpen ? 'bg-blue-100 text-blue-900' : ''}`}
            onClick={() => setResourcesOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={resourcesOpen}
          >
            <span>Resources</span>
            <FaChevronDown className={`ml-2 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
          </button>
          {resourcesOpen && (
            <div className="w-full bg-white shadow-inner">
              <a href="/resources/sample" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a>
              {/* <a href="/resources/sample" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a>
              <a href="/resources/sample" className={`block px-6 py-2 custom-nav-dropdown transition-colors ${pathname === "/resources/sample" ? "bg-blue-100 text-blue-900 underline" : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"}`}>Sample</a> */}
            </div>
          )}

          {/* Schedule a Consultation */}
          <Link href="/schedule-a-consultation" className={buttonClass + " mt-4 w-11/12 flex items-center justify-center"}>
            <FaPhone className="mr-2 transform -rotate-270" />
            Schedule a Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar; 