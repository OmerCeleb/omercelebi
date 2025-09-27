# 🚀 Ömer Celebi - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Frontend Developer. Built with React, TypeScript, and modern web technologies.

![Portfolio Preview](./public/images/portfolio-preview.png)

## 🌐 Live Website
**[omercelebi.se](https://omercelebi.se)**

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Performance](#performance)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 About

This portfolio represents my evolution from backend foundations to frontend artistry. It showcases my professional experience, projects, and skills in modern web development.

### 🌟 Key Highlights:
- **Professional Experience**: PostNord, Alexum AB, Full-stack Bootcamp
- **Live Projects**: Construction company websites, café/konditori sites
- **Technical Expertise**: React, TypeScript, Node.js, Modern CSS
- **Based in**: Stockholm, Sweden 🇸🇪

## ✨ Features

### 🎨 Design & UX
- **Scandinavian Minimalist Design** - Clean, professional aesthetics
- **Fully Responsive** - Mobile-first approach with smooth transitions
- **Dark/Light Theme Support** - Elegant color palette
- **Smooth Animations** - Framer Motion powered interactions
- **Accessibility First** - WCAG compliant with semantic HTML

### 🌍 Multilingual Support
- **English** & **Swedish** language support
- **Context-based Translation System** - Centralized language management
- **URL-based Routing** - Each page has its own path

### 🚀 Performance & SEO
- **Lighthouse Score 95+** - Optimized for Core Web Vitals
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Progressive Web App Ready** - Manifest & service worker support
- **Image Optimization** - WebP format with lazy loading

## 🛠️ Tech Stack

### Frontend
```
⚛️  React 18.2.0          - Modern React with Hooks
🔷  TypeScript 4.7.4       - Type-safe development
🎨  Tailwind CSS 3.3.3     - Utility-first CSS framework
✨  Framer Motion 10.16.4  - Production-ready animations
🧭  React Router 6.8.1     - Client-side routing
🏗️  Lucide React 0.263.1  - Beautiful icon library
```

### Development & Build Tools
```
⚡  Vite / Create React App - Build tooling
📦  npm                    - Package management
🔧  ESLint & Prettier      - Code quality & formatting
📊  Source Map Explorer    - Bundle analysis
🔍  Lighthouse            - Performance monitoring
```

### Deployment & Infrastructure
```
🌐  Vercel                - Hosting & CI/CD
🔒  SSL Certificate       - HTTPS security
📈  Google Analytics      - User analytics
🗺️  Google Search Console - SEO monitoring
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.0.0 or higher
- **npm** 8.0.0 or higher

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/omer-celebi-portfolio.git
cd omer-celebi-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open your browser:**
```
http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Analyze bundle size
npm run build:analyze

# Run Lighthouse performance test
npm run lighthouse
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header/           # Navigation & language toggle
│   │   ├── Footer/           # Footer with links & info
│   │   └── EnhancedSEOHead/          # SEO meta tags component
│   └── sections/
│       ├── Hero/             # Landing section with animations
│       ├── About/            # Personal story & philosophy
│       ├── Experience/       # Professional timeline
│       ├── Projects/         # Portfolio showcase
│       └── Contact/          # Contact form & information
├── contexts/
│   └── LanguageContext.tsx  # Global language state management
├── data/
│   ├── translations.ts      # Multilingual content
│   └── navigationData.ts    # Navigation menu data
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── utils/                   # Helper functions
└── App.tsx                  # Main application component
```

## ⚡ Performance

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- **Code Splitting** - Lazy loading components
- **Image Optimization** - WebP format with compression
- **Bundle Analysis** - Tree shaking unused code
- **Caching Strategy** - Service worker implementation

## 🔍 SEO Optimization

### Technical SEO
- **Semantic HTML5** structure
- **Meta tags** for each page
- **Open Graph** tags for social sharing
- **Twitter Card** support
- **Structured Data** (JSON-LD)
- **XML Sitemap** generation
- **Robots.txt** configuration

### Content SEO
- **Keyword optimization** for frontend developer terms
- **Multilingual SEO** with proper hreflang tags
- **Local SEO** for Stockholm-based searches
- **Professional copywriting** in both English and Swedish

## 🚀 Deployment

### Automated Deployment (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `build/` folder to your hosting provider
3. Configure domain: `omercelebi.se`
4. Setup SSL certificate
5. Configure redirects for SPA routing


## 📊 Analytics & Monitoring

### Search Console
- **Search performance monitoring**
- **Indexing status tracking**
- **Mobile usability reports**
- **Core Web Vitals monitoring**

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions!

### Reporting Issues
1. Check existing issues first
2. Use the issue template
3. Provide detailed description
4. Include screenshots if applicable

### Feature Requests
1. Open an issue with the "enhancement" label
2. Describe the feature in detail
3. Explain the use case
4. Consider implementation complexity

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ömer Celebi** - Fullstackt Developer

- 🌐 **Website**: [omercelebi.se](https://omercelebi.se)
- 💼 **LinkedIn**: [linkedin.com/in/omer-celebi](https://linkedin.com/in/omer-celebi)
- 💻 **GitHub**: [github.com/omer-celebi](https://github.com/omer-celebi)
- 📧 **Email**: [contact@omercelebi.se](mailto:contact@omercelebi.se)
- 📍 **Location**: Stockholm, Sweden

---

**Built with ❤️ in Stockholm, Sweden**