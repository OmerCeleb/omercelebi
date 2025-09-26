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
                    backgroundImage: `url("/images/Projekt.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Strong overlay for better readability */}
            <div className="absolute inset-0 bg-white/90"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Section Header - İyileştirilmiş Typography */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-8 max-w-3xl mx-auto leading-relaxed">
                            {data.subtitle}
                        </p>
                    </motion.div>

                    {/* Projects Grid - İyileştirilmiş */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.projects.map((project: ProjectItem, index: number) => (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={project.image || '/api/placeholder/600/400'}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {project.isNDA && (
                                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                                <span className="text-white font-bold text-lg drop-shadow-lg">Under NDA</span>
                                            </div>
                                        )}

                                        {/* Status Badge - İyileştirilmiş */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1.5 text-xs rounded-full font-bold backdrop-blur-sm border ${
                                                project.status === 'Live' || project.status === 'Färdig' || project.status === 'Completed' ?
                                                    'bg-green-100/95 text-green-800 border-green-300' :
                                                    project.status?.includes('Progress') || project.status?.includes('Pågår') || project.status?.includes('Complete') || project.status?.includes('Frontend') ?
                                                        'bg-blue-100/95 text-blue-800 border-blue-300' :
                                                        'bg-orange-100/95 text-orange-800 border-orange-300'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Category Badge - İyileştirilmiş */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1.5 text-xs rounded-md font-bold backdrop-blur-sm border ${
                                                project.category === 'live' ? 'bg-green-500/20 text-green-800 border-green-400/60' :
                                                    project.category === 'development' ? 'bg-blue-500/20 text-blue-800 border-blue-400/60' :
                                                        'bg-purple-500/20 text-purple-800 border-purple-400/60'
                                            }`}>
                                                {project.category === 'live' ? (language === 'en' ? 'Live' : 'Live') :
                                                    project.category === 'development' ? (language === 'en' ? 'Dev' : 'Dev') :
                                                        (language === 'en' ? 'Commercial' : 'Kommersiell')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content - İyileştirilmiş */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3 font-medium">
                                            {project.description}
                                        </p>

                                        {/* Technologies - İyileştirilmiş */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-semibold border border-gray-200 hover:bg-gray-200 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200 font-semibold">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons - İyileştirilmiş */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-3">
                                                {project.demoUrl && !project.isNDA && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 transition-colors rounded-md border border-red-200 font-semibold shadow-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <ExternalLink size={16} />
                                                        <span className="text-sm">
                                                            {language === 'en' ? 'Demo' : 'Demo'}
                                                        </span>
                                                    </motion.a>
                                                )}

                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors rounded-md border border-gray-200 font-semibold shadow-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Github size={16} />
                                                        <span className="text-sm">
                                                            {language === 'en' ? 'Code' : 'Kod'}
                                                        </span>
                                                    </motion.a>
                                                )}
                                            </div>

                                            <motion.button
                                                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors rounded-md border border-blue-200 font-semibold shadow-sm"
                                                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye size={16} />
                                                <span className="text-sm">
                                                    {language === 'en' ? 'Details' : 'Detaljer'}
                                                </span>
                                            </motion.button>
                                        </div>

                                        {/* Expandable Details - İyileştirilmiş */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: activeProject === project.id ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            {activeProject === project.id && (
                                                <div className="pt-4 mt-4 border-t border-gray-200">
                                                    <p className="text-sm text-gray-800 mb-4 leading-relaxed font-medium">
                                                        {project.longDescription}
                                                    </p>

                                                    {/* All Technologies - İyileştirilmiş */}
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                                            {language === 'en' ? 'Technologies Used:' : 'Använda Teknologier:'}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.map((tech: string, idx: number) => (
                                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-md border border-gray-200 font-semibold hover:bg-gray-200 transition-colors">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Key Features - İyileştirilmiş */}
                                                    <div className="mb-3">
                                                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                                            {language === 'en' ? 'Key Features:' : 'Nyckelfunktioner:'}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {project.features.map((feature: string, idx: number) => (
                                                                <li key={idx} className="text-sm text-gray-700 flex items-start font-medium">
                                                                    <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
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

            {/* Decorative Elements - Daha belirgin */}
            <div className="absolute bottom-20 left-20 w-px h-24 bg-gray-400 shadow-sm"></div>
            <div className="absolute top-32 right-24 w-20 h-px bg-gray-400 shadow-sm"></div>
        </section>
    );
};

export default Projects;