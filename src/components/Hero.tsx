import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const fullName = "Aditya Machal";
const subtitles = ["ML Engineer", "MLOps Enthusiast", "LLMOps Builder"];

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [fadeSubtitle, setFadeSubtitle] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(fullName.slice(0, i));
        if (i >= fullName.length) {
          deleting = true;
          timeout = setTimeout(tick, 1500); // pause before erasing
          return;
        }
        timeout = setTimeout(tick, 120);
      } else {
        i--;
        setTyped(fullName.slice(0, i));
        if (i <= 0) {
          deleting = false;
          timeout = setTimeout(tick, 500); // pause before retyping
          return;
        }
        timeout = setTimeout(tick, 60);
      }
    };

    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, []);

  // Subtitle cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeSubtitle(false);
      setTimeout(() => {
        setSubtitleIdx((p) => (p + 1) % subtitles.length);
        setFadeSubtitle(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
    >
      <div
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-muted-foreground text-lg mb-4">I am</p>

        <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-4 tracking-tight">
          {typed}
          <span className="animate-blink text-primary">|</span>
        </h1>

        <p
          className={`text-xl sm:text-2xl font-semibold text-primary mb-6 transition-opacity duration-400 ${
            fadeSubtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitles[subtitleIdx]}
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          B.Tech CSE student at Lovely Professional University with a Data Science minor.
          I build end-to-end ML systems, deploy production pipelines, and explore the
          frontier of LLMs and multi-agent systems.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="gap-2">
            <a href="https://drive.google.com/file/d/1voOk3zz4dM5wDoBYEfz4fepSxjUx9GpV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Download size={18} /> Download CV
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 border-primary/40 text-primary hover:bg-primary/10" onClick={scrollToProjects}>
            <ArrowDown size={18} /> View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
