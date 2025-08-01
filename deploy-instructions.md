# Portfolio Deployment Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `alex-snyman-portfolio`
3. Make it PUBLIC
4. Don't initialize with README
5. Click "Create repository"

## Step 2: Push to GitHub
Run these commands in the portfolio directory:

```bash
git remote add origin https://github.com/ArrayAlex/alex-snyman-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings > Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Click Save

## Step 4: Configure for Vite Build
Add this to your package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Set homepage in package.json:
```json
"homepage": "https://arrayalex.github.io/alex-snyman-portfolio"
```

## Step 5: Deploy
```bash
npm run deploy
```

Your site will be available at: https://arrayalex.github.io/alex-snyman-portfolio

## Alternative: Use GitHub Actions for automatic deployment
Create `.github/workflows/deploy.yml` (already included in your project)