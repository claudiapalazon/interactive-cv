export type Locale = "es" | "en";

export const cvContent = {
  es: {
    header: {
      name: "Claudia Palazón",
      subtitle: "Frontend Engineer",
    },
    sidebar: {
      profile: {
        title: "Perfil",
        text: "Frontend Engineer con +4 años de experiencia desarrollando aplicaciones web escalables. Enfocada en experiencia de usuario, accesibilidad y calidad de código, combinando background en UX/UI con tecnologías modernas. Experiencia en interfaces orientadas a datos y gestión de estados dinámicos en entornos de producto.",      },
      core: { title: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5, CSS3, SASS"] },
      frameworks: {
        title: "Frameworks & Components",
        items: ["React", "React Native", "LitElement", "Cells", "Next.js"],
      },
      aiTools: {
        title: "AI & Tools",
        items: ["GitHub Copilot", "Cursor", "Git / GitHub", "Agile (Scrum / Kanban)"],
      },
      designUx: {
        title: "Design & UX",
        items: ["Figma (Design Systems)", "UX/UI Design", "Adobe Creative Suite"],
      },
      others: { title: "Others", items: ["Node.js", "MongoDB"] },
    },
    main: {
      experience: {
        title: "Experiencia Laboral",
        jobs: [
          {
            role: "Frontend Engineer | BBVA Technology",
            period: "2025 — Actualidad",
            bullets: [
              "Desarrollo y mantenimiento de arquitectura de componentes escalables utilizando Web Components (LitElement) y Cells.",
              "Implementación de interfaces accesibles (WCAG) y de alto rendimiento para productos de banca digital.",
              "Trabajo en entornos de gran escala colaborando con equipos multidisciplinares en productos complejos.",
              "Desarrollo de funcionalidades con foco en experiencia de usuario y consistencia entre plataformas.",
              "Optimización de flujos de desarrollo y calidad de código mediante herramientas de IA (Copilot).",
            ],
          },
          {
            role: "Frontend & Mobile Developer | Harbiz (antes DudyFit)",
            period: "2021 — 2025",
            bullets: [
              "Desarrollo de interfaces complejas para una plataforma de alto tráfico en web y mobile (React y React Native).",
              "Gestión de interfaces orientadas a datos, integrando APIs y manejando estados dinámicos de aplicación.",
              "Escalabilidad y mantenimiento de features utilizando React, Meteor JS, MongoDB y SASS.",
              "Colaboración con el equipo de producto para definir soluciones de UX y viabilidad técnica.",
              "Optimización de rendimiento y mejora de la experiencia de usuario en múltiples flujos críticos.",
            ],
          },
          {
            role: "Diseñadora Gráfica & Digital | Ayuntamiento de Madrid",
            period: "2021",
            bullets: [
              "Diseño de activos digitales para campañas institucionales de gran alcance.",
              "Asegurar coherencia visual de marca en soportes digitales y físicos.",
            ],
          },
          {
            role: "Diseñadora UX/UI | MyPlazze (Minty Host)",
            period: "2017 — 2019",
            bullets: [
              "Diseño end-to-end de experiencia de usuario e interfaz para app móvil y dashboard.",
              "Creación de flujos de navegación y prototipos interactivos de alta fidelidad.",
            ],
          },
        ],
      },
      education: {
        title: "Educación",
        items: [
          { name: "Máster Frontend Development", place: "Lemoncode" },
          { name: "Bootcamp Desarrollo Frontend", place: "Adalab" },
          { name: "Escuela 42", place: "Telefónica" },
          { name: "Grado en Diseño Integral y Gestión de la Imagen", place: "URJC" },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Español", level: "Nativo" },
          { name: "Inglés", level: "Profesional (Working Proficiency)" },
          { name: "Francés", level: "Básico" },
        ],
      },
    },
  },

  en: {
    header: {
      name: "Claudia Palazón",
      subtitle: "Frontend Engineer",
    },
    sidebar: {
      profile: {
        title: "Profile",
        text: "Frontend Engineer with 4+ years of experience building scalable web applications. Focused on user experience, accessibility and code quality, combining a UX/UI background with modern frontend technologies. Experienced in data-driven interfaces and dynamic state management in product environments.",      },
      core: { title: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5, CSS3, SASS"] },
      frameworks: {
        title: "Frameworks & Components",
        items: ["React", "React Native", "LitElement", "Cells", "Next.js"],
      },
      aiTools: {
        title: "AI & Tools",
        items: ["GitHub Copilot", "Cursor", "Git / GitHub", "Agile (Scrum / Kanban)"],
      },
      designUx: {
        title: "Design & UX",
        items: ["Figma (Design Systems)", "UX/UI Design", "Adobe Creative Suite"],
      },
      others: { title: "Others", items: ["Node.js", "MongoDB"] },
    },
    main: {
      experience: {
        title: "Work Experience",
        jobs: [
          {
            role: "Frontend Engineer | BBVA Technology",
            period: "2025 — Present",
            bullets: [
              "Developed and maintained scalable component architecture using Web Components (LitElement) and Cells.",
              "Built accessible (WCAG-compliant) and high-performance interfaces for digital banking products.",
              "Worked in large-scale environments collaborating with cross-functional teams on complex products.",
              "Delivered features with strong focus on user experience and cross-platform consistency.",
              "Improved development workflows and code quality using AI tools (Copilot).",
            ],
          },
          {
            role: "Frontend & Mobile Developer | Harbiz (formerly DudyFit)",
            period: "2021 — 2025",
            bullets: [
              "Developed complex UI features for a high-traffic platform across web and mobile (React & React Native).",
              "Built data-driven interfaces integrating APIs and managing dynamic application state.",
              "Ensured scalability and maintainability using React, Meteor JS, MongoDB and SASS.",
              "Collaborated with product teams to define UX solutions and technical feasibility.",
              "Optimized performance and improved user experience across key user flows.",
            ],
          },
          {
            role: "Graphic & Digital Designer | Madrid City Council",
            period: "2021",
            bullets: [
              "Designed digital assets for large-scale institutional campaigns.",
              "Ensured brand consistency across digital and print media.",
            ],
          },
          {
            role: "UX/UI Designer | MyPlazze (Minty Host)",
            period: "2017 — 2019",
            bullets: [
              "Designed end-to-end user experience and interface for mobile apps and dashboards.",
              "Created navigation flows and high-fidelity interactive prototypes.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          { name: "Master in Frontend Development", place: "Lemoncode" },
          { name: "Frontend Development Bootcamp", place: "Adalab" },
          { name: "School 42", place: "Telefónica" },
          { name: "Degree in Integral Design and Image Management", place: "URJC" },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Spanish", level: "Native" },
          { name: "English", level: "Professional Working Proficiency" },
          { name: "French", level: "Basic" },
        ],
      },
    },
  },
} as const;

export type CvContent = (typeof cvContent)["es"];