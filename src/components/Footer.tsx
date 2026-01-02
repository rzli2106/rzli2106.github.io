import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="footer" className="py-16 border-t border-border/50">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Interested in collaboration or have questions about my research? 
              I'd love to hear from you.
            </p>
            
            {/* Social links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/richard-li-118518322/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">rzli2106@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Richard Z. Li. Built with passion for research and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
