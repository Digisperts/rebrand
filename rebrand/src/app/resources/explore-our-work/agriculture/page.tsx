"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import Link from "next/link";

export default function AgricultureExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Modernize Your Cooperative with a Custom Digital Platform"
      heroSubtitle="Streamline operations from farm to market, improve member transparency, and make data-driven decisions with a comprehensive digital platform from Digisperts."
      heroImage="/images/explore-our-work/agriculture/agriculture-hero.jpg"
      challengeData={{
        title: "The Challenge",
        description: "An established agricultural cooperative was burdened by manual, paper-based processes that were inefficient, error-prone, and lacked the transparency its members deserved.",
        challenges: [
          {
            title: 'Inefficient Operations',
            text: <>Member registration, produce logging, <br />
                    and payment calculations were all <br />
                    done by hand, consuming vast <br />
                    administrative resources.
                  </>,
            imageSrc: '/images/explore-our-work/agriculture/pin.png'
          },
          {
            title: 'Lack of Traceability',
            text: <>It was difficult to track produce <br />
                    from individual farms through to <br />
                    the final sale, leading to payment <br />
                    disputes.
                  </>,
            imageSrc: '/images/explore-our-work/agriculture/pin.png'
          },
          {
            title: 'Limited Data for Decision-Making',
            text: <>Management lacked the real-time <br />
                    data needed to analyze production <br />
                    trends, market prices, and overall <br />
                    cooperative performance.
                  </>,
            imageSrc: '/images/explore-our-work/agriculture/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Operational Deep Dive',
            description: "We spent time on-site to understand every step of the cooperative's process, from the farm to the administrative office.",
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'User-Centric Platform Design',
            description: "We designed the platform with two key users in mind: the members (simple, mobile-friendly interface) and the administrators (powerful, data-rich dashboard).",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Phased Development & Rollout',
            description: 'We built and launched the platform in phases—starting with member management, then produce tracking, then payments—to ensure smooth adoption.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Training & Ongoing Support',
            description: 'We provided extensive training for all users and offer continuous support to manage the platform.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts developed a secure, all-in-one digital platform to manage every aspect of the cooperative's operations.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Integrated Member & Produce Management",
            text: "A central system handles member onboarding, and tracks all produce from farm log-in to final sale with complete traceability."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Automated Payment & Accounting System",
            text: "The platform automatically calculates member payments based on verified produce data and integrates with accounting software, ensuring timely and accurate compensation."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Analytics & Market Data Portal",
            text: "A dashboard provides management with key performance indicators and gives members access to real-time market pricing information to inform their planting and harvesting decisions."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/agriculture/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The digital platform modernized the cooperative, fostering trust with members and unlocking new levels of efficiency and strategic insight.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/agriculture/outcome1.png" alt="" width={40} height={40} />,
            title: "80% Reduction",
            text: "In administrative time spent on manual record-keeping and payment processing.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/agriculture/outcome2.png" alt="" width={40} height={40} />,
            title: "100% Traceability",
            text: "Of all produce, completely eliminating payment disputes and improving quality control.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/agriculture/outcome3.png" alt="" width={40} height={40} />,
            title: "10% Increase",
            text: "In average member profitability due to access to real-time market data.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/agriculture/ruby.png" alt="Ruby on Rails" width={64} height={64} />, name: "Ruby on Rails" },
          { icon: <Image src="/images/explore-our-work/agriculture/reactjs.png" alt="React.js" width={64} height={64} />, name: "React.js" },
          { icon: <Image src="/images/explore-our-work/agriculture/postgre.png" alt="PostgreSQL" width={64} height={64} />, name: "PostgreSQL" },
          { icon: <Image src="/images/explore-our-work/agriculture/twilio.png" alt="Twilio" width={64} height={64} />, name: "Twilio" },
          { icon: <Image src="/images/explore-our-work/agriculture/heroku.png" alt="Heroku" width={64} height={64} />, name: "Heroku" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Bring Your Cooperative into the Digital Age?",
        subheading: "Empower your members and future-proof your operations. Let's build a platform for shared success.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "/schedule-a-consultation"
      }}
      
    >
      {/* No children, so provide an empty fragment to satisfy the required prop */}
      <></>
    </ExploreLayout>
  );
}