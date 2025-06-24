import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "completed order",
    target: "#12345",
    time: "2 minutes ago",
    avatar: "/placeholder.svg",
    status: "success",
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "created account",
    target: "",
    time: "5 minutes ago",
    avatar: "/placeholder.svg",
    status: "info",
  },
  {
    id: 3,
    user: "Carol Davis",
    action: "updated profile",
    target: "",
    time: "10 minutes ago",
    avatar: "/placeholder.svg",
    status: "warning",
  },
  {
    id: 4,
    user: "David Wilson",
    action: "made payment",
    target: "$299.00",
    time: "15 minutes ago",
    avatar: "/placeholder.svg",
    status: "success",
  },
  {
    id: 5,
    user: "Eva Brown",
    action: "left review",
    target: "5 stars",
    time: "1 hour ago",
    avatar: "/placeholder.svg",
    status: "info",
  },
];

const statusColors = {
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
};

export function RecentActivity() {
  return (
    <Card className="bg-white border shadow-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions and system events</CardDescription>
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