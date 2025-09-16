export const LANGUAGES = ['en', 'sv'] as const;

export const SOCIAL_LINKS = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    email: 'your.email@example.com',
} as const;

export const NAVIGATION_ITEMS = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
] as const;
