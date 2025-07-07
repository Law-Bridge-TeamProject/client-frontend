// components/NotificationListener.tsx
import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import { useUser } from "@clerk/nextjs";

export function NotificationListener() {
  const { user } = useUser();
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    const userId = user.id;

    const channel = `notification:${userId}`;

    socket.on(channel, (data) => {
      console.log("🔔 Realtime Notification:", data);
      setNotifications((prev) => [...prev, data]);
    });

    return () => {
      socket.off(channel);
    };
  }, [user]);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-xl rounded">
      {notifications.map((n, i) => (
        <div key={i} className="text-sm text-gray-800">
          <strong>{n.type}</strong>: {n.content}
        </div>
      ))}
    </div>
  );
}
