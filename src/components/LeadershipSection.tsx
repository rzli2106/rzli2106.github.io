import { Heart, Award, Cpu, Users, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    value: "$10,000+",
    label: "Raised for Charity",
    description: "Supporting Springfield Food Bank and Ronald McDonald House",
  },
  {
    icon: Cpu,
    value: "Arduino Kits",
    label: "Secured Grants",
    description: "Providing technology access to neurodivergent families",
  },
  {
    icon: Users,
    value: "AI Academy",
    label: "Founded & Led",
    description: "Building the next generation of AI researchers",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Making a difference through technology and community service
          </p>
        </div>

        {/* Main leadership card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">President</h3>
                  <a 
                    href="https://aiacademi.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  >
                    AI Academy Corp.
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As President of AI Academy Corp., I lead initiatives that bridge technology and community impact. 
                Our organization has raised over <span className="text-foreground font-semibold">$10,000</span> for 
                local charities including the Springfield Food Bank and Ronald McDonald House, while also securing 
                grants to provide Arduino kits to neurodivergent families, empowering them to explore technology 
                and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="glass-card rounded-xl p-6 text-center hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{achievement.value}</div>
              <div className="font-medium mb-2">{achievement.label}</div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
