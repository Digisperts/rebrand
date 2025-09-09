"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaPhone, FaChevronDown } from "react-icons/fa";
import GoogleTranslateSelector from "./components/GoogleTranslateSelector";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  // Step state for fade-in (0 to 5)
  const [fadeStep, setFadeStep] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check in case page is loaded scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Increment fadeStep every 200ms until 5
    let currentStep = 0;
    const maxStep = 5;
    const interval = 200;
    const timer = setInterval(() => {
      currentStep++;
      setFadeStep(currentStep);
      if (currentStep >= maxStep) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Helper function to determine opacity class based on fadeStep and index
  const getOpacityClass = (index: number) =>
    fadeStep >= index ? "opacity-100" : "opacity-0";

  const lightBgPaths = [
    "/work-in-progress",
    "/resources/use-cases",
    "/resources/blog",
    "/resources/careers",
    "/schedule-a-consultation",
  ];

  const useDarkNav = scrolled || lightBgPaths.includes(pathname);

  const navLinkClassBase =
    "group relative font-medium px-3 md:px-2 py-2 rounded transition-opacity duration-700 ease-out whitespace-nowrap custom-nav-text";

  const navLinkClass =
    (useDarkNav
      ? "text-gray-700 hover:text-blue-900"
      : "text-white hover:text-blue-300") +
    " group relative font-medium px-3 md:px-2 py-2 rounded transition-opacity duration-700 ease-out whitespace-nowrap custom-nav-text";

  const buttonClass =
    (useDarkNav
      ? "bg-blue-900 text-white border border-transparent"
      : "bg-transparent text-white border border-white") +
    " px-4 md:px-2 py-2 rounded transition-opacity duration-700 ease-out hover:bg-white hover:text-blue-900 hover:border-blue-900 whitespace-nowrap custom-nav-text";

  const navLinkClassMobile =
    "group relative font-medium px-3 md:px-2 py-2 rounded transition-opacity duration-700 ease-out whitespace-nowrap custom-nav-text text-gray-800 hover:text-blue-900";

  const buttonClassMobile =
    "px-4 md:px-2 py-2 rounded transition-opacity duration-700 ease-out hover:bg-white hover:text-blue-900 hover:border-blue-900 whitespace-nowrap custom-nav-text text-gray-800 hover:text-blue-900";

  return (
    <>
      <section className="text-white">
        <header
          className={`flex items-center justify-between px-8 py-4 border-b relative z-20 font-poppins transition-colors duration-300 ${
            scrolled
              ? "bg-white border-gray-200"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo (index 0) */}
          <div className={`transition-opacity ${getOpacityClass(0)}`}>
            <Link href="/">
              <Image
                src={
                  useDarkNav
                    ? "/images/digispert-logo.png"
                    : "/images/digispert-logo-white.png"
                }
                alt="Logo"
                width={158}
                height={48}
                className="cursor-pointer animate-[pulseFade_3s_ease-in-out_infinite]"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 custom-nav-text">
            <GoogleTranslateSelector />

            {/* What We Do button (index 1) */}
            <div
              className={`relative transition-opacity ${getOpacityClass(1)}`}
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                type="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={whatWeDoOpen}
                className={`${navLinkClass} ${
                  whatWeDoOpen ? "text-blue-900 font-semibold" : ""
                } flex items-center gap-1`}
              >
                What We Do
                <FaChevronDown className="ml-1 text-xs" />
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
              </button>
              {whatWeDoOpen && (
                <div className="absolute left-0 top-full w-46 bg-white shadow-lg z-[100] py-2">
                  <Link
                    href="/what-we-do/software-development"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/what-we-do/software-development"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/what-we-do/business-automation"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/what-we-do/business-automation"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Business Automation
                  </Link>
                  <Link
                    href="/what-we-do/digital-marketing"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/what-we-do/digital-marketing"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            {/* Who we are link (index 2) */}
            <Link
              href="/who-we-are"
              className={`${navLinkClass} transition-opacity ${getOpacityClass(
                2
              )} ${
                pathname === "/who-we-are"
                  ? "text-blue-900 font-semibold"
                  : useDarkNav
                  ? "text-gray-700 hover:text-blue-900"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Who we are
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out origin-left ${
                  pathname === "/who-we-are"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Process link (index 3) */}
            <Link
              href="/process"
              className={`${navLinkClass} transition-opacity ${getOpacityClass(
                3
              )} ${
                pathname === "/process"
                  ? "text-blue-900 font-semibold"
                  : useDarkNav
                  ? "text-gray-700 hover:text-blue-900"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Process
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out origin-left ${
                  pathname === "/process" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Resources button (index 4) */}
            <div
              className={`relative transition-opacity ${getOpacityClass(4)}`}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                className={`${navLinkClass} ${
                  resourcesOpen ? "text-blue-900 font-semibold" : ""
                } flex items-center gap-1`}
              >
                Resources
                <FaChevronDown className="ml-1 text-xs" />
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
              </button>
              {resourcesOpen && (
                <div className="absolute left-0 top-full w-44 bg-white shadow-lg z-30 py-2">
                  <Link
                    href="/resources/case-studies"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/resources/case-studies"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/resources/use-cases"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/resources/use-cases"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Use Cases
                  </Link>
                  <Link
                    href="/work-in-progress"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/resources/blog"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/careers"
                    className={`block px-4 py-2 font-medium text-sm transition-colors rounded ${
                      pathname === "/resources/careers"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Schedule a Consultation link (index 5) */}
            <Link
              href="/schedule-a-consultation"
              className={`${buttonClass} ${getOpacityClass(
                5
              )} flex font-semibold items-center transition duration-300 ease-out transform-gpu hover:rotate-[2deg] hover:origin-top-right hover:scale-[1.02] hover:shadow-md`}
            >
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
            <span
              className={`block w-6 h-0.5 mb-1 transition-all ${
                useDarkNav ? "bg-gray-800" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 mb-1 transition-all ${
                useDarkNav ? "bg-gray-800" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all ${
                useDarkNav ? "bg-gray-800" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
          {/* Mobile Nav Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden animate-fade-in z-30">
              {/* What We Do Dropdown */}
              <button
                type="button"
                className={
                  navLinkClassMobile +
                  ` w-full text-left flex items-center justify-between ${
                    whatWeDoOpen ? "bg-blue-100 text-blue-900" : ""
                  }`
                }
                onClick={() => setWhatWeDoOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={whatWeDoOpen}
              >
                <span>What We Do</span>
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    whatWeDoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {whatWeDoOpen && (
                <div className="w-full bg-white shadow-inner">
                  <Link
                    href="/what-we-do/software-development"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/what-we-do/software-development"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/what-we-do/business-automation"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/what-we-do/business-automation"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Business Automation
                  </Link>
                  <Link
                    href="/what-we-do/digital-marketing"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/what-we-do/digital-marketing"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}

              {/* Who We Are */}
              <Link
                href="/who-we-are"
                className={navLinkClassMobile + " w-full text-left"}
              >
                Who we are
                {pathname === "/who-we-are" && (
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
                )}
              </Link>

              {/* Process */}
              <Link
                href="/process"
                className={navLinkClassMobile + " w-full text-left"}
              >
                Process
                {pathname === "/process" && (
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-900 transition-all duration-300 ease-in-out origin-left" />
                )}
              </Link>

              {/* Resources Dropdown */}
              <button
                type="button"
                className={
                  navLinkClassMobile +
                  ` w-full text-left flex items-center justify-between ${
                    resourcesOpen ? "bg-blue-100 text-blue-900" : ""
                  }`
                }
                onClick={() => setResourcesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
              >
                <span>Resources</span>
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {resourcesOpen && (
                <div className="w-full bg-white shadow-inner">
                  <Link
                    href="/resources/case-studies"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/resources/case-studies"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/resources/use-cases"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/resources/use-cases"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Use Cases
                  </Link>
                  <Link
                    // href="/resources/blog"
                    href="/work-in-progress"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/resources/blog"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/careers"
                    className={`block px-6 py-2 custom-nav-dropdown transition-colors ${
                      pathname === "/resources/careers"
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : "text-black hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100 active:text-blue-900"
                    }`}
                  >
                    Careers
                  </Link>
                </div>
              )}

              {/* Schedule a Consultation */}
              <Link
                href="/schedule-a-consultation"
                className={
                  buttonClassMobile +
                  " mt-4 w-11/12 flex items-center justify-center"
                }
              >
                <FaPhone className="mr-2 transform -rotate-270" />
                Schedule a Consultation
              </Link>
              <div className="mt-4 w-11/12 flex justify-center">
                <GoogleTranslateSelector />
              </div>
            </div>
          )}
        </header>
      </section>
    </>
  );
};

export default NavBar;
