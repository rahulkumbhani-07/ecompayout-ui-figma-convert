# Ecom Payouts Dashboard

A comprehensive, enterprise-level payment and settlement management dashboard built with Next.js 14, TypeScript, and shadcn/ui components.

## Features

### 📊 Dashboard
- Real-time revenue and transaction statistics
- Interactive charts (Line, Bar, Pie, Area)
- Recent transactions overview
- Payment method distribution
- Key performance indicators (KPIs)

### 💳 Transactions
- Complete transaction history
- Advanced filtering and search
- Status tracking (Completed, Pending, Failed)
- Transaction details view
- Export functionality

### 💰 Payments
- Payment method management
- Payment link generation
- QR code payment support
- Multiple payment methods (Credit Card, Debit Card, UPI, Net Banking)

### 🏦 Settlements
- Settlement history tracking
- Bank account management
- Auto-settlement configuration
- Available balance overview
- Settlement scheduling

### 📤 Payouts
- Create and manage payouts
- Recipient management
- Payout status tracking
- Multiple payout methods

### 📈 Analytics
- Revenue trends analysis
- Transaction analytics
- Customer growth metrics
- Payment method insights

### 📑 Reports
- Generate custom reports
- Scheduled reports
- Export in multiple formats (PDF, CSV, Excel, JSON)
- Report history

### 👥 Customers
- Customer database management
- Customer activity tracking
- Contact information
- Lifetime value metrics

### 💵 Revenue
- Revenue tracking and forecasting
- Revenue vs target comparison
- Category-wise revenue analysis
- Growth rate monitoring

### ⚙️ Settings
- Profile management
- Notification preferences
- Security settings (2FA, Password)
- Billing management
- Team collaboration
- Business information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ecom-figma
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Ecom-figma/
├── app/                      # Next.js App Router pages
│   ├── analytics/           # Analytics page
│   ├── customers/           # Customers page
│   ├── page.tsx            # Dashboard home
│   ├── payments/           # Payments page
│   ├── payouts/            # Payouts page
│   ├── reports/            # Reports page
│   ├── revenue/            # Revenue page
│   ├── settlements/        # Settlements page
│   ├── settings/           # Settings page
│   ├── transactions/       # Transactions page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── charts/             # Chart components
│   │   ├── payment-method-chart.tsx
│   │   ├── revenue-chart.tsx
│   │   └── transaction-chart.tsx
│   ├── dashboard/          # Dashboard components
│   │   ├── recent-transactions.tsx
│   │   └── stats-card.tsx
│   ├── layout/             # Layout components
│   │   ├── dashboard-layout.tsx
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   └── ui/                 # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── table.tsx
│       └── tabs.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── components.json         # shadcn/ui configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Layout Components

- **DashboardLayout**: Main layout wrapper with sidebar and header
- **Sidebar**: Navigation sidebar with menu items
- **Header**: Top navigation with search and notifications

### Chart Components

- **RevenueChart**: Line chart for revenue visualization
- **TransactionChart**: Bar chart for transaction statistics
- **PaymentMethodChart**: Pie chart for payment method distribution

### UI Components

All UI components are built using shadcn/ui and Radix UI primitives for accessibility and customization.

## Design System

The application uses a consistent design system with:

- **Color Palette**: Primary (Indigo), Success (Green), Warning (Yellow), Destructive (Red)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Fully accessible shadcn/ui components
- **Dark Mode**: Ready for dark mode implementation

## Customization

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file with your component
3. Wrap content with `DashboardLayout`
4. Add route to sidebar navigation in `components/layout/sidebar.tsx`

### Styling

All components use Tailwind CSS for styling. Modify `tailwind.config.ts` to customize the theme.

### Adding New Components

Use shadcn/ui CLI to add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For support, contact the development team.
