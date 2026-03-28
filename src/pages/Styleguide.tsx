import { useSeoMeta } from "@unhead/react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Zap, Mail, Globe, Code, Server, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const colorSwatches = [
  { name: "Background", var: "bg-background", border: true },
  { name: "Foreground", var: "bg-foreground" },
  { name: "Primary", var: "bg-primary" },
  { name: "Secondary", var: "bg-secondary" },
  { name: "Muted", var: "bg-muted", border: true },
  { name: "Card", var: "bg-card", border: true },
  { name: "Destructive", var: "bg-destructive" },
];

const Styleguide = () => {
  useSeoMeta({
    title: "Styleguide | Rost Software & Media",
    description: "Design System & Styleguide — Brutal Deco Ästhetik",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden isolate border-b-2 border-foreground">
          <div className="absolute inset-0 -z-10 geo-pattern-grid" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[3px] w-12 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Design System</span>
              </div>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-wide mb-6">
                STYLE
                <span className="text-primary">GUIDE</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed border-l-3 border-primary pl-4">
                Das <span className="text-foreground font-bold">Brutal Deco</span> Design System —
                eine Verbindung aus roher, brutalistischer Klarheit und der geometrischen Eleganz des Art Déco.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
          {/* ────── TYPOGRAPHY ────── */}
          <section>
            <SectionHeader number="01" title="TYPOGRAFIE" />

            <div className="grid lg:grid-cols-2 gap-12 mt-10">
              {/* Display Font */}
              <Card className="border-2 border-foreground deco-corners">
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Display — Bebas Neue</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-display text-7xl sm:text-8xl leading-[0.85] tracking-wide">Aa Bb Cc</p>
                  <p className="font-display text-4xl tracking-wide text-primary">ABCDEFGHIJK</p>
                  <p className="font-display text-2xl tracking-wide text-muted-foreground">1234567890!?&amp;</p>
                  <Separator className="bg-foreground/20" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Verwendet für: Headlines, Section-Titel, Navigation, Logo
                  </p>
                </CardContent>
              </Card>

              {/* Body Font */}
              <Card className="border-2 border-foreground deco-corners">
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Body — DM Sans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-3xl leading-tight">Aa Bb Cc Dd</p>
                  <p className="font-body text-lg text-primary">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Open-Source-Software für das dezentrale Web. Designed für optimale Lesbarkeit bei Fließtext, Beschreibungen und längeren Passagen.
                  </p>
                  <Separator className="bg-foreground/20" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Verwendet für: Fließtext, Beschreibungen, Absätze
                  </p>
                </CardContent>
              </Card>

              {/* Mono Font */}
              <Card className="border-2 border-foreground deco-corners">
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mono — Space Mono</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-mono text-2xl leading-tight">Aa Bb Cc Dd</p>
                  <p className="font-mono text-sm text-primary">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-mono text-xs text-muted-foreground">0x1A2B3C4D5E6F &mdash; npub1abc...xyz</p>
                  <Separator className="bg-foreground/20" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Verwendet für: UI-Labels, Navigation, Code, technische Daten
                  </p>
                </CardContent>
              </Card>

              {/* Type Scale */}
              <Card className="border-2 border-foreground deco-corners">
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Type Scale</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-display text-6xl leading-none tracking-wide">Display XL</p>
                  <p className="font-display text-4xl leading-none tracking-wide">Headline H1</p>
                  <p className="font-display text-2xl leading-none tracking-wide">Headline H2</p>
                  <p className="font-display text-xl leading-none tracking-wide">Section H3</p>
                  <p className="font-body text-lg leading-snug">Body Large</p>
                  <p className="font-body text-base leading-snug">Body Regular</p>
                  <p className="font-body text-sm leading-snug text-muted-foreground">Body Small</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Caption / Label</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ────── COLORS ────── */}
          <section>
            <SectionHeader number="02" title="FARBPALETTE" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-10">
              {colorSwatches.map((swatch) => (
                <div key={swatch.name} className="space-y-2">
                  <div
                    className={cn(
                      "h-24 border-2 border-foreground",
                      swatch.var,
                      swatch.border && "border-dashed"
                    )}
                  />
                  <p className="text-xs font-bold uppercase tracking-wider text-center">{swatch.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-background border-2 border-foreground">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Light Mode</p>
                <p className="font-body text-sm text-muted-foreground">
                  Warmes Pergament (#F0EAD6) mit Tintenschwarz und Gold-Akzent. Minimale Farbgebung — die Struktur steht im Vordergrund.
                </p>
              </div>
              <div className="p-6 bg-[hsl(0,0%,4%)] text-[hsl(40,30%,86%)] border-2 border-[hsl(42,62%,55%)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(40,10%,50%)] mb-2">Dark Mode</p>
                <p className="font-body text-sm text-[hsl(40,10%,50%)]">
                  Tiefes Tintenschwarz mit cremefarbener Schrift und warmem Gold-Akzent. Elegante Invertierung mit gleichbleibender Ästhetik.
                </p>
              </div>
            </div>
          </section>

          {/* ────── BUTTONS ────── */}
          <section>
            <SectionHeader number="03" title="BUTTONS" />

            <div className="mt-10 space-y-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="text-xs uppercase tracking-widest font-bold px-8 h-14 border-2 border-foreground brutal-shadow">
                  Primary CTA
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-xs uppercase tracking-widest font-bold px-8 h-14 border-2 border-foreground hover:bg-foreground hover:text-background brutal-shadow">
                  <Github className="mr-3 w-4 h-4" />
                  Secondary
                </Button>
                <Button size="default" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground brutal-shadow">
                  Default
                </Button>
                <Button size="sm" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground">
                  Small
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="ghost" className="text-xs uppercase tracking-widest font-bold">
                  Ghost
                </Button>
                <Button variant="destructive" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground">
                  Destructive
                </Button>
                <Button variant="ghost" size="icon" className="w-9 h-9 border-2 border-foreground hover:bg-primary hover:text-primary-foreground">
                  <Zap className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-9 h-9 border-2 border-foreground hover:bg-primary hover:text-primary-foreground">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>

              <Card className="border-2 border-foreground p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Button Regeln</p>
                <ul className="font-body text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Immer Uppercase + Tracking-Widest für Labels</li>
                  <li>2px Border + Brutal-Shadow für primäre CTAs</li>
                  <li>Hover: Translation -2px + Shadow-Vergrößerung</li>
                  <li>Icon-Buttons: 9×9 mit 2px Border</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* ────── CARDS & SHADOWS ────── */}
          <section>
            <SectionHeader number="04" title="KARTEN & SCHATTEN" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">STANDARD</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">
                    Einfache Karte mit 2px Border. Klare Struktur ohne Ablenkung.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground brutal-shadow">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">BRUTAL SHADOW</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">
                    Harter Offset-Schatten. Bewegt sich bei Hover nach links-oben.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground deco-corners">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">DECO CORNERS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">
                    Goldene Eck-Ornamente — Art-Déco-Akzent für besondere Elemente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground brutal-shadow deco-corners">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">KOMBINIERT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">
                    Brutal Shadow + Deco Corners kombiniert für maximale Wirkung.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">PRIMARY CARD</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm opacity-80">
                    Gold-Hintergrund für hervorgehobene Inhalte und CTAs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="font-display text-xl tracking-wider">SECONDARY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm opacity-80">
                    Dunkle Teal-Karte für kontrastierende Abschnitte.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ────── BADGES ────── */}
          <section>
            <SectionHeader number="05" title="BADGES & TAGS" />

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge className="text-xs uppercase tracking-widest font-bold border-2 border-foreground px-4 py-1">Default</Badge>
              <Badge variant="outline" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground px-4 py-1">Outline</Badge>
              <Badge variant="secondary" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground px-4 py-1">Secondary</Badge>
              <Badge variant="destructive" className="text-xs uppercase tracking-widest font-bold border-2 border-foreground px-4 py-1">Destructive</Badge>
              <Badge className="text-xs uppercase tracking-widest font-bold border-2 border-primary bg-primary/10 text-primary px-4 py-1">Nostr</Badge>
              <Badge className="text-xs uppercase tracking-widest font-bold border-2 border-foreground bg-foreground text-background px-4 py-1">Inverted</Badge>
            </div>
          </section>

          {/* ────── PATTERNS & TEXTURES ────── */}
          <section>
            <SectionHeader number="06" title="MUSTER & TEXTUREN" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <div className="space-y-2">
                <div className="h-40 border-2 border-foreground geo-pattern-grid" />
                <p className="text-xs uppercase tracking-wider text-center text-muted-foreground">Grid Pattern</p>
              </div>
              <div className="space-y-2">
                <div className="h-40 border-2 border-foreground geo-pattern-chevron" />
                <p className="text-xs uppercase tracking-wider text-center text-muted-foreground">Chevron Pattern</p>
              </div>
              <div className="space-y-2">
                <div className="h-40 border-2 border-foreground deco-sunburst" />
                <p className="text-xs uppercase tracking-wider text-center text-muted-foreground">Sunburst</p>
              </div>
            </div>
          </section>

          {/* ────── ICONS ────── */}
          <section>
            <SectionHeader number="07" title="ICONS" />

            <div className="flex flex-wrap gap-4 mt-10">
              {[
                { icon: Zap, label: "Zap" },
                { icon: Github, label: "GitHub" },
                { icon: Mail, label: "Mail" },
                { icon: Globe, label: "Globe" },
                { icon: Code, label: "Code" },
                { icon: Server, label: "Server" },
                { icon: Shield, label: "Shield" },
                { icon: ArrowRight, label: "Arrow" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ────── SPACING & GRID ────── */}
          <section>
            <SectionHeader number="08" title="SPACING & GRID" />

            <div className="mt-10 space-y-6">
              <div className="flex items-end gap-2">
                {[4, 8, 12, 16, 24, 32, 48, 64].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <div
                      className="bg-primary border border-foreground"
                      style={{ width: size, height: size }}
                    />
                    <span className="text-[10px] text-muted-foreground">{size}px</span>
                  </div>
                ))}
              </div>

              <Card className="border-2 border-foreground p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Grid Regeln</p>
                <ul className="font-body text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>8px Basis-Grid für Spacing und Alignment</li>
                  <li>Border-Radius: 0 — keine gerundeten Ecken</li>
                  <li>Borders: immer 2px solid</li>
                  <li>Hard Shadows: offset-basiert, kein Blur</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* ────── ANIMATIONS ────── */}
          <section>
            <SectionHeader number="09" title="ANIMATIONEN" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="border-2 border-foreground p-6 text-center animate-fade-in">
                <p className="font-display text-xl tracking-wider">FADE IN</p>
                <p className="text-xs text-muted-foreground mt-1">Einblenden von unten</p>
              </div>
              <div className="border-2 border-foreground p-6 text-center animate-slide-in-left">
                <p className="font-display text-xl tracking-wider">SLIDE LEFT</p>
                <p className="text-xs text-muted-foreground mt-1">Von links einschieben</p>
              </div>
              <div className="border-2 border-foreground p-6 text-center animate-deco-reveal">
                <p className="font-display text-xl tracking-wider">DECO REVEAL</p>
                <p className="text-xs text-muted-foreground mt-1">Horizontale Aufdeckung</p>
              </div>
              <div className="border-2 border-foreground p-6 text-center brutal-shadow">
                <p className="font-display text-xl tracking-wider">BRUTAL HOVER</p>
                <p className="text-xs text-muted-foreground mt-1">Shadow-Hover-Effekt</p>
              </div>
            </div>
          </section>

          {/* ────── DESIGN PRINCIPLES ────── */}
          <section>
            <SectionHeader number="10" title="DESIGN PRINZIPIEN" />

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                {
                  title: "BRUTALE KLARHEIT",
                  desc: "Keine weichen Kanten, keine Unschärfe. Harte Linien, harte Schatten. Das Interface versteckt nichts.",
                },
                {
                  title: "DÉCO ELEGANZ",
                  desc: "Geometrische Ornamente, goldene Akzente. Die Schönheit liegt in der Symmetrie und Wiederholung.",
                },
                {
                  title: "TYPOGRAFIE ZUERST",
                  desc: "Bebas Neue dominiert. Die Schrift ist das Designelement — nicht nur Informationsträger.",
                },
                {
                  title: "FUNKTION & FORM",
                  desc: "Jedes Element dient einem Zweck. Dekoration ist zugleich Struktur. Struktur ist zugleich Dekoration.",
                },
              ].map((principle) => (
                <Card key={principle.title} className="border-2 border-foreground hover:bg-card transition-colors brutal-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl tracking-wider">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-5xl text-primary/30">{number}</span>
      <div className="h-[3px] w-8 bg-primary" />
      <h2 className="font-display text-3xl sm:text-4xl tracking-wider">{title}</h2>
    </div>
  );
}

export default Styleguide;
