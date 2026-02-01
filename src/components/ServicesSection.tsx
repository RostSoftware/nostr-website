import { Code2, Server, Shield, Sparkles, Terminal, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: Code2,
    title: "Software Entwicklung",
    description: "Maßgeschneiderte Nostr-Anwendungen und Tools. Von Clients bis zu spezialisierten NIPs.",
  },
  {
    icon: Server,
    title: "Relay Hosting",
    description: "Zuverlässige Nostr-Relay-Infrastruktur. Hochverfügbar und performant.",
  },
  {
    icon: Shield,
    title: "Open Source First",
    description: "Alle unsere Projekte sind Open Source. Transparenz und Community stehen im Mittelpunkt.",
  },
  {
    icon: Workflow,
    title: "Protokoll Expertise",
    description: "Tiefgreifendes Wissen über Nostr NIPs und dezentrale Protokolle.",
  },
  {
    icon: Terminal,
    title: "DevOps & Infrastruktur",
    description: "Moderne Deployment-Strategien für dezentrale Anwendungen.",
  },
  {
    icon: Sparkles,
    title: "Beratung",
    description: "Strategische Beratung für Projekte im dezentralen Ökosystem.",
  },
];

const ServicesSection = ({ className }: ServicesSectionProps) => {
  return (
    <section className={cn("py-24 bg-muted/30", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Was wir tun
          </h2>
          <p className="text-muted-foreground text-lg">
            Spezialisiert auf das Nostr-Ökosystem entwickeln wir Software, 
            die das dezentrale Web voranbringt.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              {/* Hover gradient effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
