// src/components/sections/Projects/Projects.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations, type ProjectItem } from '../../../data/translations';

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [showFilters, setShowFilters] = useState(false);
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

    // Filter projects based on active filter
    const filteredProjects = data.projects.filter(project => {
        if (activeFilter === 'all') return true;
        return project.category === activeFilter;
    });

    const filterOptions = [
        { key: 'all', label: data.filters.all },
        { key: 'live', label: data.filters.live },
        { key: 'development', label: data.filters.development },
        { key: 'commercial', label: data.filters.commercial }
    ];

    return (
        <section className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden">

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

            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Section Header - Enhanced responsive typography */}
                    <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 drop-shadow-sm">
                            {data.title}
                        </h2>
                        <div className="max-w-4xl mx-auto px-2">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
                                {data.subtitle}
                            </p>
                        </div>

                    </motion.div>

                    {/* Enhanced Filters - Responsive design */}
                    <motion.div
                        variants={itemVariants}
                        className={`mb-8 sm:mb-12 ${showFilters ? 'block' : 'hidden md:block'}`}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                {filterOptions.map((filter) => (
                                    <motion.button
                                        key={filter.key}
                                        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border ${
                                            activeFilter === filter.key
                                                ? 'bg-red-600 text-white border-red-600 shadow-lg'
                                                : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
                                        }`}
                                        onClick={() => {
                                            setActiveFilter(filter.key);
                                            setShowFilters(false);
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {filter.label}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Project Count */}
                            <div className="text-xs sm:text-sm text-gray-600 font-medium bg-white/60 px-3 py-1 rounded-full">
                                {filteredProjects.length} {language === 'en' ? 'projects' : 'projekt'}
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Projects Grid - Ultra responsive */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                    >
                        {filteredProjects.map((project: ProjectItem, index: number) => (
                            <motion.div
                                key={project.id}
                                layout
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{
                                    delay: index * 0.1,
                                    layout: { duration: 0.3 }
                                }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

                                    {/* Enhanced Project Image */}
                                    <div className="relative h-40 xs:h-44 sm:h-48 lg:h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                                        <img
                                            src={project.image || '/api/placeholder/600/400'}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/api/placeholder/600/400';
                                            }}
                                        />

                                        {/* NDA Overlay */}
                                        {project.isNDA && (
                                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
                                                <div className="text-center">
                                                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg drop-shadow-lg block">
                                                        Under NDA
                                                    </span>
                                                    <span className="text-white/80 text-xs sm:text-sm mt-1 block">
                                                        {language === 'en' ? 'Confidential Project' : 'Konfidentiellt Projekt'}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Enhanced Status Badge */}
                                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                                            <span className={`px-2 sm:px-3 py-1 text-xs rounded-full font-bold backdrop-blur-md border ${
                                                project.status === 'Live' || project.status === 'Färdig' || project.status === 'Completed' ?
                                                    'bg-green-100/90 text-green-800 border-green-300/50' :
                                                    project.status?.includes('Progress') || project.status?.includes('Pågår') || project.status?.includes('Complete') || project.status?.includes('Frontend') ?
                                                        'bg-blue-100/90 text-blue-800 border-blue-300/50' :
                                                        'bg-orange-100/90 text-orange-800 border-orange-300/50'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Enhanced Category Badge */}
                                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                                            <span className={`px-2 sm:px-3 py-1 text-xs rounded-md font-bold backdrop-blur-md border ${
                                                project.category === 'live' ? 'bg-green-500/20 text-green-800 border-green-400/60' :
                                                    project.category === 'development' ? 'bg-blue-500/20 text-blue-800 border-blue-400/60' :
                                                        'bg-purple-500/20 text-purple-800 border-purple-400/60'
                                            }`}>
                                                {project.category === 'live' ? (language === 'en' ? 'Live' : 'Live') :
                                                    project.category === 'development' ? (language === 'en' ? 'Dev' : 'Dev') :
                                                        (language === 'en' ? 'Commercial' : 'Kommersiell')}
                                            </span>
                                        </div>

                                        {/* Quick Action Overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <div className="flex space-x-2">
                                                {project.demoUrl && !project.isNDA && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-white/90 rounded-full text-red-600 hover:bg-white transition-colors shadow-lg"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ExternalLink size={16} />
                                                    </motion.a>
                                                )}
                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors shadow-lg"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Github size={16} />
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Project Content */}
                                    <div className="p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors leading-tight line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-3 font-medium flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Enhanced Technologies */}
                                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                                            {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                                                <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-semibold border border-gray-200 hover:bg-gray-200 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200 font-semibold">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Enhanced Action Buttons */}
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex space-x-1.5 sm:space-x-2">
                                                {project.demoUrl && !project.isNDA && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-red-50 text-red-700 hover:bg-red-100 transition-colors rounded-md border border-red-200 font-semibold shadow-sm text-xs sm:text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                                                        <span className="hidden xs:inline">
                                                            {language === 'en' ? 'Demo' : 'Demo'}
                                                        </span>
                                                    </motion.a>
                                                )}

                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors rounded-md border border-gray-200 font-semibold shadow-sm text-xs sm:text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                                                        <span className="hidden xs:inline">
                                                            {language === 'en' ? 'Code' : 'Kod'}
                                                        </span>
                                                    </motion.a>
                                                )}
                                            </div>

                                            <motion.button
                                                className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors rounded-md border border-blue-200 font-semibold shadow-sm text-xs sm:text-sm"
                                                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                                                <span className="hidden xs:inline">
                                                    {language === 'en' ? 'Details' : 'Detaljer'}
                                                </span>
                                            </motion.button>
                                        </div>

                                        {/* Enhanced Expandable Details */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: activeProject === project.id ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            {activeProject === project.id && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200 space-y-3 sm:space-y-4"
                                                >
                                                    <p className="text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-medium">
                                                        {project.longDescription}
                                                    </p>

                                                    {/* All Technologies */}
                                                    <div>
                                                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                                            {language === 'en' ? 'Technologies:' : 'Teknologier:'}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                                            {project.technologies.map((tech: string, idx: number) => (
                                                                <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-800 text-xs rounded-md border border-gray-200 font-semibold hover:bg-gray-200 transition-colors">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Key Features */}
                                                    <div>
                                                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                                            {language === 'en' ? 'Key Features:' : 'Nyckelfunktioner:'}
                                                        </h4>
                                                        <ul className="space-y-1 sm:space-y-1.5">
                                                            {project.features.slice(0, 4).map((feature: string, idx: number) => (
                                                                <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start font-medium">
                                                                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-600 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                                                                    <span className="break-words">{feature}</span>
                                                                </li>
                                                            ))}
                                                            {project.features.length > 4 && (
                                                                <li className="text-xs sm:text-sm text-gray-500 font-medium pl-3 sm:pl-4">
                                                                    +{project.features.length - 4} {language === 'en' ? 'more features' : 'fler funktioner'}
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* No Projects Message */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 sm:py-16"
                        >
                            <p className="text-lg sm:text-xl text-gray-600 font-medium">
                                {language === 'en'
                                    ? 'No projects found in this category.'
                                    : 'Inga projekt hittades i denna kategori.'}
                            </p>
                            <motion.button
                                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                onClick={() => setActiveFilter('all')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {language === 'en' ? 'Show All Projects' : 'Visa Alla Projekt'}
                            </motion.button>
                        </motion.div>
                    )}

                </motion.div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute bottom-20 left-20 w-px h-24 bg-gray-400 shadow-sm"></div>
            <div className="hidden lg:block absolute top-32 right-24 w-20 h-px bg-gray-400 shadow-sm"></div>
        </section>
    );
};

export default Projects;