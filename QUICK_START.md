# ⚡ Quick Start Guide - ICBE Website

## 🎯 What You Have Right Now

A **fully functional React prototype** of the ICBE website with:
- ✅ All 5 pages working
- ✅ Responsive design
- ✅ Animations
- ✅ Contact form with validation
- ✅ Gallery with filters
- ✅ Your brand colors and fonts

---

## 🚀 Immediate Next Steps (In Order)

### Step 1: Review the Prototype ✅
**What to do:** Test everything in this environment
- Click through all pages
- Test mobile responsiveness (resize browser)
- Fill out the contact form
- Try the gallery filters
- Check animations

**Time needed:** 15-30 minutes

---

### Step 2: Prepare Your Content 📝
**What to do:** Gather real content to replace mock data

#### Homepage Content:
- [ ] Hero title (current: "Building Resilient Communities...")
- [ ] Hero subtitle
- [ ] Actual impact statistics
- [ ] 6 real photos for gallery preview

#### About Page Content:
- [ ] Full organization description
- [ ] Actual vision statement
- [ ] Actual mission statement
- [ ] List of objectives
- [ ] Core values descriptions
- [ ] Timeline events with years

#### Services Content:
- [ ] For each service:
  - Service name
  - Detailed description
  - Impact focus statement
  - 4 key points
  - Representative image

#### Gallery:
- [ ] Minimum 15-20 high-quality photos
- [ ] Category for each (Climate, GBV, Youth, Mental Health, Mobile)
- [ ] Location and date for each
- [ ] Caption/description

#### Contact Info:
- [ ] Office address
- [ ] Email address
- [ ] Phone number
- [ ] Office hours
- [ ] Google Maps location link

**Time needed:** 2-4 hours

---

### Step 3: Download Your Code 💾
**What to do:** Save this prototype

1. Click on files in the left sidebar
2. Copy each file's contents
3. Save locally on your computer in the same folder structure

**Files to save:**
```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── GalleryPage.tsx
│   │   │   └── ContactPage.tsx
│   │   └── App.tsx
│   ├── data/
│   │   └── cmsData.ts
│   └── styles/
│       ├── theme.css
│       └── fonts.css
├── DEPLOYMENT_GUIDE.md
├── README.md
└── QUICK_START.md
```

**Time needed:** 15 minutes

---

### Step 4: Setup Local Development Environment 💻

