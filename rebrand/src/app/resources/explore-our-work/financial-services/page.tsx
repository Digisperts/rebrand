"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function FinancialServicesExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Increase Efficiency and Reduce Risk with Process Automation"
      heroSubtitle="Automate repetitive back-office tasks, ensure compliance, and empower your team to focus on high-value work with a custom Business Process Automation (BPA) solution from Digisperts."
      heroImage="/images/explore-our-work/financial-services/financial-hero.png"
      challengeData={{
        title: "The Challenge",
        description: "A financial services firm was being slowed down by manual, time-consuming processes, which increased operational costs and the risk of human error.",
        challenges: [
          {
            title: 'Repetitive Manual Data Entry',
            text: <>Employees spent hours each day <br />
                    manually entering and reconciling <br />
                    data from various sources into core <br />
                    systems.
                  </>,
            imageSrc: '/images/explore-our-work/financial-services/pin.png'
          },
          {
            title: 'Time-Consuming Reporting',
            text: <>The generation of daily and <br />
                    monthly reports was a laborious <br />
                    manual task, delaying access to <br />
                    critical business insights.
                  </>,
            imageSrc: '/images/explore-our-work/financial-services/pin.png'
          },
          {
            title: 'High Risk of Human Error',
            text: <>Manual processes were inherently <br />
                    prone to errors, creating significant <br />
                    financial and compliance risks.
                  </>,
            imageSrc: '/images/explore-our-work/financial-services/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Process Discovery & ROI Analysis',
            description: 'We worked with the client to identify and map the processes with the highest potential for automation and calculated the expected ROI.',
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'Solution Design & Technology Selection',
            description: "We designed the automation workflow and selected the best-fit RPA and integration tools for the job.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Bot Development & Testing',
            description: 'Our automation engineers developed and rigorously tested the software bots in a sandboxed environment.',
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Deployment & Performance Monitoring',
            description: 'We deployed the bots into the live environment and implemented dashboards to monitor their performance and the value being delivered.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts developed a suite of custom software bots and integrations to automate the firm's most critical back-office workflows.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Robotic Process Automation (RPA)",
            text: "We deployed software bots to mimic human actions, automating data extraction from PDFs and emails, data entry into multiple systems, and data reconciliation."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Automated Report Generation Engine",
            text: "We built a system that automatically pulls data from various sources, compiles it into branded report templates, and distributes them to stakeholders on a pre-defined schedule."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Automated Compliance Monitoring",
            text: "A rules-based engine was created to automatically flag transactions and accounts for review based on pre-set compliance criteria, streamlining the audit process."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/financial-services/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The automation solution delivered a significant ROI by boosting productivity, improving accuracy, and strengthening the firm's compliance posture.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/financial-services/outcome1.png" alt="" width={40} height={40} />,
            title: "90% Reduction",
            text: "In time spent on manual data entry and report generation.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/financial-services/outcome2.png" alt="" width={40} height={40} />,
            title: "99.9% Accuracy",
            text: "In automated data processing, virtually eliminating human error.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/financial-services/outcome3.png" alt="" width={40} height={40} />,
            title: "50% Faster",
            text: "Compliance checks and audit preparations.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/financial-services/uipath.png" alt="UiPath/Automation" width={64} height={64} />, name: "UiPath/Automation" },
          { icon: <Image src="/images/explore-our-work/financial-services/python.png" alt="Python" width={64} height={64} />, name: "Python" },
          { icon: <Image src="/images/explore-our-work/financial-services/restapi.png" alt="Rest & Soap APIs" width={64} height={64} />, name: "Rest & Soap APIs" },
          { icon: <Image src="/images/explore-our-work/financial-services/microsoft.png" alt="Microsoft Power Automate" width={64} height={64} />, name: "Microsoft Power Automate" },
          { icon: <Image src="/images/explore-our-work/financial-services/sql.png" alt="SQL Server" width={64} height={64} />, name: "SQL Server" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Automate Your Operations?",
        subheading: "Unlock your team's potential by eliminating manual work. Let's build an automation solution that drives efficiency and growth.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      children={null}
    />
  );
}