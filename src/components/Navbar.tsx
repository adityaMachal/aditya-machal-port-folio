import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top accent line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-primary z-[60]" />

      <nav
        className={`fixed top-[2px] left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("about")} className="text-2xl font-bold text-primary tracking-tight">
            AM
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {links.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
