import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">© 2025 Aditya Machal · Built with passion</p>
      <div className="flex gap-4">
        <a href="https://github.com/adityaMachal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/adityamachal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
