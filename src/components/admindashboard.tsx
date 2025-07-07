import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { DashboardCharts } from "./DashBoardCharts";
import { RecentActivity } from "./RecentActivity";
import { UserTable } from "./UserTable";
import { useState } from "react";
import { PendingUsersTable } from "@components/PendingUsersTable";
import { LawyerApprovalDashboard } from "./LawyerApprovalDashboard";
 
export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState ("dashboard");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/40">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-6 space-y-6">
          {activeSection === "dashboard" && (
            <>
            <DashboardHeader />
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
              <div className="lg:col-span-2">
                <DashboardCharts />
              </div>
              <div>
                <RecentActivity />
              </div>
            <div/>
            <usertable />
            </>
          )}
          {activeSection === "users" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Хэрэглэгчид</h2>
              <UserTable />
            </div>
          )}
          {activeSection === "lawyeraprroval" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Хүлээгдэж буй Хуульчид</h2>
              <LawyerApprovalDashboard />
            </div>
          )}
          {/* Add more sections as needed */}
          
        </main>
      </div>
    </SidebarProvider>
  );
}
