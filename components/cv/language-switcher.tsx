"use client";

import { Printer } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/content/cv";

const labels: Record<Locale, { short: string; print: string }> = {
  es: { short: "ES", print: "Imprimir en español" },
  en: { short: "EN", print: "Print in English" },
};

export function LanguageSwitcher() {
  const { locale, setLocale, setLocaleForPrint } = useLocale();

  return (
    <div className="flex items-center gap-3 print:hidden">
      <div className="flex rounded-full bg-black/5 p-0.5">
        {(["es", "en"] as const).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            className={`px-3 py-1.5 text-[12px] font-semibold rounded-full transition-colors ${
              locale === lang
                ? "bg-black text-white"
                : "text-black/70 hover:text-black hover:bg-black/5"
            }`}
          >
            {labels[lang].short}
          </button>
        ))}
      </div>
      <div className="h-4 w-px bg-black/15" aria-hidden />
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => setLocaleForPrint("es")}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-black/70 hover:text-black hover:bg-black/5 rounded-md transition-colors"
          title="Imprimir versión en español"
        >
          <Printer className="w-3.5 h-3.5" />
          ES
        </button>
        <button
          type="button"
          onClick={() => setLocaleForPrint("en")}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-black/70 hover:text-black hover:bg-black/5 rounded-md transition-colors"
          title="Print English version"
        >
          <Printer className="w-3.5 h-3.5" />
          EN
        </button>
      </div>
    </div>
  );
}
