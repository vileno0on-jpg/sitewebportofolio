@echo off
echo ========================================
echo   Portfolio Deployment - Quick Start
echo ========================================
echo.
echo Step 1: Creating GitHub repository...
echo Opening GitHub in your browser...
start https://github.com/new?name=sitewebportofolio
echo.
echo IMPORTANT: 
echo - Set repository name to: sitewebportofolio
echo - Make it PUBLIC
echo - DO NOT check README, .gitignore, or license
echo - Click "Create repository"
echo.
pause
echo.
echo Step 2: Pushing code to GitHub...
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Code pushed to GitHub!
    echo.
    echo Step 3: Deploying to Vercel...
    start https://vercel.com/new
    echo.
    echo In Vercel:
    echo 1. Click "Import" your sitewebportofolio repository
    echo 2. Vercel will auto-detect Vite
    echo 3. Click "Deploy"
    echo.
    echo Your site will be live in minutes!
) else (
    echo.
    echo [ERROR] Failed to push. Make sure you created the repository.
    echo Run this script again after creating the repository.
)
pause