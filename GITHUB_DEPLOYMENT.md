# GitHub Deployment Guide

## Prerequisites
- Git installed on your machine
- A GitHub account
- GitHub repository created (see step 1 below)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ICBE` (or your preferred name)
3. Description: "ICBE Informational Website - Built with React, Vite & TypeScript"
4. Choose **Public** (for GitHub Pages)
5. Click "Create repository"
6. Copy the HTTPS URL (e.g., `https://github.com/YOUR_USERNAME/ICBE.git`)

## Step 2: Update Homepage URL in package.json

Replace `your-username` with your actual GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/ICBE"
```

If your repository name is different, replace `ICBE` accordingly.

## Step 3: Initialize Git & Push to GitHub

Run these commands in PowerShell:

```powershell
cd "d:\VS CODE\Code\Build ICBE Informational Website"

# Initialize Git
git init

# Configure Git (use your GitHub credentials)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ICBE informational website with React + Vite"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/ICBE.git

# Create main branch and push
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes for GitHub to build and deploy

## Step 5: Deploy to GitHub Pages

Run this command whenever you want to update the live site:

```powershell
cd "d:\VS CODE\Code\Build ICBE Informational Website"
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages automatically serves it at `https://YOUR_USERNAME.github.io/ICBE`

## Step 6: Update Code & Redeploy

After making changes:

```powershell
# Commit your changes to main branch
git add .
git commit -m "Your commit message describing the changes"
git push

# Deploy to GitHub Pages
npm run deploy
```

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `git push` | Push code to GitHub |

## Environment Variables

Create a `.env.local` file for local development (not committed to Git):

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_ID=your_ga_id
```

## Troubleshooting

### Site shows 404 error
- Ensure the `base` path in `vite.config.ts` matches your repository name: `base: "/ICBE"`
- Wait a few minutes for GitHub Pages to rebuild

### Changes not appearing on the live site
- Run `npm run deploy` to redeploy
- Clear browser cache (Ctrl+Shift+Delete)
- Check the GitHub Actions to see if deployment succeeded

### "gh-pages" command not found
- Run `npm install --save-dev gh-pages`

## Live Site
Your website will be available at:
```
https://YOUR_USERNAME.github.io/ICBE
```

## Support
For more information on GitHub Pages, visit: https://docs.github.com/en/pages
