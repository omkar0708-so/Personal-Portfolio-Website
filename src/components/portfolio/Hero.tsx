import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 stagger-1">
          Omkar R Thakur
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up opacity-0 stagger-2">
          <span className="gradient-text font-semibold">Data Analyst</span>
          {" "}|{" "}
          <span className="gradient-text font-semibold">Business Analyst</span>
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
          Transforming raw data into actionable business insights. 
          Proficient in Python, SQL, and BI tools with a passion for data-driven decision making.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
          <Button asChild variant="default" size="lg" className="gap-2">
            <a href="mailto:omkar@example.com">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in-up opacity-0 stagger-5">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
