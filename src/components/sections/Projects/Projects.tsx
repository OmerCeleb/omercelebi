import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Code, Eye, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'sv'>('en');
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>('all');

    const translations = {
        en: {
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
                    image: '/api/placeholder/600/400' // Placeholder for screenshot
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
                    image: '/api/placeholder/600/400' // You'll replace this
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
                    image: '/api/placeholder/600/400' // You'll replace this
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
                    githubUrl: '#', // You'll add when ready
                    image: '/api/placeholder/600/400' // You'll replace this
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
                    image: '/api/placeholder/300/600' // You'll replace this
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
            ]
        },
        sv: {
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
            ]
        }
    };

    const t = translations[language];
    const filteredProjects = filter === 'all'
        ? t.projects
        : t.projects.filter(project => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-full opacity-5"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 70%, transparent 100%)',
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 30, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Language Toggle */}
            <div className="fixed top-44 right-6 z-50">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full p-1 border border-white/50 shadow-lg">
                    <motion.button
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                            language === 'en'
                                ? 'bg-red-600 text-white shadow-md'
                                : 'text-black hover:bg-white/50'
                        }`}
                        onClick={() => setLanguage('en')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        EN
                    </motion.button>

                    <motion.button
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                            language === 'sv'
                                ? 'bg-red-600 text-white shadow-md'
                                : 'text-black hover:bg-white/50'
                        }`}
                        onClick={() => setLanguage('sv')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SV
                    </motion.button>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                            {t.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-600 font-light mb-12">
                            {t.subtitle}
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {Object.entries(t.filters).map(([key, label]) => (
                                <motion.button
                                    key={key}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        filter === key
                                            ? 'bg-red-600 text-white shadow-md'
                                            : 'bg-white/80 text-neutral-700 hover:bg-white hover:shadow-lg'
                                    }`}
                                    onClick={() => setFilter(key)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden bg-neutral-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {project.isNDA && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                <span className="text-white font-medium">Under NDA</span>
                                            </div>
                                        )}

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                                                project.status === 'Live' || project.status === 'Färdig' ?
                                                    'bg-green-100 text-green-700' :
                                                    project.status?.includes('Progress') || project.status?.includes('Pågår') ?
                                                        'bg-blue-100 text-blue-700' :
                                                        'bg-orange-100 text-orange-700'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-neutral-600 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-3">
                                                {project.demoUrl && !project.isNDA && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <ExternalLink size={16} />
                                                        <span className="text-sm font-medium">Demo</span>
                                                    </motion.a>
                                                )}

                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 text-neutral-600 hover:text-black transition-colors"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Github size={16} />
                                                        <span className="text-sm font-medium">Code</span>
                                                    </motion.a>
                                                )}
                                            </div>

                                            <motion.button
                                                className="flex items-center space-x-1 text-neutral-500 hover:text-black transition-colors"
                                                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Eye size={16} />
                                                <span className="text-sm">Details</span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-20 left-20 w-px h-24 bg-neutral-300"></div>
            <div className="absolute top-32 right-24 w-20 h-px bg-neutral-300"></div>
        </section>
    );
};

export default Projects;