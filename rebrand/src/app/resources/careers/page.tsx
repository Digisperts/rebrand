"use client";
import NavBar from "../../nav";
import Footer from "../../Footer";
import Image from "next/image";
import Link from "next/link";

export default function CareerResource() {
  const buttonClass =
    "bg-blue-900 text-white px-4 md:px-2 py-2 rounded transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900 whitespace-nowrap custom-nav-text";
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Career and Image */}
      <section className="relative w-full flex flex-col-reverse md:flex-row items-center bg-white pt-0 md:pt-0 mb-8 z-30">
        {/* Career card */}
        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-12 py-10">
          <div className="w-full bg-white rounded-xl md:-ml-12 p-8">
            <h2 className="text-lg md:text-3xl font-extrabold mb-2 leading-tight">
              <span className="text-[#000F2E]">
                Join Our Global Team, Where <br />
                Innovation Meets Purpose
                <br />
              </span>
            </h2>
            <p className="text-base md:text-lg font-medium text-[#00143D] leading-tight">
              We&apos;re building meaningful digital solutions that make a
              difference. Work with passionate, purpose-driven people and help
              shape the future.
            </p>
            <div className="mt-5">
              <Link
                href="/"
                onClick={(e) => e.preventDefault()}
                className={buttonClass + " font-semibold items-left"}
              >
                See Available Job Opportunities
              </Link>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 flex items-center justify-center min-h-[220px] md:min-h-full md:mt-0 relative">
          {/* Team Orbit Card */}
          <div className="w-full flex justify-center mr-8 items-center pt-[100px] pb-12 md:pb-20">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "360px",
                height: "360px",
              }}
            >
              {/* OUTER CIRCLE */}
              <div className="absolute w-full h-full rounded-full border-2 border-dotted border-blue-400 z-10">
                {[1, 2, 3, 4, 5].map((n, i) => {
                  const angle = (360 / 5) * i;
                  return (
                    <div
                      key={`outer-${i}`}
                      className="absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg) translate(-50%, -50%)`,
                      }}
                    >
                      <Image
                        src={`/images/careers/outer/${n}-outer.jpg`}
                        alt=""
                        width={80}
                        height={80}
                        className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* MIDDLE CIRCLE */}
              <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dotted border-orange-300 z-20">
                {[1, 2, 3, 4, 5].map((n, i) => {
                  const angle = (330 / 5) * i;
                  return (
                    <div
                      key={`middle-${i}`}
                      className="absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg) translate(-50%, -50%)`,
                      }}
                    >
                      <Image
                        src={`/images/careers/middle/${n}-middle.jpg`}
                        alt=""
                        width={80}
                        height={80}
                        className="w-10 h-10 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* INNER CIRCLE */}
              <div className="absolute w-[150px] h-[150px] rounded-full border-2 border-dotted border-red-400 z-30">
                {[1, 2, 3, 4, 5].map((n, i) => {
                  const angle = (380 / 5) * i;
                  return (
                    <div
                      key={`inner-${i}`}
                      className="absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translate(70px) rotate(-${angle}deg) translate(-50%, -50%)`,
                      }}
                    >
                      <Image
                        src={`/images/careers/inner/${n}-inner.jpg`}
                        alt=""
                        width={80}
                        height={80}
                        className="w-7 h-7 rounded-full border-2 border-white shadow-lg object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* CENTER LOGO */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                <Image
                  src="/images/careers/favicon.png"
                  alt="Digisperts Logo"
                  width={80}
                  height={80}
                  className="w-12 h-12 rounded-xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
