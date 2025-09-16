// src/data/translations.ts

export type Language = 'en' | 'sv';

// Type definitions
export interface StoryItem {
    title: string;
    period: string;
    content: string;
}

export interface ApproachItem {
    icon: string;
    title: string;
    description: string;
}

export interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    period: string;
    duration: string;
    location: string;
    type: string;
    description: string;
    highlights: string[];
    technologies: string[];
    icon: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: string;
    status: string;
    technologies: string[];
    features: string[];
    demoUrl?: string;
    githubUrl?: string;
    image?: string;
    isNDA?: boolean;
}

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            name: 'ÖMER',
            availableForProjects: 'Available for Projects',
            hello: 'Hello.',
            titles: {
                frontendDeveloper: 'Fullstack Developer',
                reactDeveloper: 'Frontend Developer',
                typescriptEnthusiast: 'Backend Developer',
                digitalCreator: 'Problem Solver'
            },
            imA: "I'm a",
            description: 'Solution-oriented fullstack developer with experience in both frontend and backend technologies.',
            basedIn: 'Based in Stockholm.',
            cta: {
                aboutMe: 'About Me',
                downloadCV: 'Download CV'
            },
            stats: {
                years: 'Years Experience',
                projects: 'Live Projects',
                techStack: 'Technologies'
            },
            technologies: 'Technologies',
            sideText: {
                portfolio: 'PORTFOLIO 2024',
                location: 'STOCKHOLM'
            }
        },
        about: {
            title: 'About Me',
            introduction: 'From Java foundations to modern web development',
            story: {
                bootcamp: {
                    title: 'The Beginning',
                    period: '2022',
                    content: 'My development journey began with Java & Spring Boot bootcamp where I built a comprehensive rent-a-car management system. This solid foundation taught me the importance of clean code and systematic thinking.'
                } as StoryItem,
                speedyli: {
                    title: 'International Experience',
                    period: '2022-2023',
                    content: '7 months at Speedyli (USA) was transformative. Working on an international platform with Spring Boot, Hibernate, Java, and PostgreSQL expanded my backend expertise and teamwork skills.'
                } as StoryItem,
                current: {
                    title: 'Today',
                    period: 'Present',
                    content: 'At Alexum AB, I evolved into fullstack development, mastering React and JavaScript. While working at PostNord for stability, I continue growing through freelance projects across Sweden and Turkey.'
                } as StoryItem
            },
            approach: {
                title: 'My Approach',
                items: [
                    {
                        icon: 'Code',
                        title: 'Clean Code',
                        description: 'Writing maintainable, readable code that stands the test of time'
                    },
                    {
                        icon: 'Heart',
                        title: 'Team Player',
                        description: 'Thriving in collaborative environments while contributing innovative ideas'
                    },
                    {
                        icon: 'Coffee',
                        title: 'AI-Enhanced',
                        description: 'Leveraging modern tools and AI technologies for efficient development'
                    },
                    {
                        icon: 'Users',
                        title: 'Quality First',
                        description: 'Always responsible for testing and quality assurance in every project'
                    }
                ] as ApproachItem[]
            },
            philosophy: 'I believe in combining traditional development skills with modern AI tools to create efficient, high-quality solutions. Every project is an opportunity to learn and innovate.',
            currentFocus: 'Currently working on expanding fullstack capabilities while freelancing and building a diverse portfolio of Swedish and international projects.',
            location: 'Based in Stockholm, Sweden'
        },
        experience: {
            title: 'Experience',
            subtitle: 'My professional journey',
            current: 'Current',
            experiences: [
                {
                    id: 'postnord',
                    company: 'PostNord Sverige',
                    position: 'Terminal Worker',
                    period: 'Sep 2018 - Present',
                    duration: '7+ years',
                    location: 'Stockholm, Sweden',
                    type: 'Current Role',
                    description: 'Working in high-tempo logistics environment with strong team collaboration. Provides financial stability while pursuing freelance web development projects on the side.',
                    highlights: [
                        'High-tempo logistics operations',
                        'Strong team collaboration skills',
                        'Parallel freelance web development',
                        'Time management and multitasking'
                    ],
                    technologies: [],
                    icon: 'Truck'
                },
                {
                    id: 'alexum',
                    company: 'Alexum AB',
                    position: 'Fullstack Developer',
                    period: 'Jan 2025 - Aug 2025',
                    duration: '8 months',
                    location: 'Stockholm, Sweden',
                    type: 'Startup Experience',
                    description: 'Startup environment focused primarily on frontend development with React and JavaScript, while also contributing to backend Node.js tasks. Participated in three projects with a small development team.',
                    highlights: [
                        'Frontend focus with React & JavaScript',
                        'Backend development with Node.js',
                        'Participated in 3 diverse projects',
                        'Small team collaboration',
                        'Problem-solving in startup environment'
                    ],
                    technologies: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git'],
                    icon: 'Building'
                },
                {
                    id: 'speedyli',
                    company: 'Speedyli',
                    position: 'Fullstack Developer',
                    period: 'Sep 2022 - Mar 2023',
                    duration: '7 months',
                    location: 'USA (Remote)',
                    type: 'International',
                    description: 'Developed platform www.speedyli.com in an international team environment. Gained extensive backend experience with enterprise-level technologies.',
                    highlights: [
                        'International team collaboration',
                        'Enterprise-level platform development',
                        'Full development lifecycle experience',
                        'Remote work proficiency'
                    ],
                    technologies: ['Spring Boot', 'Hibernate', 'Java', 'PostgreSQL', 'Postman', 'GitHub'],
                    icon: 'Code'
                }
            ] as ExperienceItem[]
        },
        projects: {
            title: 'Projects',
            subtitle: 'Building digital solutions',
            filters: {
                all: 'All Projects',
                live: 'Live Projects',
                development: 'In Development',
                commercial: 'Commercial'
            },
            projects: [
                {
                    id: 'portfolio-site',
                    title: 'Portfolio Website',
                    description: 'This very website you\'re viewing! Built with React, TypeScript, and Framer Motion. Features responsive design, multilingual support, and smooth animations.',
                    longDescription: 'A modern portfolio website showcasing my skills and projects. Built from scratch with attention to user experience, performance, and accessibility.',
                    category: 'live',
                    status: 'Completed',
                    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                    features: [
                        'Multilingual support (EN/SV)',
                        'Responsive design',
                        'Smooth animations',
                        'Modern UI/UX',
                        'Performance optimized',
                        'SEO ready'
                    ],
                    demoUrl: 'https://omercelebi.se',
                    githubUrl: 'https://github.com/OmerCeleb/omercelebi',
                    image: '/images/projects/omercelebi.png'
                },
                {
                    id: 'construction-site',
                    title: 'Kocaseyit Hafriyat',
                    description: 'Professional construction company website built for a Turkish excavation business. Features service showcase, contact forms, and mobile-responsive design.',
                    longDescription: 'Complete business website for construction services including excavation, landscaping, and heavy transport. Built with focus on user experience and conversion optimization.',
                    category: 'live',
                    status: 'Live',
                    technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
                    features: [
                        '9 different service categories',
                        'Professional service showcase',
                        'Contact and quote forms',
                        'Mobile-first design',
                        'SEO optimized',
                        'Turkish language support'
                    ],
                    demoUrl: 'https://kocaseyithafriyat.com/',
                    image: '/images/projects/kocaseyithafriyat.png'
                },
                {
                    id: 'konditori-sites',
                    title: 'Konditori & Café Websites',
                    description: 'Multiple elegant websites for Swedish hospitality businesses. Features menu displays, location information, and Swedish market appeal.',
                    longDescription: 'Beautiful websites for Swedish hospitality businesses, featuring menu displays, location information, and booking systems tailored for the Swedish market.',
                    category: 'development',
                    status: 'Launching Soon',
                    technologies: ['React', 'TypeScript', 'CSS', 'SEO'],
                    features: [
                        'Menu display systems',
                        'Location and hours',
                        'Swedish market focus',
                        'Local SEO optimization',
                        'Responsive design',
                        'Contact integration'
                    ],
                    image: '/images/projects/konditorilyran.png'
                },
                {
                    id: 'todo-app',
                    title: 'Advanced Todo Application',
                    description: 'Modern task management application with React frontend. Features intuitive task organization, categories, and responsive design.',
                    longDescription: 'Comprehensive todo application demonstrating fullstack development skills. Frontend completed with React, backend currently under development with Node.js.',
                    category: 'development',
                    status: 'Frontend Complete',
                    technologies: ['React', 'Node.js', 'CSS', 'JavaScript'],
                    features: [
                        'Task management system',
                        'Category organization',
                        'Responsive design',
                        'Modern UI/UX',
                        'Local storage',
                        'Progress tracking'
                    ],
                    githubUrl: 'https://github.com/OmerCeleb/todo-app-frontend',
                    image: '/images/projects/todoapp.png'
                },
                {
                    id: 'mobile-app',
                    title: 'React Native Mobile App',
                    description: 'Cross-platform mobile application built with React Native. Frontend design completed, backend currently under development.',
                    longDescription: 'Mobile application showcasing React Native skills with focus on user experience and modern mobile UI patterns.',
                    category: 'development',
                    status: 'Frontend Complete',
                    technologies: ['React Native', 'JavaScript', 'Mobile UI/UX'],
                    features: [
                        'Cross-platform compatibility',
                        'Modern mobile UI',
                        'Responsive design',
                        'User-friendly interface',
                        'Performance optimized'
                    ],
                    image: '/images/projects/nospend.png'
                },
                {
                    id: 'alexum-projects',
                    title: 'Startup Projects',
                    description: 'Three commercial projects developed at Alexum AB including company website, SMS portal, and order management system.',
                    longDescription: 'Commercial projects under NDA including web applications, portal systems, and business automation tools. Gained valuable experience in startup environment and team collaboration.',
                    category: 'commercial',
                    status: 'Completed',
                    technologies: ['React', 'JavaScript', 'Node.js', 'CSS'],
                    features: [
                        'Company website development',
                        'SMS communication portal',
                        'Order management system',
                        'Team collaboration',
                        'Commercial grade applications',
                        'Startup environment experience'
                    ],
                    isNDA: true,
                    image: '/images/projects/Alexum.png'
                },
                {
                    id: 'speedyli-platform',
                    title: 'Speedyli Platform',
                    description: 'International platform development with enterprise-level backend technologies. Worked with Spring Boot, Hibernate, and PostgreSQL.',
                    longDescription: 'Enterprise-level platform development in international team environment. Gained extensive experience with Java ecosystem and database management.',
                    category: 'commercial',
                    status: 'Completed',
                    technologies: ['Spring Boot', 'Hibernate', 'Java', 'PostgreSQL', 'Postman'],
                    features: [
                        'Enterprise platform architecture',
                        'Database design and optimization',
                        'International team collaboration',
                        'Full development lifecycle',
                        'Performance optimization',
                        'API development'
                    ],
                    demoUrl: 'https://www.speedyli.com',
                    image: '/images/projects/Speedy.png'
                }
            ] as ProjectItem[]
        },
        contact: {
            title: 'Get in Touch',
            subtitle: "Let's build something amazing together",
            form: {
                name: 'Your Name',
                email: 'Email Address',
                subject: 'Subject',
                message: 'Your Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Please try again.'
            },
            contact: {
                title: 'Contact Information',
                email: 'Email',
                location: 'Location',
                availability: 'Availability'
            },
            info: {
                email: 'omer534@outlook.com',
                location: 'Stockholm, Sweden',
                availability: 'Available for freelance projects'
            },
            social: {
                title: 'Connect with me',
                github: 'GitHub',
                linkedin: 'LinkedIn',
                email: 'Email'
            },
            cta: {
                title: 'Ready to start your project?',
                description: 'Whether you need a website, web application, or consultation, I\'m here to help bring your ideas to life.',
                button: 'Start a Project'
            }
        },
        footer: {
            description: 'Solution-oriented fullstack developer with expertise in both frontend and backend technologies. Based in Stockholm, available worldwide.',
            status: 'Available for freelance projects',
            location: 'Stockholm, Sweden',
            quickLinks: {
                title: 'Quick Links',
                links: [
                    { label: 'Home', href: '#home' },
                    { label: 'About', href: '#about' },
                    { label: 'Experience', href: '#experience' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Contact', href: '#contact' }
                ]
            },
            connect: {
                title: 'Connect with me'
            },
            copyright: 'All rights reserved.',
            madeWith: 'Made with love in Stockholm',
            techStack: ['React', 'TypeScript', 'Tailwind']
        }
    },
    sv: {
        nav: {
            home: 'Hem',
            about: 'Om mig',
            experience: 'Erfarenhet',
            projects: 'Projekt',
            contact: 'Kontakt'
        },
        hero: {
            name: 'ÖMER',
            availableForProjects: 'Tillgänglig för Projekt',
            hello: 'Hej.',
            titles: {
                frontendDeveloper: 'Fullstack Utvecklare',
                reactDeveloper: 'Frontend Utvecklare',
                typescriptEnthusiast: 'Backend Utvecklare',
                digitalCreator: 'Problemlösare'
            },
            imA: 'Jag är en',
            description: 'Lösningsorienterad fullstackutvecklare med erfarenhet av både frontend och backend teknologier.',
            basedIn: 'Baserad i Stockholm.',
            cta: {
                aboutMe: 'Om Mig',
                downloadCV: 'Ladda ner CV'
            },
            stats: {
                years: 'Års Erfarenhet',
                projects: 'Live Projekt',
                techStack: 'Teknologier'
            },
            technologies: 'Teknologier',
            sideText: {
                portfolio: 'PORTFÖLJ 2024',
                location: 'STOCKHOLM'
            }
        },
        about: {
            title: 'Om Mig',
            introduction: 'Från Java-grund till modern webbutveckling',
            story: {
                bootcamp: {
                    title: 'Början',
                    period: '2022',
                    content: 'Min utvecklingsresa började med Java & Spring Boot bootcamp där jag byggde ett omfattande biluthyrningshanteringssystem. Denna solida grund lärde mig vikten av ren kod och systematiskt tänkande.'
                } as StoryItem,
                speedyli: {
                    title: 'Internationell Erfarenhet',
                    period: '2022-2023',
                    content: '7 månader på Speedyli (USA) var förändrande. Att arbeta med en internationell plattform med Spring Boot, Hibernate, Java och PostgreSQL utökade min backend-expertis och teamarbetsfärdigheter.'
                } as StoryItem,
                current: {
                    title: 'Idag',
                    period: 'Nuvarande',
                    content: 'På Alexum AB utvecklades jag till fullstack-utveckling och bemästrade React och JavaScript. Medan jag arbetar på PostNord för stabilitet fortsätter jag växa genom frilansuppdrag över Sverige och Turkiet.'
                } as StoryItem
            },
            approach: {
                title: 'Min Approach',
                items: [
                    {
                        icon: 'Code',
                        title: 'Ren Kod',
                        description: 'Skriver underhållbar, läsbar kod som står emot tidens test'
                    },
                    {
                        icon: 'Heart',
                        title: 'Teamspelare',
                        description: 'Trivs i kollaborativa miljöer samtidigt som jag bidrar med innovativa idéer'
                    },
                    {
                        icon: 'Coffee',
                        title: 'AI-förstärkt',
                        description: 'Använder moderna verktyg och AI-teknologier för effektiv utveckling'
                    },
                    {
                        icon: 'Users',
                        title: 'Kvalitet Först',
                        description: 'Alltid ansvarig för testning och kvalitetssäkring i varje projekt'
                    }
                ] as ApproachItem[]
            },
            philosophy: 'Jag tror på att kombinera traditionella utvecklingsfärdigheter med moderna AI-verktyg för att skapa effektiva, högkvalitativa lösningar. Varje projekt är en möjlighet att lära och innovera.',
            currentFocus: 'Arbetar för närvarande med att utöka fullstack-kapabiliteter medan jag frilansbygger och bygger en mångsidig portfölj av svenska och internationella projekt.',
            location: 'Baserad i Stockholm, Sverige'
        },
        experience: {
            title: 'Erfarenhet',
            subtitle: 'Min professionella resa',
            current: 'Nuvarande',
            experiences: [
                {
                    id: 'postnord',
                    company: 'PostNord Sverige',
                    position: 'Terminalarbetare',
                    period: 'Sep 2018 - Nuvarande',
                    duration: '7+ år',
                    location: 'Stockholm, Sverige',
                    type: 'Nuvarande Roll',
                    description: 'Arbetar i högtempo logistikmiljö med starkt teamsamarbete. Ger ekonomisk stabilitet medan jag bedriver freelance webbutvecklingsprojekt vid sidan av.',
                    highlights: [
                        'Högtempo logistikoperationer',
                        'Starka teamsamarbetsfärdigheter',
                        'Parallell freelance webbutveckling',
                        'Tidshantering och multitasking'
                    ],
                    technologies: [],
                    icon: 'Truck'
                },
                {
                    id: 'alexum',
                    company: 'Alexum AB',
                    position: 'Fullstack Utvecklare',
                    period: 'Jan 2025 - Aug 2025',
                    duration: '8 månader',
                    location: 'Stockholm, Sverige',
                    type: 'Startup Erfarenhet',
                    description: 'Startup-miljö fokuserad främst på frontend-utveckling med React och JavaScript, samtidigt som jag bidrog till backend Node.js-uppgifter. Deltog i tre projekt med ett litet utvecklingsteam.',
                    highlights: [
                        'Frontend-fokus med React & JavaScript',
                        'Backend-utveckling med Node.js',
                        'Deltog i 3 olika projekt',
                        'Litet teamsamarbete',
                        'Problemlösning i startup-miljö'
                    ],
                    technologies: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git'],
                    icon: 'Building'
                },
                {
                    id: 'speedyli',
                    company: 'Speedyli',
                    position: 'Fullstack Utvecklare',
                    period: 'Sep 2022 - Mar 2023',
                    duration: '7 månader',
                    location: 'USA (Remote)',
                    type: 'Internationell',
                    description: 'Utvecklade plattform www.speedyli.com i en internationell teammiljö. Fick omfattande backend-erfarenhet med företagsnivå-teknologier.',
                    highlights: [
                        'Internationellt teamsamarbete',
                        'Plattformsutveckling på företagsnivå',
                        'Fullständig utvecklingslivscykel-erfarenhet',
                        'Fjärrarbetscompetens'
                    ],
                    technologies: ['Spring Boot', 'Hibernate', 'Java', 'PostgreSQL', 'Postman', 'GitHub'],
                    icon: 'Code'
                }
            ] as ExperienceItem[]
        },
        projects: {
            title: 'Projekt',
            subtitle: 'Bygger digitala lösningar',
            filters: {
                all: 'Alla Projekt',
                live: 'Live Projekt',
                development: 'Under Utveckling',
                commercial: 'Kommersiella'
            },
            projects: [
                {
                    id: 'portfolio-site',
                    title: 'Portfölj Webbplats',
                    description: 'Denna webbplats du tittar på! Byggd med React, TypeScript och Framer Motion. Responsiv design, flerspråkigt stöd och mjuka animationer.',
                    longDescription: 'En modern portföljwebbplats som visar mina färdigheter och projekt. Byggd från grunden med fokus på användarupplevelse, prestanda och tillgänglighet.',
                    category: 'live',
                    status: 'Färdig',
                    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                    features: [
                        'Flerspråkigt stöd (EN/SV)',
                        'Responsiv design',
                        'Mjuka animationer',
                        'Modern UI/UX',
                        'Prestandaoptimerad',
                        'SEO-redo'
                    ],
                    demoUrl: 'https://omercelebi.se',
                    githubUrl: 'https://github.com/OmerCeleb/omercelebi',
                    image: '/images/projects/omercelebi.png'
                },
                {
                    id: 'construction-site',
                    title: 'Kocaseyit Hafriyat',
                    description: 'Professionell byggföretagswebbplats byggd för ett turkiskt grävföretag. Innehåller tjänsteutställning, kontaktformulär och mobilanpassad design.',
                    longDescription: 'Komplett företagswebbplats för byggtjänster inklusive schaktning, landskapsarkitektur och tung transport. Byggd med fokus på användarupplevelse och konverteringsoptimering.',
                    category: 'live',
                    status: 'Live',
                    technologies: ['React', 'CSS', 'JavaScript', 'Responsiv Design'],
                    features: [
                        '9 olika tjänstekategorier',
                        'Professionell tjänsteutställning',
                        'Kontakt och offertformulär',
                        'Mobil-först design',
                        'SEO-optimerad',
                        'Turkiskt språkstöd'
                    ],
                    demoUrl: 'https://kocaseyithafriyat.com/',
                    image: '/images/projects/kocaseyithafriyat.png'
                },
                {
                    id: 'konditori-sites',
                    title: 'Konditori & Café Webbplatser',
                    description: 'Flera eleganta webbplatser för svenska hospitalitetsföretag. Innehåller menyvisningar, platsinformation och svenskt marknadsfokus.',
                    longDescription: 'Vackra webbplatser för svenska hospitalitetsföretag, med menyvisningar, platsinformation och bokningssystem skräddarsydda för den svenska marknaden.',
                    category: 'development',
                    status: 'Lanseras Snart',
                    technologies: ['React', 'TypeScript', 'CSS', 'SEO'],
                    features: [
                        'Menyvisningssystem',
                        'Plats och öppettider',
                        'Svenskt marknadsfokus',
                        'Lokal SEO-optimering',
                        'Responsiv design',
                        'Kontaktintegrering'
                    ],
                    image: '/images/projects/konditori.png'
                },
                {
                    id: 'todo-app',
                    title: 'Avancerad Todo Applikation',
                    description: 'Modern uppgiftshanteringsapplikation med React frontend. Funktioner inkluderar intuitiv uppgiftsorganisation, kategorier och responsiv design.',
                    longDescription: 'Omfattande todo-applikation som demonstrerar fullstack utvecklingsfärdigheter. Frontend färdig med React, backend för närvarande under utveckling med Node.js.',
                    category: 'development',
                    status: 'Frontend Färdig',
                    technologies: ['React', 'Node.js', 'CSS', 'JavaScript'],
                    features: [
                        'Uppgiftshanteringssystem',
                        'Kategoriorganisation',
                        'Responsiv design',
                        'Modern UI/UX',
                        'Lokal lagring',
                        'Framstegsföljning'
                    ],
                    githubUrl: 'https://github.com/OmerCeleb/todo-app',
                    image: '/images/projects/todoapp.png'
                },
                {
                    id: 'mobile-app',
                    title: 'React Native Mobilapp',
                    description: 'Korsplattforms mobilapplikation byggd med React Native. Frontend-design färdig, backend för närvarande under utveckling.',
                    longDescription: 'Mobilapplikation som visar React Native-färdigheter med fokus på användarupplevelse och moderna mobila UI-mönster.',
                    category: 'development',
                    status: 'Frontend Färdig',
                    technologies: ['React Native', 'JavaScript', 'Mobile UI/UX'],
                    features: [
                        'Korsplattforms kompatibilitet',
                        'Modern mobil UI',
                        'Responsiv design',
                        'Användarvänligt gränssnitt',
                        'Prestandaoptimerad'
                    ],
                    githubUrl: 'https://github.com/OmerCeleb/mobile-app',
                    image: '/images/projects/mobileapp.png'
                },
                {
                    id: 'alexum-projects',
                    title: 'Startup Projekt',
                    description: 'Tre kommersiella projekt utvecklade på Alexum AB inklusive företagswebbplats, SMS-portal och orderhanteringssystem.',
                    longDescription: 'Kommersiella projekt under NDA inklusive webbapplikationer, portalsystem och företagsautomationsverktyg. Fick värdefull erfarenhet i startup-miljö och teamsamarbete.',
                    category: 'commercial',
                    status: 'Färdiga',
                    technologies: ['React', 'JavaScript', 'Node.js', 'CSS'],
                    features: [
                        'Företagswebbplatsutveckling',
                        'SMS-kommunikationsportal',
                        'Orderhanteringssystem',
                        'Teamsamarbete',
                        'Kommersiella applikationer',
                        'Startup-miljöerfarenhet'
                    ],
                    isNDA: true,
                    image: '/images/projects/startup.png'
                },
                {
                    id: 'speedyli-platform',
                    title: 'Speedyli Plattform',
                    description: 'Internationell plattformsutveckling med backend-teknologier på företagsnivå. Arbetade med Spring Boot, Hibernate och PostgreSQL.',
                    longDescription: 'Plattformsutveckling på företagsnivå i internationell teammiljö. Fick omfattande erfarenhet med Java-ekosystem och databashantering.',
                    category: 'commercial',
                    status: 'Färdig',
                    technologies: ['Spring Boot', 'Hibernate', 'Java', 'PostgreSQL', 'Postman'],
                    features: [
                        'Företagsplattformsarkitektur',
                        'Databasdesign och optimering',
                        'Internationellt teamsamarbete',
                        'Fullständig utvecklingslivscykel',
                        'Prestandaoptimering',
                        'API-utveckling'
                    ],
                    demoUrl: 'https://www.speedyli.com',
                    image: '/images/projects/speedyli.png'
                }
            ] as ProjectItem[]
        },
        contact: {
            title: 'Kontakta Mig',
            subtitle: 'Låt oss bygga något fantastiskt tillsammans',
            form: {
                name: 'Ditt Namn',
                email: 'E-postadress',
                subject: 'Ämne',
                message: 'Ditt Meddelande',
                send: 'Skicka Meddelande',
                sending: 'Skickar...',
                success: 'Meddelandet skickat!',
                error: 'Misslyckades att skicka meddelandet. Försök igen.'
            },
            contact: {
                title: 'Kontaktinformation',
                email: 'E-post',
                location: 'Plats',
                availability: 'Tillgänglighet'
            },
            info: {
                email: 'omer534@outlook.com',
                location: 'Stockholm, Sverige',
                availability: 'Tillgänglig för frilansuppdrag'
            },
            social: {
                title: 'Anslut med mig',
                github: 'GitHub',
                linkedin: 'LinkedIn',
                email: 'E-post'
            },
            cta: {
                title: 'Redo att starta ditt projekt?',
                description: 'Oavsett om du behöver en webbplats, webbapplikation eller konsultation, jag är här för att hjälpa till att förverkliga dina idéer.',
                button: 'Starta ett Projekt'
            }
        },
        footer: {
            description: 'Lösningsorienterad fullstackutvecklare med expertis inom både frontend och backend teknologier. Baserad i Stockholm, tillgänglig världen över.',
            status: 'Tillgänglig för frilansuppdrag',
            location: 'Stockholm, Sverige',
            quickLinks: {
                title: 'Snabblänkar',
                links: [
                    { label: 'Hem', href: '#home' },
                    { label: 'Om Mig', href: '#about' },
                    { label: 'Erfarenhet', href: '#experience' },
                    { label: 'Projekt', href: '#projects' },
                    { label: 'Kontakt', href: '#contact' }
                ]
            },
            connect: {
                title: 'Anslut med mig'
            },
            copyright: 'Alla rättigheter förbehållna.',
            madeWith: 'Gjord med kärlek i Stockholm',
            techStack: ['React', 'TypeScript', 'Tailwind']
        }
    }
} as const;