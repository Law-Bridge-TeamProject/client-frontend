"use client";

import { SignUp } from "@clerk/nextjs";
// import { useEffect } from "react";

export default function LawyerSignUpPage() {
  // useEffect(() => {
  //   localStorage.setItem("selected_role", "lawyer");
  // }, []);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUp
        path="/sign-up/lawyer"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/sign-up/role"
        appearance={{
          elements: {
            formButtonPrimary: "bg-green-600 hover:bg-green-700",
          },
        }}
      />
    </div>
  );
}
