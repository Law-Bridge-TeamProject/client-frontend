"use client";
import { SignUp } from "@clerk/nextjs";

export default function LawyerSignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUp
        path="/lawyer-sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            formButtonPrimary: "bg-green-600 hover:bg-green-700",
          },
        }}
        afterSignUpUrl="/lawyer-form"
      />
    </div>
  );
}