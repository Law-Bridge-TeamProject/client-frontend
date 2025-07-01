"use client";

import { SignUp } from "@clerk/nextjs";

export default function LawyerSignUpPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-white">
      <div className="flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <SignUp
            path="/sign-up/lawyer"
            routing="path"
            signInUrl="/sign-in"
            afterSignUpUrl="/sign-up/role"
            appearance={{
              elements: {
                formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                card: "shadow-none border border-green-100 rounded-lg",
              },
            }}
          />
        </div>
      </div>

      <div className="hidden md:block relative">
        <img
          src="/lawbridgeLOGO.png"
          alt="LawBridge Sign Up"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
