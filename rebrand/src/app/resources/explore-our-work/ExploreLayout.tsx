import NavBar from '../../nav';
import Footer from '../../Footer';
import HeroSection from './sections/HeroSection';
import ChallengeSection from './sections/ChallengeSection';
import ProcessSection from './sections/ProcessSection';
import SolutionSection from './sections/SolutionSection';
import ChatbotSection from './sections/ChatbotSection';
import OutcomeSection from './sections/OutcomeSection';
import TechnologiesSection from './sections/TechnologiesSection';
import PreFooterSection from './sections/PreFooterSection';

export default function ExploreLayout({
  heroTitle,
  heroSubtitle,
  heroImage,
  challengeData,
  processData,
  solutionData,
  chatbotData,
  outcomeData,
  technologiesData,
  preFooterData,
  children
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <HeroSection title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
      <ChallengeSection {...challengeData} />
      <ProcessSection {...processData} />
      <SolutionSection {...solutionData} />
      <ChatbotSection {...chatbotData} />
      <OutcomeSection {...outcomeData} />
      <TechnologiesSection {...technologiesData} />
      <PreFooterSection {...preFooterData} />
      {children}
      <Footer />
    </div>
  );
}