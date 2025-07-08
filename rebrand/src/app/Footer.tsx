import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Book a Call */}
      <section className="w-full bg-[#2046a7] py-3">
        <div className="flex items-center justify-center gap-x-4 px-4">
          <span className="text-white text-base mr-2">
            Book a free 3-days business consultation
          </span>
          <a
            href="/book-a-call"
            className="bg-[#b36a1c] text-white px-5 py-2 rounded font-semibold text-sm shadow hover:bg-[#8a4f13] transition-colors duration-200 flex items-center"
            style={{ minWidth: "auto" }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
          </svg>
          
            Book a Call
          </a> 
        </div>
      </section>

      {/* Footer Main */}
      <footer className="relative w-full mt-auto" style={{ minHeight: 320 }}>
        {/* Background image */}
        <Image
          src="/images/footer.jpg"
          alt="Footer Background"
          fill
          className="object-cover z-0"
          style={{ objectPosition: 'center' }}
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10 backdrop-blur-xs" />

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
              <a href="#" aria-label="Facebook" className="bg-[#3F83F8] rounded-full p-1 shadow">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" aria-label="Spotify" className="bg-[#4B5563] rounded-full p-1 shadow">
                <Image src="/images/spotify.svg" alt="Spotify" width={24} height={24} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-[#A4CAFE] rounded-full p-1 shadow">
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
          {/* Important Links */}
          <div className="flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-white font-semibold underline mb-2">Important Links</h4>
            <ul className="text-white space-y-1 text-base">
              <li className="group"><a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">Home<span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" /></a></li>
              <li className="group"><a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">Process<span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" /></a></li>
              <li className="group"><a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">Case Studies<span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" /></a></li>
            </ul>
          </div>
          {/* Important Links */}
          <div className="flex flex-col items-start w-full md:w-1/3">
            <h4 className="text-white font-semibold underline mb-2">Important Links</h4>
            <ul className="text-white space-y-1 text-base">
              <li className="group"><a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">About Us<span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" /></a></li>
              <li className="group"><a href="#" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">Book a Call<span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out origin-left group-hover:w-full" /></a></li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="relative z-20 max-w-6xl mx-auto">
          <hr className="border-t border-white/60 my-2" />
          <p className="text-white text-center text-xs py-2">© Digisperts 2023-2024</p>
        </div>
      </footer>
    </>
  );
} 