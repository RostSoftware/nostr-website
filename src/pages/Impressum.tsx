import { useSeoMeta } from "@unhead/react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const Impressum = () => {
  useSeoMeta({
    title: "Impressum | Rost Software & Media",
    description: "Impressum und Angaben gemäß § 5 TMG — Rost Software & Media",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden isolate border-b-2 border-foreground">
          <div className="absolute inset-0 -z-10 geo-pattern-grid" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[3px] w-12 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Rechtliches</span>
              </div>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.85] tracking-wide">
                IMPRESSUM
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-12">
            <LegalSection title="ANGABEN GEMÄSS § 5 TMG">
              <p>Rost Software & Media</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>Deutschland</p>
            </LegalSection>

            <LegalSection title="VERTRETEN DURCH">
              <p>[Name des/der Vertretungsberechtigten]</p>
            </LegalSection>

            <LegalSection title="KONTAKT">
              <p>E-Mail: info@rost.software</p>
              <p>Website: https://rost.software</p>
            </LegalSection>

            <LegalSection title="UMSATZSTEUER-ID">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p>[USt-IdNr. einfügen, falls vorhanden]</p>
            </LegalSection>

            <LegalSection title="VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV">
              <p>[Name]</p>
              <p>[Adresse]</p>
            </LegalSection>

            <LegalSection title="STREITSCHLICHTUNG">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </LegalSection>

            <LegalSection title="HAFTUNG FÜR INHALTE">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </LegalSection>

            <LegalSection title="HAFTUNG FÜR LINKS">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </LegalSection>

            <LegalSection title="URHEBERRECHT">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </LegalSection>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-[3px] w-6 bg-primary" />
        <h2 className="font-display text-2xl tracking-wider">{title}</h2>
      </div>
      <div className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3 pl-9">
        {children}
      </div>
    </div>
  );
}

export default Impressum;
