import React from 'react';
import Image from 'next/image';

export default function ChatbotSection({
  image,
  alt
}: {
  image: string;
  alt: string;
}) {
  return (
    <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <div className="shadow-lg border p-4 rounded">
        <Image
          src={image}
          alt={alt}
          width={1400}
          height={600}
          className="object-cover z-0"
        />
      </div>
    </section>
  );
}
