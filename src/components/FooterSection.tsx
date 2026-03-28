import { Github, Mail, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("border-t-2 border-foreground", className)}>
      {/* Art deco gold bar */}
      <div className="h-1 bg-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display text-2xl tracking-wider">ROST SOFTWARE</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open-Source-Software für das dezentrale Web. 
                Spezialisiert auf Nostr und zukunftsweisende Protokolle.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-xl tracking-wider mb-4">PROJEKTE</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="https://layer.systems" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">
                    LAYER.systems
                  </a>
                </li>
                <li>
                  <a href="https://lumina.rocks" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">
                    LUMINA.rocks
                  </a>
                </li>
                <li>
                  <a href="https://zelo.news" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">
                    zelo.news
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl tracking-wider mb-4">RESSOURCEN</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="https://github.com/RostSoftware" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://nostr.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">
                    Was ist Nostr?
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl tracking-wider mb-4">KONTAKT</h4>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li>
                  <a href="mailto:info@rost.software" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    info@rost.software
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RostSoftware" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Github className="w-3 h-3" />
                    @RostSoftware
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Art deco separator */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-[2px] bg-foreground/20" />
            <div className="w-3 h-3 bg-primary rotate-45" />
            <div className="flex-1 h-[2px] bg-foreground/20" />
          </div>

          {/* Bottom footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <p>&copy; {currentYear} Rost Software & Media</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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
