import React from "react";
import {
  LayoutDashboard,
  Users,
  Gavel,
  Settings,
  FileText,
  Bell,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PendingUsersTable } from "@/components/PendingUsersTable";
import { link } from "fs";

type AdminSidebarProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
};

const menuItems = [
  {
    title: "Хянах самбар",
    section: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Хэрэглэгчид",
    section: "users",
    icon: Users,
  },
  {
    title: "Хуульчийн баталгаажуулалт",
    section: "lawyeraprroval",
    icon: Gavel,
  },
  {
    title: "Тайлан",
    section: "report",
    icon: FileText,
  },
  {
    title: "Мэдэгдлүүд",
    section: "notifications",
    icon: Bell,
  },
  {
    title: "Тохиргоо",
    section: "settings",
    icon: Settings,
  },
];

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  return (
    <Sidebar className="border-r bg-white">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">LawBridge</span>
        </div>
      </div>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Үндсэн цэс
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-gray-100 ${
                      activeSection === item.section ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <button type="button" onClick={() => onSectionChange(item.section)}>
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-blue-600 text-white">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Админ</p>
            <p className="text-xs text-gray-500 truncate">Тавтай Морил</p>
          </div>
          <Button variant="ghost" size="sm" className="p-1">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}