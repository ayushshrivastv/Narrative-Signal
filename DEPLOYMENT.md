# Deployment Guide - Superteam Signals

This guide will walk you through deploying the Superteam Signals dashboard to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your machine

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy with Vercel" button
2. Connect your GitHub account
3. Import this repository
4. Configure environment variables (see below)
5. Click "Deploy"

### Option 2: Manual Deployment

#### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
cd narrative-signal
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Superteam Signals dashboard"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/superteam-signals.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### Step 3: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

```
NEXT_PUBLIC_API_BASE_URL=https://api.superteam.fun
NEXT_PUBLIC_SUPERTEAM_API_KEY=<your-agent-api-key>
```

#### Step 4: Deploy

Click "Deploy" and wait for the build to complete (usually 1-2 minutes).

## 🔧 Configuration

### Build Settings

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_BASE_URL` | Superteam API base URL | No (has default) |
| `NEXT_PUBLIC_SUPERTEAM_API_KEY` | Your API key | Yes (for real data) |

## 🌐 Custom Domain (Optional)

### Add Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `signals.superteam.fun`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate to be issued

### DNS Configuration Example

For a subdomain:
```
Type: CNAME
Name: signals
Value: cname.vercel-dns.com
```

For root domain:
```
Type: A
Name: @
Value: 76.76.21.21
```

## 📊 Performance Optimization

### Recommended Vercel Settings

1. **Enable Analytics**
   - Go to Analytics tab
   - Enable Web Analytics
   - Track Core Web Vitals

2. **Enable Speed Insights**
   - Automatically enabled for Next.js
   - View real user metrics

3. **Configure Caching**
   ```typescript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=3600, must-revalidate',
             },
           ],
         },
       ];
     },
   };
   ```

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: Commits to `main` branch
- **Preview**: Pull requests and other branches

### Branch Protection

1. Go to GitHub repository settings
2. Navigate to "Branches"
3. Add branch protection rule for `main`
4. Require pull request reviews
5. Require status checks to pass

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build fails with module not found
```bash
# Solution: Clear cache and rebuild
vercel --force
```

**Issue**: Environment variables not working
```bash
# Solution: Ensure variables start with NEXT_PUBLIC_
# Redeploy after adding variables
```

### Performance Issues

**Issue**: Slow page load
```bash
# Solution: Enable Edge Runtime
# Add to page.tsx:
export const runtime = 'edge';
```

**Issue**: Large bundle size
```bash
# Solution: Analyze bundle
npm run build
npx @next/bundle-analyzer
```

## 📈 Monitoring

### Vercel Analytics

1. Enable in project settings
2. View metrics:
   - Page views
   - Unique visitors
   - Top pages
   - Devices and browsers

### Error Tracking

Consider integrating:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **PostHog**: Product analytics

## 🔒 Security

### Environment Variables

- Never commit `.env.local` to Git
- Use Vercel's encrypted environment variables
- Rotate API keys regularly

### Headers

Add security headers in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## 🎯 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test all tabs (Overview, Distribution, Narratives, Activity)
- [ ] Check mobile responsiveness
- [ ] Verify API integration (if enabled)
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)
- [ ] Enable analytics
- [ ] Configure error tracking
- [ ] Set up monitoring alerts
- [ ] Share deployment URL with Superteam

## 📱 Preview Deployments

Every pull request gets a unique preview URL:
```
https://superteam-signals-git-feature-branch-username.vercel.app
```

Use preview deployments to:
- Test new features
- Review changes before merging
- Share work-in-progress with team

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Environment Variables](https://vercel.com/docs/environment-variables)

## 💡 Tips

1. **Use Preview Deployments**: Test changes before production
2. **Enable Analytics**: Track user behavior
3. **Set Up Alerts**: Get notified of deployment failures
4. **Use Edge Functions**: For better performance
5. **Optimize Images**: Use Next.js Image component
6. **Monitor Performance**: Regularly check Core Web Vitals

## 🎉 Success!

Your Superteam Signals dashboard is now live! 

Share your deployment:
- Production URL: `https://your-project.vercel.app`
- Custom Domain: `https://your-domain.com`

---

**Need Help?**
- [Vercel Support](https://vercel.com/support)
- [Next.js Discord](https://discord.gg/nextjs)
- [Superteam Discord](https://superteam.fun/discord)
