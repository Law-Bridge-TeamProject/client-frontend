"use client";

import { useRouter } from "next/navigation";

export const RoleSelectPage = () => {
  const { push } = useRouter();

  const selectRole = (role: "user" | "lawyer") => {
    localStorage.setItem("selected_role", role);
    push(`/sign-up/${role}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Бүртгэл үүсгэх</h1>
      <button
        onClick={() => selectRole("user")}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Хэрэглэгчээр бүртгүүлэх
      </button>
      <button
        onClick={() => selectRole("lawyer")}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Өмгөөлөгчөөр бүртгүүлэх
      </button>
    </div>
  );
};

export default RoleSelectPage;
