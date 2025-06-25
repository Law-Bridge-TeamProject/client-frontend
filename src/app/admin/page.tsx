"use client"
import { AdminDashboard } from "@/components/AdminDashboard";
import { useRouter } from "next/navigation"

const AdminPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex gap-20">AdminPage 
      <button onClick={() => push("/admin/lawyer-requests")}>Reqeust to join</button>
      <AdminDashboard/> 
      </div>
  )
}

export default AdminPage

