"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function RetailAndEcommerceExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Scale Your Retail Business with Unified Commerce"
      heroSubtitle="Supercharge your growth by eliminating stockouts and manual work. Digisperts builds integrated e-commerce and POS solutions that sync your inventory in real-time, automate operations, and unlock powerful business insights."
      heroImage="/images/explore-our-work/retail-and-ecommerce/retail-hero.jpg"
      challengeData={{
        title: "The Challenge",
        description: "A multi-channel retailer was being held back by disconnected systems, leading to significant operational friction and lost revenue.",
        challenges: [
          {
            title: 'Error-Prone Manual Work',
            text: <>Manually updating inventory between <br />
                    their physical store's POS and their <br />
                    e-commerce platform was slow and <br />
                    resulted in constant inaccuracies.
                  </>,
            imageSrc: '/images/explore-our-work/retail-and-ecommerce/pin.png'
          },
          {
            title: 'Poor Customer Experience',
            text: <>Frequent overselling of products <br />
                    led to canceled orders, frustrated <br />
                    customers, and damage to the <br />
                    brand's reputation.
                  </>,
            imageSrc: '/images/explore-our-work/retail-and-ecommerce/pin.png'
          },
          {
            title: 'Lack of Actionable Data',
            text: <>Without a unified view of sales and <br />
                    stock, the business struggled to make <br />
                    timely, data-driven purchasing and <br />
                    marketing decisions.
                  </>,
            imageSrc: '/images/explore-our-work/retail-and-ecommerce/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Discovery & Systems Analysis',
            description: "We mapped the client's existing sales and inventory workflows to identify key bottlenecks.",
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'Custom Development & Integration',
            description: " Our engineers built the bespoke e-commerce platform and the critical integration layer.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Data Migration & Testing',
            description: 'We ensured a seamless transition of all product and customer data with rigorous end-to-end testing.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Deployment & Optimization',
            description: 'After a successful launch, we continue to provide support and optimize the platform for performance.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts engineered a centralized commerce platform to serve as a single source of truth, automating workflows from sale to fulfillment.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Business Intelligence Dashboard",
            text: "We implemented a custom analytics dashboard to provide a 360-degree view of sales trends, customer behavior, and inventory turnover."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Custom E-commerce & POS Integration",
            text: "We developed a high-performance e-commerce website and integrated it seamlessly with their in-store POS system for flawless, real-time data synchronization."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Centralized Inventory & Order Management",
            text: "A unified dashboard allows for managing products, pricing, and orders across all channels, with automated routing to the fulfillment team."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/retail-and-ecommerce/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The integrated solution transformed the client's operational efficiency and profitability, creating a scalable foundation for future growth.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/retail-and-ecommerce/outcome1.png" alt="" width={40} height={40} />,
            title: "95% Reduction",
            text: "In stock-related order cancellations and customer complaints.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/retail-and-ecommerce/outcome2.png" alt="" width={40} height={40} />,
            title: "40% Increase",
            text: "In operational efficiency, freeing up staff from manual data entry.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/retail-and-ecommerce/outcome3.png" alt="" width={40} height={40} />,
            title: "100% Real-Time",
            text: "Visibility into sales and inventory, enabling smarter purchasing decisions.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/reactjs.png" alt="React.js" width={64} height={64} />, name: "React.js" },
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/nodejs.png" alt="Node.js" width={64} height={64} />, name: "Node.js" },
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/postgre.png" alt="Postgre" width={64} height={64} />, name: "PostgreSQL" },
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/shopify.png" alt="Shopify" width={64} height={64} />, name: "Shopify API / Custom POS API" },
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/aws.png" alt="Aws" width={64} height={64} />, name: "AWS (for scalable hosting)" },
          { icon: <Image src="/images/explore-our-work/retail-and-ecommerce/analytics.png" alt="Google Analytics" width={64} height={64} />, name: "Google Analytics" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Unify Your Commerce?",
        subheading: "Stop letting manual processes limit your potential. Let's build a solution that scales with your ambition.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      
    >
      {/* No children, so provide an empty fragment to satisfy the required prop */}
      <></>
    </ExploreLayout>
  );
}