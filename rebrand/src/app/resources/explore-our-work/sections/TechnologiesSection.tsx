import React from 'react';
import Image from 'next/image';

export type Technology = {
  icon: React.ReactNode;
  name: string;
};

export default function TechnologiesSection({
  title,
  description,
  technologies
}: {
  title: string;
  description: string;
  technologies: Technology[];
}) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg text-gray-800 mb-10 max-w-3xl mx-auto text-center">{description}</p>
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
        {technologies.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center w-40">
            {typeof tech.icon === 'string' ? (
              <Image src={tech.icon} alt={tech.name} width={60} height={60} className="mb-2" />
            ) : (
              <span className="mb-2 flex items-center justify-center w-[60px] h-[60px]">{tech.icon}</span>
            )}
            <span className="text-xl font-medium text-black mt-2 text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
