"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function SaasAndTechnologyExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Building a Better Digital Future, Together."
      heroSubtitle="We harness the power of technology to streamline workflows, automate tasks, and unlock new possibilities for businesses and individuals."
      heroImage="/images/explore-our-work/saas-and-technology/saas-hero.png"
      challengeData={{
        title: "The Challenge",
        description: "A majority of support tickets were for common, easily solvable issues like password resets, billing questions, and basic feature usage.",
        challenges: [
            {
              title: 'High Ticket Volume',
            text: <>A majority of support tickets were for<br />
                    common, easily solvable issues like<br />
                    password resets, billing questions, and<br />
                    basic feature usage.
                  </>,
            imageSrc: '/images/explore-our-work/saas-and-technology/pin.png'
            },
            {
              title: 'Slow First-Response Time',
            text: <>Customers with simple questions<br />
                    were forced to wait in long<br />
                    queues, leading to frustration and<br />
                    potential churn.
                  </>,
            imageSrc: '/images/explore-our-work/saas-and-technology/pin.png'
            },
            {
              title: 'Inefficient Agent Utilization',
            text: <>Highly skilled support agents were<br />
                    spending most of their time answering<br />
                    repetitive questions instead of tackling<br />
                    complex customer problems.
                  </>,
            imageSrc: '/images/explore-our-work/saas-and-technology/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Support Ticket Analysis',
            description: 'We analyzed thousands of past support tickets to identify the most common questions and resolution paths.',
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'AI Model Training & Integration',
            description: "We selected the appropriate AI framework and trained the model on the client's specific data, then integrated it with their existing helpdesk software.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Conversation Design',
            description: 'We designed natural, helpful, and on-brand conversation flows for the chatbot.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Beta Testing & Continuous Learning',
            description: 'We launched the chatbot to a segment of users and used the feedback to continuously improve its accuracy and helpfulness.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts designed and deployed a custom AI-powered chatbot integrated directly into the company's website and application.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Automated Issue Resolution",
            text: "The bot autonomously handles the top 80% of repetitive queries, guiding users through solutions step-by-step."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Natural Language Understanding (NLU)",
            text: "The chatbot was trained on the company's knowledge base and past support tickets to understand and accurately answer user questions in a conversational way."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Intelligent Human Handoff",
            text: "For complex issues, the chatbot seamlessly escalates the conversation to a live agent, providing the agent with the full context and chat history."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/saas-and-technology/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The AI chatbot transformed the company's support model, dramatically improving both efficiency and customer satisfaction.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/saas-and-technology/outcome1.png" alt="" width={40} height={40} />,
            title: "70% Reduction",
            text: "In incoming support tickets for repetitive issues.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/saas-and-technology/outcome2.png" alt="" width={40} height={40} />,
            title: "90% Improvement",
            text: "In first-response time, providing instant answers to most customer queries.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/saas-and-technology/outcome3.png" alt="" width={40} height={40} />,
            title: "45% Increase",
            text: "In agent capacity, allowing the team to focus on proactive support and complex cases.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/saas-and-technology/botpress.png" alt="Botpress" width={64} height={64} />, name: "Botpress" },
          { icon: <Image src="/images/explore-our-work/saas-and-technology/nodejs.png" alt="Node.js" width={64} height={64} />, name: "Node.js" },
          { icon: <Image src="/images/explore-our-work/saas-and-technology/python.png" alt="Python" width={64} height={64} />, name: "Python" },
          { icon: <Image src="/images/explore-our-work/saas-and-technology/zendesk.png" alt="Zendesk" width={64} height={64} />, name: "Zendesk" },
          { icon: <Image src="/images/explore-our-work/saas-and-technology/webhook.png" alt="Webhook" width={64} height={64} />, name: "Webhook" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Automate Your Customer Support?",
        subheading: "Stop answering the same questions over and over. Let's build an AI chatbot that works for you 24/7.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      
    >
      {/* No children, so provide an empty fragment to satisfy the required prop */}
      <></>
    </ExploreLayout>
  );
}