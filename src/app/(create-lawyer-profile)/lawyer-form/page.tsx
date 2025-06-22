"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function LawyerFormPage() {
  const { user } = useUser();
  const { push } = useRouter();
  const [data, setData] = useState({ name: "", license: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/lawyer/lawyer-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, userId: user?.id }),
    });
    push("/pending-approval");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Өмгөөлөгчийн бүртгэл</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Овог нэр"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Лиценз дугаар"
          value={data.license}
          onChange={(e) => setData({ ...data, license: e.target.value })}
          className="border p-2"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Илгээх
        </button>
      </form>
    </div>
  );
}
