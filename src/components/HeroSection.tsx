import { ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden isolate", className)}>
      {/* Art deco sunburst background */}
      <div className="absolute inset-0 -z-10 deco-sunburst opacity-60" />

      {/* Geometric grid overlay */}
      <div className="absolute inset-0 -z-10 geo-pattern-grid" />

      {/* Diagonal gold stripe — art deco accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -z-10 opacity-20">
        <div className="absolute inset-0 bg-primary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Art deco horizontal rule */}
          <div className="flex items-center gap-4 mb-8 animate-deco-reveal">
            <div className="h-[3px] w-16 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Est. 2024</span>
            <div className="h-[3px] w-16 bg-primary" />
          </div>

          {/* Main heading — massive Bebas Neue display type */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-wide mb-8 animate-fade-in">
            <span className="block">ROST</span>
            <span className="block">SOFTWARE</span>
            <span className="block text-primary">&amp; MEDIA</span>
          </h1>

          {/* Subheading — raw mono text */}
          <div className="max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed border-l-3 border-primary pl-4">
              Wir entwickeln und hosten{" "}
              <span className="text-foreground font-bold">Open-Source-Software</span>{" "}
              für das dezentrale Web. Spezialisiert auf{" "}
              <span className="text-primary font-bold">Nostr</span> und
              zukunftsweisende Protokolle.
            </p>
          </div>

          {/* CTA Buttons — brutalist blocks */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <Button size="lg" className="w-full sm:w-auto text-xs uppercase tracking-widest font-bold px-8 h-14 border-2 border-foreground brutal-shadow" asChild>
              <a href="#projects">
                Unsere Projekte
                <ArrowRight className="ml-3 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-xs uppercase tracking-widest font-bold px-8 h-14 border-2 border-foreground hover:bg-foreground hover:text-background brutal-shadow" asChild>
              <a href="https://github.com/RostSoftware" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Stats bar — art deco compartments with brutalist borders */}
          <div className="mt-20 border-2 border-foreground animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: "100%", label: "Open Source" },
                { value: "NOSTR", label: "Protocol Native" },
                { value: "24/7", label: "Relay Hosting" },
                { value: "∞", label: "Möglichkeiten" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-6 text-center",
                    i < 3 && "border-r-0 md:border-r-2 border-foreground",
                    i < 2 && "border-b-2 md:border-b-0 border-foreground"
                  )}
                >
                  <div className="font-display text-3xl sm:text-4xl text-primary">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
