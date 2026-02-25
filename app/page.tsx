import { CvHeader } from "@/components/cv/cv-header"
import { CvSidebar } from "@/components/cv/cv-sidebar"
import { CvMain } from "@/components/cv/cv-main"
import { LanguageSwitcher } from "@/components/cv/language-switcher"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] flex items-center justify-center p-8 print:bg-white print:p-0 print:min-h-0">
      {/* Language & print controls — fixed, hidden in print */}
      <div className="fixed top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>

      {/* A4 Sheet */}
      <div className="w-[210mm] h-[297mm] bg-white text-black font-sans shadow-sm print:shadow-none overflow-hidden px-10 py-8 flex flex-col">
        {/* Header */}
        <CvHeader />

        {/* Two-column layout */}
        <div className="flex flex-1 gap-8 pt-5">
          {/* Sidebar — 30% */}
          <div className="w-[30%] border-r border-black/5 pr-6">
            <CvSidebar />
          </div>

          {/* Main — 70% */}
          <div className="w-[70%]">
            <CvMain />
          </div>
        </div>
      </div>
    </div>
  )
}
