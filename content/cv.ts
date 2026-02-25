export type Locale = "es" | "en";

export const cvContent = {
  es: {
    header: {
      name: "Claudia Palazón",
      subtitle: "Desarrolladora FrontEnd",
    },
    sidebar: {
      profile: {
        title: "Perfil",
        text: "Desarrolladora FrontEnd con +4 años de experiencia y background en Diseño UX/UI. Especialista en crear interfaces pixel-perfect y escalables, con una alta capacidad de adaptación a arquitecturas diversas. Mi enfoque combina Clean Code, accesibilidad e IA para optimizar el desarrollo de productos digitales de alto impacto.",
      },
      core: { title: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5, CSS3, SASS"] },
      frameworks: {
        title: "Frameworks & Components",
        items: ["React", "React Native", "LitElement", "Cells", "Next.js"],
      },
      aiTools: {
        title: "AI & Tools",
        items: ["GitHub Copilot", "LLMs for dev", "Git / GitHub", "Agile (Scrum / Kanban)"],
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
            role: "Desarrolladora FrontEnd | BBVA Technology",
            period: "2025 — Actualidad",
            bullets: [
              "Desarrollo de componentes y funcionalidades para banca digital garantizando estándares de pixel-perfect y accesibilidad web (WCAG).",
              "Implementación de arquitecturas basadas en Cells y Web Components (LitElement).",
              "Optimización de flujos de trabajo y calidad de código mediante IA aplicada al desarrollo.",
              "Colaboración activa en entornos Agile para la entrega continua de valor en productos financieros.",
            ],
          },
          {
            role: "Desarrolladora Web | Harbiz (antes DudyFit)",
            period: "2021 — 2025",
            bullets: [
              "Desarrollo FrontEnd y Mobile (React Native) para una plataforma de alto tráfico en el sector fitness.",
              "Implementación de interfaces complejas manteniendo la integridad total del diseño original y la usabilidad.",
              "Mantenimiento y escalabilidad de features utilizando React, Meteor JS, MongoDB y SASS.",
              "Consultoría técnica con el equipo de producto para definir la viabilidad de nuevos sistemas de diseño.",
            ],
          },
          {
            role: "Diseñadora Gráfica & Digital | Ayuntamiento de Madrid",
            period: "2021",
            bullets: [
              "Diseño y maquetación de activos digitales para campañas institucionales de gran alcance.",
              "Adaptación de creatividades para soportes web y físicos, asegurando coherencia visual de marca.",
            ],
          },
          {
            role: "Diseñadora UX/UI | MyPlazze (Minty Host)",
            period: "2017 — 2019",
            bullets: [
              "Diseño integral de la experiencia de usuario (UX) e interfaz (UI) para App móvil y Dashboard.",
              "Creación de flujos de navegación intuitivos y prototipado interactivo de alta fidelidad.",
            ],
          },
        ],
      },
      education: {
        title: "Educación",
        items: [
          { name: "Máster FrontEnd Development", place: "Lemoncode" },
          { name: "Bootcamp Desarrollo Front End", place: "Adalab" },
          { name: "Escuela 42", place: "Telefónica" },
          { name: "Grado en Diseño Integral y Gestión de la Imagen", place: "URJC" },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Español", level: "Nativo" },
          { name: "Inglés", level: "Avanzado" },
          { name: "Francés", level: "Básico" },
        ],
      },
    },
  },
  en: {
    header: {
      name: "Claudia Palazón",
      subtitle: "FrontEnd Developer",
    },
    sidebar: {
      profile: {
        title: "Profile",
        text: "FrontEnd Developer with +4 years of experience and a background in UX/UI Design. Specialist in creating pixel-perfect, scalable interfaces with strong adaptability to diverse architectures. My approach combines Clean Code, accessibility, and AI to optimize the development of high-impact digital products.",
      },
      core: { title: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5, CSS3, SASS"] },
      frameworks: {
        title: "Frameworks & Components",
        items: ["React", "React Native", "LitElement", "Cells", "Next.js"],
      },
      aiTools: {
        title: "AI & Tools",
        items: ["GitHub Copilot", "LLMs for dev", "Git / GitHub", "Agile (Scrum / Kanban)"],
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
            role: "FrontEnd Developer | BBVA Technology",
            period: "2025 — Present",
            bullets: [
              "Development of components and features for digital banking ensuring pixel-perfect standards and web accessibility (WCAG).",
              "Implementation of architectures based on Cells and Web Components (LitElement).",
              "Optimization of workflows and code quality through AI applied to development.",
              "Active collaboration in Agile environments for continuous delivery of value in financial products.",
            ],
          },
          {
            role: "Web Developer | Harbiz (formerly DudyFit)",
            period: "2021 — 2025",
            bullets: [
              "FrontEnd and Mobile development (React Native) for a high-traffic platform in the fitness sector.",
              "Implementation of complex interfaces maintaining full design integrity and usability.",
              "Maintenance and scalability of features using React, Meteor JS, MongoDB and SASS.",
              "Technical consulting with the product team to define the feasibility of new design systems.",
            ],
          },
          {
            role: "Graphic & Digital Designer | Madrid City Council",
            period: "2021",
            bullets: [
              "Design and layout of digital assets for large-scale institutional campaigns.",
              "Adaptation of creatives for web and print media, ensuring brand visual consistency.",
            ],
          },
          {
            role: "UX/UI Designer | MyPlazze (Minty Host)",
            period: "2017 — 2019",
            bullets: [
              "End-to-end design of user experience (UX) and interface (UI) for mobile App and Dashboard.",
              "Creation of intuitive navigation flows and high-fidelity interactive prototyping.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          { name: "Master FrontEnd Development", place: "Lemoncode" },
          { name: "Front End Development Bootcamp", place: "Adalab" },
          { name: "School 42", place: "Telefónica" },
          { name: "Degree in Integral Design and Image Management", place: "URJC" },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Spanish", level: "Native" },
          { name: "English", level: "Advanced" },
          { name: "French", level: "Basic" },
        ],
      },
    },
  },
} as const;

export type CvContent = (typeof cvContent)["es"];
