import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc. in Big Data Analytics",
      institution: "University of Mumbai",
      period: "2025 – 2027",
      current: true
    },
    {
      degree: "B.Sc. in Information Technology",
      institution: "University of Mumbai",
      period: "2022 – 2025",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 md:py-24 lg:py-28 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Academic Background
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            {education.map((edu, index) => (
              <div key={edu.degree} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Timeline dot */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  edu.current 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card border border-border text-muted-foreground'
                }`}>
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="card-elevated p-6 flex-1">
                  {edu.current && (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded mb-2">
                      Currently Pursuing
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
