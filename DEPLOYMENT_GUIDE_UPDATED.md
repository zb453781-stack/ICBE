# Deployment Guide - Vercel & Netlify

This guide provides step-by-step instructions for deploying the ICBE website to production using Vercel or Netlify.

## 🚀 Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Vite applications and provides excellent performance.

### Prerequisites
- GitHub account with repository
- Vercel account (free at vercel.com)
- Project pushed to GitHub

### Step 1: Prepare Repository

```bash
# Initialize Git (if not already done)
cd "Build ICBE Informational Website"
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ICBE website"

# Rename branch to main (if needed)
git branch -M main

# Add GitHub remote
git remote add origin https://github.com/yourusername/icbe-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Step 3: Configure Environment Variables

1. In Vercel dashboard, go to Project Settings
2. Click "Environment Variables"
3. Add each variable from your `.env.local`:

```
VITE_SANITY_PROJECT_ID
VITE_SANITY_DATASET
VITE_SANITY_API_VERSION
VITE_CLOUDINARY_CLOUD_NAME
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_GA_ID
VITE_API_BASE_URL
VITE_CONTACT_EMAIL
```

4. Save and redeploy

### Step 4: Custom Domain

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `icbe.org`)
4. Follow DNS configuration steps
5. Vercel provides automatic SSL certificate

### Vercel Build Settings

If needed, customize in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_BASE_URL": "https://icbe.org"
  }
}
```

### Monitoring

- View deployment logs: Project → Deployments
- Monitor performance: Project → Analytics
- Check function usage: Project → Usage

---

## 🚀 Option 2: Deploy to Netlify

Netlify offers excellent git integration and serverless functions.

### Prerequisites
- GitHub account with repository
- Netlify account (free at netlify.com)
- Project pushed to GitHub

### Step 1: Connect Repository to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your repository
5. Authorize Netlify with GitHub

### Step 2: Configure Build Settings

Netlify should auto-detect Vite settings, but verify:

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: 18.x or higher

### Step 3: Add Environment Variables

1. Go to Site Settings → Build & Deploy → Environment
2. Click "Edit variables"
3. Add all VITE_ variables from your `.env.local`

Example:
```
VITE_SANITY_PROJECT_ID = your_project_id
VITE_SANITY_DATASET = production
...
```

4. Redeploy to apply changes

### Step 4: Connect Custom Domain

1. Go to Site Settings → Domain management
2. Click "Add custom domain"
3. Enter domain name
4. Follow DNS configuration
5. Netlify provides automatic HTTPS

### Step 5: Configure Netlify.toml

Create `netlify.toml` in root directory:

```toml
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "18.17.1"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "SAMEORIGIN"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
```

### Netlify Functions (Optional)

For backend functionality, create `netlify/functions/`:

Example contact form function (`netlify/functions/contact.js`):

```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Send email logic here
  // ...

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
```

---

## 📊 Post-Deployment Checklist

### Testing
- [ ] Test website on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Test responsive design at different breakpoints
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test image loading and optimization
- [ ] Test animations and interactions

### SEO Verification
- [ ] Verify sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor search console for crawl errors
- [ ] Check Open Graph tags with debugger:
  - Facebook: [facebook.com/sharer/debugger](https://developers.facebook.com/tools/debug/)
  - Twitter: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Monitor performance metrics:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)

### Security
- [ ] SSL/HTTPS certificate active
- [ ] Security headers configured
- [ ] Form submissions properly validated
- [ ] Email configuration secure
- [ ] No sensitive data in client code

### Analytics
- [ ] Google Analytics tracking verified
- [ ] Events properly tracked
- [ ] Verify data collection in GA dashboard

### Content
- [ ] All pages load correctly
- [ ] All images display properly
- [ ] All copy is accurate
- [ ] No placeholder content
- [ ] Links are functional

---

## 🔄 Continuous Deployment

### Automatic Deployments
Both Vercel and Netlify support automatic deployments on:
- Push to main branch
- Pull request previews
- Manual trigger from dashboard

### Preview Deployments
- **Vercel**: Automatically creates preview URLs for PRs
- **Netlify**: Same - preview deployments for each PR

### Rollback
If issues occur after deployment:

**Vercel:**
1. Go to Deployments
2. Click the previous successful build
3. Click "Redeploy"

**Netlify:**
1. Go to Deploys
2. Click the previous successful build
3. Click "Restore"

---

## 🆘 Troubleshooting

### Build Failures

**Issue: "Cannot find module" errors**
```bash
# Clear cache and rebuild
npm ci
npm run build
```

**Issue: Environment variables not loading**
- Verify all VITE_ prefixed variables are added
- Check for typos in variable names
- Redeploy after adding variables

### Performance Issues

**Issue: Slow page loads**
- Check bundle size: `npm run build` and review dist folder
- Verify image optimization via Cloudinary
- Check for missing lazy loading

**Issue: High Lighthouse scores but slow in practice**
- Check for large third-party scripts
- Verify CDN configuration
- Monitor network requests

### Form Submission Issues

**Issue: Contact form not sending emails**
- Verify EmailJS credentials in environment variables
- Check EmailJS service configuration
- Test with email directly in browser console

### CMS Connection Issues

**Issue: Sanity data not loading**
- Verify VITE_SANITY_PROJECT_ID is correct
- Check CORS configuration in Sanity
- Verify API token permissions (if using token)

---

## 📞 Support & Monitoring

### Monitoring Tools
- **Vercel Analytics**: Built-in performance metrics
- **Netlify Analytics**: Built-in traffic analytics
- **Google Search Console**: SEO monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking (optional setup)

### Logging
Set up error tracking:

```typescript
// src/lib/errorTracking.ts
export const setupErrorTracking = () => {
  if (import.meta.env.PROD) {
    // Configure Sentry or similar
    window.addEventListener('error', (event) => {
      console.error('Unhandled error:', event.error);
      // Send to monitoring service
    });
  }
};
```

---

## 🔐 Security Headers

Add to Vercel `vercel.json` or Netlify `netlify.toml`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📝 Deployment Checklist

- [ ] All environment variables configured
- [ ] Domain name connected
- [ ] SSL certificate active
- [ ] Initial deployment successful
- [ ] All pages load correctly
- [ ] Contact form functional
- [ ] Analytics tracking verified
- [ ] SEO configured
- [ ] Performance optimized
- [ ] Mobile responsive
- [ ] Browser compatibility tested
- [ ] Team members notified
- [ ] Backup plan documented

---

**Deployment Date**: ___________
**Deployed By**: ___________
**Vercel/Netlify URL**: ___________
**Custom Domain**: ___________

---

For further assistance, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
