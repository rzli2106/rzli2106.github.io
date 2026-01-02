import { ExternalLink, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchProjects = [
  {
    title: "A Review of Autism Spectrum Disorder and Interpersonal Space Perception",
    role: "Research Scientist",
    venue: "IEEE ISEC 2025",
    outcome: "Analyzed 679 studies to identify spatial preferences in ASD populations",
    tags: ["ASD", "Psychology", "Systematic Review"],
    featured: true,
    size: "large",
  },
  {
    title: "Music Therapy for ASD: A Comprehensive Literature Review",
    role: "Research Scientist",
    venue: "IEEE UEMCON 2024",
    outcome: "Explored AI for personalizing therapeutic interventions",
    tags: ["Music Therapy", "AI", "ASD"],
    size: "medium",
  },
  {
    title: "Eight Questions on the Evolution and Impact of Extended Reality",
    role: "Research Assistant",
    affiliation: "Western New England University",
    venue: "IEEE ICPHM 2024",
    outcome: "Systematic review of XR technologies and their applications",
    doi: "10.1109/ICPHM61352.2024.10626748",
    tags: ["XR", "VR/AR", "HCI"],
    size: "medium",
  },
  {
    title: "Applications of Virtual Reality and Treadmills for Renovation",
    shortTitle: "ImmersiveBuild (VR)",
    role: "Research Assistant",
    affiliation: "WNEU",
    venue: "IEEE ICIR 2024",
    outcome: "Integrated Meta Quest 3 and KatWalk treadmills for immersive experiences",
    tags: ["VR", "Hardware", "Innovation"],
    size: "small",
  },
  {
    title: "Embodied Immersive Training for Human-Drone Interactions in Wildlife Preparedness",
    role: "Research Assistant",
    affiliation: "WNEU",
    venue: "IEEE ISEC 2025",
    outcome: "Developed training systems for human-drone collaboration",
    tags: ["Drones", "Training", "Wildlife"],
    size: "small",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed publications at leading IEEE conferences
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Featured large card */}
          <div className="md:col-span-2 lg:col-span-2 glass-card rounded-xl p-8 hover-lift group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="flex items-start gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                Featured
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                {researchProjects[0].venue}
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {researchProjects[0].title}
            </h3>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Users className="h-4 w-4" />
              <span>{researchProjects[0].role}</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              {researchProjects[0].outcome}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {researchProjects[0].tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Medium cards */}
          {researchProjects.slice(1, 3).map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                  {project.venue}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Users className="h-4 w-4" />
                <span>{project.role}</span>
                {project.affiliation && (
                  <span className="text-xs">• {project.affiliation}</span>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.outcome}
              </p>

              {project.doi && (
                <a
                  href={`https://doi.org/${project.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <FileText className="h-3 w-3" />
                  DOI: {project.doi}
                </a>
              )}
              
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Small cards row */}
          {researchProjects.slice(3).map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                  {project.venue}
                </span>
              </div>
              
              <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.shortTitle || project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Users className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.outcome}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
