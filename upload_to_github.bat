@echo off
setlocal
echo ========================================================
echo        BioClean Website - GitHub Uploader
echo ========================================================
echo.
echo This script will help you upload your website to GitHub.
echo.
echo 1. Go to https://github.com/new
echo 2. Create a new repository (name it "bioclean-website" or similar).
echo 3. DO NOT check "Add a README file".
echo 4. Click "Create repository".
echo 5. Copy the HTTPS URL (it looks like https://github.com/YourUsername/bioclean-website.git).
echo.
set /p REPO_URL="Paste the Repository URL here and press Enter: "

if "%REPO_URL%"=="" (
    echo Error: No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo Configuring remote repository...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo Pushing code to GitHub...
git branch -M main
git push -u origin main

echo.
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] There was a problem pushing to GitHub.
    echo Please ensure you are logged in to GitHub Desktop or have git credentials set up.
    echo.
) else (
    echo ========================================================
    echo [SUCCESS] Your website is now on GitHub!
    echo ========================================================
    echo.
    echo Next Steps:
    echo 1. Go to https://vercel.com/new
    echo 2. Import your "bioclean-website" repository.
    echo 3. Click "Deploy".
    echo.
)

pause
