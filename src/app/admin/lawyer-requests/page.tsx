"use client";
import { useEffect, useState } from "react";

export default function AdminLawyerRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/lawyer/lawyer-request")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  const handleApprove = async (userId: string) => {
    await fetch("/api/admin/approve-lawyer", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    setRequests((prev) => prev.filter((r) => r.userId !== userId));
  };

  const handleDeny = async (userId: string) => {
    await fetch("/api/admin/deny-lawyer", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    setRequests((prev) => prev.filter((r) => r.userId !== userId));
  };

  console.log("Lawyer requests:", requests);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Өмгөөлөгчийн хүсэлтүүд</h1>
      <ul className="space-y-4">
        {requests.map((req) => (
          <li key={req.userId} className="border p-4 rounded shadow">
            <div>Нэр: {req.name}</div>
            <div>Лиценз: {req.license}</div>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleApprove(req.userId)}
                className="bg-green-600 text-white px-4 py-1 rounded"
              >
                Зөвшөөрөх
              </button>
              <button
                onClick={() => handleDeny(req.userId)}
                className="bg-red-600 text-white px-4 py-1 rounded"
              >
                Татгалзах
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
