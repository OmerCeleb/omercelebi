// src/App.tsx - Optimized with Lazy Loading
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

// Lazy load components for better performance
const Hero = React.lazy(() => import('./components/sections/Hero/Hero'));
const About = React.lazy(() => import('./components/sections/About/About'));
const Experience = React.lazy(() => import('./components/sections/Experience/Experience'));
const Projects = React.lazy(() => import('./components/sections/Projects/Projects'));
const Contact = React.lazy(() => import('./components/sections/Contact/Contact'));
const EnhancedSEOHead = React.lazy(() => import('./components/common/SEOHead/EnhancedSEOHead'));

// Loading component
const PageLoadingSpinner: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">Loading...</p>
        </div>
    </div>
);

// Page wrapper components with enhanced SEO
const HomePage: React.FC = () => (
    <Suspense fallback={<PageLoadingSpinner />}>
        <EnhancedSEOHead />
        <Hero />
    </Suspense>
);

const AboutPage: React.FC = () => (
    <Suspense fallback={<PageLoadingSpinner />}>
        <EnhancedSEOHead
            title="About"
            description="Learn about Ömer Celebi's journey as a fullstack developer. From Java & Spring Boot foundations to modern React development. Experience with international teams and startup environments."
            keywords="ömer celebi background, fullstack developer story, react developer experience, java spring boot developer, stockholm developer, alexum ab experience, speedyli developer"
        />
        <About />
    </Suspense>
);

const ExperiencePage: React.FC = () => (
    <Suspense fallback={<PageLoadingSpinner />}>
        <EnhancedSEOHead
            title="Professional Experience"
            description="Professional experience of Ömer Celebi including roles at PostNord Sverige, Alexum AB startup, and international remote work at Speedyli. Expertise in React, TypeScript, Java, and Node.js."
            keywords="ömer celebi experience, postnord sverige, alexum ab developer, speedyli international experience, fullstack developer jobs stockholm, react developer career"
        />
        <Experience />
    </Suspense>
);

const ProjectsPage: React.FC = () => (
    <Suspense fallback={<PageLoadingSpinner />}>
        <EnhancedSEOHead
            title="Development Projects"
            description="Explore Ömer Celebi's portfolio of web development projects including live websites, React applications, mobile apps, and commercial projects. Showcasing modern web development skills."
            keywords="ömer celebi projects, react projects portfolio, typescript projects, web development portfolio, construction website, todo app, mobile app react native, konditori websites"
        />
        <Projects />
    </Suspense>
);

const ContactPage: React.FC = () => (
    <Suspense fallback={<PageLoadingSpinner />}>
        <EnhancedSEOHead
            title="Contact & Hire"
            description="Get in touch with Ömer Celebi for your next web development project. Available for freelance work in React, TypeScript, Java, and fullstack development. Based in Stockholm, working worldwide."
            keywords="hire ömer celebi, contact fullstack developer, react developer freelance, stockholm web developer, typescript developer hire, freelance fullstack programmer"
        />
        <Contact />
    </Suspense>
);

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router>
                    <div className="min-h-screen bg-neutral-50">
                        <ScrollToTop />
                        <Header />

                        <main className="pt-16 md:pt-20">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/home" element={<Navigate to="/" replace />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/experience" element={<ExperiencePage />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </main>

                        <Footer />
                    </div>
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;