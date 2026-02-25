"use client";

import { useLocale } from "@/components/locale-provider";
import { cvContent } from "@/content/cv";

export function CvSidebar() {
  const { locale } = useLocale();
  const { sidebar } = cvContent[locale];

  return (
    <aside className="space-y-5 text-[11.5px] leading-[1.6] text-black">
      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.profile.title}
        </h2>
        <p className="text-black/80">{sidebar.profile.text}</p>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.core.title}
        </h2>
        <ul className="space-y-0.5 text-black/80">
          {sidebar.core.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.frameworks.title}
        </h2>
        <ul className="space-y-0.5 text-black/80">
          {sidebar.frameworks.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.aiTools.title}
        </h2>
        <ul className="space-y-0.5 text-black/80">
          {sidebar.aiTools.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.designUx.title}
        </h2>
        <ul className="space-y-0.5 text-black/80">
          {sidebar.designUx.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-2 border-b border-black/10 pb-1">
          {sidebar.others.title}
        </h2>
        <ul className="space-y-0.5 text-black/80">
          {sidebar.others.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
