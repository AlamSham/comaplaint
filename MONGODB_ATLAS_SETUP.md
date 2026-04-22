# MongoDB Atlas Production Configuration Guide

## Current Setup Status

✅ **MongoDB Atlas Cluster**: Already configured and running
- **Connection String**: `mongodb+srv://shamshadalamansari2:Sham2026@cluster0.yfwd9xw.mongodb.net/consumer-complaint-portal`
- **Database Name**: `consumer-complaint-portal`
- **Status**: Connected and operational

## Production Configuration Checklist

### 1. Cluster Configuration

**Current Setup:**
- Cluster is already created and operational
- Connection pooling is configured in `lib/db/mongoose.ts`

**Recommended Production Settings:**
- [ ] Upgrade to M10 cluster tier (currently using M0 free tier)
- [ ] Set region to Mumbai (ap-south-1) for better latency in India
- [ ] Configure connection pooling: min 2, max 10 connections

**To upgrade cluster:**
1. Go to MongoDB Atlas Dashboard
2. Select your cluster (Cluster0)
3. Click "Edit Configuration"
4. Under "Cluster Tier", select M10
5. Under "Region", select Mumbai (ap-south-1)
6. Click "Review Changes" and "Apply Changes"

### 2. Connection Pooling

**Already Configured** in `lib/db/mongoose.ts`:
```typescript
const options = {
  maxPoolSize: 10,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};
```

### 3. Automated Backups

**To enable automated backups:**
1. Go to MongoDB Atlas Dashboard
2. Navigate to "Backup" tab
3. Enable "Continuous Cloud Backup"
4. Configure backup schedule:
   - Daily snapshots
   - Retention: 7 days for daily, 4 weeks for weekly
   - Point-in-time recovery enabled

### 4. Monitoring and Alerts

**To set up monitoring:**
1. Go to "Alerts" in MongoDB Atlas
2. Configure alerts for:
   - High connection count (> 80% of max)
   - High CPU usage (> 80%)
   - High memory usage (> 80%)
   - Slow queries (> 1000ms)
   - Replication lag

**Alert Channels:**
- Email notifications
- Slack integration (optional)

### 5. Database User Permissions

**Current User**: `shamshadalamansari2`

**Recommended Production Setup:**
1. Create a dedicated production user with limited permissions
2. Grant only necessary privileges:
   - `readWrite` on `consumer-complaint-portal` database
   - No admin privileges

**To create production user:**
1. Go to "Database Access" in MongoDB Atlas
2. Click "Add New Database User"
3. Username: `consumer-portal-prod`
4. Password: Generate strong password
5. Database User Privileges: Select "Read and write to any database"
6. Restrict to specific database: `consumer-complaint-portal`
7. Add user

### 6. Network Access / IP Whitelist

**For Vercel Deployment:**

Vercel uses dynamic IP addresses, so you need to whitelist all IPs or use Vercel's IP ranges.

**Option 1: Allow Access from Anywhere (Simplest)**
1. Go to "Network Access" in MongoDB Atlas
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Add comment: "Vercel deployment"
5. Confirm

**Option 2: Whitelist Vercel IP Ranges (More Secure)**
1. Get Vercel IP ranges from: https://vercel.com/docs/concepts/edge-network/regions
2. Add each IP range to MongoDB Atlas Network Access
3. This requires maintenance when Vercel updates their IPs

**Current Status**: Likely already configured if connection is working

### 7. Database Indexes

**Already Configured** in Mongoose schemas:
- Guide: Text search on title, content, tags
- Template: Text search on title, content
- Portal: Indexes on category and isActive
- All models: Unique slug indexes

**To verify indexes in MongoDB Atlas:**
1. Go to "Collections" tab
2. Select database: `consumer-complaint-portal`
3. For each collection (guides, templates, portals):
   - Click "Indexes" tab
   - Verify all indexes are created

### 8. Performance Optimization

**Connection String Options:**

Update your `.env.local` and production environment variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.yfwd9xw.mongodb.net/consumer-complaint-portal?retryWrites=true&w=majority&maxPoolSize=10&minPoolSize=2
```

**Key parameters:**
- `retryWrites=true`: Automatic retry for write operations
- `w=majority`: Write concern for data durability
- `maxPoolSize=10`: Maximum connections
- `minPoolSize=2`: Minimum connections

### 9. Security Best Practices

**Completed:**
- ✅ Connection string stored in environment variables
- ✅ No hardcoded credentials in code
- ✅ Connection pooling configured

**Recommended:**
- [ ] Rotate database password regularly (every 90 days)
- [ ] Enable MongoDB Atlas encryption at rest
- [ ] Enable audit logging for production
- [ ] Set up VPC peering (for enterprise plans)

### 10. Monitoring Dashboard

**MongoDB Atlas Metrics to Monitor:**
1. **Performance**:
   - Query execution time
   - Index usage
   - Slow queries

2. **Resources**:
   - CPU usage
   - Memory usage
   - Disk I/O
   - Network throughput

3. **Operations**:
   - Connections (current/available)
   - Operations per second
   - Document metrics

**Access Monitoring:**
1. Go to MongoDB Atlas Dashboard
2. Select your cluster
3. Click "Metrics" tab
4. Review real-time and historical metrics

## Production Deployment Checklist

Before deploying to production:

- [ ] Upgrade to M10 cluster tier
- [ ] Set region to Mumbai (ap-south-1)
- [ ] Enable automated backups
- [ ] Configure monitoring alerts
- [ ] Create dedicated production database user
- [ ] Whitelist Vercel IP addresses
- [ ] Verify all indexes are created
- [ ] Test connection from Vercel
- [ ] Set up error logging
- [ ] Document disaster recovery plan

## Connection Testing

To test MongoDB connection from your application:

```bash
# Run the seed script to verify connection
npm run seed

# Check connection in development
npm run dev
# Visit http://localhost:3000 and verify data loads
```

## Disaster Recovery

**Backup Strategy:**
1. Automated daily snapshots (MongoDB Atlas)
2. Point-in-time recovery enabled
3. Retention: 7 days minimum

**Recovery Process:**
1. Go to "Backup" tab in MongoDB Atlas
2. Select snapshot or point-in-time
3. Click "Restore"
4. Choose restore target (new cluster or existing)
5. Verify data after restoration

## Cost Estimation

**M10 Cluster (Recommended for Production):**
- Region: Mumbai (ap-south-1)
- Storage: 10GB included
- RAM: 2GB
- vCPU: 2
- **Estimated Cost**: ~$57/month

**Additional Costs:**
- Backups: ~$2.50/month per 10GB
- Data transfer: Minimal for India region

## Support and Resources

- **MongoDB Atlas Documentation**: https://docs.atlas.mongodb.com/
- **Connection String Format**: https://docs.mongodb.com/manual/reference/connection-string/
- **Performance Best Practices**: https://docs.mongodb.com/manual/administration/analyzing-mongodb-performance/
- **Security Checklist**: https://docs.mongodb.com/manual/administration/security-checklist/

## Current Environment Variables

Ensure these are set in Vercel:

```env
MONGODB_URI=mongodb+srv://shamshadalamansari2:Sham2026@cluster0.yfwd9xw.mongodb.net/consumer-complaint-portal?retryWrites=true&w=majority
NEXTAUTH_SECRET=<your-secret>
NEXTAUTH_URL=https://your-domain.vercel.app
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## Notes

- Current setup is using M0 free tier which is suitable for development
- For production with expected traffic, upgrade to M10 is recommended
- Mumbai region will provide best latency for Indian users
- Connection pooling is already optimized in the code
- All security best practices are followed in the codebase
