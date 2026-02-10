import { Experience, Education, Skill, Certification, Language } from './types';

export const PROFILE = {
  name: "Ing. Juan Carlos Infante",
  // BEST PRACTICE: Titular híbrido que une gestión, automatización clásica y la nueva era de IA
  title: "Líder de Transformación Digital & IA | Vibe Coding & Low Code Strategy | UiPath, Automation Anywhere & GenAI",
  email: "juan_infante21@hotmail.com",
  phone: "+593 99 540 3148",
  location: "Quito, Ecuador",
  linkedin: "linkedin.com/in/juan-infante2026",
  image: "/Juan_Carlos.png",
  // BEST PRACTICE: Resumen que explica "Vibe Coding" en lenguaje corporativo (aceleración, enfoque en resultados)
  summary: "Ingeniero en Sistemas y Especialista en Transformación Digital con más de 16 años de trayectoria. Enfocado en la adopción estratégica de Inteligencia Artificial Generativa y paradigmas de 'Vibe Coding' para acelerar el desarrollo de software y la automatización de procesos. Poseo una sólida base técnica en administración de sistemas Unix/Linux y plataformas Core de Telecomunicaciones. Experto en Business Intelligence y en cerrar la brecha entre Negocio y TI, evolucionando de la operación crítica hacia ecosistemas de automatización inteligente (RPA + AI) y toma de decisiones basada en datos.",
  disabilityInfo: {
    percentage: "66%",
    type: "Física",
    description: "Profesional con discapacidad física del 66% (Cédula de Ciudadanía). Esta condición ha fortalecido mi resiliencia, capacidad de resolución de problemas y adaptabilidad en entornos corporativos de alto nivel. Cuento con plena autonomía laboral."
  }
};

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Especialista Senior de Digitalización & AI Strategy",
    company: "Telefónica Ecuador",
    period: "2021 - Feb 2026",
    // BEST PRACTICE: Actualización del rol para incluir la adopción de IA
    description: "Business Partner Tecnológico y líder técnico, responsable de la convergencia entre automatización tradicional (RPA), analítica de datos y nuevas herramientas de IA Generativa para maximizar la eficiencia operativa.",
    achievements: [
      "RECONOCIMIENTO DE INDUSTRIA: Miembro del equipo multidisciplinario de IA Generativa en el proyecto 'Cobranza Digital', destacado públicamente como caso de éxito en la revista IT Ahora. (Referencia: https://itahora.com/2026/01/05/milicom-proyecto-it-cobranza-digital-con-ia-generativa/)",
      "Diseñé e implementé Dashboards de Business Intelligence (BI) de alto impacto, proporcionando visibilidad unificada de KPIs operativos para TI y métricas comerciales para las áreas de Negocio.",
      "Implementé metodologías de 'Vibe Coding' y desarrollo asistido por IA (Copilot/Antigravity), reduciendo el tiempo de escritura de código repetitivo en un 40% y acelerando el despliegue de soluciones.",
      "Lideré la evolución de la estrategia RPA hacia 'Intelligent Automation', integrando modelos de IA con bots de UiPath y Automation Anywhere para procesamiento de datos no estructurados.",
      "Impulsé la adopción de Power Platform potenciada por IA (Copilot Studio), permitiendo a usuarios de negocio crear flujos automatizados complejos mediante lenguaje natural."
    ],
    isCurrent: true
  },
  {
    id: "2",
    role: "Administrador Senior de Aplicaciones",
    company: "Telefónica Ecuador",
    period: "2017 - 2021",
    description: "Administrador principal de plataformas Core de negocio y líder en la implementación de estrategias de automatización y gestión de ciclo de vida de aplicaciones.",
    achievements: [
      "Gestioné la administración integral de Interfaces Contables y sistemas de Facturación sobre entornos Unix/Linux, garantizando la integridad de la data financiera crítica.",
      "Lideré la administración y configuración avanzada de Jira como herramienta corporativa para la gestión ágil de proyectos e incidencias.",
      "Fui pionero en el desarrollo y orquestación de robots (RPA) con UiPath, automatizando tareas operativas de las plataformas de Mediación y Tasación.",
      "Garanticé SLAs superiores al 99.9% en aplicaciones de misión crítica mediante monitoreo proactivo y scripts de mantenimiento en Shell."
    ]
  },
  {
    id: "3",
    role: "Administrador Junior de Aplicaciones",
    company: "Telefónica Ecuador",
    period: "2013 - 2017",
    description: "Especialista en operación y mantenimiento de sistemas Core de Telecomunicaciones, asegurando el flujo correcto de ingresos (Revenue Assurance).",
    achievements: [
      "Administré las plataformas de Mediación, Tasación (Rating) y Facturación, asegurando el correcto procesamiento de los registros de llamadas (CDRs) y datos.",
      "Ejecuté administración avanzada de sistemas operativos Unix/Linux para el despliegue y tunning de aplicaciones de alto rendimiento.",
      "Resolví incidencias de nivel 2 y 3 en sistemas de cobro, optimizando los tiempos de tasación y reduciendo pérdidas por errores de facturación.",
      "Desarrollé scripts de automatización para la conciliación de datos entre plataformas de red y sistemas comerciales."
    ]
  },
  {
    id: "4",
    role: "Asistente de Recursos Humanos (Rol Técnico)",
    company: "Telefónica Ecuador",
    period: "Abr 2009 - 2013",
    description: "Ingresé mediante el programa de inclusión laboral. Aunque mi cargo nominal fue administrativo en RRHH, fui asignado desde el primer día al equipo de Tecnología debido a mi perfil de ingeniería, asumiendo responsabilidades críticas de aplicaciones.",
    achievements: [
      "Inicié como Administrador de la Plataforma de Roaming, asumiendo rápidamente el rol de Administrador Principal responsable de la operatividad del servicio internacional.",
      "Gestioné la configuración y monitoreo de los acuerdos de Roaming e interconexión con operadoras globales.",
      "Diseñé e implementé soluciones alternativas (workarounds) y automatizaciones en las plataformas de Producción TI, resolviendo limitaciones del sistema y validando mi perfil técnico para la transición formal al área de Tecnología.",
      "Participé activamente en proyectos de integración de plataformas móviles, demostrando solvencia técnica en entornos de alta disponibilidad."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "mba",
    degree: "Máster en Administración de Empresas (MBA)",
    institution: "Universidad Politécnica de Madrid",
    year: "Octubre 2024",
    details: "Especialización en Gestión Estratégica y Dirección de Tecnología."
  },
  {
    id: "ing",
    degree: "Ingeniero en Sistemas con mención en Informática para la gestión",
    institution: "Universidad Politécnica Salesiana",
    year: "Septiembre 2021",
    details: "Mención de honor por excelencia académica."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "uipath",
    name: "UiPath Advanced RPA Developer (UiARD)",
    issuer: "UiPath",
    year: "2023"
  },
  {
    id: "scrum",
    name: "Scrum Master Certified (SMC)",
    issuer: "Scrum Alliance",
    year: "2022"
  },
  {
    id: "ms",
    name: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    year: "2021"
  }
];

