import Image from "next/image";

export default function Footer() {
  return (
    <>
      
      {/* Footer Main */}
      <footer className="relative bg-[#000F2E] w-full -mt-43 pt-40" style={{ minHeight: 320 }}>
        

        <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between py-17 px-4">
          {/* Digisperts Logo & Social */}
          <div className="flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/footer-logo.png"
              alt="Footer Logo"
              width={150}
              height={50}
              className="mb-4"
              priority
            />
            <div className="flex space-x-3 mt-2">
              <a href="#" aria-label="LinkedIn" className="bg-[#3F83F8] rounded-full p-1 shadow">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" aria-label="X" className="bg-[#4B5563] rounded-full p-1 shadow">
                <Image src="/images/x.png" alt="X" width={24} height={24} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-[#A4CAFE] rounded-full p-1 shadow">
                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
            </div>
          </div>
          {/* What We Do Links */}
          <div className="flex flex-col items-start w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">What We Do</h4>
            <ul className="text-white space-y-1 text-base">
              <li className="group">
                <a href="/what-we-do/software-development" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Software Development
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
              <li className="group">
                <a href="/what-we-do/business-automation" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Business Automation
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
              <li className="group">
                <a href="/what-we-do/digital-marketing" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Digital Marketing
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
          {/* Who We Are Links */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <h4 className="text-white font-extrabold mb-2">Who We Are</h4>
            <ul className="text-white space-y-1 text-base">
              <li className="group">
                <a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Our Team
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
          {/* Our Process Links */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <h4 className="text-white font-extrabold mb-2">Our Process</h4>
            <ul className="text-white space-y-1 text-base">
              {/* <li className="group">
                <a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  About Us
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li> */}
            </ul>
          </div>
          {/* Resources Links */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <h4 className="text-white font-extrabold mb-2">Resources</h4>
            <ul className="text-white space-y-1 text-base">
              <li className="group">
                <a href="/resources/case-studies" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Case Studies
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
              <li className="group">
                <a href="/resources/use-cases" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Use Cases
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
              <li className="group">
                <a href="/resources/blog" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Blog
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
              <li className="group">
                <a href="/resources/careers" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Careers
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="relative z-20 max-w-6xl mx-auto">
          <hr className="border-t border-white/60 my-2" />
          <p className="text-white text-center text-xs py-2">© Digisperts 2025</p>
        </div>
      </footer>
    </>
  );
} 