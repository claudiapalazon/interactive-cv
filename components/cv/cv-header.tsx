"use client";

import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { cvContent } from "@/content/cv";

export function CvHeader() {
  const { locale } = useLocale();
  const { header } = cvContent[locale];

  return (
    <header className="border-b border-black/10 pb-5 mb-0">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-black leading-none">
            {header.name}
          </h1>
          <p className="text-[14px] text-black/60 mt-1.5 font-medium">
            {header.subtitle}
          </p>
        </div>
        <a
          href="https://claudiapalazon.com"
          className="flex items-center gap-1.5 text-[12px] font-semibold text-black bg-black/5 px-3 py-1.5 rounded-full hover:bg-black/10 transition-colors shrink-0 print:bg-black/5"
        >
          <Globe className="w-3.5 h-3.5" />
          claudiapalazon.com
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4 text-[11px] text-black/70">
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          +34 646 388 776
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" />
          claupanon@gmail.com
        </span>
        <a
          href="https://github.com/claudiapalazon"
          className="flex items-center gap-1.5 hover:underline"
        >
          <Github className="w-3.5 h-3.5" />
          github.com/claudiapalazon
        </a>
        <a
          href="https://linkedin.com/in/claudiapalazon"
          className="flex items-center gap-1.5 hover:underline"
        >
          <Linkedin className="w-3.5 h-3.5" />
          linkedin.com/in/claudiapalazon
        </a>
      </div>
    </header>
  );
}
