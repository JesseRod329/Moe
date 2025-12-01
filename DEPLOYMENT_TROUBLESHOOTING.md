# Deployment Troubleshooting

## Current Issue
The live site at `https://jesserod329.github.io/Moe/` is showing the README.md file instead of the Next.js application.

## Steps to Fix

### 1. Check GitHub Pages Settings
1. Go to: https://github.com/JesseRod329/Moe/settings/pages
2. Under **Source**, make sure it's set to **GitHub Actions** (NOT "Deploy from a branch")
3. If it's set to a branch, change it to **GitHub Actions**
4. Save the settings

### 2. Check GitHub Actions Workflow
1. Go to: https://github.com/JesseRod329/Moe/actions
2. Check if the "Deploy to GitHub Pages" workflow has run
3. If it failed, click on it to see the error
4. Common issues:
   - Missing GitHub Secrets (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - Build errors
   - Node version issues

### 3. Verify GitHub Secrets
1. Go to: https://github.com/JesseRod329/Moe/settings/secrets/actions
2. Make sure these secrets exist:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://htuwzbjhdvoetoodtxyk.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0dXd6YmpoZHZvZXRvb2R0eHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MjA0NTQsImV4cCI6MjA4MDE5NjQ1NH0.RzvM3x4Qi6nKKxxDKU5mkkDJeXEVrv6NnLwX168jcg8`

### 4. Manually Trigger Deployment
1. Go to: https://github.com/JesseRod329/Moe/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the `main` branch
5. Click "Run workflow"

### 5. Wait for Deployment
- GitHub Actions can take 2-5 minutes to build and deploy
- After deployment completes, wait 1-2 minutes for GitHub Pages to update
- Clear your browser cache or use incognito mode

### 6. Verify the Deployment
Once deployed, the site should show:
- The actual Moe Productions homepage (not the README)
- Navigation menu
- Booking form with calendar

## Expected URL
- GitHub Pages: `https://jesserod329.github.io/Moe/`
- Custom domain (if configured): `http://jesserodriguez.me/Moe/`

## If Still Not Working

If after following these steps the site still shows the README:

1. **Check the workflow logs** for any build errors
2. **Verify the `out` folder** was created in the build (check workflow logs)
3. **Try removing and re-adding the GitHub Secrets**
4. **Check if there's a custom domain** interfering (jesserodriguez.me might need different config)

## Quick Fix: Force Rebuild
Make a small change and push to trigger a new build:
```bash
cd "/Users/jesse/Downloads/Moe Production"
echo "# Deployment test" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

