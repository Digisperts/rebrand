"use client";
import NavBar from "../nav";
import Footer from "../Footer";

export default function HowWeWorkPage({ number, title, description, services }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <main className="flex flex-1 items-center justify-center pt-32">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 max-w-3xl">{description}</p>
        {services && (
          <>
            <h4 className="font-semibold text-gray-700 mb-1">What we do</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
} 