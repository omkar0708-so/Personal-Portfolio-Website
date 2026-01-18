const Skills = () => {
  const skillCategories = [
    {
      category: "Data Analytics",
      skills: ["Data Cleaning", "Exploratory Data Analysis", "Business Insights", "Trend Analysis"]
    },
    {
      category: "Programming",
      skills: ["Python", "Pandas", "NumPy", "SQL"]
    },
    {
      category: "Visualization",
      skills: ["Power BI", "Tableau", "Excel", "Charts & Dashboards"]
    },
    {
      category: "Statistics",
      skills: ["Descriptive Statistics", "Trend Analysis", "Data Modeling"]
    },
    {
      category: "Big Data & Cloud",
      skills: ["Hadoop Basics", "AWS Concepts", "Data Pipelines"]
    },
    {
      category: "Tools",
      skills: ["Jupyter Notebook", "Google Colab", "PyCharm", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-24 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technical Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.category}
              className="card-elevated p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
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

export default Skills;
