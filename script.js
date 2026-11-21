const translations = {
    pt: {
        menu: "Menu", nav_about: "Sobre", nav_projects: "Projetos", nav_skills: "Competências", nav_path: "Trajetória", nav_contact: "Contato",
        resume: "Currículo ↗", hero_role: "Desenvolvedor de Software Multiplataforma", hero_statement: "Lógica, arquitetura e interfaces transformadas em soluções práticas.",
        view_work: "Ver projetos", contact_me: "Chamar para conversar ↗", about_title: "Base técnica.<br>Visão ampliada.",
        about_quote: "“Não construo apenas interfaces. Construo a lógica que faz elas funcionarem.”",
        about_p1: "Sou um desenvolvedor em formação, focado em transformar ideias complexas em soluções de software práticas, organizadas e altamente funcionais. Minha formação em Eletrônica Industrial no CTIG/UNESP me deu uma visão que conecta software e hardware.",
        about_p2: "Possuo maior afinidade com back-end: lógica estruturada, manipulação eficiente de dados e sistemas robustos e escaláveis. Atualmente, expando minhas competências na FATEC por meio de projetos colaborativos com Git/GitHub e metodologias ágeis.",
        projects_title: "Seleção de<br>trabalhos.", skills_title: "Ferramentas do<br>meu processo.", path_title: "Do circuito ao código.",
        proj1_desc: "Plataforma para centralizar e democratizar o acesso a dados públicos sobre a atuação de deputados, auxiliando o voto consciente.",
        proj2_desc: "Portal educacional que simula serviços, fluxos informativos e a identidade visual de uma instituição de ensino.",
        proj3_desc: "Desenvolvimento de sistemas integrados de controle e monitoramento eletrônico durante a formação técnica integrada de nível médio.",
        proj4_desc: "Modernização da plataforma universitária com foco em persistência de dados e infraestrutura escalável em ambiente de produção.",
        proj5_desc: "Portfólio responsivo para apresentar trajetória, competências e projetos com suporte a vários idiomas.",
        proj6_desc: "Plataforma de logística reversa para rastrear equipamentos eletrônicos e sua cadeia de triagem, desmonte e recuperação.",
        proj7_desc: "Sistema web para inscrições acadêmicas e cadastro de candidatos em diferentes cursos, com persistência em banco de dados.",
        project_role_label: "Atuação",
        proj1_role: "Responsável pela lógica back-end, organização e tratamento de dados com Pandas e estrutura modular de rotas Flask.",
        proj2_role: "Construção da interface responsiva e das páginas de serviços, informações e identidade visual da instituição.",
        proj3_role: "Participação no desenvolvimento e integração de sistemas eletrônicos, com foco em controle, monitoramento e aplicação prática de circuitos.",
        proj4_role: "Modernização da aplicação e apoio à integração com banco de dados, Docker e infraestrutura AWS.",
        proj5_role: "Criação da interface responsiva, alternância de tema e suporte multilíngue com JavaScript.",
        proj6_role: "Arquitetura e desenvolvimento do CLI e da API Fastify, com autenticação JWT, Prisma/PostgreSQL, analytics e relatórios assíncronos.",
        proj7_role: "Desenvolvimento back-end com Flask e MySQL, conteinerização com Docker Compose e implantação em instância AWS EC2.",
        skill_h1: "Lógica avançada e scripts", skill_h2: "Arquitetura de APIs web", skill_h3: "Análise e tratamento de dados",
        skill_h4: "Interfaces modernas", skill_h5: "Design responsivo utilitário", skill_h6: "Estrutura de banco de dados",
        skill_s1: "Trabalho em equipe e agilidade", skill_s1_d: "Experiência com Git compartilhado e metodologias ágeis, como Scrum e Kanban.",
        skill_s2: "Pensamento analítico e lógico", skill_s2_d: "Facilidade com modelagem de dados e arquitetura para resolver fluxos complexos de back-end.",
        skill_s3: "Visão multidisciplinar hardware/software", skill_s3_d: "A formação em eletrônica fortaleceu o diagnóstico de problemas físicos e de código.",
        skill_s4: "Aprendizado contínuo", skill_s4_d: "Estudo proativo de linguagens, ferramentas de dados e infraestrutura.",
        cert_d1: "Participação em palestras técnicas e exposição de projetos.",
        cert_d2: "Ensino médio integrado ao técnico em Eletrônica Industrial.",
        cert_d3: "Atuação com componentes destinados a kits educacionais.",
        contact_title: "Vamos construir<br><span>algo juntos?</span>",
        contact_note: "Disponível para propostas de estágio e projetos colaborativos."
    },
    en: {
        menu: "Menu", nav_about: "About", nav_projects: "Projects", nav_skills: "Skills", nav_path: "Journey", nav_contact: "Contact",
        resume: "Resume ↗", hero_role: "Multiplatform Software Developer", hero_statement: "Logic, architecture and interfaces turned into practical solutions.",
        view_work: "View projects", contact_me: "Start a conversation ↗", about_title: "Technical foundation.<br>Broader vision.",
        about_quote: "“I do not just build interfaces. I build the logic that makes them work.”",
        about_p1: "I am an in-training developer focused on turning complex ideas into practical, organized and functional software solutions. My Industrial Electronics education at CTIG/UNESP gave me a perspective connecting software and hardware.",
        about_p2: "I have a stronger affinity with back-end development: structured logic, efficient data handling and robust, scalable systems. At FATEC, I continue expanding my skills through collaborative projects using Git/GitHub and agile methodologies.",
        projects_title: "Selected<br>work.", skills_title: "Tools behind<br>my process.", path_title: "From circuits to code.",
        proj1_desc: "Platform that centralizes access to public data about congress members' work and supports informed voting.",
        proj2_desc: "Educational portal simulating services, information flows and the visual identity of a teaching institution.",
        proj3_desc: "Integrated electronic control and monitoring systems developed during technical secondary education.",
        proj4_desc: "Modernization of a university platform focused on data persistence and scalable production infrastructure.",
        proj5_desc: "Responsive portfolio presenting my trajectory, skills and projects with multilingual support.",
        proj6_desc: "Reverse-logistics platform for tracking electronic equipment through screening, dismantling and material recovery.",
        proj7_desc: "Web system for academic applications and candidate registration across courses, with database persistence.",
        project_role_label: "Contribution",
        proj1_role: "Responsible for back-end logic, data organization and processing with Pandas, and modular Flask routes.",
        proj2_role: "Built the responsive interface and pages for the institution's services, information and visual identity.",
        proj3_role: "Contributed to developing and integrating electronic systems focused on control, monitoring and practical circuit applications.",
        proj4_role: "Modernized the application and supported integration with a database, Docker and AWS infrastructure.",
        proj5_role: "Created the responsive interface, theme toggle and multilingual support with JavaScript.",
        proj6_role: "Designed and developed the CLI and Fastify API, including JWT authentication, Prisma/PostgreSQL, analytics and asynchronous reports.",
        proj7_role: "Developed the back end with Flask and MySQL, containerized with Docker Compose and deployed to an AWS EC2 instance.",
        skill_h1: "Advanced logic and scripts", skill_h2: "Web API architecture", skill_h3: "Data analysis and processing",
        skill_h4: "Modern interfaces", skill_h5: "Utility-first responsive design", skill_h6: "Database structure",
        skill_s1: "Teamwork and agility", skill_s1_d: "Experience with shared Git workflows and agile methods such as Scrum and Kanban.",
        skill_s2: "Analytical and logical thinking", skill_s2_d: "Comfortable with data modeling and architecture for complex back-end flows.",
        skill_s3: "Multidisciplinary hardware/software perspective", skill_s3_d: "Electronics training strengthened troubleshooting across physical systems and code.",
        skill_s4: "Continuous learning", skill_s4_d: "Proactive study of languages, data tools and infrastructure.",
        cert_d1: "Attended technical talks and presented projects.",
        cert_d2: "Integrated secondary and Industrial Electronics technical education.",
        cert_d3: "Worked with components for educational kits.",
        contact_title: "Let's build<br><span>something together?</span>",
        contact_note: "Open to internship opportunities and collaborative projects."
    },
    es: {
        menu: "Menú", nav_about: "Sobre mí", nav_projects: "Proyectos", nav_skills: "Competencias", nav_path: "Trayectoria", nav_contact: "Contacto",
        resume: "Currículum ↗", hero_role: "Desarrollador de Software Multiplataforma", hero_statement: "Lógica, arquitectura e interfaces convertidas en soluciones prácticas.",
        view_work: "Ver proyectos", contact_me: "Iniciar una conversación ↗", about_title: "Base técnica.<br>Visión ampliada.",
        about_quote: "“No construyo solo interfaces. Construyo la lógica que hace que funcionen.”",
        about_p1: "Soy un desarrollador en formación enfocado en transformar ideas complejas en soluciones de software prácticas, organizadas y funcionales. Mi formación en Electrónica Industrial en CTIG/UNESP me proporcionó una visión que conecta software y hardware.",
        about_p2: "Tengo mayor afinidad con el back-end: lógica estructurada, manejo eficiente de datos y sistemas robustos y escalables. Actualmente amplío mis competencias en FATEC mediante proyectos colaborativos con Git/GitHub y metodologías ágiles.",
        projects_title: "Selección de<br>trabajos.", skills_title: "Herramientas de<br>mi proceso.", path_title: "Del circuito al código.",
        proj1_desc: "Plataforma que centraliza el acceso a datos públicos sobre la actuación de diputados y ayuda al voto consciente.",
        proj2_desc: "Portal educativo que simula servicios, flujos informativos y la identidad visual de una institución de enseñanza.",
        proj3_desc: "Desarrollo de sistemas integrados de control y monitoreo electrónico durante la formación técnica integrada.",
        proj4_desc: "Modernización de una plataforma universitaria centrada en persistencia de datos e infraestructura escalable.",
        proj5_desc: "Portafolio responsivo para presentar trayectoria, competencias y proyectos con soporte multilenguaje.",
        proj6_desc: "Plataforma de logística inversa para rastrear equipos electrónicos y su cadena de clasificación, desmontaje y recuperación.",
        proj7_desc: "Sistema web para inscripciones académicas y registro de candidatos en diferentes cursos, con persistencia en base de datos.",
        project_role_label: "Aporte",
        proj1_role: "Responsable de la lógica back-end, organización y tratamiento de datos con Pandas y rutas modulares en Flask.",
        proj2_role: "Creación de la interfaz responsiva y de las páginas de servicios, información e identidad visual de la institución.",
        proj3_role: "Participación en el desarrollo e integración de sistemas electrónicos, con foco en control, monitoreo y aplicación práctica de circuitos.",
        proj4_role: "Modernización de la aplicación y apoyo a la integración con base de datos, Docker e infraestructura AWS.",
        proj5_role: "Creación de la interfaz responsiva, cambio de tema y soporte multilingüe con JavaScript.",
        proj6_role: "Arquitectura y desarrollo del CLI y la API Fastify, con autenticación JWT, Prisma/PostgreSQL, analytics e informes asíncronos.",
        proj7_role: "Desarrollo back-end con Flask y MySQL, contenedorización con Docker Compose e implementación en una instancia AWS EC2.",
        skill_h1: "Lógica avanzada y scripts", skill_h2: "Arquitectura de API web", skill_h3: "Análisis y tratamiento de datos",
        skill_h4: "Interfaces modernas", skill_h5: "Diseño responsivo con utilidades", skill_h6: "Estructura de bases de datos",
        skill_s1: "Trabajo en equipo y agilidad", skill_s1_d: "Experiencia con Git compartido y metodologías ágiles como Scrum y Kanban.",
        skill_s2: "Pensamiento analítico y lógico", skill_s2_d: "Facilidad con modelado de datos y arquitectura para resolver flujos complejos de back-end.",
        skill_s3: "Visión multidisciplinaria hardware/software", skill_s3_d: "La formación en electrónica fortaleció el diagnóstico de problemas físicos y de código.",
        skill_s4: "Aprendizaje continuo", skill_s4_d: "Estudio proactivo de lenguajes, herramientas de datos e infraestructura.",
        cert_d1: "Participación en charlas técnicas y exposición de proyectos.",
        cert_d2: "Educación secundaria integrada con formación técnica en Electrónica Industrial.",
        cert_d3: "Trabajo con componentes para kits educativos.",
        contact_title: "¿Vamos a construir<br><span>algo juntos?</span>",
        contact_note: "Disponible para propuestas de prácticas y proyectos colaborativos."
    }
};

