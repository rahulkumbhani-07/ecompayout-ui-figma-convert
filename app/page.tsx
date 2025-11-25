"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { TransactionChart } from "@/components/charts/transaction-chart"
import { PaymentMethodChart } from "@/components/charts/payment-method-chart"
import { DollarSign, CreditCard, TrendingUp, Users } from "lucide-react"

const revenueData = [
  { name: "Jan", revenue: 45000, profit: 28000 },
  { name: "Feb", revenue: 52000, profit: 32000 },
  { name: "Mar", revenue: 48000, profit: 29000 },
  { name: "Apr", revenue: 61000, profit: 38000 },
  { name: "May", revenue: 55000, profit: 34000 },
  { name: "Jun", revenue: 67000, profit: 42000 },
  { name: "Jul", revenue: 72000, profit: 45000 },
]

const transactionData = [
  { name: "Mon", completed: 120, pending: 45, failed: 8 },
  { name: "Tue", completed: 145, pending: 38, failed: 5 },
  { name: "Wed", completed: 168, pending: 42, failed: 12 },
  { name: "Thu", completed: 132, pending: 50, failed: 7 },
  { name: "Fri", completed: 195, pending: 55, failed: 10 },
  { name: "Sat", completed: 142, pending: 32, failed: 6 },
  { name: "Sun", completed: 98, pending: 28, failed: 4 },
]

const paymentMethodData = [
  { name: "Credit Card", value: 45 },
  { name: "Debit Card", value: 30 },
  { name: "UPI", value: 15 },
  { name: "Net Banking", value: 8 },
  { name: "Wallet", value: 2 },
]

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$472,850"
            change={12.5}
            icon={DollarSign}
            trend="up"
          />
          <StatsCard
            title="Transactions"
            value="2,456"
            change={8.2}
            icon={CreditCard}
            trend="up"
          />
          <StatsCard
            title="Active Customers"
            value="1,842"
            change={15.3}
            icon={Users}
            trend="up"
          />
          <StatsCard
            title="Growth Rate"
            value="23.5%"
            change={5.1}
            icon={TrendingUp}
            trend="up"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <RevenueChart data={revenueData} />
          </div>
          <div className="lg:col-span-3">
            <RecentTransactions />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TransactionChart data={transactionData} />
          <PaymentMethodChart data={paymentMethodData} />
        </div>
      </div>
    </DashboardLayout>
  )
}
