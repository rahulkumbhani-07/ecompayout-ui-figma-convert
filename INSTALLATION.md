# Installation & Setup Instructions

## Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## Step-by-Step Installation

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts
- Lucide React icons
- All Radix UI primitives

### 2. Verify Installation
After installation completes, you should see a `node_modules` folder.

### 3. Start Development Server
```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### 4. Build for Production (Optional)
```bash
npm run build
npm run start
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Ensure TypeScript is properly installed:
```bash
npm install --save-dev typescript @types/react @types/node
```

## Project Structure Verification

After installation, your project should have:

```
✅ node_modules/          (dependencies)
✅ app/                   (Next.js pages)
✅ components/            (React components)
✅ lib/                   (utilities)
✅ public/                (static assets - will be created)
✅ .next/                 (build output - created after first run)
```

## Environment Setup (Optional)

Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## What's Included

### Pages (All Functional)
✅ Dashboard with charts and stats
✅ Transactions table with filters
✅ Payments management
✅ Settlements tracking
✅ Payouts management
✅ Analytics dashboard
✅ Reports generation
✅ Customer management
✅ Revenue tracking
✅ Settings panel

### Components
✅ Sidebar navigation
✅ Header with search and notifications
✅ Stats cards
✅ Charts (Line, Bar, Pie, Area)
✅ Data tables
✅ Forms and inputs
✅ Modals and dialogs
✅ Tabs and filters

### Features
✅ Fully responsive design
✅ TypeScript throughout
✅ shadcn/ui components
✅ Tailwind CSS styling
✅ Clean code structure
✅ No unnecessary dependencies
✅ Enterprise-level architecture

## Next Steps After Installation

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Explore all pages from the sidebar
5. 🔄 Replace mock data with your API
6. 🔄 Add authentication
7. 🔄 Deploy to production

## Support

If you encounter any issues:
1. Check Node.js version (should be 18+)
2. Clear node_modules and reinstall
3. Check for error messages in terminal
4. Verify all files are present

## Design Matches Figma

All components are designed to match the Figma screenshots provided:
- Dashboard charts and metrics
- Transaction tables
- Payment interfaces
- Settlement views
- Analytics visualizations
- Reports interface
- Customer management
- Settings panels

The design is pixel-perfect and follows enterprise standards with:
- Consistent spacing
- Professional color scheme
- Accessible components
- Responsive layouts
- Clean typography
