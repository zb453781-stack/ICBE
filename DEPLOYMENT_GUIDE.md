# 📋 ICBE Website - Complete Deployment Guide

## ✅ What's Been Built (React Prototype)

A fully functional React website with:
- ✅ 5 Complete Pages (Home, About, Services, Gallery, Contact)
- ✅ Responsive Navigation & Footer
- ✅ Framer Motion Animations
- ✅ Masonry Gallery with Filters
- ✅ Contact Form with Validation
- ✅ Mock CMS Data Structure
- ✅ Your Brand Colors (Deep Blue #0B3D91, Green #1B7F5B)
- ✅ Inter Font Typography
- ✅ Mobile Responsive Design

---

## 🚀 Step-by-Step Deployment Process

### **STEP 1: Create Next.js Application**

```bash
# Open your terminal and run:
npx create-next-app@latest icbe-website

# When prompted, select:
✓ TypeScript? Yes
✓ ESLint? Yes
✓ Tailwind CSS? Yes
✓ `src/` directory? Yes
✓ App Router? Yes
✓ Customize default import alias? No

cd icbe-website
```

---

### **STEP 2: Install Required Packages**

```bash
npm install motion react-responsive-masonry lucide-react
```

---

### **STEP 3: Setup Tailwind Configuration**

**File: `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D91",
        secondary: "#1B7F5B",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

---

### **STEP 4: Setup Fonts**

**File: `src/app/layout.tsx`**

```typescript
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ICBE - Building Empowerment',
  description: 'Empowering vulnerable communities through climate resilience, gender equality, and community-driven development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

---

### **STEP 5: Copy All Components & Data**

**Copy these files from the React prototype:**

1. **Data Structure**: 
   - `src/data/cmsData.ts` → `src/data/cmsData.ts`

2. **Components**:
   - `src/app/components/Navbar.tsx`
   - `src/app/components/Footer.tsx`

3. **Pages** (Convert to Next.js App Router):
   - `src/app/pages/HomePage.tsx` → `src/app/page.tsx`
   - `src/app/pages/AboutPage.tsx` → `src/app/about/page.tsx`
   - `src/app/pages/ServicesPage.tsx` → `src/app/services/page.tsx`
   - `src/app/pages/GalleryPage.tsx` → `src/app/gallery/page.tsx`
   - `src/app/pages/ContactPage.tsx` → `src/app/contact/page.tsx`

**IMPORTANT**: Replace `react-router` imports with Next.js `Link` and `usePathname`:

```typescript
// OLD (React Router):
import { Link, useLocation } from 'react-router';
const location = useLocation();

// NEW (Next.js):
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const pathname = usePathname();
```

---

### **STEP 6: Update Navbar for Next.js**

**File: `src/app/components/Navbar.tsx`**

Replace imports:
```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// ... rest of imports

export function Navbar() {
  const pathname = usePathname();
  // Replace location.pathname with pathname
}
```

---

### **STEP 7: Setup Sanity CMS**

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Create new Sanity project
sanity init

# When prompted:
✓ Project name: icbe-website
✓ Dataset: production
✓ Template: Clean project
```

**Create Sanity Schema Files:**

**File: `sanity/schemas/homepage.ts`**

```typescript
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    { name: 'heroTitle', type: 'string', title: 'Hero Title' },
    { name: 'heroSubtitle', type: 'text', title: 'Hero Subtitle' },
    { name: 'ctaText', type: 'string', title: 'CTA Text' },
    {
      name: 'impactStats',
      type: 'array',
      title: 'Impact Statistics',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'number', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'suffix', type: 'string', title: 'Suffix' },
          ],
        },
      ],
    },
  ],
};
```

**File: `sanity/schemas/service.ts`**

```typescript
export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'icon', type: 'string', title: 'Icon Name' },
    { name: 'impactFocus', type: 'text', title: 'Impact Focus' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
  ],
};
```

**File: `sanity/schemas/gallery.ts`**

```typescript
export default {
  name: 'galleryImage',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'imageUrl', type: 'url', title: 'Cloudinary Image URL' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'date', type: 'date', title: 'Date' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'caption', type: 'text', title: 'Caption' },
  ],
};
```

**File: `sanity/schemas/index.ts`**

```typescript
import homepage from './homepage';
import service from './service';
import gallery from './gallery';

export const schemaTypes = [homepage, service, gallery];
```

**Start Sanity Studio:**

```bash
cd sanity
npm install
sanity start
```

Access at: `http://localhost:3333`

---

### **STEP 8: Connect Next.js to Sanity**

```bash
npm install @sanity/client next-sanity
```

**File: `src/lib/sanity.ts`**

```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'YOUR_PROJECT_ID', // Get from sanity.io dashboard
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
});

export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(_createdAt asc)`);
}

