"use client";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from 'next/image';


const teamMembers = [
  {
    name: 'Harvey, N',
    role: 'Project Manager and CEO',
    image: '/images/harvey.png', // Replace with actual path
  },
  {
    name: 'Samuel, D',
    role: 'Creative Designer and Copywriter',
    image: '/images/samuel-d.png',
  },
  {
    name: 'Richard, K',
    role: 'CTO and Cloud Engineer',
    image: '/images/richard.png',
  },
  {
    name: 'Samuel, O',
    role: 'Blockchain and Cyber Security',
    image: '/images/samuel-o.png',
  },
];

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <section className="bg-white px-4 mt-6 md:px-20 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Who are we?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We are team of experts in various fields who came together for one common goal, to help your business achieve its desire success goals. Since the
        </p>

        <h3 className="text-2xl font-semibold text-center mb-4">Our Approach</h3>
        <p className="text-center text-gray-600 mb-16">
          At Digisperts, we believe in a customer-centric approach that puts your needs at the forefront. We
        </p>

        <h3 className="text-2xl font-semibold text-center mb-6">Our Team</h3>
        <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto">
          Our team of skilled professionals combines technical prowess...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
       {/* Customer Success Officer Banner */}
      <div className="relative w-full h-[300px]  mt-10 bg-opacity-50">
        <Image
        src="/images/who-we-are-banner.png"
        alt="Customer Success Officer Banner"
        fill
        // objectFit="cover"
        // objectPosition="center"
        className="object-cover object-center"
        priority
  />


        <div className="absolute inset-0 bg-opacity-50 z-10 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Speak to the Customer Success Officer
            </h3>
            <p className="text-gray-300 max-w-lg">
              We are interested in your success story and dynamic goals. Our responsibility is to offer a hand in ensuring your business succeeds.
            </p>
          </div>
          <div className="w-40 h-40 relative overflow-hidden shadow-lg">
            <Image
              src="/images/harvey.png"
              alt="Customer Success Officer"
              fill
              objectFit="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
} 