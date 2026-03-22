import { useFadeIn } from "@/hooks/useFadeIn";
import { Trophy, Star, Code, Award, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  { icon: Trophy, text: "Ranked 8th in EPIC Institute of Technology entrance examination" },
  { icon: Star, text: "4★ HackerRank rating in Python, C++, and Java" },
  { icon: Code, text: "Solved 180+ DSA problems across LeetCode and GeeksForGeeks" },
  { icon: Award, text: "Ranked in Top 5,000 students university-wide on GeeksForGeeks" },
  { icon: Zap, text: "Codeforces rating 1000+ through competitive programming" },
];

const certs = [
  { name: "Supervised Machine Learning — DeepLearning.ai / Stanford (Mar 2025)", link: "https://coursera.org/share/1ed7f65d2892c32792eb85aa0fea3e73" },
  { name: "Python for Data Science & AI — IBM / Coursera (Oct 2024)", link: "https://coursera.org/share/93ad4786017a7ffffd029dfc4aa30acd" },
  { name: "Bits and Bytes of Computer Networking — Google (Sep 2024)", link: "https://coursera.org/share/4d9b94d5c5e0fa6366ebaa6cc2295a1f" },
  { name: "DSA Summer Training — CipherSchools (Jun–Aug 2025)", link: "https://www.cipherschools.com/certificate/preview?id=6899813396ea942c45e7bc7c" },
];

const Achievements = () => {
  const ref = useFadeIn();

  return (
    <section id="achievements" className="py-24">
      <div ref={ref} className="fade-section max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Achievements</h2>

        <div className="space-y-4 mb-12">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border-l-4 border-l-primary border border-border"
              >
                <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                <p className="text-foreground text-sm">{a.text}</p>
              </div>
            );
          })}
        </div>

        <h3 className="text-xl font-semibold text-center mb-6 text-foreground">Certifications</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {certs.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-xs text-muted-foreground border-border hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
              >
                {c.name}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
