import { ExternalLink, Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    title: "LAYER.systems",
    description: "Ein public Relay mit Dashboard zur Verwaltung.",
    tags: ["Nostr", "Relay", "Public", "Server"],
    github: "https://github.com/layer-systems/relay",
    website: "https://layer.systems",
    featured: true,
  },
  {
    title: "LUMINA.rocks",
    description: "Ein Nostr-Client mit Fokus auf Bildern. Schnell, einfach und Nostr-native.",
    tags: ["Nostr", "Client", "Image"],
    github: "https://github.com/lumina-rocks/lumina",
    website: "https://lumina.rocks",
    featured: true,
  },
  {
    title: "zelo.news",
    description: "Ein Nostr-Client mit Fokus auf Nachrichten, Artikeln und Blogs.",
    tags: ["Nostr", "Client", "News", "Blog"],
    github: "https://github.com/mroxso/zelo-news",
    website: "https://zelo.news",
    featured: false,
  },
];

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[3px] w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Portfolio</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide mb-4">
            UNSERE PROJEKTE
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Open-Source-Software, die wir aktiv entwickeln und pflegen.
          </p>
        </div>

        {/* Projects grid — brutalist cards with deco corners */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-2 border-foreground p-8 flex flex-col h-full brutal-shadow deco-corners bg-card hover:bg-primary/5 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-3xl tracking-wide flex items-center gap-2">
                  {project.title.toUpperCase()}
                  {project.featured && (
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  )}
                </h3>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tags — raw labels */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] uppercase tracking-[0.15em] font-bold border border-foreground px-2 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-[10px] uppercase tracking-widest font-bold border-2 border-foreground hover:bg-foreground hover:text-background" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-[10px] uppercase tracking-widest font-bold border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Live
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all — brutalist button */}
        <div className="mt-12">
          <Button variant="outline" size="lg" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground hover:bg-foreground hover:text-background brutal-shadow px-8 h-14" asChild>
            <a href="https://github.com/RostSoftware" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-3" />
              Alle Projekte auf GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
