"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass =
    "group relative text-gray-700 px-3 py-2 rounded transition-colors duration-600 ease-in-out";
  const buttonClass =
    "bg-blue-900 text-white px-4 py-2 rounded transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900";

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white relative z-20">
      <div className="flex items-center">
        {/* Logo image: Place your logo at public/images/logo.png */}
        <Image src="/images/logo.png" alt="Logo" width={98} height={48} />
        {/* <span className="ml-2 text-xl font-bold text-blue-900">Digisperts</span> */}
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="/shorten-link"
          className={
            navLinkClass +
            (pathname === "/shorten-link"
              ? " after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-blue-900 after:transition-all after:duration-300 after:ease-in-out after:origin-left"
              : "")
          }
        >
          Shorten Link
          {pathname === "/shorten-link" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>
        <a href="/services" className={navLinkClass}>
          Services
          {pathname === "/services" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>
        <a href="/how-we-work" className={navLinkClass}>
          How we work
          {pathname === "/how-we-work" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>
        <a href="/who-we-are" className={navLinkClass}>
          Who we are
          {pathname === "/who-we-are" && (
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
          )}
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
        </a>
        <button className={buttonClass + " flex items-center"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
          </svg>
          Book a call
        </button>
      </nav>
      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden animate-fade-in z-30">
          <a
            href="/shorten-link"
            className={navLinkClass + " w-full text-center"}
          >
            Shorten Link
            {pathname === "/shorten-link" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </a>
          <a href="/services" className={navLinkClass + " w-full text-center"}>
            Services
            {pathname === "/services" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </a>
          <a href="/how-we-work" className={navLinkClass + " w-full text-center"}>
            How we work
            {pathname === "/how-we-work" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </a>
          <a href="/who-we-are" className={navLinkClass + " w-full text-center"}>
            Who we are
            {pathname === "/who-we-are" && (
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
            )}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
          </a>
          <button className={buttonClass + " mt-2 w-11/12 flex items-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
            </svg>
            Book a call
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar; 