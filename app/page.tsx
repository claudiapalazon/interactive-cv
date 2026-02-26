import { CvHeader } from "@/components/cv/cv-header"
import { CvSidebar } from "@/components/cv/cv-sidebar"
import { CvMain } from "@/components/cv/cv-main"
import { LanguageSwitcher } from "@/components/cv/language-switcher"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] flex items-center justify-center p-4 pt-14 sm:p-6 sm:pt-6 md:p-8 md:pt-8 print:bg-white print:p-0 print:pt-0 print:min-h-0">
      {/* Language & print controls — fixed, hidden in print */}
      <div className="fixed z-10 sm:top-4 sm:right-4 top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))]">
        <LanguageSwitcher />
      </div>

      {/* Sheet: full width on mobile, A4 from md; single column on mobile, two columns from md */}
      <div className="w-full max-w-[95vw] md:max-w-[210mm] md:w-[210mm] min-h-[100dvh] md:min-h-0 md:h-[297mm] bg-white text-black font-sans shadow-sm print:shadow-none overflow-hidden px-5 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 flex flex-col print:w-[210mm] print:min-h-0 print:h-[297mm] print:max-w-none">
        {/* Header */}
        <CvHeader />

        {/* Layout: column on mobile (main first), row from md; sidebar left, main right (desktop + print) */}
        <div className="flex flex-1 flex-col md:flex-row gap-6 md:gap-8 pt-4 md:pt-5 print:flex-row print:gap-8 print:pt-5">
          {/* Sidebar — first on mobile, 30% left on desktop and print */}
          <div className="w-full md:w-[30%] md:border-r md:border-black/5 md:pr-6 order-1 border-b border-black/10 pb-5 md:border-b-0 md:pb-0 print:w-[30%] print:border-r print:border-black/5 print:pr-6 print:pb-0 print:border-b-0">
            <CvSidebar />
          </div>

          {/* Main — second on mobile, 70% right on desktop and print */}
          <div className="w-full md:w-[70%] order-2 print:w-[70%]">
            <CvMain />
          </div>
        </div>
      </div>
    </div>
  )
}
