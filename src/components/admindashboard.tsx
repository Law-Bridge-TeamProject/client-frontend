import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { DashboardCharts } from "./DashBoardCharts";
import { RecentActivity } from "./RecentActivity";
import { UserTable } from "./UserTable";
 
export function AdminDashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/40">
        <AdminSidebar activeSection={""} onSectionChange={function (section: string): void {
          throw new Error("Function not implemented.");
        } } />
        <main className="flex-1 p-6 space-y-6">
          <DashboardHeader />
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DashboardCharts />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>
          <UserTable />
        </main>
      </div>
    </SidebarProvider>
  );
}
