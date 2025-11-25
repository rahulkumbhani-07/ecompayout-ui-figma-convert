"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { TransactionChart } from "@/components/charts/transaction-chart"
import { PaymentMethodChart } from "@/components/charts/payment-method-chart"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { name: "Jan", revenue: 45000, profit: 28000 },
  { name: "Feb", revenue: 52000, profit: 32000 },
  { name: "Mar", revenue: 48000, profit: 29000 },
  { name: "Apr", revenue: 61000, profit: 38000 },
  { name: "May", revenue: 55000, profit: 34000 },
  { name: "Jun", revenue: 67000, profit: 42000 },
  { name: "Jul", revenue: 72000, profit: 45000 },
  { name: "Aug", revenue: 68000, profit: 43000 },
  { name: "Sep", revenue: 75000, profit: 48000 },
  { name: "Oct", revenue: 82000, profit: 52000 },
  { name: "Nov", revenue: 78000, profit: 49000 },
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

const customerGrowthData = [
  { name: "Jan", customers: 1200 },
  { name: "Feb", customers: 1450 },
  { name: "Mar", customers: 1680 },
  { name: "Apr", customers: 1920 },
  { name: "May", customers: 2150 },
  { name: "Jun", customers: 2380 },
  { name: "Jul", customers: 2620 },
  { name: "Aug", customers: 2840 },
  { name: "Sep", customers: 3050 },
  { name: "Oct", customers: 3280 },
  { name: "Nov", customers: 3520 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Deep insights into your business performance</p>
        </div>

        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid gap-6">
              <RevenueChart data={revenueData} />
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="name"
                        className="text-xs"
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                      />
                      <YAxis
                        className="text-xs"
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--primary))"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <TransactionChart data={transactionData} />
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={customerGrowthData}>
                    <defs>
                      <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="name"
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="customers"
                      stroke="hsl(var(--chart-2))"
                      fillOpacity={1}
                      fill="url(#colorCustomers)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-6">
            <PaymentMethodChart data={paymentMethodData} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
