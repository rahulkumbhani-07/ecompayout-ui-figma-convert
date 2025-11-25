"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Filter, Download, Eye } from "lucide-react"
import { formatCurrency, formatDate, formatTime } from "@/lib/utils"

const transactions = [
  {
    id: "TXN001234",
    customer: "Acme Corporation",
    email: "billing@acme.com",
    amount: 12500,
    status: "completed",
    method: "Credit Card",
    date: "2024-11-25T10:30:00",
  },
  {
    id: "TXN001235",
    customer: "TechStart Inc",
    email: "finance@techstart.com",
    amount: 8750,
    status: "completed",
    method: "Debit Card",
    date: "2024-11-25T09:15:00",
  },
  {
    id: "TXN001236",
    customer: "Global Trade Ltd",
    email: "payments@globaltrade.com",
    amount: 15200,
    status: "pending",
    method: "UPI",
    date: "2024-11-25T08:45:00",
  },
  {
    id: "TXN001237",
    customer: "SmartRetail Systems",
    email: "accounts@smartretail.com",
    amount: 6300,
    status: "completed",
    method: "Net Banking",
    date: "2024-11-24T16:20:00",
  },
  {
    id: "TXN001238",
    customer: "Digital Solutions",
    email: "billing@digitalsol.com",
    amount: 9450,
    status: "failed",
    method: "Credit Card",
    date: "2024-11-24T14:10:00",
  },
  {
    id: "TXN001239",
    customer: "CloudTech Partners",
    email: "finance@cloudtech.com",
    amount: 22800,
    status: "completed",
    method: "Wire Transfer",
    date: "2024-11-24T11:30:00",
  },
  {
    id: "TXN001240",
    customer: "Innovation Hub",
    email: "pay@innovationhub.com",
    amount: 5600,
    status: "pending",
    method: "UPI",
    date: "2024-11-24T10:05:00",
  },
  {
    id: "TXN001241",
    customer: "Enterprise Systems",
    email: "billing@enterprise.com",
    amount: 18900,
    status: "completed",
    method: "Credit Card",
    date: "2024-11-23T15:45:00",
  },
]

export default function TransactionsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success"
      case "pending":
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
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground">Manage and track all your payment transactions</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle>All Transactions</CardTitle>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search transactions..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{transaction.customer}</span>
                        <span className="text-xs text-muted-foreground">{transaction.email}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell>{transaction.method}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(transaction.status) as any}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">{formatDate(transaction.date)}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(transaction.date)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
