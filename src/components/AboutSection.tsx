import { Heart, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section className={cn("py-24 bg-muted/30", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Über uns
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Rost Software & Media</span> ist 
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

            {/* Values */}
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Open Source</h3>
                  <p className="text-muted-foreground">
                    Transparenz und Gemeinschaft stehen bei uns an erster Stelle. Jede Zeile Code ist öffentlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Dezentralisierung</h3>
                  <p className="text-muted-foreground">
                    Wir bauen Software, die niemandem gehört und allen nützt. Keine zentralen Server, keine Zensur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Community</h3>
                  <p className="text-muted-foreground">
                    Wir sind Teil einer globalen Bewegung für ein besseres Internet. Gemeinsam sind wir stärker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
