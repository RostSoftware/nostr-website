import { Heart, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const values = [
    {
      icon: Heart,
      title: "Open Source",
      description: "Transparenz und Gemeinschaft stehen bei uns an erster Stelle. Jede Zeile Code ist öffentlich.",
    },
    {
      icon: Zap,
      title: "Dezentralisierung",
      description: "Wir bauen Software, die niemandem gehört und allen nützt. Keine zentralen Server, keine Zensur.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Wir sind Teil einer globalen Bewegung für ein besseres Internet. Gemeinsam sind wir stärker.",
    },
  ];

  return (
    <section className={cn("py-24 bg-muted/50 geo-pattern-grid", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[3px] w-12 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Über uns</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide mb-8">
                WER WIR SIND
              </h2>
              <div className="space-y-4 text-sm font-body text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">Rost Software & Media</span> ist 
                  ein auf dezentrale Technologien spezialisiertes Unternehmen. Unser Fokus liegt auf 
                  der Entwicklung von Open-Source-Software für das Nostr-Protokoll.
                </p>
                <p>
                  Wir glauben an ein freies, offenes und zensurresistentes Internet. Deshalb 
                  entwickeln wir Tools und Infrastruktur, die genau das ermöglichen.
                </p>
                <p>
                  Unsere Software wird von tausenden Nutzern weltweit verwendet und trägt dazu bei, 
                  das dezentrale Ökosystem zu stärken.
                </p>
              </div>
            </div>

            {/* Values — brutalist stacked blocks */}
            <div className="space-y-4">
              {values.map((value, i) => (
                <div key={i} className="group relative border-2 border-foreground p-6 flex gap-5 bg-card brutal-shadow hover:bg-card transition-colors">
                  <div className="w-14 h-14 border-2 border-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-wide mb-1">{value.title.toUpperCase()}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
