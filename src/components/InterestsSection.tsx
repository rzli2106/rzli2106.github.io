import { Brain, Zap, Music, Target } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Cognitive Systems",
    description: "Understanding the mind through computational models",
  },
  {
    icon: Zap,
    title: "Neural Engineering",
    description: "Bridging neuroscience and technology",
  },
  {
    icon: Music,
    title: "Violin",
    description: "Classical music and performance",
  },
  {
    icon: Target,
    title: "Tennis",
    description: "Strategy and precision on the court",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interests & <span className="text-gradient">Passions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond research: what drives my curiosity
          </p>
        </div>

        {/* Interests grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className="glass-card rounded-xl p-6 text-center hover-lift group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <interest.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {interest.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
