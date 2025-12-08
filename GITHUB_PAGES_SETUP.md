# GitHub Pages Deployment Setup

## Overview
This project has been configured to work with GitHub Pages by:
1. Using Supabase client-side (no API routes needed)
2. Configuring Next.js for static export
3. Setting up GitHub Actions workflow

## Setup Steps

### 1. Configure GitHub Pages
1. Go to your repository: https://github.com/JesseRod329/Moe
2. Click **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Add Secrets (Required)
1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add these two secrets:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

   You can find these in your Supabase dashboard under Settings > API

### 3. Deploy
1. Push your code to the `main` branch
2. The GitHub Actions workflow will automatically:
   - Build the static site
   - Deploy to GitHub Pages
3. Your site will be available at: `https://jesserod329.github.io/Moe/`

## Manual Build (for testing)

To test the static export locally:

```bash
cd web
npm run build
```

The static files will be in `web/out/` directory.

## Important Notes

- **No API Routes**: All database operations now happen client-side using Supabase
- **Environment Variables**: Must be set as GitHub Secrets for the build
- **Base Path**: If your repo name is not the root, you may need to set `basePath` in `next.config.ts`
- **RLS Policies**: Make sure your Supabase RLS policies allow public inserts (already configured)

## Troubleshooting

### Build fails
- Check that GitHub Secrets are set correctly
- Verify Supabase credentials are valid
- Check the Actions tab for detailed error messages

### Site not loading
- Wait a few minutes for GitHub Pages to propagate
- Check the Pages settings in repository settings
- Verify the workflow completed successfully

### Database errors
- Ensure RLS policies allow public inserts
- Check Supabase dashboard for any errors
- Verify environment variables are correct

