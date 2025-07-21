"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function RealEstateExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Generate More Leads with a High-Performance Real Estate Website"
      heroSubtitle="Capture and convert more homebuyers and sellers with a lightning-fast, visually stunning, and lead-focused real estate website built by Digisperts."
      heroImage="/images/explore-our-work/real-estate/real-estate-hero.png"
      challengeData={{
        title: "The Challenge",
        description: "A real estate agency's outdated website was failing to compete in a crowded digital marketplace. It was slow, not mobile-friendly, and ineffective at generating leads.",
        challenges: [
          {
            title: 'Poor User Experience',
            text: <>The website offered a clunky property <br />
                    search, was difficult to navigate on <br />
                    mobile, and failed to showcase <br />
                    listings effectively.
                  </>,
            imageSrc: '/images/explore-our-work/real-estate/pin.png'
          },
          {
            title: 'Low Lead Conversion',
            text: <>The site lacked compelling calls-<br />
                    to-action and effective lead <br />
                    capture mechanisms, resulting in <br />
                    a high bounce rate.
                  </>,
            imageSrc: '/images/explore-our-work/real-estate/pin.png'
          },
          {
            title: 'Invisible in Search',
            text: <>The website was not optimized for <br />
                    search engines, making it difficult for <br />
                    potential clients to find the agency <br />
                    online.
                  </>,
            imageSrc: '/images/explore-our-work/real-estate/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Market & Competitor Analysis',
            description: "We analyzed the top-performing real estate websites in the client's market to establish benchmarks and identify opportunities.",
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'UX Design & Prototyping',
            description: "We created wireframes and interactive prototypes focused on the ideal journey for both buyers and sellers.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Custom Development & IDX Integration',
            description: 'Our developers built the custom WordPress theme and handled the complex IDX/MLS integration to ensure real-time listing accuracy.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Launch & Marketing Campaign Kick-off',
            description: 'We launched the new site and immediately began executing a supporting digital marketing strategy to drive traffic.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts designed and developed a new digital platform from the ground up, focused on three core pillars: user experience, lead generation, and performance.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Targeted Digital Marketing Foundation",
            text: "The website was built with a strong SEO foundation and integrated with analytics to support targeted SEM and social media advertising campaigns."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "IDX-Integrated, Mobile-First Website",
            text: "We built a beautiful, fast, and fully responsive website with seamless IDX/MLS integration, featuring an advanced property search and high-resolution photo galleries."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Conversion-Optimized Design",
            text: "We strategically placed lead capture forms, 'Schedule a Showing' buttons, and other calls-to-action throughout the site to maximize user engagement and conversion."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/real-estate/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The new Platform transformed the agency's online presence into its number one source of qualified leads.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/real-estate/outcome1.png" alt="" width={40} height={40} />,
            title: "300% Increase",
            text: "In qualified leads generated from the website in the first year.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/real-estate/outcome2.png" alt="" width={40} height={40} />,
            title: "50% Reduction",
            text: "In website bounce rate due to improved user experience and site speed.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/real-estate/outcome3.png" alt="" width={40} height={40} />,
            title: "Top 5 Ranking",
            text: "In local search results for key home-buying and selling terms.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/real-estate/wordpress.png" alt="Wordpress" width={64} height={64} />, name: "Wordpress" },
          { icon: <Image src="/images/explore-our-work/real-estate/idx.png" alt="IDX/MLS APIs" width={64} height={64} />, name: "IDX/MLS APIs" },
          { icon: <Image src="/images/explore-our-work/real-estate/acf.png" alt="ACF" width={64} height={64} />, name: "ACF" },
          { icon: <Image src="/images/explore-our-work/real-estate/map.png" alt="Google Maps Api" width={64} height={64} />, name: "Google Maps Api" },
          { icon: <Image src="/images/explore-our-work/real-estate/ads.jpg" alt="Google ADS" width={64} height={64} />, name: "Google ADS" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Dominate Your Real Estate Market?",
        subheading: "Stop losing leads to your competition. Let's build a website that works as hard as you do.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      children={null}
    />
  );
}