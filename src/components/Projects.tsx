import { useFadeIn } from "@/hooks/useFadeIn";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "MeetCapsule",
    desc: "Transforms 1-hour video meetings into 1-minute summaries. Scalable end-to-end pipeline using Whisper-v3 for transcription and Gemini for automated action-item extraction.",
    tags: ["Python", "Whisper-v3", "Gemini API", "FastAPI", "NLP", "Docker", "PostgreSQL"],
    link: "https://github.com/adityaMachal/MeetCapsule",
  },
  {
    title: "Adversarial Robustness on MNIST",
    desc: "Investigates supervised learning model robustness against adversarial attacks using FGSM. Evaluates accuracy degradation under varying perturbation levels with full visualizations.",
    tags: ["Python", "Scikit-learn", "FGSM", "FastAPI", "Docker", "MLOps", "Jupyter"],
    link: "https://github.com/adityaMachal/AdversarialRobustnessMNIST",
  },
  {
    title: "Process Scheduler Simulator",
    desc: "Terminal-based simulator visualizing real-time CPU scheduling algorithms (FCFS, SJF, Round Robin, Lottery) with Gantt charts, turnaround time, and throughput comparisons.",
    tags: ["Python", "NumPy", "Matplotlib", "Seaborn", "Algorithms"],
    link: "https://github.com/adityaMachal/Process_Scheduler_Simulator",
  },
  {
    title: "Global Energy Transition Dashboard",
    desc: "Analyzed global energy datasets revealing 60% of power is still coal-generated. Built interactive Power BI dashboards with DAX measures and regional adoption trends.",
    tags: ["Power BI", "DAX", "Excel", "Data Visualization"],
    link: "https://www.linkedin.com/posts/adityamachal_visualizing-the-global-energy-transition-activity-7405190062943952896-5NXw",
  },
];

const Projects = () => {
  const ref = useFadeIn();

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="fade-section max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_hsl(217_91%_60%/0.25)] hover:border-primary/40"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs bg-secondary text-muted-foreground border-border">
                    {t}
                  </Badge>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink size={16} /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
