"use client";

import { useLocale } from "@/components/locale-provider";
import { cvContent } from "@/content/cv";

export function CvMain() {
  const { locale } = useLocale();
  const { main } = cvContent[locale];
  const { experience, education, languages } = main;

  return (
    <div className="space-y-5 text-[11.5px] leading-[1.6] text-black">
      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-3 border-b border-black/10 pb-1">
          {experience.title}
        </h2>
        <div className="space-y-4">
          {experience.jobs.map((job) => (
            <article key={job.role}>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-[12.5px] font-semibold text-black">
                  {job.role}
                </h3>
                <span className="text-[10.5px] text-black/50 shrink-0">
                  {job.period}
                </span>
              </div>
              <ul className="mt-1 space-y-0.5 text-black/80 list-disc list-outside ml-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-3 border-b border-black/10 pb-1">
          {education.title}
        </h2>
        <div className="space-y-2">
          {education.items.map((item) => (
            <div key={item.name}>
              <h3 className="text-[12px] font-semibold text-black">
                {item.name}
              </h3>
              <p className="text-[11px] text-black/50">{item.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-black mb-3 border-b border-black/10 pb-1">
          {languages.title}
        </h2>
        <div className="flex gap-6">
          {languages.items.map((item) => (
            <span key={item.name}>
              {item.name}{" "}
              <span className="text-black/50">— {item.level}</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
