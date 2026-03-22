import { useFadeIn } from "@/hooks/useFadeIn";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="fade-section max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-10">
          Open to ML Engineer roles, internships, and collaborations.
        </p>

        <div className="space-y-4 mb-10">
          {[
            { icon: Mail, label: "adimachal30@gmail.com", href: "mailto:adimachal30@gmail.com" },
            { icon: Phone, label: "+91 720 625 7037", href: "tel:+917206257037" },
            { icon: Linkedin, label: "linkedin.com/in/adityamachal", href: "https://linkedin.com/in/adityamachal" },
            { icon: Github, label: "github.com/adityaMachal", href: "https://github.com/adityaMachal" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={20} />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
            <a href="https://github.com/adityaMachal" target="_blank" rel="noopener noreferrer">
              <Github size={20} /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
            <a href="https://linkedin.com/in/adityamachal" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
