# Deployment Guide

## GitHub Setup

1. Create a new repository on GitHub:
   - Go to: https://github.com/new
   - Repository name: `sitewebportofolio`
   - Set to **Public**
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. Push your code:
   ```bash
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `sitewebportofolio` repository
4. Vercel will auto-detect Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and select your project settings

### Environment Variables

If you need any environment variables, add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## Post-Deployment

Your site will be live at: `https://your-project-name.vercel.app`

Vercel automatically deploys on every push to the main branch!