const languageSelect = document.getElementById("language-select");
const mobileLanguageSelect = document.getElementById("language-select-mobile");
const savedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = navigator.language.slice(0, 2);
const initialLanguage = savedLanguage || (["pt", "en", "es"].includes(browserLanguage) ? browserLanguage : "pt");

const themeButtons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile")
];
const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme, persist = false) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    themeButtons.forEach(button => {
        if (!button) return;
        button.setAttribute("aria-pressed", String(isDark));
        button.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
        const icon = button.querySelector(".theme-icon");
        if (icon) icon.textContent = isDark ? "☾" : "☀";
    });
    if (persist) localStorage.setItem("portfolio-theme", theme);
}

applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
    if (!localStorage.getItem("portfolio-theme")) applyTheme(event.matches ? "dark" : "light");
});

themeButtons.forEach(button => {
    if (!button) return;
    button.addEventListener("click", () => {
        applyTheme(document.documentElement.classList.contains("dark") ? "light" : "dark", true);
    });
});

function applyLanguage(language) {
    const dictionary = translations[language] || translations.pt;
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.innerHTML = dictionary[key];
    });
    languageSelect.value = language;
    mobileLanguageSelect.value = language;
    localStorage.setItem("portfolio-language", language);
}

languageSelect.addEventListener("change", event => applyLanguage(event.target.value));
mobileLanguageSelect.addEventListener("change", event => applyLanguage(event.target.value));
applyLanguage(initialLanguage);

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("open", !isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
}, { passive: true });

