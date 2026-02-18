# ICBE Informational Website - Setup and Deployment Guide

## ✅ Project Status

- [x] React 18+ with Vite configured
- [x] React Router DOM v6 setup
- [x] TypeScript configuration
- [x] Tailwind CSS integrated
- [x] Framer Motion animations
- [x] React Helmet Async for SEO
- [x] Zod form validation
- [x] Sanity CMS client configured
- [x] EmailJS service setup
- [x] Google Analytics integration
- [x] Environment variables structure
- [x] All dependencies installed

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone/Navigate to project**
```bash
cd "Build ICBE Informational Website"
```

2. **Install dependencies** (Already done)
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Configure environment variables** (see section below)

### Development Server

```bash
npm run dev
```

The server will start at `http://localhost:5173` or `http://localhost:5174` (if 5173 is busy)

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# Sanity CMS
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name

# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
VITE_GA_ID=G-XXXXXXXXXX

# API Configuration
VITE_API_BASE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=contact@icbe.org
```

## 📋 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **Vite** | 6.3.5 | Build Tool |
| **TypeScript** | 5.6.3 | Type Safety |
| **React Router DOM** | 6.29.0 | Routing |
| **Tailwind CSS** | 4.1.12 | Styling |
| **Framer Motion** | 11.11.17 | Animations |
| **React Helmet Async** | 2.0.4 | SEO/Meta Tags |
| **Sanity** | 3.38.0 | Headless CMS |
| **Zod** | 3.23.8 | Form Validation |
| **EmailJS** | 3.2.0 | Email Service |

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main App component
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── ContactPage.tsx
│   └── ui/                     # Shadcn UI components
├── lib/
│   ├── sanity.ts              # Sanity CMS client
│   ├── analytics.ts           # GA4 tracking
│   ├── email.ts               # EmailJS integration
│   └── seo.tsx                # SEO helper component
├── schemas/
│   └── forms.ts               # Zod validation schemas
├── data/
│   └── cmsData.ts             # Mock CMS data (to be replaced with Sanity)
├── styles/
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
├── utils/
│   └── sitemap.ts             # Sitemap generation utility
├── main.tsx                   # Entry point
└── vite-env.d.ts              # Vite type declarations
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#0B3D91`
- **Secondary Green**: `#1B7F5B`
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F5F5`

### Typography
- Font Family: **Inter** (via CSS)
- Responsive unit: Tailwind CSS classes

### Layout
- Max width: `1280px` (1280 container)
- Spacing system: Tailwind's 8px grid
- Mobile-first responsive design

## 🔐 Security Considerations

1. **Environment Variables**: Never commit `.env.local` to Git
2. **Sanity CMS**: Configure CORS properly in Sanity dashboard
3. **EmailJS**: Use appropriate access control tokens
4. **Form Validation**: Always validate on client using Zod and server-side as well
5. **Content Security Policy**: Configure headers properly on deployment

## 📝 Content Management with Sanity

### Setup Sanity CMS
1. Create account at [sanity.io](https://sanity.io)
2. Create new project
3. Create schemas for:
   - **Homepage**: Hero section, Impact stats, Featured services
   - **About Page**: Mission, Vision, Values, Timeline
   - **Services**: Title, Description, Icon, Impact metrics
   - **Gallery**: Images, Categories, Metadata
   - **Contact Info**: Address, Email, Phone numbers

### Connect Sanity to React App
The app is pre-configured to fetch from Sanity via `src/lib/sanity.ts`

Example query:
```typescript
import { sanityClient } from '@/lib/sanity';

const homepage = await sanityClient.fetch(
  '*[_type == "homepage"][0]'
);
```

## 📧 EmailJS Configuration

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Create Email Service
3. Create Email Template
4. Add credentials to `.env.local`

Template variables available:
- `to_email`: Recipient email
- `to_name`: Recipient name
- `subject`: Email subject
- `message`: Email body
- `reply_to`: Reply-to email

## 📊 Google Analytics Setup

1. Create property in [Google Analytics](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`

Tracked events:
- Page views (automatic)
- Form submissions (manual)
- Button clicks (manual)
- Custom events (manual)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/icbe-website.git
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import GitHub repository
- Add environment variables
- Deploy

### Deploy to Netlify

1. **Connect Git repository**
```bash
npm run build
```

2. **Deploy via Netlify UI**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`
- Add environment variables
- Deploy

### Domain Configuration

1. **Purchase domain** (Namecheap, GoDaddy, etc.)
2. **Point to Vercel/Netlify** DNS
3. **Enable SSL/HTTPS** (automatic on both platforms)
4. **Setup Email** (custom email forwarding)

## 📱 SEO Optimization

### Meta Tags
- Title (customizable per page)
- Description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap & Robots
- Sitemap: `public/sitemap.xml` (auto-generated)
- Robots.txt: `public/robots.txt`

### Tools Used
- React Helmet Async for dynamic meta tags
- Semantic HTML structure
- Proper heading hierarchy

## ✨ Performance Optimization

- **Code Splitting**: Automatic via Vite
- **Images**: Use Cloudinary for optimization
- **Lazy Loading**: Components and images
- **Minification**: Automatic on production build
- **Caching**: Browser cache configured

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite will automatically try next port (5174, 5175, etc.)
# Or kill the process using port 5173:
lsof -i :5173 | grep -v PID | awk '{print $2}' | xargs kill -9
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading
- Ensure `.env.local` file exists
- Restart dev server after adding variables
- Use `VITE_` prefix for all client-side variables

## 📚 Useful Links

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Sanity Documentation](https://www.sanity.io/docs)
- [React Helmet Async](https://github.com/stevelacy/react-helmet-async)
- [Zod Documentation](https://zod.dev)

## 📄 License

© 2024 ICBE - International Center for Building Empowerment. All rights reserved.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Last Updated**: February 2026
**Version**: 1.0.0
