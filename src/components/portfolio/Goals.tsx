import { Target, Rocket } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      type: "Short-term",
      icon: Target,
      goal: "Data Analyst / Business Analyst role focused on analytics and reporting",
      description: "Seeking opportunities to apply my analytical skills in a fast-paced environment where I can contribute to data-driven decision making."
    },
    {
      type: "Long-term",
      icon: Rocket,
      goal: "Senior Analytics Leader",
      description: "Aspiring to lead analytics teams and drive strategic business decisions through advanced data science and machine learning solutions."
    }
  ];

  return (
    <section id="goals" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Career Goals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I'm Headed
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {goals.map((item) => (
            <div 
              key={item.type}
              className="card-elevated p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.goal}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
