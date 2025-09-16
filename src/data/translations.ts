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
                frontendDeveloper: 'Frontend Developer',
                reactDeveloper: 'React Developer',
                typescriptEnthusiast: 'TypeScript Enthusiast',
                digitalCreator: 'Digital Creator'
            },
            imA: "I'm a",
            description: 'Crafting digital experiences with precision and passion.',
            basedIn: 'Based in Stockholm.',
            cta: {
                aboutMe: 'About Me',
                downloadCV: 'Download CV'
            },
            stats: {
                years: 'Years',
                projects: 'Projects',
                techStack: 'Tech Stack'
            },
            technologies: 'Technologies',
            sideText: {
                portfolio: 'PORTFOLIO 2024',
                location: 'STOCKHOLM'
            }
        },
        about: {
            title: 'About Me',
            introduction: 'From backend foundations to frontend artistry',
            story: {
                bootcamp: {
                    title: 'The Beginning',
                    period: '2021',
                    content: 'My development journey began with a comprehensive bootcamp where I learned the fundamentals of programming with Java and SQL. This solid foundation taught me the importance of clean code and systematic thinking.'
                } as StoryItem,
                startup: {
                    title: 'Startup Life',
                    period: '2023',
                    content: '8 months at Alexum AB was transformative. Working on three different projects, I discovered my passion for frontend development. React and TypeScript became my tools of choice for crafting user experiences.'
                } as StoryItem,
                current: {
                    title: 'Today',
                    period: 'Present',
                    content: 'While working at PostNord, I continue growing through freelance projects. From construction company websites in Turkey to konditori sites in Sweden - every project teaches me something new.'
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
                        title: 'User-Centered',
                        description: 'Every interface should feel intuitive and delightful to use'
                    },
                    {
                        icon: 'Coffee',
                        title: 'Continuous Learning',
                        description: 'Staying current with modern technologies and best practices'
                    },
                    {
                        icon: 'Users',
                        title: 'Collaborative',
                        description: 'Best solutions emerge from teamwork and open communication'
                    }
                ] as ApproachItem[]
            },
            philosophy: 'What drives me is the perfect blend of technical precision and creative expression that frontend development offers. Every line of code is an opportunity to craft something beautiful and functional.',
            currentFocus: 'Currently expanding my expertise in React ecosystem, TypeScript patterns, and modern web performance optimization.',
            location: 'Based in Stockholm, Sweden'
        },
        experience: {
            title: 'Experience',
            subtitle: 'My professional journey',
            current: 'Current',
            experiences: [
                {
                    id: 'postnord',
                    company: 'PostNord',
                    position: 'Terminal Worker',
                    period: 'Sep 2023 - Present',
                    duration: '6+ months',
                    location: 'Stockholm, Sweden',
                    type: 'Current Role',
                    description: 'Working in logistics while actively developing freelance web projects. This role provides stability while I grow my development skills and build my portfolio.',
                    highlights: [
                        'Managing terminal operations',
                        'Developing freelance projects in spare time',
                        'Building portfolio with real client work'
                    ],
                    technologies: [],
                    icon: 'Truck'
                },
                {
                    id: 'alexum',
                    company: 'Alexum AB',
                    position: 'Frontend Developer',
                    period: 'Jan 2023 - Aug 2023',
                    duration: '8 months',
                    location: 'Stockholm, Sweden',
                    type: 'Startup Experience',
                    description: 'Startup environment that shaped my development career. Worked on three different projects as part of a collaborative team, focusing on frontend development with React.',
                    highlights: [
                        'Worked on 3 diverse projects',
                        'Collaborative team environment',
                        'Frontend focus with React & TypeScript',
                        'Contributing to Node.js backend tasks'
                    ],
                    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
                    icon: 'Building'
                },
                {
                    id: 'bootcamp',
                    company: 'Bootcamp Program',
                    position: 'Full-Stack Student',
                    period: '2021',
                    duration: '1 year',
                    location: 'Turkey',
                    type: 'Foundation',
                    description: 'Intensive full-stack development program that laid the foundation for my programming career. Built a comprehensive Rent-a-Car management system.',
                    highlights: [
                        'Comprehensive Rent-a-Car project',
                        'Backend development with Java',
                        'Database design and management',
                        'Full-stack understanding'
                    ],
                    technologies: ['Java', 'SQL', 'MySQL', 'REST APIs', 'Git'],
                    icon: 'Code'
                }
            ] as ExperienceItem[]
        },
        projects: {
            title: 'Projects',
            subtitle: 'Building digital experiences',
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
                        'Performance optimized'
                    ],
                    demoUrl: '#',
                    githubUrl: '#',
                    image: '/api/placeholder/600/400'
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
                        'SEO optimized'
                    ],
                    demoUrl: 'https://kocaseyithafriyat.com/',
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'konditori-sites',
                    title: 'Swedish Café Websites',
                    description: 'Multiple website projects for cafés and konditori businesses in Sweden. Focus on elegant design and local market appeal.',
                    longDescription: 'Series of websites for Swedish hospitality businesses, featuring menu displays, location information, and booking systems.',
                    category: 'development',
                    status: 'In Progress',
                    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO'],
                    features: [
                        'Menu display systems',
                        'Location and hours',
                        'Swedish market focus',
                        'Local SEO optimization',
                        'Booking integration'
                    ],
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'todo-app',
                    title: 'Full-Stack Todo Application',
                    description: 'Modern task management application with React frontend and Node.js backend. Features user authentication and real-time updates.',
                    longDescription: 'Comprehensive todo application demonstrating full-stack development skills with modern technologies and best practices.',
                    category: 'development',
                    status: 'Frontend Complete',
                    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'JWT'],
                    features: [
                        'User authentication',
                        'Task management',
                        'Real-time updates',
                        'Responsive design',
                        'REST API integration'
                    ],
                    githubUrl: '#',
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'mobile-app',
                    title: 'React Native Mobile App',
                    description: 'Cross-platform mobile application with completed frontend design. Backend development in progress using Node.js.',
                    longDescription: 'Mobile application showcasing React Native skills with focus on user experience and modern mobile UI patterns.',
                    category: 'development',
                    status: 'Frontend Complete',
                    technologies: ['React Native', 'TypeScript', 'Node.js', 'Mobile UI/UX'],
                    features: [
                        'Cross-platform compatibility',
                        'Modern UI components',
                        'Navigation system',
                        'State management',
                        'API integration ready'
                    ],
                    image: '/api/placeholder/300/600'
                },
                {
                    id: 'alexum-projects',
                    title: 'Startup Projects',
                    description: 'Three commercial projects developed at Alexum AB including company website, SMS portal, and order management system.',
                    longDescription: 'Commercial projects under NDA including web applications, portal systems, and business automation tools.',
                    category: 'commercial',
                    status: 'Completed',
                    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
                    features: [
                        'Company website development',
                        'SMS communication portal',
                        'Order management system',
                        'Team collaboration',
                        'Commercial grade applications'
                    ],
                    isNDA: true
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
                email: 'your.email@example.com',
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
            description: 'Passionate frontend developer crafting digital experiences with modern technologies. Based in Stockholm, available worldwide.',
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
                frontendDeveloper: 'Frontend Utvecklare',
                reactDeveloper: 'React Utvecklare',
                typescriptEnthusiast: 'TypeScript Entusiast',
                digitalCreator: 'Digital Skapare'
            },
            imA: 'Jag är en',
            description: 'Skapar digitala upplevelser med precision och passion.',
            basedIn: 'Baserad i Stockholm.',
            cta: {
                aboutMe: 'Om Mig',
                downloadCV: 'Ladda ner CV'
            },
            stats: {
                years: 'År',
                projects: 'Projekt',
                techStack: 'Teknik Stack'
            },
            technologies: 'Teknologier',
            sideText: {
                portfolio: 'PORTFÖLJ 2024',
                location: 'STOCKHOLM'
            }
        },
        about: {
            title: 'Om Mig',
            introduction: 'Från backend-grund till frontend-konst',
            story: {
                bootcamp: {
                    title: 'Början',
                    period: '2021',
                    content: 'Min utvecklingsresa började med en omfattande bootcamp där jag lärde mig grunderna i programmering med Java och SQL. Denna solida grund lärde mig vikten av ren kod och systematiskt tänkande.'
                } as StoryItem,
                startup: {
                    title: 'Startup-livet',
                    period: '2023',
                    content: '8 månader på Alexum AB var förändrande. Genom att arbeta med tre olika projekt upptäckte jag min passion för frontend-utveckling. React och TypeScript blev mina verktyg för att skapa användarupplevelser.'
                } as StoryItem,
                current: {
                    title: 'Idag',
                    period: 'Nuvarande',
                    content: 'Medan jag arbetar på PostNord fortsätter jag växa genom frilansuppdrag. Från byggföretags webbplatser i Turkiet till konditori-sajter i Sverige - varje projekt lär mig något nytt.'
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
                        title: 'Användarcentrerad',
                        description: 'Varje gränssnitt ska kännas intuitivt och trevligt att använda'
                    },
                    {
                        icon: 'Coffee',
                        title: 'Kontinuerligt Lärande',
                        description: 'Hålla mig uppdaterad med moderna teknologier och bästa praxis'
                    },
                    {
                        icon: 'Users',
                        title: 'Samarbetsinriktad',
                        description: 'Bästa lösningarna uppstår från teamarbete och öppen kommunikation'
                    }
                ] as ApproachItem[]
            },
            philosophy: 'Det som driver mig är den perfekta blandningen av teknisk precision och kreativt uttryck som frontend-utveckling erbjuder. Varje kodrad är en möjlighet att skapa något vackert och funktionellt.',
            currentFocus: 'För närvarande utökar jag min expertis inom React-ekosystemet, TypeScript-mönster och modern webb-prestandaoptimering.',
            location: 'Baserad i Stockholm, Sverige'
        },
        experience: {
            title: 'Erfarenhet',
            subtitle: 'Min professionella resa',
            current: 'Nuvarande',
            experiences: [
                {
                    id: 'postnord',
                    company: 'PostNord',
                    position: 'Terminalarbetare',
                    period: 'Sep 2023 - Nuvarande',
                    duration: '6+ månader',
                    location: 'Stockholm, Sverige',
                    type: 'Nuvarande Roll',
                    description: 'Arbetar inom logistik medan jag aktivt utvecklar frilans webbprojekt. Denna roll ger stabilitet medan jag utvecklar mina utvecklingsfärdigheter och bygger min portfölj.',
                    highlights: [
                        'Hanterar terminaloperationer',
                        'Utvecklar frilansprojekt på fritiden',
                        'Bygger portfölj med riktiga kundprojekt'
                    ],
                    technologies: [],
                    icon: 'Truck'
                },
                {
                    id: 'alexum',
                    company: 'Alexum AB',
                    position: 'Frontend Utvecklare',
                    period: 'Jan 2023 - Aug 2023',
                    duration: '8 månader',
                    location: 'Stockholm, Sverige',
                    type: 'Startup Erfarenhet',
                    description: 'Startup-miljö som formade min utvecklingskarriär. Arbetade med tre olika projekt som del av ett kollaborativt team, fokuserade på frontend-utveckling med React.',
                    highlights: [
                        'Arbetade med 3 olika projekt',
                        'Kollaborativ teammiljö',
                        'Frontend-fokus med React & TypeScript',
                        'Bidrog till Node.js backend-uppgifter'
                    ],
                    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
                    icon: 'Building'
                },
                {
                    id: 'bootcamp',
                    company: 'Bootcamp Program',
                    position: 'Full-Stack Student',
                    period: '2021',
                    duration: '1 år',
                    location: 'Turkiet',
                    type: 'Grund',
                    description: 'Intensivt full-stack utvecklingsprogram som lade grunden för min programmeringskarriär. Byggde ett omfattande biluthyrningssystem.',
                    highlights: [
                        'Omfattande biluthyrningsprojekt',
                        'Backend-utveckling med Java',
                        'Databasdesign och hantering',
                        'Full-stack förståelse'
                    ],
                    technologies: ['Java', 'SQL', 'MySQL', 'REST APIs', 'Git'],
                    icon: 'Code'
                }
            ] as ExperienceItem[]
        },
        projects: {
            title: 'Projekt',
            subtitle: 'Bygger digitala upplevelser',
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
                        'Prestandaoptimerad'
                    ],
                    demoUrl: '#',
                    githubUrl: '#',
                    image: '/api/placeholder/600/400'
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
                        'SEO-optimerad'
                    ],
                    demoUrl: 'https://kocaseyithafriyat.com/',
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'konditori-sites',
                    title: 'Svenska Café Webbplatser',
                    description: 'Flera webbplatsprojekt för caféer och konditorier i Sverige. Fokus på elegant design och lokal marknadstilltal.',
                    longDescription: 'Serie av webbplatser för svenska hospitalitetsföretag, med menyvisningar, platsinformation och bokningssystem.',
                    category: 'development',
                    status: 'Pågår',
                    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO'],
                    features: [
                        'Menyvisningssystem',
                        'Plats och öppettider',
                        'Svenskt marknadsfokus',
                        'Lokal SEO-optimering',
                        'Bokningsintegrering'
                    ],
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'todo-app',
                    title: 'Full-Stack Todo Applikation',
                    description: 'Modern uppgiftshanteringsapplikation med React frontend och Node.js backend. Funktioner för användarautentisering och realtidsuppdateringar.',
                    longDescription: 'Omfattande todo-applikation som demonstrerar full-stack utvecklingsfärdigheter med moderna teknologier och bästa praxis.',
                    category: 'development',
                    status: 'Frontend Färdig',
                    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'JWT'],
                    features: [
                        'Användarautentisering',
                        'Uppgiftshantering',
                        'Realtidsuppdateringar',
                        'Responsiv design',
                        'REST API-integration'
                    ],
                    githubUrl: '#',
                    image: '/api/placeholder/600/400'
                },
                {
                    id: 'mobile-app',
                    title: 'React Native Mobilapp',
                    description: 'Korsplattform mobilapplikation med färdig frontend-design. Backend-utveckling pågår med Node.js.',
                    longDescription: 'Mobilapplikation som visar React Native-färdigheter med fokus på användarupplevelse och moderna mobila UI-mönster.',
                    category: 'development',
                    status: 'Frontend Färdig',
                    technologies: ['React Native', 'TypeScript', 'Node.js', 'Mobile UI/UX'],
                    features: [
                        'Korsplattforms kompatibilitet',
                        'Moderna UI-komponenter',
                        'Navigationssystem',
                        'Tillståndshantering',
                        'API-integration redo'
                    ],
                    image: '/api/placeholder/300/600'
                },
                {
                    id: 'alexum-projects',
                    title: 'Startup Projekt',
                    description: 'Tre kommersiella projekt utvecklade på Alexum AB inklusive företagswebbplats, SMS-portal och orderhanteringssystem.',
                    longDescription: 'Kommersiella projekt under NDA inklusive webbapplikationer, portalsystem och företagsautomationsverktyg.',
                    category: 'commercial',
                    status: 'Färdiga',
                    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
                    features: [
                        'Företagswebbplatsutveckling',
                        'SMS-kommunikationsportal',
                        'Orderhanteringssystem',
                        'Teamsamarbete',
                        'Kommersiella applikationer'
                    ],
                    isNDA: true
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
                email: 'your.email@example.com',
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
            description: 'Passionerad frontend utvecklare som skapar digitala upplevelser med moderna teknologier. Baserad i Stockholm, tillgänglig världen över.',
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