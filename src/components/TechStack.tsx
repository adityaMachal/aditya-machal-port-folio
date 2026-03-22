import { useFadeIn } from "@/hooks/useFadeIn";

const techs = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "CrewAI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MLflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Power BI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

const row1 = techs.slice(0, 9);
const row2 = techs.slice(9);

const TechBadge = ({ name, icon }: { name: string; icon: string }) => (
  <span className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-colors min-w-[100px]">
    <img src={icon} alt={name} className="w-10 h-10" loading="lazy" />
    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{name}</span>
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

      <div className="hover-pause mb-4">
        <div className="animate-marquee flex gap-4 w-max">
          {[...row1, ...row1].map((t, i) => (
            <TechBadge key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      <div className="hover-pause">
        <div className="animate-marquee-reverse flex gap-4 w-max">
          {[...row2, ...row2].map((t, i) => (
            <TechBadge key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
