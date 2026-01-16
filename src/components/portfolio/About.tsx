import { BarChart3, Database, TrendingUp, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BarChart3,
      label: "Data Visualization",
      description: "Power BI, Tableau, Excel"
    },
    {
      icon: Database,
      label: "Data Processing",
      description: "Python, SQL, Pandas"
    },
    {
      icon: TrendingUp,
      label: "Business Insights",
      description: "EDA, Trend Analysis"
    },
    {
      icon: Brain,
      label: "Learning ML",
      description: "Building scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Turning Data Into
              <span className="gradient-text"> Decisions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a postgraduate student in Big Data Analytics and an aspiring Data Analyst 
                with hands-on experience in data analysis, dashboard development, and deriving 
                business insights through projects and virtual internships.
              </p>
              <p>
                I work with Python, SQL, Excel, and BI tools to transform data into actionable 
                insights. Currently learning Machine Learning to strengthen my analytical 
                capabilities and build scalable data-driven solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="skill-badge">Analytical Thinking</span>
              <span className="skill-badge">Problem Solving</span>
              <span className="skill-badge">Attention to Detail</span>
              <span className="skill-badge">Clear Communication</span>
              <span className="skill-badge">Business Understanding</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="card-elevated p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
