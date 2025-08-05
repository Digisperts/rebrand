import Image from "next/image";
import { FaEnvelope, FaLocationDot, FaHeadset } from "react-icons/fa6";
import Link from "next/link";

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
              <a href="https://www.instagram.com/digisperts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram" className="bg-[#e8bebe] rounded-full p-1 shadow">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/company/digisperts-tech/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn" className="bg-[#3F83F8] rounded-full p-1 shadow">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://x.com/digisperts?s=21" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X" className="bg-[#4B5563] rounded-full p-1 shadow">
                <Image src="/images/x.png" alt="X" width={24} height={24} />
              </a>
              <a href="https://web.facebook.com/digisperts/?viewas=100000686899395" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook" className="bg-[#A4CAFE] rounded-full p-1 shadow">
                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
            </div>
          </div>
          {/* What We Do Links */}
          <div className="flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">What We Do</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="/what-we-do/software-development" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Software Development
                </Link>
              </li>
              <li className="group">
                <Link href="/what-we-do/business-automation" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Business Automation
                </Link>
              </li>
              <li className="group">
                <Link href="/what-we-do/digital-marketing" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources Links */}
          <div className="flex flex-col items-start w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">Resources</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="/resources/case-studies" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Case Studies
                </Link>
              </li>
              <li className="group">
                <Link href="/resources/use-cases" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Use Cases
                </Link>
              </li>
              <li className="group">
                <Link 
                // href="/resources/blog" 
                href="/work-in-progress"
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Blog
                </Link>
              </li>
              <li className="group">
                <Link href="/resources/careers" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="flex flex-col items-start w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">Company</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="/who-we-are" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/work-in-progress" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/process" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Us Card */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <h4 className="text-white font-extrabold mb-2">Contact Us</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-xl mt-1" />
                <div>
                  <div className="font-medium">For General Inquiries:</div>
                  <div className="text-sm">
                    <Link href="mailto:info@digisperts.com" className="hover:text-blue-400 transition-colors">info@digisperts.com</Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaHeadset className="text-xl mt-1" />
                <div>
                  <div className="font-medium">For HR/Careers:</div>
                  <div className="text-sm">
                    <Link href="mailto:hr@digisperts.com" className="hover:text-blue-400 transition-colors">hr@digisperts.com</Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-xl mt-1" />
                <div>
                  <div className="font-medium">Ottawa, Illinois.</div>
                  <div className="font-medium">Lagos, Nigeria.</div>
                </div>
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