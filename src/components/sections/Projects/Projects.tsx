// src/components/sections/Projects/Projects.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations, type ProjectItem } from '../../../data/translations';

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const data = translations[language].projects;

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
        <section className="relative min-h-screen py-20 overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/images/Projekt.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/85"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-600 font-light mb-8">
                            {data.subtitle}
                        </p>

                        {/* Project Stats */}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.projects.map((project: ProjectItem, index: number) => (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                                        <img
                                            src={project.image || '/api/placeholder/600/400'}
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
                                            <span className={`px-3 py-1 text-xs rounded-full font-medium backdrop-blur-sm ${
                                                project.status === 'Live' || project.status === 'Färdig' || project.status === 'Completed' ?
                                                    'bg-green-100/90 text-green-700 border border-green-200' :
                                                    project.status?.includes('Progress') || project.status?.includes('Pågår') || project.status?.includes('Complete') || project.status?.includes('Frontend') ?
                                                        'bg-blue-100/90 text-blue-700 border border-blue-200' :
                                                        'bg-orange-100/90 text-orange-700 border border-orange-200'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-2 py-1 text-xs rounded-md font-medium backdrop-blur-sm ${
                                                project.category === 'live' ? 'bg-green-500/20 text-green-700 border border-green-300/50' :
                                                    project.category === 'development' ? 'bg-blue-500/20 text-blue-700 border border-blue-300/50' :
                                                        'bg-purple-500/20 text-purple-700 border border-purple-300/50'
                                            }`}>
                                                {project.category === 'live' ? (language === 'en' ? 'Live' : 'Live') :
                                                    project.category === 'development' ? (language === 'en' ? 'Dev' : 'Dev') :
                                                        (language === 'en' ? 'Commercial' : 'Kommersiell')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                                                <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded font-medium border border-neutral-200">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-2 py-1 bg-neutral-50 text-neutral-500 text-xs rounded border border-neutral-200">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-3">
                                                {project.demoUrl && !project.isNDA && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 transition-colors rounded-md border border-red-200"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <ExternalLink size={14} />
                                                        <span className="text-xs font-medium">
                                                            {language === 'en' ? 'Demo' : 'Demo'}
                                                        </span>
                                                    </motion.a>
                                                )}

                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 px-3 py-1.5 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition-colors rounded-md border border-neutral-200"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Github size={14} />
                                                        <span className="text-xs font-medium">
                                                            {language === 'en' ? 'Code' : 'Kod'}
                                                        </span>
                                                    </motion.a>
                                                )}
                                            </div>

                                            <motion.button
                                                className="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-md border border-blue-200"
                                                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye size={14} />
                                                <span className="text-xs font-medium">
                                                    {language === 'en' ? 'Details' : 'Detaljer'}
                                                </span>
                                            </motion.button>
                                        </div>

                                        {/* Expandable Details */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: activeProject === project.id ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            {activeProject === project.id && (
                                                <div className="pt-4 mt-4 border-t border-neutral-200">
                                                    <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
                                                        {project.longDescription}
                                                    </p>

                                                    {/* All Technologies */}
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-semibold text-black mb-2">
                                                            {language === 'en' ? 'Technologies Used:' : 'Använda Teknologier:'}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.technologies.map((tech: string, idx: number) => (
                                                                <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded border border-neutral-200">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Key Features */}
                                                    <div className="mb-3">
                                                        <h4 className="text-sm font-semibold text-black mb-2">
                                                            {language === 'en' ? 'Key Features:' : 'Nyckelfunktioner:'}
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {project.features.map((feature: string, idx: number) => (
                                                                <li key={idx} className="text-xs text-neutral-600 flex items-start">
                                                                    <span className="w-1 h-1 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
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