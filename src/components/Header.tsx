import { useState } from "react";
import { Github, Menu, Moon, Sun, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: "Leistungen", href: "#services" },
    { label: "Projekte", href: "#projects" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b-2 border-foreground bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — brutalist block with art deco gold accent */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center brutal-shadow">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl tracking-wider hidden sm:block">ROST SOFTWARE</span>
          </a>

          {/* Desktop Navigation — stark, uppercase */}
          <nav className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent hover:border-primary transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 border-2 border-foreground hover:bg-primary hover:text-primary-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Button variant="ghost" size="icon" className="w-9 h-9 border-2 border-foreground hover:bg-primary hover:text-primary-foreground hidden sm:flex" asChild>
              <a href="https://github.com/RostSoftware" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 border-2 border-foreground md:hidden hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation — raw, stacked blocks */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t-2 border-foreground">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary-foreground hover:bg-primary border-b border-border transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/RostSoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
