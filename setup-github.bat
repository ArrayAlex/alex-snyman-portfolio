@echo off
echo Setting up GitHub repository for portfolio...

REM Create the GitHub repository
gh repo create alex-snyman-portfolio --public --description "Professional portfolio website showcasing my full-stack development skills and projects"

REM Push the code
git remote add origin https://github.com/ArrayAlex/alex-snyman-portfolio.git
git branch -M main
git push -u origin main

REM Enable GitHub Pages (you'll need to do this manually in the repo settings)
echo.
echo Repository created successfully!
echo.  
echo Next steps:
echo 1. Go to https://github.com/ArrayAlex/alex-snyman-portfolio
echo 2. Go to Settings ^> Pages
echo 3. Source: Deploy from a branch
echo 4. Branch: main 
echo 5. Folder: / (root)
echo 6. Save
echo.
echo Your site will be available at: https://arrayalex.github.io/alex-snyman-portfolio
echo.
pause