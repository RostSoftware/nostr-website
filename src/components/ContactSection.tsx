import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section id="contact" className={cn("py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interesse an einer Zusammenarbeit oder Fragen zu unseren Projekten? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>E-Mail</CardTitle>
                <CardDescription className="text-base">
                  Für allgemeine Anfragen und Projektanfragen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group/btn" asChild>
                  <a href="mailto:info@rost.software">
                    info@rost.software
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Nostr</CardTitle>
                <CardDescription className="text-base">
                  Erreichen Sie uns direkt über das dezentrale Netzwerk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group/btn" asChild>
                  <a href="https://njump.me/npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p" target="_blank" rel="noopener noreferrer">
                    Via Nostr kontaktieren
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
