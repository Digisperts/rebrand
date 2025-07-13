// components/BannerCTA.tsx
import React from 'react';

interface BannerCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const BannerCTA: React.FC<BannerCTAProps> = ({ title, description, buttonText, onClick }) => (
  <section className="bg-black text-white py-16 px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
    <p className="mb-6 max-w-2xl mx-auto">{description}</p>
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
    >
      {buttonText}
    </button>
  </section>
);

export default BannerCTA;
