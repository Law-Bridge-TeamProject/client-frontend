import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const users = [
  {
    id: 1,
    name: "Жасрайн Алтанцэцэг",
    email: "alice@example.com",
    role: "Админ",
    status: "Идвэхтэй",
    joinDate: "2025-01-15",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Чаминболд Бамбархан",
    email: "bob@example.com",
    role: "Хэрэглэгч",
    status: "Идвэхтэй",
    joinDate: "2025-02-20",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Хэнээ Хэнчбиш",
    email: "carol@example.com",
    role: "Өмгөөлөгч",
    status: "Идэвхгүй",
    joinDate: "2025-01-10",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Хараа Хагасшил",
    email: "david@example.com",
    role: "Өмгөөлөгч",
    status: "Идвэхтэй",
    joinDate: "2025-03-05",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Сэрээ Халбага",
    email: "eva@example.com",
    role: "Хэрэглэгч",
    status: "Хүлээгдэж буй",
    joinDate: "2025-03-20",
    avatar: "/placeholder.svg",
  },
];

const statusColors = {
  Идвэхтэй: "bg-green-100 text-green-800",
  Идэвхгүй: "bg-gray-100 text-gray-800",
  Хүлээгдэж: "bg-yellow-100 text-yellow-800",
};

const roleColors = {
  Админ: "bg-red-100 text-red-800",
  Өмгөөлөгч: "bg-blue-100 text-blue-800",
  Хэрэглэгч: "bg-gray-100 text-gray-800",
};

export function UserTable() {
  return (
    <Card className="bg-white border shadow-sm">
      <CardHeader>
        <CardTitle>Хэрэглэгчийн удирдлага</CardTitle>
        <CardDescription>Хэрэглэгчийн дансуудыг удирдах болон хянах</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
              <TableHead className="font-semibold">Хэрэглэгч</TableHead>
              <TableHead className="font-semibold">Үүрэг</TableHead>
              <TableHead className="font-semibold">Статус</TableHead>
              <TableHead className="font-semibold">Бүртгэсэн огноо</TableHead>
              <TableHead className="font-semibold text-right">Үйлдлүүд</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={roleColors[user.role]}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusColors[user.status]}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">{user.joinDate}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border shadow-lg">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" />
                        Дэлгэрэнгүйг харах
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Хэрэглэгчийн мэдээллийг засах
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Хэрэглэгч устгах
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}