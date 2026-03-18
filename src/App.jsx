import React, { useEffect, useRef, useState } from "react";

const pricingData = {
  damen: {
    headers: ["Kurz (K)", "Mittel (M)", "Lang (L)"],
    sections: [
      {
        title: "Schneiden & Styling",
        items: [
          { name: "Schneiden, Trocknen", prices: ["27€", "32€", "39€"] },
          { name: "Waschen, Schneiden, Föhnen", prices: ["36€", "46€", "56€"] },
          { name: "Waschen, Schneiden, Trocknen", prices: ["30€", "35€", "41€"] },
          { name: "Waschen, Föhnen/legen", prices: ["26€", "31€", "38€"] },
          { name: "Nur Föhnen (ohne Waschen)", prices: ["23€", "28€", "34€"] },
          { name: "Pony schneiden", fixedPrice: "7€" },
          { name: "Augenbrauen", fixedPrice: "7€" },
        ],
      },
      {
        title: "Pflege",
        items: [
          { name: "Conditioner", fixedPrice: "3€" },
          { name: "Intensive Kur", fixedPrice: "6€" },
          { name: "Haare Waschen", fixedPrice: "8€" },
          { name: "Vitaplex (inkl. Kopfmassage)", fixedPrice: "15€" },
        ],
      },
      {
        title: "Färben",
        items: [
          { name: "Ansatzfarbe", prices: ["37€", "48€ (2 cm)", ""] },
          { name: "Farbe", prices: ["42€", "48€", "57€"] },
          { name: "Tönung", prices: ["35€", "41€", "48€"] },
        ],
      },
      {
        title: "Blondierung",
        items: [
          { name: "Ansätze Blondierung", prices: ["39€", "48€", "58€"] },
          { name: "Softaufhellung (Blondierwäsche)", prices: ["42€", "47€", "57€"] },
          { name: "Glossing (Abmattierung)", prices: ["10€", "15€", "25€"] },
        ],
      },
      {
        title: "Strähnen",
        items: [
          { name: "Haubensträhnen", prices: ["ab 26€", "", ""] },
          { name: "Foliensträhnen (Oberkopf)", prices: ["38€", "46€", "51€"] },
          { name: "Foliensträhnen (halber Kopf)", prices: ["44€", "49€", "55€"] },
          { name: "Foliensträhnen (ganzer Kopf)", prices: ["51€", "59€", "69€"] },
          { name: "Balayage (inkl. Glossing)", prices: ["", "ab 98€", "ab 129€"] },
        ],
      },
      {
        title: "Dauerhafte Umformung",
        items: [
          { name: "Dauerwelle klassisch", prices: ["55€", "65€", "75€"] },
          { name: "Dauerwelle mit Technik", prices: ["", "", "ab 55€"] },
        ],
      },
      {
        title: "Keratinbehandlung",
        items: [
          { name: "Keratinbehandlung inkl. Glättung", fixedPrice: "ab 130€" },
          { name: "Haar-Botox", fixedPrice: "ab 120€" },
          { name: "Flächen", fixedPrice: "ab 15€" },
        ],
      },
    ],
  },
  haarverlaengerung: {
    title: "Haarverlängerungen / Haarverdichtung",
    items: [
      { name: "1 Tape (paar)", price: "20€" },
      { name: "4 Tape (paar)", price: "80€" },
      { name: "20 Tape (paar)", price: "400€" },
      { name: "Ab 20 Tape (paar)", price: "Auf Anfrage" },
    ],
  },
  anlaesse: {
    title: "Besondere Anlässe",
    items: [
      { name: "Hochsteckfrisur", price: "ab 45€" },
      { name: "Braut (inkl. Probehochstecken und Beratung)", price: "ab 185€" },
    ],
  },
  kosmetik: {
    title: "Make-up / Kosmetik",
    items: [
      { name: "Tages Make-up", price: "ab 25€" },
      { name: "Abend Make-up", price: "ab 45€" },
      { name: "Augenbrauen Farbe", price: "8€" },
      { name: "Wimpern Farbe", price: "8€" },
      { name: "Zupfen", price: "8€" },
      { name: "Konturierung", price: "7€" },
    ],
  },
  maedchen: {
    title: "Mädchen bis 10 Jahre",
    subtitle: "Schneiden",
    items: [
      { name: "Schneiden, Trocknen", price: "20€" },
      { name: "Waschen, Schneiden, Föhnen", price: "29€" },
      { name: "Waschen, Schneiden, Trocknen", price: "25€" },
    ],
  },
  herren: {
    sections: [
      {
        title: "Schneiden & Styling",
        items: [
          { name: "Schneiden", price: "16€" },
          { name: "Schneiden (Seiten 0 mm mit Übergang)", price: "19€" },
          { name: "Waschen, Schneiden, Styling", price: "19€" },
          { name: "Haare Nassrasur", price: "19€" },
          { name: "Bart mit Übergang", price: "14€" },
          { name: "Bart Kontur", price: "10€" },
          { name: "Bart Rasierung", price: "14€" },
          { name: "Bart Farbe", price: "14€" },
          { name: "Musterrasur (pro Seite)", price: "ab 14€" },
          { name: "Linienrasur", price: "ab 1,50€" },
        ],
      },
      {
        title: "Dauerhafte Umformung",
        items: [{ name: "Dauerwelle", price: "ab 40€" }],
      },
      {
        title: "Farbe und Tönung",
        items: [
          { name: "Tönung", price: "ab 10€" },
          { name: "Farbe", price: "31€" },
          { name: "Farbe, Schneiden, Styling", price: "ab 36€" },
          { name: "Farbe bei längeren Haaren (Aufschlag)", price: "+5€" },
        ],
      },
      {
        title: "Chemische Glättung",
        items: [{ name: "Glättung", price: "ab 27€" }],
      },
    ],
  },
  jungs: {
    title: "Jungs bis 10 Jahre",
    item: { name: "Schneiden", price: "13€" },
  },
};

