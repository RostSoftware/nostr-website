import { Code2, Server, Shield, Sparkles, Terminal, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: Code2,
    title: "Software Entwicklung",
    description: "Maßgeschneiderte Nostr-Anwendungen und Tools. Von Clients bis zu spezialisierten NIPs.",
    num: "01",
  },
  {
    icon: Server,
    title: "Relay Hosting",
    description: "Zuverlässige Nostr-Relay-Infrastruktur. Hochverfügbar und performant.",
    num: "02",
  },
  {
    icon: Shield,
    title: "Open Source First",
    description: "Alle unsere Projekte sind Open Source. Transparenz und Community stehen im Mittelpunkt.",
    num: "03",
  },
  {
    icon: Workflow,
    title: "Protokoll Expertise",
    description: "Tiefgreifendes Wissen über Nostr NIPs und dezentrale Protokolle.",
    num: "04",
  },
  {
    icon: Terminal,
    title: "DevOps & Infrastruktur",
    description: "Moderne Deployment-Strategien für dezentrale Anwendungen.",
    num: "05",
  },
  {
    icon: Sparkles,
    title: "Beratung",
    description: "Strategische Beratung für Projekte im dezentralen Ökosystem.",
    num: "06",
  },
];

const ServicesSection = ({ className }: ServicesSectionProps) => {
  return (
    <section className={cn("py-24 geo-pattern-chevron", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — art deco style */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[3px] w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Leistungen</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide mb-4">
            WAS WIR TUN
          </h2>
          <p className="text-sm font-body text-muted-foreground max-w-xl leading-relaxed">
            Spezialisiert auf das Nostr-Ökosystem entwickeln wir Software, 
            die das dezentrale Web voranbringt.
          </p>
        </div>

        {/* Services grid — brutalist cards with deco numbering */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 border-foreground transition-colors hover:bg-primary/5",
                index % 3 !== 2 && "lg:border-r-2",
                index < 3 && "lg:border-b-2",
                index % 2 !== 1 && "sm:border-r-2 lg:border-r-0",
                index < 4 && "sm:border-b-2 lg:border-b-0",
                index % 3 !== 2 && "lg:border-r-2",
                index < 3 && "lg:border-b-2",
              )}
            >
              {/* Number — large deco style */}
              <span className="font-display text-6xl text-primary/20 absolute top-4 right-6 leading-none group-hover:text-primary/40 transition-colors">
                {service.num}
              </span>

              <div className="relative">
                <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <service.icon className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-3">{service.title.toUpperCase()}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
