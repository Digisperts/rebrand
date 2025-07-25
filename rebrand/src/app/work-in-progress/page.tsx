"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";

export default function WorkInProgressPage() {
  const buttonClass =
    "bg-blue-900 text-white px-4 md:px-2 py-2 rounded transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900 whitespace-nowrap custom-nav-text";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      {/* work in progress and Image */}
      <section className="relative w-full flex flex-col-reverse md:flex-row items-center bg-white pt-[72px] md:pt-24 mb-8 z-30">
        {/* work in progress card */}
        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-12 py-10">
          <div className="w-full bg-white rounded-xl p-8">
            <p className="text-base md:text-lg font-bold text-[#003399] leading-tight">
              Coming Soon,
            </p>
            <h2 className="text-lg md:text-3xl font-extrabold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-[#003399] to-[#001133] bg-clip-text text-transparent">
                Something Great is on the Way
                <br />
              </span>
            </h2>
            <p className="text-base md:text-lg font-medium text-[#00143D] leading-tight">
              We&apos;re working behind the scenes to bring you fresh content
              and exciting updates. This page will be live soon
            </p>
            <div className="mt-5">
              <Link
                href="/"
                className={buttonClass + " font-semibold items-left"}
              >
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 flex items-center justify-center min-h-[220px] md:min-h-full md:mt-0 relative">
          <Image
            src="/images/work-in-progress.svg"
            alt="Book a Call"
            className="object-contain h-[220px] w-full md:h-[350px] md:w-[350px] max-w-[350px] rounded-none"
            width={350}
            height={350}
            priority
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
