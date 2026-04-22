# Vercel Monitoring Setup Guide

## Overview

This guide explains how to set up monitoring and analytics for the Consumer Complaint Portal on Vercel.

## 1. Vercel Analytics

Vercel Analytics provides insights into your application's performance and user behavior.

### Setup Steps:

1. **Enable Vercel Analytics**:
   - Go to your project in Vercel Dashboard
   - Navigate to "Analytics" tab
   - Click "Enable Analytics"
   - Choose plan (Free tier available)

2. **Install Analytics Package** (Optional - for custom events):
   ```bash
   npm install @vercel/analytics
   ```

3. **Add Analytics to Your App**:
   
   Update `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### What You Get:
- Page views and unique visitors
- Top pages and referrers
- Device and browser breakdown
- Geographic distribution
- Real-time visitor count

## 2. Vercel Speed Insights

Speed Insights provides real user monitoring (RUM) for Core Web Vitals.

### Setup Steps:

1. **Enable Speed Insights**:
   - Go to your project in Vercel Dashboard
   - Navigate to "Speed Insights" tab
   - Click "Enable Speed Insights"

2. **Install Speed Insights Package**:
   ```bash
   npm install @vercel/speed-insights
   ```

3. **Add Speed Insights to Your App**:
   
   Update `app/layout.tsx`:
   ```typescript
   import { SpeedInsights } from '@vercel/speed-insights/next';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

### Metrics Tracked:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

## 3. Error Monitoring

### Built-in Error Tracking:

Vercel automatically captures:
- Build errors
- Runtime errors
- Function timeouts
- Memory limit exceeded

### Access Error Logs:

1. Go to Vercel Dashboard
2. Select your project
3. Navigate to "Deployments"
4. Click on a deployment
5. View "Functions" tab for serverless function logs
6. View "Build Logs" for build-time errors

### Custom Error Logging:

Our application already includes structured logging in `lib/utils/logger.ts`.

To view logs in Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# View logs in real-time
vercel logs --follow

# View logs for specific deployment
vercel logs [deployment-url]
```

## 4. Performance Monitoring

### Lighthouse CI Integration:

Add Lighthouse CI to your GitHub Actions workflow:

Create `.github/workflows/lighthouse.yml`:
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://your-domain.vercel.app
            https://your-domain.vercel.app/guides
            https://your-domain.vercel.app/templates
          uploadArtifacts: true
```

### Web Vitals Monitoring:

Our app already includes Web Vitals reporting through Next.js.

To view Web Vitals:
1. Enable Speed Insights (see above)
2. Visit Speed Insights dashboard
3. View real user metrics

## 5. Alerts Configuration

### Set Up Deployment Alerts:

1. Go to Project Settings in Vercel
2. Navigate to "Notifications"
3. Configure alerts for:
   - Deployment failures
   - Build errors
   - Function errors
   - Performance degradation

### Alert Channels:
- Email notifications
- Slack integration
- Discord webhooks
- Custom webhooks

### Recommended Alerts:

1. **Deployment Failures**:
   - Trigger: Any deployment fails
   - Action: Email to team

2. **High Error Rate**:
   - Trigger: Error rate > 5%
   - Action: Slack notification

3. **Performance Degradation**:
   - Trigger: LCP > 2.5s for 10% of users
   - Action: Email alert

4. **Function Timeouts**:
   - Trigger: Any function timeout
   - Action: Slack notification

## 6. Database Monitoring

### MongoDB Atlas Integration:

MongoDB Atlas provides its own monitoring. See `MONGODB_ATLAS_SETUP.md` for details.

### Key Metrics to Monitor:
- Connection count
- Query performance
- Index usage
- Slow queries (> 1000ms)

## 7. Custom Monitoring Dashboard

### Recommended Tools:

1. **Vercel Dashboard** (Built-in):
   - Analytics
   - Speed Insights
   - Deployment logs
   - Function logs

2. **MongoDB Atlas Dashboard**:
   - Database metrics
   - Query performance
   - Resource usage

3. **Google Search Console** (SEO):
   - Search performance
   - Index coverage
   - Core Web Vitals

4. **Uptime Monitoring** (Optional):
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

## 8. Monitoring Checklist

Before going to production:

- [ ] Enable Vercel Analytics
- [ ] Enable Speed Insights
- [ ] Install @vercel/analytics package
- [ ] Install @vercel/speed-insights package
- [ ] Add Analytics and Speed Insights to layout
- [ ] Configure deployment alerts
- [ ] Set up error rate alerts
- [ ] Configure performance alerts
- [ ] Test error logging
- [ ] Verify logs are accessible
- [ ] Set up uptime monitoring
- [ ] Configure MongoDB Atlas alerts
- [ ] Test alert notifications

## 9. Monitoring Best Practices

### Log Levels:
- **ERROR**: Critical issues requiring immediate attention
- **WARN**: Potential issues that should be investigated
- **INFO**: General application events
- **DEBUG**: Detailed information for debugging (dev only)

### What to Monitor:
1. **Performance**:
   - Page load times
   - API response times
   - Database query times

2. **Errors**:
   - Application errors
   - API errors
   - Database errors

3. **Usage**:
   - Page views
   - User sessions
   - Popular content

4. **Resources**:
   - Function execution time
   - Memory usage
   - Database connections

### Alert Thresholds:
- Error rate > 5%
- LCP > 2.5s
- FID > 100ms
- CLS > 0.1
- Function timeout
- Database connection issues

## 10. Accessing Monitoring Data

### Vercel Dashboard:
```
https://vercel.com/[your-team]/[project-name]
```

### Vercel CLI:
```bash
# View real-time logs
vercel logs --follow

# View specific function logs
vercel logs --function=api/guides

# View logs for specific deployment
vercel logs [deployment-url]
```

### MongoDB Atlas:
```
https://cloud.mongodb.com
```

## 11. Incident Response

### When an Alert Fires:

1. **Acknowledge**: Confirm you've received the alert
2. **Assess**: Check monitoring dashboards for scope
3. **Investigate**: Review logs and error messages
4. **Fix**: Deploy fix or rollback if needed
5. **Verify**: Confirm issue is resolved
6. **Document**: Record incident and resolution

### Rollback Procedure:

If a deployment causes issues:
```bash
# Via Vercel Dashboard
1. Go to Deployments
2. Find last working deployment
3. Click "..." menu
4. Select "Promote to Production"

# Via Vercel CLI
vercel rollback
```

## 12. Cost Considerations

### Vercel Analytics:
- Free tier: 100k events/month
- Pro tier: $10/month for 1M events

### Speed Insights:
- Included with Analytics

### Monitoring Recommendations:
- Start with free tier
- Upgrade as traffic grows
- Monitor costs monthly

## 13. Resources

- **Vercel Analytics Docs**: https://vercel.com/docs/analytics
- **Speed Insights Docs**: https://vercel.com/docs/speed-insights
- **Vercel Logs**: https://vercel.com/docs/observability/runtime-logs
- **Web Vitals**: https://web.dev/vitals/
- **MongoDB Atlas Monitoring**: https://docs.atlas.mongodb.com/monitoring-alerts/

## Current Status

✅ **Completed**:
- Structured logging implemented (`lib/utils/logger.ts`)
- Error boundaries configured (`app/error.tsx`, `app/global-error.tsx`)
- 404 page created (`app/not-found.tsx`)

⏳ **To Do**:
- Install @vercel/analytics package
- Install @vercel/speed-insights package
- Add Analytics and Speed Insights to layout
- Enable monitoring in Vercel Dashboard
- Configure alerts
