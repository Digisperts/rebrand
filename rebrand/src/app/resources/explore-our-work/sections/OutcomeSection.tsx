import React from 'react';

export type Outcome = {
  icon: React.ReactNode;
  title: string;
  text: string;
  bgColor: string;
};

export default function OutcomeSection({
  title,
  description,
  outcomes
}: {
  title: string;
  description: string;
  outcomes: Outcome[];
}) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">{title}</h2>
      <p className="text-lg text-gray-800 mb-10 max-w-3xl">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {outcomes.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg p-8 flex flex-col items-start min-h-[200px]"
            style={{ background: item.bgColor }}
          >
            <span className="mb-4">{item.icon}</span>
            <div className="text-left w-full">
              <div className="font-bold text-2xl text-gray-900 mb-1">{item.title}</div>
              <div className="text-base text-gray-800 font-medium mb-1">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
