import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in-up opacity-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Open to opportunities
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in-up opacity-0 stagger-1">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 stagger-2">
              <span className="gradient-text">Omkar R Thakur</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up opacity-0 stagger-3">
              <span className="font-semibold text-foreground">Data Analyst</span>
              {" "}|{" "}
              <span className="font-semibold text-foreground">Business Analyst</span>
            </p>

            <p className="max-w-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-4">
              Transforming raw data into actionable business insights. 
              Proficient in Python, SQL, and BI tools with a passion for data-driven decision making.
            </p>

            {/* Experience Badge */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up opacity-0 stagger-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Projects<br/>Completed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <span className="text-2xl font-bold text-accent">Big Data</span>
                <span className="text-sm text-muted-foreground">Analytics<br/>Student</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up opacity-0 stagger-5">
              <Button asChild variant="default" size="lg" className="gap-2">
                <a href="mailto:omkarthakur.it@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0 stagger-5">
              <a 
                href="https://www.linkedin.com/in/omkarthakur2025/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:omkarthakur.it@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up opacity-0 stagger-2">
            <div className="relative">
              {/* Decorative Blobs */}
              <div className="absolute -inset-4 md:-inset-8">
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-secondary/50 rounded-full blur-2xl" />
              </div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-1 rotate-3 transition-transform hover:rotate-6 duration-500">
                  <div className="w-full h-full rounded-3xl bg-background" />
                </div>
                
                {/* Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl -rotate-3 transition-transform hover:rotate-0 duration-500">
                  <img 
                    src="https://i.postimg.cc/4dFXnDJJ/DSC-1224-(1).jpg" 
                    alt="Omkar R Thakur"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 px-4 py-2 bg-card rounded-lg shadow-lg border border-border animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-sm font-medium">👋 Hello!</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg">
                  <span className="text-sm font-medium">📊 Data Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce hidden md:block"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
