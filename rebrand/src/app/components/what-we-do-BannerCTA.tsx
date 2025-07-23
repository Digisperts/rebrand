'use client';
import Image from 'next/image';
import Link from "next/link";

interface BannerCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const BannerCTA = ({
  title,
  description,
  buttonText,
  buttonLink = '#',
  backgroundImage = '/images/footer.jpg',
}: BannerCTAProps) => {
  return (
    <section className="relative w-full h-[300px] flex justify-center -mb-[150px] z-30">
      
      <div className="relative w-[1280px] h-full rounded-lg overflow-hidden mx-[80px] shadow-lg">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="CTA Background"
          fill
          className="object-cover object-center"
          priority
        />
        
        <div className="absolute inset-0 bg-black/80 z-10" />

        
        <div className="relative z-20 h-full flex items-center px-12">
          <div className="max-w-lg">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <Link
              href={buttonLink}
              className="inline-block text-sm bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
