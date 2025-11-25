"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  change: number
  icon: LucideIcon
  trend?: "up" | "down"
}

export function StatsCard({ title, value, change, icon: Icon, trend = "up" }: StatsCardProps) {
  const isPositive = trend === "up"
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1 flex items-center text-xs">
          {isPositive ? (
            <ArrowUpIcon className="mr-1 h-3 w-3 text-green-600" />
          ) : (
            <ArrowDownIcon className="mr-1 h-3 w-3 text-red-600" />
          )}
          <span className={cn(
            "font-medium",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            {Math.abs(change)}%
          </span>
          <span className="ml-1 text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