**Prerequisites:**
- Node.js 18+ ([Download here](https://nodejs.org))
- Code editor ([VS Code recommended](https://code.visualstudio.com))
- Git ([Download here](https://git-scm.com))

**Commands to run:**

```bash
# 1. Create Next.js project
npx create-next-app@latest icbe-website

# Answer prompts:
# TypeScript? Yes
# ESLint? Yes
# Tailwind CSS? Yes
# src/ directory? Yes
# App Router? Yes

# 2. Navigate to project
cd icbe-website

# 3. Install packages
npm install motion react-responsive-masonry lucide-react

# 4. Copy all your saved files into the project

# 5. Start development server
npm run dev

# 6. Open browser to http://localhost:3000
```

**Time needed:** 30 minutes

---

### Step 5: Update Content 📝
**What to do:** Replace mock data with real content

**File to edit:** `src/data/cmsData.ts`

Replace all the sample text with your real content prepared in Step 2.

**Example:**
```typescript
export const homepageData = {
  hero: {
    title: "YOUR REAL HERO TITLE HERE",
    subtitle: "YOUR REAL SUBTITLE HERE",
    // ... etc
  }
};
```

**Time needed:** 1-2 hours

---

### Step 6: Add Real Images 🖼️

**Option A: Quick (Use Unsplash URLs)**
- Keep using Unsplash links temporarily
- Replace later when you setup Cloudinary

**Option B: Setup Cloudinary (Recommended)**

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload your photos
3. Copy image URLs
4. Update `cmsData.ts` with real URLs

**Time needed:** 1-2 hours

---

### Step 7: Test Locally ✅
**What to do:** Make sure everything works

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms work
- [ ] Mobile responsive
- [ ] No console errors

**Time needed:** 30 minutes

---

### Step 8: Setup Services 🛠️

#### A. Sanity CMS (Content Management)
```bash
npm install -g @sanity/cli
sanity init
```
Follow prompts, then setup schemas (see DEPLOYMENT_GUIDE.md)

**Time needed:** 1 hour

#### B. Cloudinary (Image Management)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name
3. Create upload preset
4. Add to `.env.local`

**Time needed:** 30 minutes

#### C. Resend (Email for Contact Form)
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Setup API route (see DEPLOYMENT_GUIDE.md)

**Time needed:** 30 minutes

---

### Step 9: Deploy to Vercel 🚀

**Prerequisites:**
- GitHub account
- Vercel account (free)

**Steps:**

```bash
# 1. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repository
# Go to github.com → New repository

# 3. Push to GitHub
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 4. Deploy on Vercel
# Go to vercel.com → New Project → Import from GitHub
```

**Time needed:** 30 minutes

---

### Step 10: Connect Domain 🌐

1. **Buy domain** from [Namecheap](https://namecheap.com)
   - Recommended: `icbe.org.pk`
   
2. **In Vercel:**
   - Go to project → Settings → Domains
   - Add your domain
   - Copy DNS records

3. **In Namecheap:**
   - Domain List → Manage → Advanced DNS
   - Add records from Vercel

4. **Wait 24-48 hours** for DNS propagation

**Time needed:** 30 minutes (+ waiting time)

---

## 📊 Timeline Summary

| Task | Time Needed | Can Skip Initially? |
|------|-------------|---------------------|
| Review prototype | 30 min | No |
| Prepare content | 2-4 hours | No |
| Download code | 15 min | No |
| Setup local env | 30 min | No |
| Update content | 1-2 hours | No |
| Add real images | 1-2 hours | Yes (use placeholders) |
| Test locally | 30 min | No |
| Setup services | 2 hours | Yes (do after launch) |
| Deploy to Vercel | 30 min | No |
| Connect domain | 30 min | Yes (use .vercel.app first) |

**Minimum viable launch:** 6-8 hours
**Full production ready:** 10-15 hours

---

## 🎯 Recommended Order for Non-Technical Users

### Phase 1: Get It Online (Week 1)
1. ✅ Review prototype
2. 📝 Prepare content
3. 💻 Hire developer for setup (or use Vercel templates)
4. 🚀 Deploy with mock images
5. 🌐 Use temporary .vercel.app domain

### Phase 2: Professional Setup (Week 2-3)
6. 🛠️ Setup Sanity CMS
7. 🖼️ Add real images via Cloudinary
8. 📧 Connect contact form to email
9. 🌐 Connect custom domain
10. 📊 Add Google Analytics

### Phase 3: Polish (Week 4)
11. ✨ Final content review
12. 🔍 SEO optimization
13. 📱 Mobile testing
14. 🚀 Official launch

---

## 💡 Tips for Success

### Content Tips:
- ✅ Use high-quality, professional photos
- ✅ Keep text concise and impactful
- ✅ Focus on outcomes, not just activities
- ✅ Include real numbers and statistics
- ✅ Add testimonials if available

### Technical Tips:
- ✅ Test on multiple devices
- ✅ Use WebP format for images
- ✅ Keep images under 500KB each
- ✅ Enable SSL (automatic on Vercel)
- ✅ Setup regular backups

### SEO Tips:
- ✅ Use descriptive page titles
- ✅ Add meta descriptions
- ✅ Include alt text for images
- ✅ Create XML sitemap
- ✅ Submit to Google Search Console

---

## 🆘 Common Issues & Solutions

### Issue: "npm command not found"
**Solution:** Install Node.js from nodejs.org

### Issue: "Port 3000 already in use"
**Solution:** Run `npx kill-port 3000` or use different port

### Issue: Images not loading
**Solution:** Check image URLs, ensure they're accessible

### Issue: Contact form not sending emails
**Solution:** Verify Resend API key in environment variables

### Issue: Site not updating after changes
**Solution:** Clear browser cache or hard refresh (Ctrl+Shift+R)

---

## 📞 Need Help?

### Free Resources:
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- YouTube tutorials: Search "Next.js deployment"

### Recommended Services:
- Fiverr: Hire developer for setup ($50-200)
- Upwork: Find Next.js expert
- Vercel Support: Free tier includes support

---

## ✅ Launch Checklist

Before going live, verify:

- [ ] All content is final and proofread
- [ ] Images are optimized and loading fast
- [ ] Contact form sends emails successfully
- [ ] All links work correctly
- [ ] Mobile version looks good
- [ ] Social media links are correct
- [ ] Google Analytics is tracking
- [ ] Domain is connected (if ready)
- [ ] SSL certificate is active
- [ ] Tested in Chrome, Safari, Firefox
- [ ] Privacy policy page added (if collecting data)
- [ ] Terms of service added (if needed)

---

## 🎉 You're Ready!

The hard part (design and development) is done. Now it's just:
1. Content updates
2. Image uploads
3. Deploy clicks
4. Domain connection

**Your professional NGO website will be live in days, not months!**

---

**Questions? The DEPLOYMENT_GUIDE.md has step-by-step details for every technical task.**
