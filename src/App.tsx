// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import SEOHead from './components/common/SEOHead/SEOHead';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';

// Page wrapper components with SEO
const HomePage: React.FC = () => (
    <>
        <SEOHead />
        <Hero />
    </>
);

const AboutPage: React.FC = () => (
    <>
        <SEOHead
            title="About"
            description="Learn about Ömer Celebi's journey from backend foundations to frontend artistry. Passionate developer with experience in React, TypeScript, and modern web technologies."
            keywords="about ömer celebi, frontend developer background, react developer experience, typescript developer"
        />
        <About />
    </>
);

const ExperiencePage: React.FC = () => (
    <>
        <SEOHead
            title="Experience"
            description="Professional experience of Ömer Celebi including work at PostNord, Alexum AB, and full-stack development bootcamp. Expertise in React, TypeScript, and Node.js."
            keywords="ömer celebi experience, frontend developer jobs, react developer experience, alexum ab, postnord"
        />
        <Experience />
    </>
);

const ProjectsPage: React.FC = () => (
    <>
        <SEOHead
            title="Projects"
            description="Explore Ömer Celebi's portfolio of web development projects including React applications, TypeScript projects, and modern websites for businesses."
            keywords="ömer celebi projects, react projects, typescript projects, web development portfolio, frontend projects"
        />
        <Projects />
    </>
);

const ContactPage: React.FC = () => (
    <>
        <SEOHead
            title="Contact"
            description="Get in touch with Ömer Celebi for your next web development project. Available for freelance work in React, TypeScript, and modern frontend development."
            keywords="contact ömer celebi, hire frontend developer, react developer freelance, stockholm web developer"
        />
        <Contact />
    </>
);

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router>
                    <div className="min-h-screen bg-neutral-50">
                        {/* Automatic scroll to top on route change */}
                        <ScrollToTop />

                        <Header />

                        {/* Page Content */}
                        <main className="pt-16 md:pt-20">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/home" element={<Navigate to="/" replace />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/experience" element={<ExperiencePage />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                {/* 404 - Unknown route redirect to home */}
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </main>

                        {/* Footer - Always visible */}
                        <Footer />
                    </div>
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;