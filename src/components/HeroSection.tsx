import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import headshot from "@/assets/headshot.png";

const HeroSection = () => {
  const scrollToResearch = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-md opacity-75" />
              <img 
                src={headshot} 
                alt="Richard Z. Li - Professional headshot"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-2 border-primary/30"
              />
            </div>
          </div>

          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-up animation-delay-100">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Researcher & Innovator</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-200">
            Hi, I'm{" "}
            <span className="text-gradient">Richard Z. Li</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-300">
            Incoming B.S. in Cognitive Science at{" "}
            <span className="text-foreground font-medium">Cornell University</span>{" "}
            (Class of 2030). Researcher specializing in{" "}
            <span className="text-primary">Extended Reality</span>,{" "}
            <span className="text-primary">ASD Interventions</span>, and{" "}
            <span className="text-primary">Human-Computer Interaction</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" onClick={scrollToResearch}>
              View Research
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://docs.google.com/document/d/1FTOb8F-BGoUU24d6MVE7R69Vs1au5v2z24F6UgpoaZY/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Access CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
