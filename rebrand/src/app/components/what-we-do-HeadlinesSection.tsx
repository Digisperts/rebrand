// components/HeadlinesSection.tsx
import React from 'react';

const headlines = [
  {
    title: 'Social Cranes',
    description: 'As a leading social media marketing (SMM) company...',
    link: '#',
  },
  {
    title: 'Smart Finance',
    description: 'At Digisperts LLC, our commitment to client confidentiality is unwavering...',
    link: '#',
  },
  {
    title: 'Social Cranes',
    description: 'We designed and developed their website...',
    link: '#',
  },
];

const HeadlinesSection = () => (
  <section className="py-16 px-4 bg-white">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">Making the Headlines</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {headlines.map((headline, index) => (
        <div key={index} className="bg-white shadow-md p-6 rounded-md">
          <h3 className="font-semibold text-blue-900 mb-2">{headline.title}</h3>
          <p className="text-gray-600 mb-4">{headline.description}</p>
          <a href={headline.link} className="text-blue-600 font-medium hover:underline">
            Know More →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default HeadlinesSection;
