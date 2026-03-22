import { useFadeIn } from "@/hooks/useFadeIn";

const row1 = ["Python", "C++", "SQL", "Java", "PyTorch", "TensorFlow", "Scikit-learn", "FastAPI", "Docker"];
const row2 = ["Streamlit", "LangChain", "CrewAI", "MLflow", "PostgreSQL", "MySQL", "Git", "Jupyter", "Power BI"];

const Badge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium whitespace-nowrap border border-border hover:border-primary/40 transition-colors">
    {name}
  </span>
);

const TechStack = () => {
  const ref = useFadeIn();

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div ref={ref} className="fade-section max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Tech Stack</h2>
        <p className="text-muted-foreground text-center">Technologies I work with daily</p>
      </div>

      {/* Row 1 - left scroll */}
      <div className="hover-pause mb-4">
        <div className="animate-marquee flex gap-4 w-max">
          {[...row1, ...row1].map((t, i) => (
            <Badge key={`r1-${i}`} name={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - right scroll */}
      <div className="hover-pause">
        <div className="animate-marquee-reverse flex gap-4 w-max">
          {[...row2, ...row2].map((t, i) => (
            <Badge key={`r2-${i}`} name={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
