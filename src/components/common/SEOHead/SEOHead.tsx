// src/components/common/SEOHead/SEOHead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    article?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
                                             title,
                                             description,
                                             keywords,
                                             image = '/images/og-image.jpg',
                                             article = false
                                         }) => {
    const { language } = useLanguage();
    const location = useLocation();

    const seoData = {
        en: {
            defaultTitle: 'Ömer Celebi - Fullstack Developer',
            defaultDescription: 'Solution-oriented fullstack developer with expertise in both frontend and backend technologies. Based in Stockholm, available worldwide for freelance projects.',
            defaultKeywords: 'fullstack developer, react developer, typescript, web development, stockholm, sweden, freelance, portfolio, ömer celebi',
            siteName: 'Ömer Celebi Portfolio'
        },
        sv: {
            defaultTitle: 'Ömer Celebi - Fullstack Utvecklare',
            defaultDescription: 'Lösningsorienterad fullstackutvecklare med expertis inom både frontend och backend teknologier. Baserad i Stockholm, tillgänglig världen över för frilansuppdrag.',
            defaultKeywords: 'fullstack utvecklare, react utvecklare, typescript, webbutveckling, stockholm, sverige, frilans, portfölj, ömer celebi',
            siteName: 'Ömer Celebi Portfölj'
        }
    };

    const data = seoData[language];
    const pageTitle = title ? `${title} | ${data.siteName}` : data.defaultTitle;
    const pageDescription = description || data.defaultDescription;
    const pageKeywords = keywords || data.defaultKeywords;
    const canonicalUrl = `https://omercelebi.se${location.pathname}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content="Ömer Celebi" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content={language} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={`https://omercelebi.se${image}`} />
            <meta property="og:site_name" content={data.siteName} />
            <meta property="og:locale" content={language === 'en' ? 'en_US' : 'sv_SE'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:image" content={`https://omercelebi.se${image}`} />
            <meta property="twitter:creator" content="@omercelebi" />

            {/* Technical Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="format-detection" content="telephone=no" />

            {/* Custom Favicon and App Icons */}
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            {/* PWA Icons */}
            <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png" />

            {/* Safari Pinned Tab */}
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#dc2626" />

            {/* Theme Color */}
            <meta name="theme-color" content="#dc2626" />
            <meta name="msapplication-TileColor" content="#dc2626" />
            <meta name="msapplication-TileImage" content="/images/mstile-150x150.png" />

            {/* Manifest */}
            <link rel="manifest" href="/site.webmanifest" />

            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Ömer Celebi",
                    "jobTitle": "Fullstack Developer",
                    "url": "https://omercelebi.se",
                    "sameAs": [
                        "https://github.com/OmerCeleb",
                        "https://linkedin.com/in/omercelebii"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Stockholm",
                        "addressCountry": "Sweden"
                    },
                    "knowsAbout": ["React", "TypeScript", "JavaScript", "Java", "Spring Boot", "Node.js", "Fullstack Development", "Web Development"],
                    "description": pageDescription,
                    "image": `https://omercelebi.se${image}`
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;