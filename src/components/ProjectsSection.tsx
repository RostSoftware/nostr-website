import { ExternalLink, Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Unsere Projekte
          </h2>
          <p className="text-muted-foreground text-lg">
            Open-Source-Software, die wir aktiv entwickeln und pflegen.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "group flex flex-col h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
                project.featured && "lg:col-span-1"
              )}
            >
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/rostlegende" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Alle Projekte auf GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
