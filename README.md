# 📄 CV Web — Interactive Resume

> Interactive CV web with bilingual support (ES/EN) and print-optimized layout. Built with Next.js, React, and TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🌐 **Bilingual (ES/EN)**: Switch language on the fly; content lives in a single typed data source
- 🖨️ **Print-ready**: A4 layout, print-specific styles, and "Print in ES/EN" actions that open the native print dialog
- 📐 **Content-driven**: All copy in `content/cv.ts` — no hardcoded text in components
- 🧩 **Component-based**: Clear separation — header, sidebar, main content, language switcher
- ♿ **Accessible**: Semantic HTML, `lang` attribute per locale, keyboard-friendly controls
- ⚡ **Next.js App Router**: Modern React with server-ready setup

## 🚀 Demo

_Add your live demo URL here (e.g. Vercel) when deployed._

## 🛠️ Technologies

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **TypeScript 5.7** — Type-safe JavaScript
- **Tailwind CSS 4** — Utility-first CSS (including print utilities)
- **Lucide React** — Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/claudiapalazon/curriculum.git

# Navigate to the project directory
cd curriculum

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:3000`

## 📜 Available Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Build for production     |
| `npm run start`| Run production build     |
| `npm run lint` | Run ESLint               |

## 📁 Project Structure

```
curriculum/
├── app/
│   ├── globals.css      # Global and print styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # CV page (header, sidebar, main, switcher)
├── components/
│   ├── cv/              # CV-specific components
│   │   ├── cv-header.tsx
│   │   ├── cv-main.tsx
│   │   ├── cv-sidebar.tsx
│   │   └── language-switcher.tsx
│   └── locale-provider.tsx  # i18n context (locale state + persistence)
├── content/
│   └── cv.ts            # All CV copy (ES/EN), typed
├── lib/
│   └── utils.ts
└── package.json
```

## 🎨 Key Components

- **CvHeader**: Name, subtitle, contact links (email, phone, GitHub, LinkedIn)
- **CvSidebar**: Profile, core skills, frameworks, AI tools, design/UX, others
- **CvMain**: Experience, education, languages
- **LanguageSwitcher**: ES/EN toggle + "Print in ES" / "Print in EN" buttons (hidden when printing)
- **LocaleProvider**: React context for current locale and persistence (e.g. localStorage)

## 🌟 Highlights

This project demonstrates:

- **Data layer**: Single source of truth in `content/cv.ts` with TypeScript types
- **i18n without a library**: Locale provider + content map, with `lang` and print flow
- **Print-first UX**: A4 dimensions (`210mm × 297mm`), print utilities, and actions to print in the chosen language
- **Clean component architecture**: Presentational components that consume locale and content
- **Modern React**: Next.js App Router, client components where needed

## 📄 License

MIT License — feel free to use this project for your portfolio or learning purposes.

## 👤 Author

**Claudia Palazón**

- Portfolio: [claudiapalazon.com](https://www.claudiapalazon.com)
- GitHub: [@claudiapalazon](https://github.com/claudiapalazon)
- LinkedIn: [claudiapalazon](https://linkedin.com/in/claudiapalazon)

---

⭐ If you found this project helpful, please consider giving it a star!
