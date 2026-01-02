import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Cornell University",
    degree: "Incoming B.S. in Cognitive Science",
    timeline: "Expected May 2030",
    icon: GraduationCap,
    highlight: true,
  },
  {
    institution: "Longmeadow High School",
    degree: "High School Diploma",
    timeline: "Expected May 2026",
    details: ["GPA: 3.94", "SAT: 1540"],
    icon: Award,
  },
  {
    institution: "Quinsigamond Community College",
    degree: "Advanced Coursework",
    timeline: "Completed",
    details: ["Multivariable Calculus", "GPA: 4.0"],
    icon: BookOpen,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in cognitive science and technology
          </p>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              className={`glass-card rounded-xl p-6 hover-lift group ${
                edu.highlight ? "ring-1 ring-primary/30" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                edu.highlight ? "bg-primary/20" : "bg-secondary"
              }`}>
                <edu.icon className={`h-6 w-6 ${edu.highlight ? "text-primary" : "text-muted-foreground"}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {edu.institution}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
              <p className="text-xs text-primary/80 font-medium mb-3">{edu.timeline}</p>

              {/* Details */}
              {edu.details && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                  {edu.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
