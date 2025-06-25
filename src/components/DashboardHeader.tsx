import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden">
          <Menu className="w-5 h-5" />
        </SidebarTrigger>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, John! Here's what's happening today.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 w-64"
          />
        </div>
        
        <Button variant="outline" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
            3
          </Badge>
        </Button>
      </div>
    </div>
  );
}