const languages = [
  { label: "DEUTSCH", flag: "de" },
  { label: "ARABISCH", flag: "sa" },
  { label: "SPANISCH", flag: "es" },
  { label: "ENGLISCH", flag: "gb" },
  { label: "RUSSISCH", flag: "ru" },
  { label: "GRIECHISCH", flag: "gr" },
  { label: "UKRAINISCH", flag: "ua" },
];

const PRINT_WIDTH_MM = 450;
const CSS_PX_PER_MM = 96 / 25.4;
const PRINT_WIDTH_PX = PRINT_WIDTH_MM * CSS_PX_PER_MM;

function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <span className="section-title-text">{children}</span>
    </div>
  );
}

function WomenSection({ data }) {
  return (
    <section className="poster-card poster-card-large women-card">
      <SectionTitle>Damen</SectionTitle>

      <div className="women-table-header">
        <div>Service</div>
        {data.headers.map((header) => (
          <div key={header} className="align-right">
            {header}
          </div>
        ))}
      </div>

      <div className="women-sections">
        {data.sections.map((section) => (
          <div key={section.title} className="price-section">
            <h3>{section.title}</h3>
            {section.items.map((item) => (
              <div key={item.name} className="women-row">
                <div className="service-name">{item.name}</div>
                {item.fixedPrice ? (
                  <div className="fixed-price">{item.fixedPrice}</div>
                ) : (
                  item.prices.map((price, index) => (
                    <div key={`${item.name}-${index}`} className="price-cell">
                      {price || " "}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function MenSection({ data }) {
  return (
    <section className="poster-card men-card">
      <SectionTitle>Herren</SectionTitle>
      <div className="stack-sections">
        {data.sections.map((section) => (
          <div key={section.title} className="price-section compact-section">
            <h3>{section.title}</h3>
            {section.items.map((item) => (
              <div key={item.name} className="simple-row">
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ title, subtitle, items, accent = false, className = "" }) {
  return (
    <section className={`poster-card feature-card${accent ? " feature-card-accent" : ""} ${className}`.trim()}>
      <h3 className="feature-title">{title}</h3>
      {subtitle ? <div className="feature-subtitle">{subtitle}</div> : null}
      <div className="stack-list">
        {items.map((item) => (
          <div key={item.name} className="simple-row">
            <span>{item.name}</span>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function LanguagesPanel() {
  return (
    <section className="poster-card info-card languages-panel">
      <div className="languages-panel-content">
        <div className="language-grid">
          <div className="language-item footer-label-item">Wir sprechen</div>
          {languages.map((language) => (
            <div key={language.label} className="language-item">
              <img
                src={`https://flagcdn.com/w40/${language.flag}.png`}
                alt=""
                className="language-flag"
              />
              <span>{language.label}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/Price%20list%20.png"
        alt="QR Code"
        className="footer-qr-code"
      />
    </section>
  );
}

function ContactPanel() {
  return (
    <div className="header-contact">
      <span className="contact-line">TEL.: 089 - 32 66 81 82</span>
    </div>
  );
}

const App = () => {
  const previewRef = useRef(null);
  const [scale, setScale] = useState(540 / PRINT_WIDTH_PX);
  const watermarkText =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("watermark")
      : null;

  useEffect(() => {
    const element = previewRef.current;

    if (!element) {
      return undefined;
    }

    const updateScale = () => {
      setScale(element.clientWidth / PRINT_WIDTH_PX);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="poster-preview" ref={previewRef}>
        <main
          className="poster notranslate"
          translate="no"
          style={{ "--poster-scale": scale }}
        >
          {watermarkText ? (
            <div className="poster-watermarks" aria-hidden="true">
              <div className="poster-watermark poster-watermark-top">{watermarkText}</div>
              <div className="poster-watermark poster-watermark-middle">{watermarkText}</div>
              <div className="poster-watermark poster-watermark-bottom">{watermarkText}</div>
            </div>
          ) : null}
          <header className="poster-header">
            <div className="brand-mark" />
            <img src="/Logo.png" alt="Paradiso Hairstyling" className="poster-logo" />
            <div className="brand-copy">
              <p>Preisübersicht 2026 · Mit und ohne Termin</p>
            </div>
            <ContactPanel />
          </header>

          <div className="poster-body">
            <div className="poster-stack">
              <WomenSection data={pricingData.damen} />

              <MenSection data={pricingData.herren} />

              <FeatureCard
                title={pricingData.haarverlaengerung.title}
                items={pricingData.haarverlaengerung.items}
                className="linear-feature-card"
              />

              <section className="support-grid">
                <FeatureCard
                  title={pricingData.maedchen.title}
                  subtitle={pricingData.maedchen.subtitle}
                  items={pricingData.maedchen.items}
                  accent
                  className="support-card"
                />

                <FeatureCard
                  title={pricingData.jungs.title}
                  items={[pricingData.jungs.item]}
                  accent
                  className="support-card"
                />

                <FeatureCard
                  title={pricingData.anlaesse.title}
                  items={pricingData.anlaesse.items}
                  className="support-card"
                />

                <FeatureCard
                  title={pricingData.kosmetik.title}
                  items={pricingData.kosmetik.items}
                  className="support-card"
                />
              </section>
            </div>

            <LanguagesPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
