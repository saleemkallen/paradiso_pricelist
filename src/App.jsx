import React, { useState, useEffect } from "react";
import {
  translations,
  LANGUAGE_OPTIONS,
  getStoredLanguage,
  setStoredLanguage,
} from "./translations";

const App = () => {
  const [lang, setLang] = useState(() => getStoredLanguage());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = translations[lang] || translations.de;

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.title = (translations[lang] || translations.de).meta?.title || "Paradiso Preisliste 2026";
  }, [lang]);

  const handleLanguageChange = (code) => {
    setLang(code);
    setStoredLanguage(code);
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 flex justify-center items-start overflow-y-auto relative">
      {/* Language switcher - top-right corner */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-[#1e293b] border border-gray-600 rounded-lg hover:bg-[#334155] transition-colors shadow-lg"
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            <span className="text-lg">
              {LANGUAGE_OPTIONS.find((l) => l.code === lang)?.icon || "🌐"}
            </span>
            <span className="text-sm font-medium">
              {LANGUAGE_OPTIONS.find((l) => l.code === lang)?.label || "Language"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
                aria-hidden="true"
              />
              <div
                className="absolute right-0 mt-2 py-1 w-48 bg-[#1e293b] border border-gray-600 rounded-lg shadow-xl z-50"
                role="listbox"
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => handleLanguageChange(option.code)}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-[#334155] ${
                      lang === option.code ? "bg-[#f97316]/20 text-[#f97316]" : "text-gray-200"
                    }`}
                    role="option"
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="w-full shadow-2xl bg-[#1e293b] border border-gray-700 flex flex-col"
        style={{ maxWidth: "1400px" }}
      >
        <div className="pt-8 pb-6 px-4 flex justify-center bg-white/5 border-b border-gray-700">
          <img
            src="/Logo.png"
            alt={t.meta?.altLogo || "Paradiso Hairstyling"}
            className="w-full max-w-[360px] h-auto"
          />
        </div>

        <div className="flex-grow p-5 lg:p-6 space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <section className="xl:col-span-7">
              <div className="bg-[#f97316] text-white text-2xl font-black px-4 py-1.5 mb-4 inline-block w-full skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">{t.damen.label}</span>
              </div>

              <div className="grid grid-cols-12 mb-2 text-[9px] uppercase tracking-widest font-bold italic text-gray-400 px-1">
                <div className="col-span-6">{t.ui.service}</div>
                {t.damen.headers.map((header, index) => (
                  <div key={index} className="col-span-2 text-end">
                    {header}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                {t.damen.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-2">
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
                          <div className="col-span-6 text-end font-bold text-white">{item.fixedPrice}</div>
                        ) : (
                          item.prices.map((price, priceIndex) => (
                            <div key={priceIndex} className="col-span-2 text-end font-bold text-white">
                              {price}
                            </div>
                          ))
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f97316]/10 p-3 rounded border border-[#f97316]/20">
                  <h3 className="text-[#f97316] italic font-bold text-[11px] mb-1 uppercase">
                    {t.maedchen.title}
                  </h3>
                  <div className="text-[10px] uppercase opacity-70 mb-2">{t.maedchen.subtitle}</div>
                  {t.maedchen.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-[10px] mb-1">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-black/20 p-3 rounded border border-white/5">
                  <h3 className="text-[#f97316] italic font-bold text-[11px] mb-1 uppercase tracking-wider">
                    {t.anlaesse.title}
                  </h3>
                  {t.anlaesse.items.map((item, index) => (
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

            <section className="xl:col-span-5">
              <div className="bg-[#f97316] text-white text-2xl font-black px-4 py-1.5 mb-4 inline-block w-full skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">{t.herren.label}</span>
              </div>

              {t.herren.sections.map((section, sectionIndex) => (
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

              <div className="border-2 border-[#f97316] p-4 flex justify-between items-center bg-black/40 shadow-inner gap-3">
                <div className="flex flex-col">
                  <span className="font-black text-lg italic uppercase leading-none">{t.jungs.title}</span>
                  <span className="text-[9px] opacity-70 uppercase tracking-widest">{t.jungs.item.name}</span>
                </div>
                <span className="bg-[#f97316] text-white px-5 py-1.5 font-bold text-xl rounded">
                  {t.jungs.item.price}
                </span>
              </div>
            </section>

            <section className="xl:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded border border-gray-700">
                <h3 className="text-[#f97316] italic font-black text-[13px] mb-3 uppercase border-b-2 border-[#f97316] inline-block">
                  {t.kosmetik.title}
                </h3>
                <div className="space-y-2">
                  {t.kosmetik.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-[11px] border-b border-white/5 pb-1">
                      <span className="text-gray-200">{item.name}</span>
                      <span className="font-bold text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded border border-gray-700">
                <h3 className="text-[#f97316] italic font-black text-[13px] mb-3 uppercase border-b-2 border-[#f97316] inline-block">
                  {t.haarverlaengerung.title}
                </h3>
                <div className="space-y-2">
                  {t.haarverlaengerung.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-[11px] border-b border-white/5 pb-1 last:border-0">
                      <span className="text-gray-200">{item.name}</span>
                      <span className="font-bold text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-black/80 p-6 flex flex-col items-center border-t border-gray-700 mt-auto">
          <div className="w-full mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-grow bg-gray-700"></div>
              <span className="text-[#f97316] font-black italic uppercase text-[10px] tracking-[0.2em]">{t.ui.weSpeak}</span>
              <div className="h-px flex-grow bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
              {t.ui.spokenLangs.map((label, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[10px] font-bold border-l-2 border-[#f97316] pl-2 py-0.5"
                >
                  <span>{["🇩🇪", "🇸🇦", "🇪🇸", "🇬🇧", "🇷🇺", "🇬🇷", "🇺🇦"][index]}</span>
                  <span className="text-gray-300 tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center space-y-3 w-full">
            <div className="text-lg font-black italic tracking-[0.15em] text-white bg-white/5 py-1 uppercase">{t.ui.withOrWithoutAppointment}</div>
            <div className="flex flex-col gap-1 text-xs font-bold text-gray-300">
              <span>{t.ui.tel}</span>
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src="/qr-code.png"
                alt="QR Code"
                className="w-24 h-24 rounded-lg bg-white p-1.5 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
