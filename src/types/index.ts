// src/data/types/index.ts
export type Language = 'en' | 'sv';

// Navigation Types
export interface NavigationData {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
}

// Hero Types
export interface HeroData {
    name: string;
    availableForProjects: string;
    hello: string;
    titles: {
        frontendDeveloper: string;
        reactDeveloper: string;
        typescriptEnthusiast: string;
        digitalCreator: string;
    };
    imA: string;
    description: string;
    basedIn: string;
    cta: {
        aboutMe: string;
        downloadCV: string;
    };
    stats: {
        years: string;
        projects: string;
        techStack: string;
    };
    technologies: string;
    sideText: {
        portfolio: string;
        location: string;
    };
}

// About Types
export interface AboutData {
    title: string;
    introduction: string;
    story: {
        bootcamp: {
            title: string;
            period: string;
            content: string;
        };
        startup: {
            title: string;
            period: string;
            content: string;
        };
        current: {
            title: string;
            period: string;
            content: string;
        };
    };
    approach: {
        title: string;
        items: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
    philosophy: string;
    currentFocus: string;
    location: string;
}

// Experience Types
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

export interface ExperienceData {
    title: string;
    subtitle: string;
    current: string;
    experiences: ExperienceItem[];
}

// Project Types
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

export interface ProjectData {
    title: string;
    subtitle: string;
    filters: {
        all: string;
        live: string;
        development: string;
        commercial: string;
    };
    projects: ProjectItem[];
}

// Contact Types
export interface ContactData {
    title: string;
    subtitle: string;
    form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
        sending: string;
        success: string;
        error: string;
    };
    info: {
        title: string;
        email: string;
        location: string;
        availability: string;
    };
    details: {
        email: string;
        location: string;
        availability: string;
    };
    social: {
        title: string;
        github: string;
        linkedin: string;
        email: string;
    };
    cta: {
        title: string;
        description: string;
        button: string;
    };
}

// Footer Types
export interface FooterData {
    description: string;
    status: string;
    location: string;
    quickLinks: {
        title: string;
        links: Array<{
            label: string;
            href: string;
        }>;
    };
    connect: {
        title: string;
    };
    copyright: string;
    madeWith: string;
    techStack: string[];
}