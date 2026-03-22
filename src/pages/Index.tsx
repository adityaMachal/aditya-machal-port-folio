import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Index;
