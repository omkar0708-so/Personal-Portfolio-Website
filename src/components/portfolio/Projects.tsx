import { BarChart3, Train, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking Analysis",
      description: "Analyzed 40,000+ hotel booking records to identify cancellation trends and customer behavior patterns.",
      technologies: ["Excel", "Power BI", "Pivot Tables"],
      highlights: [
        "Analyzed 40,000+ hotel booking records",
        "Identified cancellation trends and customer behavior",
        "Created interactive Excel dashboards using Pivot Tables and slicers"
      ],
      icon: BarChart3,
      status: "Completed"
    },
    {
      title: "Majha Local – Smart Railway App",
      description: "Conceptualizing a smart app for Mumbai local train commuters with focus on user behavior and operational efficiency.",
      technologies: ["Product Design", "Data Analysis", "UX Research"],
      highlights: [
        "Smart app for Mumbai local train commuters",
        "Focus on user behavior and operational efficiency",
        "Data-driven feature planning and product decisions"
      ],
      icon: Train,
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hands-on projects demonstrating data analysis, visualization, and business insight capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="card-elevated overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === "Completed" 
                      ? "bg-accent/10 text-accent" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
