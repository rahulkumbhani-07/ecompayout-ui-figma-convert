"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreditCard, Smartphone, Building, Wallet, QrCode, Plus } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

const paymentMethods = [
  {
    id: 1,
    type: "Credit Card",
    name: "Visa ending in 4242",
    icon: CreditCard,
    isDefault: true,
    expires: "12/25",
  },
  {
    id: 2,
    type: "Debit Card",
    name: "Mastercard ending in 8888",
    icon: CreditCard,
    isDefault: false,
    expires: "06/26",
  },
  {
    id: 3,
    type: "Bank Account",
    name: "Chase Bank ****6789",
    icon: Building,
    isDefault: false,
    expires: null,
  },
  {
    id: 4,
    type: "UPI",
    name: "user@upi",
    icon: Smartphone,
    isDefault: false,
    expires: null,
  },
]

const paymentLinks = [
  {
    id: "LINK001",
    title: "Product Purchase",
    amount: 2500,
    status: "active",
    clicks: 45,
    conversions: 12,
  },
  {
    id: "LINK002",
    title: "Service Subscription",
    amount: 9900,
    status: "active",
    clicks: 128,
    conversions: 34,
  },
  {
    id: "LINK003",
    title: "Consultation Fee",
    amount: 5000,
    status: "expired",
    clicks: 23,
    conversions: 8,
  },
]

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-muted-foreground">Manage payment methods and payment links</p>
        </div>

        <Tabs defaultValue="methods" className="space-y-6">
          <TabsList>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="links">Payment Links</TabsTrigger>
            <TabsTrigger value="qr">QR Codes</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Saved Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods for quick checkout</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Method
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Payment Method</DialogTitle>
                        <DialogDescription>
                          Add a new payment method to your account
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-sm text-muted-foreground">Payment method form would go here</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <Card key={method.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <p className="font-medium">{method.type}</p>
                                  {method.isDefault && (
                                    <Badge variant="secondary">Default</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{method.name}</p>
                                {method.expires && (
                                  <p className="text-xs text-muted-foreground">
                                    Expires {method.expires}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              Remove
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Payment Links</CardTitle>
                    <CardDescription>Create and manage payment links for easy collection</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Link
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentLinks.map((link) => (
                    <Card key={link.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{link.title}</p>
                              <Badge variant={link.status === "active" ? "success" : "secondary"}>
                                {link.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Link ID: {link.id}</p>
                            <p className="text-lg font-semibold">{formatCurrency(link.amount)}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <p className="text-sm text-muted-foreground">{link.clicks} clicks</p>
                            <p className="text-sm font-medium">{link.conversions} conversions</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Copy Link</Button>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qr" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>QR Code Payments</CardTitle>
                    <CardDescription>Generate QR codes for quick payment collection</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <QrCode className="h-4 w-4" />
                    Generate QR
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="flex h-32 w-32 items-center justify-center rounded-lg border-2 border-dashed">
                            <QrCode className="h-16 w-16 text-muted-foreground" />
                          </div>
                          <div className="text-center space-y-1">
                            <p className="font-medium">QR Code #{i}</p>
                            <p className="text-sm text-muted-foreground">Store Payment</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
