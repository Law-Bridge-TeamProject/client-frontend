"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function AfterSignUpPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    const saveRole = async () => {
      if (!isLoaded || !user) return;

      const role = localStorage.getItem("selected_role");

      if (!role || !["user", "lawyer"].includes(role)) {
        console.error("Invalid or missing role");
        return;
      }

      try {
        const res = await fetch("/api/set-role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }),
        });

        if (!res.ok) throw new Error("Failed to save role");

        if (role === "lawyer") {
          router.push("/lawyer-form");
        } else {
          router.push("/");
        }
      } catch (err) {
        console.error("Error saving role:", err);
      }
    };

    saveRole();
  }, [isLoaded, user, router]);

  return (
    <p className="p-6 text-center">Бүртгэл амжилттай. Түр хүлээнэ үү...</p>
  );
}
