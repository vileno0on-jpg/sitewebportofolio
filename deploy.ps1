# Complete deployment script for GitHub and Vercel
Write-Host "=== Portfolio Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if repository exists
Write-Host "Checking if GitHub repository exists..." -ForegroundColor Yellow
$repoCheck = git ls-remote https://github.com/vileno0on-jpg/sitewebportofolio.git 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "Repository doesn't exist yet." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please create the repository first:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/new?name=sitewebportofolio" -ForegroundColor White
    Write-Host "2. Make sure it's set to PUBLIC" -ForegroundColor White
    Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
    Write-Host "4. Click 'Create repository'" -ForegroundColor White
    Write-Host ""
    
    $createRepo = Read-Host "Have you created the repository? (y/n)"
    if ($createRepo -ne "y" -and $createRepo -ne "Y") {
        Write-Host "Please create the repository and run this script again." -ForegroundColor Red
        exit 1
    }
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing code to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "[SUCCESS] Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository URL: https://github.com/vileno0on-jpg/sitewebportofolio" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "=== Next: Deploy to Vercel ===" -ForegroundColor Cyan
    Write-Host "1. Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "2. Import your repository: sitewebportofolio" -ForegroundColor White
    Write-Host "3. Vercel will auto-detect Vite settings" -ForegroundColor White
    Write-Host "4. Click 'Deploy'" -ForegroundColor White
    Write-Host ""
    
    $openVercel = Read-Host "Open Vercel dashboard? (y/n)"
    if ($openVercel -eq "y" -or $openVercel -eq "Y") {
        Start-Process "https://vercel.com/new"
    }
} else {
    Write-Host "[ERROR] Failed to push to GitHub. Please check your repository exists and try again." -ForegroundColor Red
    exit 1
}
