"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Calendar, Download, TrendingUp } from "lucide-react"
import { formatCurrency, formatDate } from "@/lib/utils"

const settlements = [
  {
    id: "SET001",
    amount: 45320,
    status: "completed",
    date: "2024-11-25",
    bankAccount: "****6789",
    transactions: 156,
  },
  {
    id: "SET002",
    amount: 38750,
    status: "completed",
    date: "2024-11-24",
    bankAccount: "****6789",
    transactions: 142,
  },
  {
    id: "SET003",
    amount: 52100,
    status: "processing",
    date: "2024-11-23",
    bankAccount: "****6789",
    transactions: 189,
  },
  {
    id: "SET004",
    amount: 41250,
    status: "completed",
    date: "2024-11-22",
    bankAccount: "****6789",
    transactions: 165,
  },
]

const bankAccounts = [
  {
    id: 1,
    bankName: "Chase Bank",
    accountNumber: "****6789",
    accountType: "Business Checking",
    isDefault: true,
  },
  {
    id: 2,
    bankName: "Bank of America",
    accountNumber: "****1234",
    accountType: "Savings",
    isDefault: false,
  },
]

export default function SettlementsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success"
      case "processing":
        return "warning"
      case "failed":
        return "destructive"
      default:
        return "default"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settlements</h1>
          <p className="text-muted-foreground">Track your settlements and bank transfers</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Available Balance
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(125840)}</div>
              <p className="text-xs text-muted-foreground mt-1">Ready for settlement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Settlement
              </CardTitle>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(52100)}</div>
              <p className="text-xs text-muted-foreground mt-1">Processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Settled
              </CardTitle>
              <Building className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(1847320)}</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="history" className="space-y-6">
          <TabsList>
            <TabsTrigger value="history">Settlement History</TabsTrigger>
            <TabsTrigger value="accounts">Bank Accounts</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Settlement History</CardTitle>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Settlement ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Transactions</TableHead>
                      <TableHead>Bank Account</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {settlements.map((settlement) => (
                      <TableRow key={settlement.id}>
                        <TableCell className="font-medium">{settlement.id}</TableCell>
                        <TableCell className="font-semibold">
                          {formatCurrency(settlement.amount)}
                        </TableCell>
                        <TableCell>{settlement.transactions}</TableCell>
                        <TableCell>{settlement.bankAccount}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(settlement.status) as any}>
                            {settlement.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(settlement.date)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Bank Accounts</CardTitle>
                    <CardDescription>Manage your bank accounts for settlements</CardDescription>
                  </div>
                  <Button>Add Account</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bankAccounts.map((account) => (
                    <Card key={account.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                              <Building className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{account.bankName}</p>
                                {account.isDefault && (
                                  <Badge variant="secondary">Default</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {account.accountType} - {account.accountNumber}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Remove</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Settlement Schedule</CardTitle>
                <CardDescription>Configure automatic settlement preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Daily Auto-Settlement</p>
                        <p className="text-sm text-muted-foreground">
                          Automatically settle funds every day at 6:00 PM
                        </p>
                      </div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Minimum Settlement Amount</p>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(10000)} minimum for auto-settlement
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Settlement Account</p>
                        <p className="text-sm text-muted-foreground">
                          Chase Bank - ****6789
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
