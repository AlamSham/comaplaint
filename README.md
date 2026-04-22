# Consumer Complaint Portal

A comprehensive Hindi-first web portal for Indian consumers to file complaints against e-commerce, banking, telecom, and other service providers. Built with Next.js 14, MongoDB, and NextAuth.

## 🌟 Features

- **Step-by-Step Guides**: Detailed complaint filing guides for major categories
- **Ready-Made Templates**: Complaint letter templates in Hindi and English
- **Official Portal Directory**: Direct links to NCH, TRAI, RBI Ombudsman, RERA, etc.
- **Admin Panel**: Complete CMS for managing guides, templates, and portals
- **SEO Optimized**: Sitemap, structured data, canonical URLs
- **Mobile Responsive**: Works seamlessly on all devices
- **Multilingual**: Hindi, English, and Hinglish support

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Noto Sans Devanagari
- **Testing**: Vitest, Playwright, Fast-check
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB 6.0+
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd consumer-complaint-portal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/consumer-complaint-portal
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Start MongoDB**
```bash
# Using MongoDB service
sudo systemctl start mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

5. **Seed the database** (optional)
```bash
npm run seed
```

6. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
consumer-complaint-portal/
├── app/                      # Next.js App Router
│   ├── (public)/            # Public pages
│   │   ├── guides/          # Guide listing & detail pages
│   │   ├── templates/       # Template listing & detail pages
│   │   ├── portals/         # Portal directory
│   │   └── search/          # Search results
│   ├── admin/               # Admin panel
│   │   ├── guides/          # Guide management
│   │   ├── templates/       # Template management
│   │   └── portals/         # Portal management
│   ├── api/                 # API routes
│   │   ├── guides/          # Guide CRUD
│   │   ├── templates/       # Template CRUD
│   │   ├── portals/         # Portal CRUD
│   │   └── search/          # Search endpoint
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── admin/               # Admin components
│   ├── public/              # Public components
│   └── shared/              # Shared components
├── lib/                     # Utilities
│   ├── db/                  # Database
│   │   ├── models/          # Mongoose models
│   │   ├── mongoose.ts      # DB connection
│   │   └── seed.ts          # Seed script
│   ├── auth/                # Authentication
│   └── utils/               # Utility functions
└── tests/                   # Test files
    ├── unit/                # Unit tests
    ├── property/            # Property-based tests
    └── e2e/                 # E2E tests
```

## 🔑 Admin Panel

Access the admin panel at `/admin/login`

Default credentials:
- Username: `admin`
- Password: `admin123`

**⚠️ Change these in production!**

### Admin Features

- **Dashboard**: View analytics (total guides, templates, views, downloads)
- **Guide Management**: Create, edit, delete guides
- **Template Management**: Create, edit, delete templates
- **Portal Management**: Add official complaint portals

## 🗄️ Database Management

### Seed Database
```bash
npm run seed
```

Seeds the database with:
- 6 official portals (NCH, TRAI, RBI, RERA, IRDA, e-Daakhil)
- 6 sample guides (Amazon, Flipkart, Banking, Telecom, RERA, Insurance)
- 4 sample templates (Hindi & English)

### Reset Database
```bash
npm run db:reset
```

**⚠️ This will delete all data! Only use in development.**

## 🧪 Testing

```bash
# Run all tests
npm test

# Unit tests
npm run test:unit

# Property-based tests
npm run test:property

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📡 API Endpoints

### Guides
- `GET /api/guides` - List all guides (with filters)
- `GET /api/guides/[slug]` - Get single guide
- `POST /api/guides` - Create guide (auth required)
- `PUT /api/guides/[slug]` - Update guide (auth required)
- `DELETE /api/guides/[slug]` - Delete guide (auth required)

### Templates
- `GET /api/templates` - List all templates
- `GET /api/templates/[slug]` - Get single template
- `POST /api/templates` - Create template (auth required)
- `PUT /api/templates/[slug]` - Update template (auth required)
- `DELETE /api/templates/[slug]` - Delete template (auth required)

### Portals
- `GET /api/portals` - List all active portals
- `POST /api/portals` - Create portal (auth required)

### Search
- `GET /api/search?q=query` - Search guides and templates

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables
- Deploy

3. **Set Environment Variables in Vercel**
```
MONGODB_URI=mongodb+srv://...
NEXTAUTH_SECRET=<generate-new-secret>
NEXTAUTH_URL=https://yourdomain.com
ADMIN_USERNAME=<your-username>
ADMIN_PASSWORD=<strong-password>
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

4. **Run seed script** (one-time)
```bash
# SSH into Vercel or run locally pointing to production DB
npm run seed
```

### MongoDB Atlas Setup

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create M10 cluster in Mumbai region (ap-south-1)
3. Configure:
   - Connection pooling: min 2, max 10
   - Automated daily backups
   - Monitoring and alerts
4. Create database user
5. Whitelist Vercel IP addresses
6. Copy connection string to `MONGODB_URI`

## 🔒 Security

- NextAuth.js for authentication
- Password hashing
- Protected API routes
- XSS prevention with DOMPurify
- CORS configuration
- Secure session cookies
- Environment variable validation

## 🎨 Customization

### Adding New Categories

1. Update `lib/constants.ts`:
```typescript
export const CATEGORY_LABELS = {
  // ... existing
  newcategory: 'New Category',
};
```

2. Update Mongoose schema in `lib/db/models/Guide.ts`

### Adding New Languages

1. Update `lib/constants.ts`:
```typescript
export const LANGUAGE_LABELS = {
  // ... existing
  newlang: 'New Language',
};
```

2. Update Mongoose schema in `lib/db/models/Guide.ts`

## 📊 Analytics

- View counts tracked automatically
- Download counts for templates
- Admin dashboard shows:
  - Total guides, templates, portals
  - Total views and downloads
  - Top guides by views
  - Top templates by downloads

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Start MongoDB
sudo systemctl start mongod
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for Indian consumers
