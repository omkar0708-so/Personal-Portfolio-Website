import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experience = {
    role: "Data Analytics Virtual Intern",
    company: "Accenture (Forage)",
    period: "2024",
    achievements: [
      "Worked on simulated real-world client projects",
      "Cleaned, transformed, and analyzed 5,000+ records",
      "Built interactive dashboards for business decision-making",
      "Identified trends, gaps, and improvement opportunities",
      "Gained exposure to analytics-driven business strategy"
    ]
  };

  return (
    <section id="experience" className="py-20 md:py-24 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Professional Journey
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-muted-foreground">{experience.company}</p>
                <span className="inline-block mt-1 text-sm text-accent font-medium">
                  {experience.period}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
