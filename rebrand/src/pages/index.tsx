import React from 'react';
import HowWeWorkPage from '../app/page';

export default function Home() {
  const steps = [
    {
      number: 1,
      title: 'Unveiling Your Vision – Let’s Dive Deep Into Your Idea!',
      description:
        "At digispert LLC, we start by understanding your vision inside out. We gather comprehensive research...",
      services: [
        'Discovery Workshop',
        'Product Strategy',
        'Pitch Deck',
        'UX Audit',
        'Analytics Audit',
      ],
    },
    {
      number: 2,
      title: 'Product Design',
      description:
        "At digispert LLC, we leverage our deep understanding of your business...",
      services: [
        'UX Research',
        'UI Design',
        'UX Design',
        'UI Kit',
        'Brand and Compliance analysis',
        'Branding',
        'Usability testing',
        'Design Sprint',
      ],
    },
    {
      number: 3,
      title: 'Unleashing Unique Experiences',
      description:
        "At Digispert LLC, we meticulously adhere to project scopes...",
      services: [
        'Mobile Development',
        'Web Development',
        'Backend Development',
        'Quality Assurance',
      ],
    },
    {
      number: 4,
      title: 'Unleashing Unique Experiences',
      description:
        "At Digispert LLC, we meticulously adhere to project scopes...",
      services: [
        'Mobile Development',
        'Web Development',
        'Backend Development',
        'Quality Assurance',
      ],
    },
    {
      number: 5,
      title: 'Maintenance',
      description:
        "Every infrastructure needs good maintenance, thinking of product upgrades? ...",
      services: [
        'Uptime and Downtime report',
        'System administration',
        'Product Upgrades',
        'Product performance assessment',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-16 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Process</h2>
      {steps.map((step) => (
        <HowWeWorkPage key={step.number} {...step} />
      ))}
      <div className="text-center mt-12">
        <p className="text-lg text-blue-700 font-medium">Got a Project?</p>
        <a href="#" className="text-blue-500 underline">
          Let’s discuss
        </a>
      </div>
    </div>
  );
}