export const LANGUAGES: Language[] = [
  {
    language: "Español",
    level: "Nativo",
    percentage: 100
  },
  {
    language: "Inglés",
    level: "A2 - Básico / Pre-Intermedio",
    percentage: 35
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Inteligencia Artificial & Vibe Coding",
    items: ["AI-Assisted Development", "Prompt Engineering", "GitHub Copilot / Antigravity", "Integración de LLMs", "Copilot Studio", "Generative AI Strategy"]
  },
  {
    category: "Data Analytics & Business Intelligence",
    items: ["Power BI", "Diseño de Dashboards (TI/Negocio)", "Análisis de Datos", "KPIs Operativos", "SQL", "Data Visualization"]
  },
  {
    category: "Sistemas Core & Unix/Linux",
    items: ["Administración Unix/Linux", "Shell Scripting", "Plataformas de Roaming", "Mediación y Tasación", "Billing Systems", "Revenue Assurance"]
  },
  {
    category: "RPA & Hiperautomatización",
    items: ["UiPath (Dev & Admin)", "Automation Anywhere", "Power Automate Desktop", "Orquestación de Bots", "Document Understanding"]
  },
  {
    category: "Gestión & Metodologías",
    items: ["Agile & Scrum", "ITIL 4", "Gestión de Proyectos", "Mejora de Procesos", "Liderazgo Técnico"]
  },
  {
    category: "Habilidades Blandas",
    items: ["Liderazgo Adaptativo", "Resiliencia Profesional", "Comunicación Efectiva", "Pensamiento Crítico", "Resolución de Problemas", "Aprendizaje Continuo"]
  }
];