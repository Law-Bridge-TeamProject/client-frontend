import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Нэг сар", revenue: 4000, orders: 240 },
  { name: "Хоёр сар", revenue: 3000, orders: 139 },
  { name: "Гурван сар", revenue: 2000, orders: 980 },
  { name: "Дөрвөн сар", revenue: 2780, orders: 390 },
  { name: "Таван сар", revenue: 1890, orders: 480 },
  { name: "Зургаан сар", revenue: 2390, orders: 380 },
];

const pieData = [
  { name: "Компьютер", value: 400, color: "#3B82F6" },
  { name: "Мобайл", value: 300, color: "#10B981" },
  { name: "Таблет", value: 200, color: "#F59E0B" },
  { name: "Бусад", value: 100, color: "#EF4444" },
];

export function DashboardCharts() {
  return (
    <div className="space-y-6">
      <Card className="bg-white border shadow-sm">
        <CardHeader>
          <CardTitle>Нийт орлого</CardTitle>
          <CardDescription>Сар бүрийн орлого болон захиалгын статистик</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar dataKey="revenue" fill="#3B82F6" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border shadow-sm">
        <CardHeader>
          <CardTitle>Хандагч</CardTitle>
          <CardDescription>Хэрэглэгчийн хандалт төхөөрөмжийн төрөл</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}