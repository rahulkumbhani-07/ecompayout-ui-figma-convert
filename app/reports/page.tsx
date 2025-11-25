"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Calendar, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const recentReports = [
  {
    id: "REP001",
    name: "Monthly Revenue Report",
    type: "Revenue",
    date: "2024-11-25",
    status: "ready",
  },
  {
    id: "REP002",
    name: "Transaction Summary",
    type: "Transactions",
    date: "2024-11-24",
    status: "ready",
  },
  {
    id: "REP003",
    name: "Customer Analysis",
    type: "Customers",
    date: "2024-11-23",
    status: "processing",
  },
  {
    id: "REP004",
    name: "Settlement Report",
    type: "Settlements",
    date: "2024-11-22",
    status: "ready",
  },
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Generate and download business reports</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Revenue Report</p>
                  <p className="text-xs text-muted-foreground">Financial overview</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Transaction Report</p>
                  <p className="text-xs text-muted-foreground">All transactions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Customer Report</p>
                  <p className="text-xs text-muted-foreground">Customer insights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Settlement Report</p>
                  <p className="text-xs text-muted-foreground">Payout details</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="generate" className="space-y-6">
          <TabsList>
            <TabsTrigger value="generate">Generate Report</TabsTrigger>
            <TabsTrigger value="history">Report History</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Generate Custom Report</CardTitle>
                <CardDescription>Create a custom report with specific parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="report-type">Report Type</Label>
                      <Select>
                        <SelectTrigger id="report-type">
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="revenue">Revenue Report</SelectItem>
                          <SelectItem value="transactions">Transaction Report</SelectItem>
                          <SelectItem value="customers">Customer Report</SelectItem>
                          <SelectItem value="settlements">Settlement Report</SelectItem>
                          <SelectItem value="payouts">Payout Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="format">Export Format</Label>
                      <Select defaultValue="pdf">
                        <SelectTrigger id="format">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Schedule Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Report History</CardTitle>
                <CardDescription>View and download previously generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <Card key={report.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <p className="font-medium">{report.name}</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{report.type}</span>
                                <span>•</span>
                                <span>{report.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={report.status === "ready" ? "success" : "warning"}>
                              {report.status}
                            </Badge>
                            {report.status === "ready" && (
                              <Button variant="outline" size="sm" className="gap-2">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Scheduled Reports</CardTitle>
                    <CardDescription>Manage automated report generation</CardDescription>
                  </div>
                  <Button>Add Schedule</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Weekly Revenue Summary</p>
                          <p className="text-sm text-muted-foreground">
                            Every Monday at 9:00 AM
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="success">Active</Badge>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Monthly Transaction Report</p>
                          <p className="text-sm text-muted-foreground">
                            1st of every month at 8:00 AM
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="success">Active</Badge>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
