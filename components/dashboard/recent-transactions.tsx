"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, formatDate } from "@/lib/utils"

interface Transaction {
  id: string
  customer: string
  amount: number
  status: "completed" | "pending" | "failed"
  date: string
}

const recentTransactions: Transaction[] = [
  { id: "TXN001", customer: "Acme Corp", amount: 12500, status: "completed", date: "2024-11-25" },
  { id: "TXN002", customer: "TechStart Inc", amount: 8750, status: "completed", date: "2024-11-25" },
  { id: "TXN003", customer: "Global Trade", amount: 15200, status: "pending", date: "2024-11-25" },
  { id: "TXN004", customer: "SmartRetail", amount: 6300, status: "completed", date: "2024-11-24" },
  { id: "TXN005", customer: "Digital Solutions", amount: 9450, status: "failed", date: "2024-11-24" },
]

export function RecentTransactions() {
  const getStatusColor = (status: Transaction["status"]) => {
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{transaction.customer}</p>
                <p className="text-xs text-muted-foreground">{transaction.id}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-semibold">{formatCurrency(transaction.amount)}</p>
                <Badge variant={getStatusColor(transaction.status) as any}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
