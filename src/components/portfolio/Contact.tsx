import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing data analytics opportunities, 
            collaborative projects, or just having a chat about the world of data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <a href="mailto:omkar@example.com">
                <Mail className="w-4 h-4" />
                omkar@example.com
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
