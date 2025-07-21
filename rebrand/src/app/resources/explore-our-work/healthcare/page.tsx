"use client";
import ExploreLayout from '../ExploreLayout';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';

export default function HealthcareExploreOurWork() {
  return (
    <ExploreLayout
      heroTitle="Modernize Patient Care with a Custom Healthcare App"
      heroSubtitle="Enhance patient engagement, streamline administrative tasks, and improve health outcomes with a secure, HIPAA-compliant mobile application built by Digisperts."
      heroImage="/images/explore-our-work/healthcare/health-care-hero.jpg"
      challengeData={{
        title: "The Challenge",
        description: "A busy healthcare clinic struggled with inefficient communication channels and administrative overhead, impacting both staff workload and patient satisfaction.",
        challenges: [
          {
            title: 'High Administrative Burden',
            text: <>The front desk was overwhelmed with <br />
                    phone calls for appointment <br />
                    scheduling, reminders, and <br />
                    prescription refills.
                  </>,
            imageSrc: '/images/explore-our-work/healthcare/pin.png'
          },
          {
            title: 'Appointment No-Shows',
            text: <>A lack of effective, automated <br />
                    reminders resulted in a high rate <br />
                    of missed appointments, leading <br />
                    to lost revenue.
                  </>,
            imageSrc: '/images/explore-our-work/healthcare/pin.png'
          },
          {
            title: 'Delayed Information Sharing',
            text: <>Sharing lab results and medical <br />
                    information was a slow, manual <br />
                    process, requiring patients to call or <br />
                    visit the clinic.
                  </>,
            imageSrc: '/images/explore-our-work/healthcare/pin.png'
          },
        ]
      }}
      processData={{
        title: "Our Process",
        steps: [
          {
            title: 'Clinical Workflow & Compliance Discovery',
            description: 'We worked with stakeholders to map patient journeys and ensure all HIPAA security requirements were addressed.',
            color: '#AFC6F7',
            numberColor: '#001133',
            number: '1'
          },
          {
            title: 'UI/UX Design for Accessibility',
            description: "Our design team focused on creating an intuitive and accessible interface for a diverse patient demographic.",
            color: '#F5AFAF',
            numberColor: '#3D0000',
            number: '2'
          },
          {
            title: 'Agile Development & EMR Integration',
            description: "The app was built using an agile methodology, with secure integration into the clinic's existing Electronic Medical Record (EMR) system.",
            color: '#FFE6B5',
            numberColor: '#664503',
            number: '3'
          },
          {
            title: 'Security Auditing & Launch',
            description: 'We conducted comprehensive security audits before launching the app on the Apple App Store and Google Play Store.',
            color: '#9BB5EB',
            numberColor: '#00143D',
            number: '4'
          },
        ]
      }}
      solutionData={{
        title: "The Digisperts Solution",
        description: "Digisperts developed a patient-centric mobile application designed to be a secure and convenient digital front door to the clinic's services.",
        solutions: [
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Self-Service Appointment Management",
            text: "Patients can schedule, manage, and receive automated push-notification reminders for their appointments directly within the app."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Secure & Direct Communication",
            text: "A HIPAA-compliant messaging portal allows patients to securely communicate with their care team for non-urgent matters and access their lab results and medical records."
          },
          {
            icon: <FaCircleCheck className="text-blue-900 text-xl" />,
            title: "Automated Prescription Refills",
            text: "A simple-to-use feature enables patients to request prescription refills, which are automatically routed to the clinical staff for approval."
          },
        ]
      }}
      chatbotData={{
        image: "/images/explore-our-work/healthcare/chatbot.png",
        alt: "Chatbot UI"
      }}
      outcomeData={{
        title: "The Outcome",
        description: "The mobile app revolutionized the clinic's operations and its relationship with patients, driving efficiency and improving the quality of care.",
        outcomes: [
          {
            icon: <Image src="/images/explore-our-work/healthcare/outcome1.png" alt="" width={40} height={40} />,
            title: "60% Reduction",
            text: "In administrative phone calls related to appointments and refills.",
            bgColor: "#D3E1FF"
          },
          {
            icon: <Image src="/images/explore-our-work/healthcare/outcome2.png" alt="" width={40} height={40} />,
            title: "35% Decrease",
            text: "In patient no-show rates within the first six months.",
            bgColor: "#FFD0D0"
          },
          {
            icon: <Image src="/images/explore-our-work/healthcare/outcome3.png" alt="" width={40} height={40} />,
            title: "90% Patient Adoption",
            text: "Rate for accessing lab results digitally instead of by phone or in person.",
            bgColor: "#FFEBC4"
          },
        ]
      }}
      technologiesData={{
        title: "Technologies Used",
        // description: "We leveraged the following technologies to deliver the solution.",
        technologies: [
          { icon: <Image src="/images/explore-our-work/healthcare/reactjs.png" alt="React.js" width={64} height={64} />, name: "React.js" },
          { icon: <Image src="/images/explore-our-work/healthcare/nodejs.png" alt="Node.js" width={64} height={64} />, name: "Node.js" },
          { icon: <Image src="/images/explore-our-work/healthcare/firebase.png" alt="Firebase" width={64} height={64} />, name: "Firebase" },
          { icon: <Image src="/images/explore-our-work/healthcare/hl7.png" alt="HL7/FHIR" width={64} height={64} />, name: "HL7/FHIR" },
          { icon: <Image src="/images/explore-our-work/healthcare/end.png" alt="End to End Encryption" width={64} height={64} />, name: "End-to-End Encryption" },
        ]
      }}
      preFooterData={{
        backgroundImage: "/images/footer.jpg",
        heading: "Ready to Enhance Your Patient Experience?",
        subheading: "Empower your patients and free up your staff. Let's build a healthcare app that makes a difference.",
        buttonText: "TALK TO AN EXPERT",
        buttonHref: "#"
      }}
      children={null}
    />
  );
}