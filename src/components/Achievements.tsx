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
  "Supervised Machine Learning — DeepLearning.ai / Stanford (Mar 2025)",
  "Python for Data Science & AI — IBM / Coursera (Oct 2024)",
  "Bits and Bytes of Computer Networking — Google (Sep 2024)",
  "DSA Summer Training — CipherSchools (Jun–Aug 2025)",
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
            <Badge
              key={c}
              variant="outline"
              className="px-4 py-2 text-xs text-muted-foreground border-border"
            >
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
