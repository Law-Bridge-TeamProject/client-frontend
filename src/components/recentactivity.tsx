import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Алтан Цэцэг",
    action: "захиалгыг гүйцэтгэсэн",
    target: "#12345",
    time: "2 минутын өмнө",
    avatar: "/placeholder.svg",
    status: "Амжилттай",
  },
  {
    id: 2,
    user: "Бат-Эрдэнэ",
    action: "акаунт үүсгэсэн",
    target: "",
    time: "5 минутын өмнө",
    avatar: "/placeholder.svg",
    status: "Мэдээлэл",
  },
  {
    id: 3,
    user: "Ёндонжамц Сайнбаяр",
    action: "профайлыг шинэчилсэн",
    target: "",
    time: "10 минутын өмнө",
    avatar: "/placeholder.svg",
    status: "Анхааруулга",
  },
  {
    id: 4,
    user: "Даваажаргал Ганболд",
    action: "Төлбөр төлөгдсөн",
    target: "$299.00",
    time: "15 минутын өмнө",
    avatar: "/placeholder.svg",
    status: "Амжилттай",
  },
  {
    id: 5,
    user: "Эвээл Солонго",
    action: "сэтгэгдэл үлдээсэн",
    target: "5 од",
    time: "1 цагийн өмнө",
    avatar: "/placeholder.svg",
    status: "Мэдээлэл",
  },
];

const statusColors = {
  Амжилттай: "bg-green-100 text-green-800",
  Мэдээлэл: "bg-blue-100 text-blue-800",
  Анхааруулга: "bg-yellow-100 text-yellow-800",
};

export function RecentActivity() {
  return (
    <Card className="bg-white border shadow-sm">
      <CardHeader>
        <CardTitle>Сүүлийн үйл ажиллагаа</CardTitle>
        <CardDescription>Хэрэглэгчийн сүүлийн үйл ажиллагаа болон системийн үйл явдлууд</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Avatar className="w-10 h-10">
              <AvatarImage src={activity.avatar} />
              <AvatarFallback className="bg-blue-100 text-blue-700">
                {activity.user.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}
                {activity.target && (
                  <span className="font-medium text-blue-600"> {activity.target}</span>
                )}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Badge variant="secondary" className={statusColors[activity.status]}>
              {activity.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}