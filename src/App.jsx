import React from "react";

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
          { name: "Ansatzfarbe", prices: ["37€", "48€ ( 2 Cm)", ""] },
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
      { name: "Braut (inkl. Probehochstecken und beratung)", price: "ab 185€" },
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
    title: "MÄDCHEN BIS 10 JAHRE",
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
        title: "Schneiden  & Styling",
        items: [
          { name: "Schneiden", price: "16€" },
          { name: "Schneiden ( Seiten 0 mm Mit Übergang)", price: "19€" },
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
    title: "JUNGS BIS 10 JAHRE",
    item: { name: "Schneiden", price: "13€" },
  },
};

const languages = [
  { label: "DEUTSCH", icon: "🇩🇪" },
  { label: "ARABISCH", icon: "🇸🇦" },
  { label: "SPANISCH", icon: "🇪🇸" },
  { label: "ENGLISCH", icon: "🇬🇧" },
  { label: "RUSSISCH", icon: "🇷🇺" },
  { label: "GRIECHISCH", icon: "🇬🇷" },
  { label: "UKRAINISCH", icon: "🇺🇦" },
  { label: "ORDO", icon: "🇵🇰" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 flex justify-center items-start overflow-y-auto">
      <div
        className="w-full shadow-2xl bg-[#1e293b] border border-gray-700 flex flex-col"
        style={{ maxWidth: "520px", minHeight: "1000px" }}
      >
        <div className="pt-8 pb-6 px-4 flex justify-center bg-white/5 border-b border-gray-700">
          <img
            src="/Logo.png"
            alt="Paradiso Hairstyling"
            className="w-full max-w-[360px] h-auto"
          />
        </div>

        <div className="flex-grow p-5 space-y-8">
          <section>
            <div className="bg-[#f97316] text-white text-2xl font-black px-4 py-1.5 mb-4 inline-block w-full skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">DAMEN</span>
            </div>

            <div className="grid grid-cols-12 mb-2 text-[9px] uppercase tracking-widest font-bold italic text-gray-400 px-1">
              <div className="col-span-6">Service</div>
              {pricingData.damen.headers.map((header, index) => (
                <div key={index} className="col-span-2 text-right">
                  {header}
                </div>
              ))}
            </div>

            {pricingData.damen.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-5">
                <h3 className="text-[#f97316] italic font-bold text-[12px] mb-1.5 border-b border-gray-700 pb-0.5">
                  {section.title}
                </h3>
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid grid-cols-12 text-[10.5px] py-1 border-b border-white/5 items-center"
                  >
                    <div className="col-span-6 font-medium text-gray-200 leading-tight pr-1">
                      {item.name}
                    </div>
                    {item.fixedPrice ? (
                      <div className="col-span-6 text-right font-bold text-white">{item.fixedPrice}</div>
                    ) : (
                      item.prices.map((price, priceIndex) => (
                        <div key={priceIndex} className="col-span-2 text-right font-bold text-white">
                          {price}
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div className="mt-4 space-y-4">
              <div className="bg-[#f97316]/10 p-3 rounded border border-[#f97316]/20">
                <h3 className="text-[#f97316] italic font-bold text-[11px] mb-1 uppercase">
                  {pricingData.maedchen.title}
                </h3>
                <div className="text-[10px] uppercase opacity-70 mb-2">{pricingData.maedchen.subtitle}</div>
                {pricingData.maedchen.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-[10px] mb-1">
                    <span>{item.name}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/20 p-3 rounded border border-white/5">
                <h3 className="text-[#f97316] italic font-bold text-[11px] mb-1 uppercase tracking-wider">
                  {pricingData.anlaesse.title}
                </h3>
                {pricingData.anlaesse.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[10px] mb-1 border-b border-white/5 pb-1 last:border-0"
                  >
                    <span>{item.name}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-4">
            <div className="bg-[#f97316] text-white text-2xl font-black px-4 py-1.5 mb-4 inline-block w-full skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">HERREN</span>
            </div>

            {pricingData.herren.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3 className="text-[#f97316] italic font-bold text-[12px] mb-1.5 border-b border-gray-700 pb-0.5 uppercase tracking-wider">
                  {section.title}
                </h3>
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between text-[11px] py-1.5 border-b border-white/5 items-center gap-4"
                  >
                    <span className="font-medium text-gray-200">{item.name}</span>
                    <span className="font-bold text-white whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            ))}

            <div className="border-2 border-[#f97316] p-4 flex justify-between items-center bg-black/40 mb-6 shadow-inner gap-3">
              <div className="flex flex-col">
                <span className="font-black text-lg italic uppercase leading-none">{pricingData.jungs.title}</span>
                <span className="text-[9px] opacity-70 uppercase tracking-widest">{pricingData.jungs.item.name}</span>
              </div>
              <span className="bg-[#f97316] text-white px-5 py-1.5 font-bold text-xl rounded">
                {pricingData.jungs.item.price}
              </span>
            </div>
          </section>

          <section className="pt-4 pb-10 space-y-6">
            <div className="bg-black/30 p-4 rounded border border-gray-700">
              <h3 className="text-[#f97316] italic font-black text-[13px] mb-3 uppercase border-b-2 border-[#f97316] inline-block">
                {pricingData.kosmetik.title}
              </h3>
              <div className="space-y-2">
                {pricingData.kosmetik.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-[11px] border-b border-white/5 pb-1">
                    <span className="text-gray-200">{item.name}</span>
                    <span className="font-bold text-white">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded border border-gray-700">
              <h3 className="text-[#f97316] italic font-black text-[13px] mb-3 uppercase border-b-2 border-[#f97316] inline-block">
                {pricingData.haarverlaengerung.title}
              </h3>
              <div className="space-y-2">
                {pricingData.haarverlaengerung.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-[11px] border-b border-white/5 pb-1 last:border-0">
                    <span className="text-gray-200">{item.name}</span>
                    <span className="font-bold text-white">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="bg-black/80 p-6 flex flex-col items-center border-t border-gray-700 mt-auto">
          <div className="w-full mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-grow bg-gray-700"></div>
              <span className="text-[#f97316] font-black italic uppercase text-[10px] tracking-[0.2em]">Wir Sprechen</span>
              <div className="h-px flex-grow bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[10px] font-bold border-l-2 border-[#f97316] pl-2 py-0.5"
                >
                  <span>{lang.icon}</span>
                  <span className="text-gray-300 tracking-wider">{lang.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center space-y-3 w-full">
            <div className="text-lg font-black italic tracking-[0.15em] text-white bg-white/5 py-1 uppercase">Mit und ohne Termin</div>
            <div className="flex flex-col gap-1 text-xs font-bold text-gray-300">
              <span>TEL.: 089 - 32 66 81 82</span>
              <span className="text-[#f97316] text-[10px]">WWW.HAIRSTYLING-PARADISO.DE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

