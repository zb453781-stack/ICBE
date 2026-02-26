# 🌍 ICBE Website - International Center for Building Empowerment

A modern, professional, and fully responsive website for ICBE NGO built with React, TypeScript, Tailwind CSS, and Framer Motion.

![ICBE Website](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

---

## 📋 Overview

This website showcases ICBE's humanitarian work across Pakistan, focusing on:
- 🌱 Climate Resilience
- 🛡️ Gender-Based Violence Prevention
- 👥 Youth Leadership Development
- ❤️ Mental Health Support
- 🚚 Mobile Health & Education Outreach

---

## ✨ Features

### Core Functionality
- ✅ **5 Complete Pages**: Home, About, Services, Gallery, Contact
- ✅ **Responsive Navigation**: Mobile-friendly hamburger menu
- ✅ **Hero Section**: Vision-driven statement with CTA
- ✅ **Animated Impact Stats**: Counter animations on scroll
- ✅ **Services Showcase**: Dynamic service cards with icons
- ✅ **Masonry Gallery**: Category filters with modal lightbox
- ✅ **Contact Form**: Full validation with success feedback
- ✅ **Footer**: Comprehensive links and social media
- ✅ **Smooth Animations**: Framer Motion throughout

### Design System
- **Color Palette**: 
  - Deep Blue: `#0B3D91`
  - Green: `#1B7F5B`
  - Neutral backgrounds
- **Typography**: Inter font family
- **Layout**: Max-width 1280px, 8px spacing system
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

---

## 🛠️ Technology Stack

### Frontend
- **React** 18.3.1 - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** 4.0 - Utility-first styling
- **Framer Motion** (motion) - Smooth animations
- **React Router** 7.13 - Client-side routing
- **Lucide React** - Icon library
- **React Responsive Masonry** - Gallery layout

### Ready for Integration
- **Next.js** - Server-side rendering (see deployment guide)
- **Sanity CMS** - Content management
- **Cloudinary** - Image optimization
- **Resend** - Email handling
- **Vercel** - Hosting platform

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd icbe-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the website.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Navigation component
│   │   │   └── Footer.tsx          # Footer component
│   │   ├── pages/
│   │   │   ├── HomePage.tsx        # Landing page
│   │   │   ├── AboutPage.tsx       # About ICBE
│   │   │   ├── ServicesPage.tsx    # Services overview
│   │   │   ├── GalleryPage.tsx     # Photo gallery
│   │   │   └── ContactPage.tsx     # Contact form
│   │   └── App.tsx                 # Main app with routing
│   ├── data/
│   │   └── cmsData.ts              # Mock CMS data structure
│   └── styles/
│       ├── theme.css               # Design tokens
│       └── fonts.css               # Font imports
├── DEPLOYMENT_GUIDE.md             # Complete deployment instructions
└── package.json
```

---

## 📄 Pages Overview

### 🏠 Home (`/`)
- Hero section with vision statement
- Animated impact statistics (50,000+ lives impacted)
- About preview with key highlights
- Services overview cards
- Gallery preview grid
- Call-to-action section

### ℹ️ About (`/about`)
- Organization introduction
- Vision & Mission statements
- Strategic objectives (5 key goals)
- Core values (6 principles)
- Timeline of milestones

### 🔧 Services (`/services`)
- 5 detailed service descriptions:
  1. Climate Resilience
  2. GBV Prevention & Response
  3. Youth Leadership Development
  4. Mental Health & Psychosocial Support
  5. Mobile Health & Education Outreach
- Impact focus for each service
- Key program points
- Partnership CTA

### 🖼️ Gallery (`/gallery`)
- Masonry grid layout
- Category filtering
- Lazy loading images
- Modal lightbox on click
- Image metadata (location, date, caption)

### 📧 Contact (`/contact`)
- Contact form with validation:
  - Full Name (required, min 2 chars)
  - Email (required, valid format)
  - Phone (required, valid format)
  - Message (required, min 10 chars)
- Contact information display
- Office hours
- Google Maps embed

---

## 🎨 Design Features

### Color Usage
- **Primary Blue** (`#0B3D91`): Headers, CTAs, brand elements
- **Secondary Green** (`#1B7F5B`): Accents, hover states, success messages
- **Light Gray** (`#F5F5F5`): Section backgrounds
- **White**: Cards, content backgrounds

### Typography Scale
- **Headings**: Inter font, weight 500-700
- **Body**: Inter font, weight 400
- **Sizes**: Responsive scaling (text-xl to text-5xl)

### Animations
- Fade-in on scroll (sections)
- Slide-in from sides (content blocks)
- Counter animations (impact stats)
- Hover effects (cards, buttons)
- Page transitions (smooth)

---

## 🔧 Configuration

### Environment Variables (for Next.js)
Create a `.env.local` file:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset

# Resend (Email)
RESEND_API_KEY=your_api_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📊 CMS Data Structure

The project includes a mock CMS data structure ready for Sanity integration:

```typescript
// Homepage Data
- heroTitle: string
- heroSubtitle: string
- ctaText: string
- impactStats: Array<{ value: number, label: string, suffix: string }>

// Services Data
- title: string
- description: string
- icon: string
- impactFocus: string
- slug: string

// Gallery Data
- title: string
- imageUrl: string
- category: string
- date: string
- location: string
- caption: string

// Contact Info
- address: string
- email: string
- phone: string
- mapUrl: string
```

---

## 🚀 Deployment

### Option 1: Static Export (Current)
```bash
npm run build
# Deploy dist/ folder to any static host
```

### Option 2: Next.js + Vercel (Recommended)
Follow the complete **[DEPLOYMENT_GUIDE.md](/DEPLOYMENT_GUIDE.md)** for:
- Next.js conversion
- Sanity CMS setup
- Cloudinary integration
- Resend email configuration
- Vercel deployment
- Custom domain setup

---

## 📈 Performance

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimizations
- Lazy loading images
- Code splitting
- Minimal dependencies
- Optimized animations
- Efficient re-renders

---

## 🔒 Security

- Form validation (client + server-side)
- XSS protection
- CSRF tokens (on Next.js)
- Environment variables for secrets
- Rate limiting on API routes

---

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Max Width**: 1280px

---

## 🤝 Contributing

This project is ready for:
- Content updates via Sanity CMS
- Feature additions
- Performance improvements
- Accessibility enhancements

---

## 📞 Support

For questions or issues:
- Email: info@icbe.org.pk
- Phone: +92 51 1234567

---

## 📜 License

© 2026 ICBE - International Center for Building Empowerment. All rights reserved.

---

## 🎯 Next Steps

1. ✅ **Review the prototype** - Test all pages and interactions
2. 📝 **Update content** - Replace mock data with real content
3. 🖼️ **Upload images** - Add real photos to Cloudinary
4. 🚀 **Deploy** - Follow the deployment guide
5. 🌐 **Connect domain** - Link your .org.pk domain
6. 📊 **Add analytics** - Setup Google Analytics
7. 📧 **Test emails** - Verify contact form works

---

## 🌟 Features Roadmap

### Phase 2 (Future)
- [ ] Blog/News section
- [ ] Donation integration (Stripe)
- [ ] Volunteer portal
- [ ] Annual reports download
- [ ] Multilingual support (English/Urdu)
- [ ] Impact dashboard
- [ ] Member login area

---

**Built with ❤️ for communities making a difference**
