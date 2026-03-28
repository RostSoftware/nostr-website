import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section id="contact" className={cn("py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[3px] w-12 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Kontakt</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide mb-4">
              KONTAKT AUFNEHMEN
            </h2>
            <p className="text-sm font-body text-muted-foreground max-w-xl leading-relaxed">
              Interesse an einer Zusammenarbeit oder Fragen zu unseren Projekten? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          {/* Contact cards — brutalist blocks with deco corners */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group border-2 border-foreground p-8 brutal-shadow deco-corners bg-card hover:bg-card transition-colors">
              <div className="w-14 h-14 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-3xl tracking-wide mb-2">E-MAIL</h3>
              <p className="text-sm font-body text-muted-foreground mb-6 leading-relaxed">
                Für allgemeine Anfragen und Projektanfragen.
              </p>
              <Button variant="outline" className="w-full text-[10px] uppercase tracking-widest font-bold border-2 border-foreground hover:bg-foreground hover:text-background group/btn" asChild>
                <a href="mailto:info@rost.software">
                  info@rost.software
                  <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="group border-2 border-foreground p-8 brutal-shadow deco-corners bg-card hover:bg-card transition-colors">
              <div className="w-14 h-14 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors">
                <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-3xl tracking-wide mb-2">NOSTR</h3>
              <p className="text-sm font-body text-muted-foreground mb-6 leading-relaxed">
                Erreichen Sie uns direkt über das dezentrale Netzwerk.
              </p>
              <Button variant="outline" className="w-full text-[10px] uppercase tracking-widest font-bold border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn" asChild>
                <a href="https://njump.me/npub1rstsf24dwmhg0dsnaxnf6lafh5qxqvz33frja920gfg6tsmewwfszp7myh" target="_blank" rel="noopener noreferrer">
                  Via Nostr kontaktieren
                  <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
