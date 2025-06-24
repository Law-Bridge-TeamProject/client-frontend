"use client"
import { useRouter } from "next/navigation"

const AdminPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex gap-20">AdminPage 
      <button onClick={() => push("/admin/lawyer-requests")}>Reqeust to join</button>
      </div>
  )
}

export default AdminPage

import { AdminDashboard } from "@/components/AdminDashboard";

const Index = () => {
  return <AdminDashboard />;
};

export default Index;