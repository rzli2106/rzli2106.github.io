import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import LeadershipSection from "@/components/LeadershipSection";
import InterestsSection from "@/components/InterestsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <ResearchSection />
        <LeadershipSection />
        <InterestsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
