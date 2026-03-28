import { useSeoMeta } from "@unhead/react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const Datenschutz = () => {
  useSeoMeta({
    title: "Datenschutzerklärung | Rost Software & Media",
    description: "Datenschutzerklärung gemäß DSGVO — Rost Software & Media",
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
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-wide">
                DATENSCHUTZ
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-12">
            <LegalSection title="1. DATENSCHUTZ AUF EINEN BLICK">
              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Datenerfassung auf dieser Website</h3>
              <p className="font-bold text-foreground">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="font-bold text-foreground">
                Wie erfassen wir Ihre Daten?
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <p className="font-bold text-foreground">
                Wofür nutzen wir Ihre Daten?
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="font-bold text-foreground">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
                wenden.
              </p>
            </LegalSection>

            <LegalSection title="2. HOSTING">
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p>
                Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist
                jederzeit widerrufbar.
              </p>
            </LegalSection>

            <LegalSection title="3. ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN">
              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
                Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>
                Rost Software & Media<br />
                [Straße und Hausnummer]<br />
                [PLZ Ort]
              </p>
              <p>E-Mail: info@rost.software</p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                personenbezogenen Daten haben; in letzterem Fall erfolgt die Löschung nach Fortfall
                dieser Gründe.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
                Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Auskunft, Löschung und Berichtigung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
                Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                  bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                  der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                  können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                  Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                  Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                  Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                  nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="4. DATENERFASSUNG AUF DIESER WEBSITE">
              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website — hierzu müssen die Server-Log-Dateien
                erfasst werden.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Lokale Speicherung (Local Storage)</h3>
              <p>
                Diese Website verwendet den lokalen Speicher Ihres Browsers (Local Storage), um
                Benutzereinstellungen wie das gewählte Farbschema (Hell-/Dunkelmodus) und
                Relay-Konfigurationen für das Nostr-Protokoll zu speichern. Diese Daten werden
                ausschließlich lokal in Ihrem Browser gespeichert und nicht an unsere Server
                übermittelt.
              </p>
              <p>
                Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse daran, eine benutzerfreundliche und
                funktionale Website bereitzustellen.
              </p>

              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">Nostr-Protokoll</h3>
              <p>
                Diese Website nutzt das Nostr-Protokoll, ein dezentrales Kommunikationsprotokoll.
                Wenn Sie sich über Nostr anmelden oder Nostr-Funktionen nutzen, werden Daten mit
                öffentlichen Nostr-Relays ausgetauscht. Bitte beachten Sie, dass auf Nostr-Relays
                veröffentlichte Daten öffentlich und dezentral gespeichert werden und nicht zentral
                gelöscht werden können.
              </p>
              <p>
                Die Nutzung von Nostr-Funktionen erfolgt auf Grundlage Ihrer Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </LegalSection>

            <LegalSection title="5. EXTERNE DIENSTE">
              <h3 className="font-display text-lg tracking-wider text-foreground mt-4 -ml-9">GitHub</h3>
              <p>
                Wir verlinken auf unsere GitHub-Profile und Repositories. Wenn Sie diesen Links
                folgen, gelten die Datenschutzbestimmungen von GitHub Inc. Weitere Informationen
                finden Sie in der{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  Datenschutzerklärung von GitHub
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="6. ÄNDERUNG DIESER DATENSCHUTZERKLÄRUNG">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
              </p>
            </LegalSection>

            {/* Deco separator at the end */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex-1 h-[2px] bg-foreground/20" />
              <div className="w-3 h-3 bg-primary rotate-45" />
              <div className="flex-1 h-[2px] bg-foreground/20" />
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-wider text-center">
              Stand: März 2026
            </p>
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

export default Datenschutz;
