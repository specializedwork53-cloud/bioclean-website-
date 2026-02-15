@echo off
echo ========================================================
echo       BioClean / Vibe Coding - Upload to GitHub
echo ========================================================
echo.
echo Please create a new repository on GitHub.com (if you haven't already).
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/YourName/repo.git): "

if "%REPO_URL%"=="" goto error

echo.
echo Adding remote origin...
"C:\Program Files\Git\cmd\git.exe" remote remove origin 2>nul
"C:\Program Files\Git\cmd\git.exe" remote add origin %REPO_URL%

echo.
echo Renaming branch to main...
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo.
echo Pushing to GitHub...
"C:\Program Files\Git\cmd\git.exe" push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Push failed. 
    echo Please make sure:
    echo 1. You have internet connection.
    echo 2. The URL is correct.
    echo 3. You are logged in (a popup might appear).
    pause
    exit /b
)

echo.
echo [SUCCESS] Code uploaded successfully!
echo.
echo Now go to Vercel.com and import this project.
pause
exit /m

:error
echo.
echo [ERROR] URL cannot be empty.
pause
