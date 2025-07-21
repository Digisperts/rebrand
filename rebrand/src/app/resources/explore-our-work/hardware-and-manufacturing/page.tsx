"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function HardwareAndManufacturingExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle=" Elevate Your Hardware with World-Class Embedded Software"
      heroSubtitle="Create a market-leading product by bundling your hardware with intuitive, reliable, and powerful OEM software developed by the experts at Digisperts."
      heroImage="/images/explore-our-work/hardware-and-manufacturing/hardware-hero.jpg"
      challengeData={{
        title: "The Challenge",
        description: "A manufacturer of innovative industrial hardware lacked the specialized software development expertise to create a user interface that matched the quality of their physical product.",
        challenges: [
          {
            title: 'Lack of In-House Software Talent',
            text: <>The company's core competency was <br />
                    hardware engineering, not software <br />
                    UI/UX design or application <br />
                    development.
                  </>,
            imageSrc: '/images/explore-our-work/hardware-and-manufacturing/pin.png'
          },
          {
            title: 'Risk of Poor User Experience',
            text: <>A clunky or unreliable software <br />
                    interface would undermine the <br />
                    perceived quality of their <br />
                    advanced hardware and lead to <br />
                    customer dissatisfaction.
                  </>,
            imageSrc: '/images/explore-our-work/hardware-and-manufacturing/pin.png'
          },
          {
            title: 'Delayed Time-to-Market',
            text: <>Attempting to build the software in-<br />
                    house would significantly delay the <br />
                    product launch and cede ground to <br />
                    competitors.
                  </>,
            imageSrc: '/images/explore-our-work/hardware-and-manufacturing/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Joint Requirements & Prototyping',
            description: 'We held intensive workshops with the hardware team to define requirements and created interactive prototypes for early feedback.',
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'Agile Development Sprints',
            description: "We developed the software in two-week sprints, with regular demos to ensure the project stayed aligned with the client's vision.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Hardware-in-the-Loop Testing',
            description: 'We performed rigorous testing with the actual hardware to validate performance and reliability under real-world conditions.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'White-Labeling & Delivery',
            description: ' We delivered the fully branded, production-ready software package with comprehensive documentation for a seamless handover.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts acted as the dedicated OEM software development partner, delivering a production-ready, white-labeled application.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Intuitive UI/UX Design",
            text: "We designed a clean, modern, and highly intuitive graphical user interface (GUI) that makes complex hardware control simple and efficient for the end-user."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Reliable & Scalable Architecture",
            text: "The software was built on a stable, well-documented architecture to ensure rock-solid reliability in demanding industrial environments and allow for future feature expansion."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Deep Hardware Integration",
            text: " Our engineers worked hand-in-hand with the client's hardware team to develop a robust communication protocol and ensure seamless software-hardware interaction."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/hardware-and-manufacturing/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The custom software became a key differentiator for the hardware, accelerating sales and enhancing the brand's reputation for quality and innovation.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/outcome1.png" alt="" width={40} height={40} />,
            title: "6-Month Faster",
            text: "Time-to-market compared to the projected in-house development timeline.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/outcome2.png" alt="" width={40} height={40} />,
            title: "40% Reduction",
            text: "In customer support calls related to product operation and usability.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/outcome3.png" alt="" width={40} height={40} />,
            title: "Key Selling Feature",
            text: "The software's intuitive design and powerful features became a primary reason customers chose their product over competitors.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/cplus.png" alt="C++/Qt" width={64} height={64} />, name: "C++/Qt" },
          { icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/linux.png" alt="Embedded Linux/Yocto" width={64} height={64} />, name: "Embedded Linux/Yocto" },
          { icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/mqtt.png" alt="MQTT" width={64} height={64} />, name: "MQTT" },
          { icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/python.png" alt="Python" width={64} height={64} />, name: "Python" },
          { icon: <Image src="/images/explore-our-work/hardware-and-manufacturing/modbus.png" alt="Modbus" width={64} height={64} />, name: "Modbus" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Need a Software Partner for Your Hardware?",
        subheading: "Focus on what you do best. Let us build the software that makes your hardware shine.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      children={null}
    />
  );
}