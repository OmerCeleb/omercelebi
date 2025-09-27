// src/components/common/SEOHead/EnhancedSEOHead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

interface EnhancedSEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    article?: boolean;
    noindex?: boolean;
    canonical?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
                                                             title,
                                                             description,
                                                             keywords,
                                                             image = '/images/og-image.jpg',
                                                             article = false,
                                                             noindex = false,
                                                             canonical
                                                         }) => {
    const { language } = useLanguage();
    const location = useLocation();

    const seoData = {
        en: {
            defaultTitle: 'Ömer Celebi - Fullstack Developer | React, TypeScript, Java',
            defaultDescription: 'Experienced fullstack developer specializing in React, TypeScript, Java, and Node.js. Based in Stockholm, Sweden. Available for freelance projects worldwide.',
            defaultKeywords: 'fullstack developer stockholm, react developer sweden, typescript developer, java spring boot, web development freelance, ömer celebi developer, stockholm tech freelancer',
            siteName: 'Ömer Celebi - Professional Developer Portfolio'
        },
        sv: {
            defaultTitle: 'Ömer Celebi - Fullstack Utvecklare | React, TypeScript, Java',
            defaultDescription: 'Erfaren fullstack-utvecklare specialiserad på React, TypeScript, Java och Node.js. Baserad i Stockholm, Sverige. Tillgänglig för frilansuppdrag världen över.',
            defaultKeywords: 'fullstack utvecklare stockholm, react utvecklare sverige, typescript utvecklare, java spring boot, webbutveckling frilans, ömer celebi utvecklare, stockholm tech frilans',
            siteName: 'Ömer Celebi - Professionell Utvecklarportfölj'
        }
    };

    const data = seoData[language];
    const pageTitle = title ? `${title} | ${data.siteName}` : data.defaultTitle;
    const pageDescription = description || data.defaultDescription;
    const pageKeywords = keywords || data.defaultKeywords;
    const canonicalUrl = canonical || `https://omercelebi.se${location.pathname}`;
    const fullImageUrl = image.startsWith('http') ? image : `https://omercelebi.se${image}`;

    return (
        <Helmet>
            {/* Enhanced Title and Meta */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content="Ömer Celebi" />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="language" content={language} />
            <meta name="geo.region" content="SE-AB" />
            <meta name="geo.placename" content="Stockholm" />
            <meta name="geo.position" content="59.329323;18.068581" />
            <meta name="ICBM" content="59.329323, 18.068581" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Alternate language versions */}
            <link rel="alternate" hrefLang="en" href={`https://omercelebi.se${location.pathname}`} />
            <link rel="alternate" hrefLang="sv" href={`https://omercelebi.se${location.pathname}`} />
            <link rel="alternate" hrefLang="x-default" href={`https://omercelebi.se${location.pathname}`} />

            {/* Enhanced Open Graph */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Ömer Celebi - Fullstack Developer Portfolio" />
            <meta property="og:site_name" content={data.siteName} />
            <meta property="og:locale" content={language === 'en' ? 'en_US' : 'sv_SE'} />

            {/* Enhanced Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content="Ömer Celebi - Fullstack Developer Portfolio" />
            <meta name="twitter:creator" content="@omercelebi" />
            <meta name="twitter:site" content="@omercelebi" />

            {/* Technical and Performance */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="referrer" content="origin-when-cross-origin" />

            {/* Enhanced JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Ömer Celebi",
                    "jobTitle": "Fullstack Developer",
                    "description": pageDescription,
                    "url": "https://omercelebi.se",
                    "image": fullImageUrl,
                    "email": "omer534@outlook.com",
                    "telephone": "+46739238707",
                    "sameAs": [
                        "https://github.com/OmerCeleb",
                        "https://linkedin.com/in/omercelebii",
                        "https://omercelebi.se"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Stockholm",
                        "addressRegion": "Stockholm",
                        "addressCountry": "Sweden"
                    },
                    "knowsAbout": [
                        "React", "TypeScript", "JavaScript", "Java", "Spring Boot",
                        "Node.js", "PostgreSQL", "HTML", "CSS", "Git", "Fullstack Development",
                        "Frontend Development", "Backend Development", "Web Development"
                    ],
                    "alumniOf": {
                        "@type": "Organization",
                        "name": "Java & Spring Boot Bootcamp"
                    },
                    "worksFor": [
                        {
                            "@type": "Organization",
                            "name": "PostNord Sverige"
                        },
                        {
                            "@type": "Organization",
                            "name": "Freelance Web Development"
                        }
                    ],
                    "nationality": "Turkey",
                    "workLocation": {
                        "@type": "Place",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Stockholm",
                            "addressCountry": "Sweden"
                        }
                    }
                })}
            </script>

            {/* Additional Structured Data for Portfolio */}
            {location.pathname === '/projects' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": "Ömer Celebi - Development Portfolio",
                        "description": "Portfolio showcasing fullstack development projects including React applications, Java backends, and modern web solutions",
                        "creator": {
                            "@type": "Person",
                            "name": "Ömer Celebi"
                        },
                        "url": `https://omercelebi.se/projects`,
                        "workExample": [
                            {
                                "@type": "WebSite",
                                "name": "Kocaseyit Hafriyat",
                                "url": "https://kocaseyithafriyat.com",
                                "description": "Professional construction company website"
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Todo Application",
                                "applicationCategory": "WebApplication",
                                "description": "Modern task management application built with React"
                            }
                        ]
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default EnhancedSEOHead;