const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const filterTimers = new WeakMap();
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        filters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
        const category = button.dataset.filter;
        projectCards.forEach(card => {
            const matches = category === "all" || card.dataset.category.split(" ").includes(category);
            clearTimeout(filterTimers.get(card));
            if (matches) {
                const wasHidden = card.classList.contains("hidden");
                card.classList.remove("hidden", "filter-out");
                if (wasHidden && !reduceMotion) {
                    card.classList.add("filter-in");
                    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove("filter-in")));
                }
            } else if (!card.classList.contains("hidden")) {
                card.classList.add("filter-out");
                if (reduceMotion) {
                    card.classList.add("hidden");
                    card.classList.remove("filter-out");
                } else {
                    const timer = setTimeout(() => {
                        card.classList.add("hidden");
                        card.classList.remove("filter-out");
                    }, 220);
                    filterTimers.set(card, timer);
                }
            }
        });
    });
});

if (reduceMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
} else {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = [...document.querySelectorAll(".reveal")].indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.min((index % 5) * 55, 220)}ms`;
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
}

if ("IntersectionObserver" in window) {
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];

    const sectionObserver = new IntersectionObserver(entries => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
        });
    }, { rootMargin: "-35% 0px -55%", threshold: [0, 0.1, 0.5] });

    sections.forEach(section => sectionObserver.observe(section));
}

if (!reduceMotion) {
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const shift = Math.min(window.scrollY * 0.035, 28);
            document.documentElement.style.setProperty("--scroll-shift", `${shift}px`);
            ticking = false;
        });
    }, { passive: true });
}
document.getElementById("year").textContent = new Date().getFullYear();
