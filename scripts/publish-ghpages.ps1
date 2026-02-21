param(
  [string]$Message = ""
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Update website " + (Get-Date -Format "yyyy-MM-dd HH:mm")
}

$currentBranch = (git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
  throw "Could not determine the current git branch."
}

Write-Host "Using branch: $currentBranch"
Write-Host "Commit message: $Message"

git add -A

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m $Message
} else {
  Write-Host "No changes staged. Skipping commit."
}

git push origin $currentBranch
npm run deploy

Write-Host "Publish complete."
