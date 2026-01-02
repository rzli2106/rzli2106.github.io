import { useState, useEffect, useRef } from "react";
import { FileText, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResearchProject {
  title: string;
  fullTitle?: string;
  shortTitle?: string;
  role: string;
  venue: string;
  outcome: string;
  doi: string;
  tags: string[];
  featured?: boolean;
  size: string;
  affiliation?: string;
  location?: string;
  dateRange: string;
  description: string[];
}

const researchProjects: ResearchProject[] = [
  {
    title: "A Review of Autism Spectrum Disorder and Interpersonal Space Perception",
    role: "Research Scientist",
    venue: "IEEE ISEC 2025",
    outcome: "Analyzed 679 studies to identify spatial preferences in ASD populations",
    doi: "10.1109/ISEC64801.2025.11147259",
    tags: ["ASD", "Psychology", "Systematic Review"],
    featured: true,
    size: "large",
    dateRange: "December 2022 - March 2025",
    description: [
      "Conducted a systematic review of 679 studies, analyzing 11 key papers on interpersonal space in ASD.",
      "Identified altered spatial preferences and gaps in research regarding adults and diverse cultures.",
      "Highlighted VR and robotics as training tools for spatial awareness interventions.",
    ],
  },
  {
    title: "Music Therapy for ASD: A Comprehensive Literature Review",
    fullTitle: "Music Therapy for Autism Spectrum Disorder: A Comprehensive Literature Review on Therapeutic Efficacy, Limitations, and AI Prospective",
    role: "Research Scientist",
    venue: "IEEE UEMCON 2024",
    outcome: "Explored AI for personalizing therapeutic interventions",
    doi: "10.1109/UEMCON62879.2024.10754769",
    tags: ["Music Therapy", "AI", "ASD"],
    size: "medium",
    dateRange: "November 2023 - October 2024",
    description: [
      "Reviewed 18 recent studies (2020–2024) on music therapy efficacy for ASD, focusing on social-emotional reciprocity.",
      "Explored the potential of AI to personalize interventions and improve emotion detection in therapy.",
    ],
  },
  {
    title: "Eight Questions on the Evolution and Impact of Extended Reality",
    fullTitle: "Eight Questions on the Evolution and Impact of Extended Reality Technologies in Engineering Systems",
    role: "Research Assistant",
    affiliation: "Western New England University",
    location: "Springfield, MA",
    venue: "IEEE ICPHM 2024",
    outcome: "Systematic review of XR technologies and their applications",
    doi: "10.1109/ICPHM61352.2024.10626748",
    tags: ["XR", "VR/AR", "HCI"],
    size: "medium",
    dateRange: "May 2023 - June 2024",
    description: [
      "Initiated and led a project to compile a systematic review answering eight specific questions about the impact of extended reality technologies in engineering.",
    ],
  },
  {
    title: "Applications of Virtual Reality and Treadmills for Renovation",
    fullTitle: "ImmersiveBuild: The Applications of Virtual Reality and Treadmills for the Renovation of Educational Buildings",
    shortTitle: "ImmersiveBuild (VR)",
    role: "Research Assistant",
    affiliation: "Western New England University",
    location: "Springfield, MA",
    venue: "IEEE ICIR 2024",
    outcome: "Integrated Meta Quest 3 and KatWalk treadmills for immersive experiences",
    doi: "10.1109/ICIR64558.2024.10976955",
    tags: ["VR", "Hardware", "Innovation"],
    size: "small",
    dateRange: "March 2023 - December 2024",
    description: [
      "Designed the \"ImmersiveBuild\" framework using Revit for modeling and Unity for interactive VR environments.",
      "Integrated Meta Quest 3 and KatWalk treadmills to test renovation designs with 7 participants, analyzing physiological metrics and survey data.",
    ],
  },
  {
    title: "Embodied Immersive Training for Human-Drone Interactions in Wildlife Preparedness",
    fullTitle: "Towards Embodied Immersive Training for Human-Drone Interactions in Wildlife Preparedness, Response, and Recovery",
    role: "Research Assistant",
    affiliation: "Western New England University",
    location: "Springfield, MA",
    venue: "IEEE ISEC 2025",
    outcome: "Developed training systems for human-drone collaboration",
    doi: "10.1109/ISEC64801.2025.11147269",
    tags: ["Drones", "Training", "Wildlife"],
    size: "small",
    dateRange: "November 2024 - March 2025",
    description: [
      "Conducted a literature review on drone technologies and immersive learning for wildfire management.",
      "Investigated knowledge transfer efficacy and challenges such as simulator sickness.",
    ],
  },
];

const ResearchSection = () => {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" className="py-24 relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <div 
            className={`md:col-span-2 lg:col-span-2 glass-card rounded-xl p-8 hover-lift group relative overflow-hidden cursor-pointer transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            onClick={() => setSelectedProject(researchProjects[0])}
          >
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
            
            <p className="text-muted-foreground mb-4">
              {researchProjects[0].outcome}
            </p>

            <div className="inline-flex items-center gap-1 text-sm text-primary mb-6">
              <FileText className="h-4 w-4" />
              DOI: {researchProjects[0].doi}
            </div>

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
              className={`glass-card rounded-xl p-6 hover-lift group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
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

              <div className="inline-flex items-center gap-1 text-xs text-primary">
                <FileText className="h-3 w-3" />
                DOI: {project.doi}
              </div>
              
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
          {researchProjects.slice(3).map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-xl p-6 hover-lift group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
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
              
              <p className="text-sm text-muted-foreground mb-3">
                {project.outcome}
              </p>

              <div className="inline-flex items-center gap-1 text-xs text-primary">
                <FileText className="h-3 w-3" />
                DOI: {project.doi}
              </div>
              
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

      {/* Research Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-2 mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                    {selectedProject.venue}
                  </span>
                </div>
                <DialogTitle className="text-xl md:text-2xl leading-tight">
                  {selectedProject.fullTitle || selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{selectedProject.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{selectedProject.dateRange}</span>
                  </div>
                  {selectedProject.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{selectedProject.affiliation} | {selectedProject.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Contributions</h4>
                  <ul className="space-y-2">
                    {selectedProject.description.map((point, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DOI Link */}
                <a
                  href={`https://doi.org/${selectedProject.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Publication: {selectedProject.doi}
                </a>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResearchSection;