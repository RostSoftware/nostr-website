import { Github, Mail, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("py-12 border-t border-border", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Rost Software</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open-Source-Software für das dezentrale Web. 
                Spezialisiert auf Nostr und zukunftsweisende Protokolle.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Projekte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Ditto
                  </a>
                </li>
                <li>
                  <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Nostrify
                  </a>
                </li>
                <li>
                  <a href="https://soapbox.pub" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Soapbox
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ressourcen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/rostlegende" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://nostr.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Was ist Nostr?
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@rost.software" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@rost.software
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rostlegende" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    @rostlegende
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Rost Software & Media. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
