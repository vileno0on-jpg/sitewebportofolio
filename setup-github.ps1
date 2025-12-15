# Script to create GitHub repository and push code
# You'll need a GitHub Personal Access Token with 'repo' scope
# Get one at: https://github.com/settings/tokens

param(
    [string]$Token = "",
    [string]$RepoName = "sitewebportofolio"
)

$username = "vileno0on-jpg"
$apiUrl = "https://api.github.com/user/repos"

if ([string]::IsNullOrEmpty($Token)) {
    Write-Host "GitHub Personal Access Token required!" -ForegroundColor Red
    Write-Host "1. Go to: https://github.com/settings/tokens" -ForegroundColor Yellow
    Write-Host "2. Generate a new token with 'repo' scope" -ForegroundColor Yellow
    Write-Host "3. Run this script with: .\setup-github.ps1 -Token YOUR_TOKEN" -ForegroundColor Yellow
    exit 1
}

$body = @{
    name = $RepoName
    description = "Portfolio website with React, TypeScript, and Tailwind CSS"
    private = $false
} | ConvertTo-Json

$headers = @{
    Authorization = "token $Token"
    Accept = "application/vnd.github.v3+json"
}

Write-Host "Creating repository on GitHub..." -ForegroundColor Cyan
try {
    $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "Repository created successfully!" -ForegroundColor Green
    Write-Host "Repository URL: $($response.html_url)" -ForegroundColor Green
    
    Write-Host "`nPushing code to GitHub..." -ForegroundColor Cyan
    git push -u origin main
    Write-Host "Done! Your code is now on GitHub." -ForegroundColor Green
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
    if ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "Repository might already exist. Trying to push anyway..." -ForegroundColor Yellow
        git push -u origin main
    }
}