export async function getGalleryImages() {
  return client.fetch(`*[_type == "galleryImage"] | order(date desc)`);
}
```

---

### **STEP 9: Setup Cloudinary**

1. **Sign up**: https://cloudinary.com (Free tier)
2. **Get credentials**: Dashboard → Settings
3. **Create upload preset**: Settings → Upload → Add upload preset

**File: `.env.local`**

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset
```

---

### **STEP 10: Setup Resend for Contact Form**

```bash
npm install resend
```

1. **Sign up**: https://resend.com (Free: 100 emails/day)
2. **Get API Key**: Dashboard → API Keys

**File: `.env.local`** (add):

```bash
RESEND_API_KEY=re_your_api_key
```

**File: `src/app/api/contact/route.ts`**

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    // Validation
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: 'ICBE Website <onboarding@resend.dev>',
      to: 'info@icbe.org.pk',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

**Update Contact Form to use API:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

---

### **STEP 11: SEO Optimization**

**File: `src/app/page.tsx` (add metadata)**

```typescript
export const metadata = {
  title: 'ICBE - Building Empowerment',
  description: 'Empowering vulnerable communities through climate resilience and development',
  openGraph: {
    title: 'ICBE - Building Empowerment',
    description: 'Empowering vulnerable communities',
    images: ['/og-image.jpg'],
  },
};
```

**Create Sitemap** - File: `src/app/sitemap.ts`

```typescript
export default function sitemap() {
  return [
    { url: 'https://icbe.org.pk', lastModified: new Date() },
    { url: 'https://icbe.org.pk/about', lastModified: new Date() },
    { url: 'https://icbe.org.pk/services', lastModified: new Date() },
    { url: 'https://icbe.org.pk/gallery', lastModified: new Date() },
    { url: 'https://icbe.org.pk/contact', lastModified: new Date() },
  ];
}
```

**Create Robots.txt** - File: `src/app/robots.ts`

```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://icbe.org.pk/sitemap.xml',
  };
}
```

---

### **STEP 12: Setup Google Analytics**

1. **Create GA4 Property**: https://analytics.google.com
2. **Get Measurement ID**: Admin → Data Streams

**File: `src/app/layout.tsx`** (add to `<head>`):

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR_ID');
  `}
</Script>
```

---

### **STEP 13: Deploy to Vercel**

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

**Deploy:**

1. Go to: https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
5. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

---

### **STEP 14: Connect Custom Domain (Namecheap)**

1. **Purchase domain**: https://namecheap.com (e.g., icbe.org.pk)

2. **In Vercel**:
   - Project Settings → Domains
   - Add your domain: `icbe.org.pk`
   - Vercel will provide DNS records

3. **In Namecheap**:
   - Domain List → Manage → Advanced DNS
   - Add records provided by Vercel:
     - A Record: `@` → Vercel IP
     - CNAME: `www` → `cname.vercel-dns.com`

4. **Wait 24-48 hours** for DNS propagation

---

### **STEP 15: Performance Optimization**

**File: `next.config.js`**

```javascript
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/webp'],
  },
  compress: true,
};
```

**Use Next.js Image Component:**

```typescript
import Image from 'next/image';

<Image
  src={imageUrl}
  alt={title}
  width={800}
  height={600}
  loading="lazy"
  className="rounded-lg"
/>
```

---

## 🎯 Final Checklist

✅ Next.js app created and running
✅ All components migrated
✅ Sanity CMS connected
✅ Cloudinary setup for images
✅ Resend configured for contact form
✅ Google Analytics integrated
✅ SEO metadata added
✅ Deployed to Vercel
✅ Custom domain connected
✅ SSL certificate active (automatic via Vercel)

---

## 📊 Free Tier Limits

- **Vercel**: 100GB bandwidth/month
- **Sanity**: 100k requests/month, 10GB assets
- **Cloudinary**: 25GB storage, 25GB bandwidth/month
- **Resend**: 100 emails/day
- **Google Analytics**: Unlimited (free)

---

## 🔒 Security Best Practices

1. Never commit `.env.local` to Git
2. Add to `.gitignore`:
   ```
   .env.local
   .env*.local
   ```
3. Use environment variables in Vercel for production
4. Enable CSRF protection on contact form
5. Add rate limiting to API routes

---

## 🚀 Future Enhancements

- Add blog functionality
- Integrate Stripe for donations
- Add multilingual support (English/Urdu)
- Create volunteer portal
- Add annual reports download section
- Implement impact dashboard

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Vercel Support**: https://vercel.com/support
- **Cloudinary Docs**: https://cloudinary.com/documentation
- **Resend Docs**: https://resend.com/docs

---

**Your ICBE website is now production-ready! 🎉**
