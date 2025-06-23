"use client";

import { SignUp } from "@clerk/nextjs";

export default function UserSignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUp
        path="/sign-up/user"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/sign-up/role"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
          },
        }}
      />
    </div>
  );
}
