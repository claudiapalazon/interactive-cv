"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Locale } from "@/content/cv";

const STORAGE_KEY = "cv-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  setLocaleForPrint: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale === "es" ? "es" : "en";
    }
  }, []);

  const setLocaleForPrint = useCallback((printLocale: Locale) => {
    setLocaleState(printLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, printLocale);
      document.documentElement.lang = printLocale === "es" ? "es" : "en";
      requestAnimationFrame(() => {
        window.print();
      });
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale, mounted]);

  const value = useMemo(
    () => ({ locale, setLocale, setLocaleForPrint }),
    [locale, setLocale, setLocaleForPrint]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
