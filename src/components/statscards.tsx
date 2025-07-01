import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Нийт Орлого",
    value: "45,231.89₮",
    change: "+20.1%",
    trend: "өсөлт",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Идэвхтэй Хэрэглэгчид",
    value: "2,350",
    change: "+18.0%",
    trend: "өсөлт",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Нийт Уулзалт",
    value: "1,234",
    change: "-4.3%",
    trend: "бууралт",
    icon: ShoppingCart,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Худалдааны Өсөлт",
    value: "3.24%",
    change: "+12.5%",
    trend: "өсөлт",
    icon: Activity,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-white border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">Өмнөх сар</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}