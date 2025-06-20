import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Settings, Activity } from "lucide-react";

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 45 },
  { name: 'Mar', users: 60 },
  { name: 'Apr', users: 75 },
  { name: 'May', users: 90 },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Header */}
      <div className="col-span-3 flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button>Settings</Button>
      </div>

      {/* Stats Cards */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4 flex items-center gap-4">
          <Users className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-xl font-semibold">1,240</p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4 flex items-center gap-4">
          <Activity className="w-8 h-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Active Sessions</p>
            <p className="text-xl font-semibold">320</p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4 flex items-center gap-4">
          <Settings className="w-8 h-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">System Alerts</p>
            <p className="text-xl font-semibold">12</p>
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card className="col-span-3 rounded-2xl shadow-md">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">User Growth (Monthly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
