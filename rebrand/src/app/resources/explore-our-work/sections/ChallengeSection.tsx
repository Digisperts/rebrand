import React from 'react';
import Image from 'next/image';

export type Challenge = {
  title: string;
  text: React.ReactNode;
  icon?: React.ReactNode;
  imageSrc?: string;
};

export default function ChallengeSection({
  title,
  description,
  challenges
}: {
  title: string;
  description: string;
  challenges: Challenge[];
}) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="mb-10 font-semibold text-gray-900">{description}</p>
      <div className="grid md:grid-cols-3 gap-8">
        {challenges.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border shadow-md p-8 bg-white rounded transition-all"
            style={{ minHeight: 300 }}
          >
            {item.icon ? (
              <span className="mb-4">{item.icon}</span>
            ) : item.imageSrc ? (
              <Image src={item.imageSrc} width={40} height={40} alt="Icon" className="mb-4" />
            ) : null}
            <h3 className="font-bold text-xl text-[#003399] text-center mb-3">{item.title}</h3>
            <p className="text-base text-gray-700 text-center leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
