"use client";

import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import OtpInput from "@/components/OtpInput";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signIn, isLoaded, setActive } = useSignIn();
  const [identifier, setIdentifier] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const isPhone = /^\+?[0-9]{8,15}$/.test(identifier);
  const strategy = isPhone ? "phone_code" : "email_code";

  const handleIdentifierSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");

    try {
      const res = await signIn.create({
        identifier,
        strategy,
      });

      if (res.status === "needs_first_factor") {
        setPending(true);
      }
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray((err as any).errors) &&
        (err as any).errors[0]?.message
      ) {
        setError((err as any).errors[0].message);
      } else {
        setError("Код илгээхэд алдаа гарлаа.");
      }
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");

    try {
      const res = await signIn.attemptFirstFactor({
        strategy,
        code: otpCode,
      });

      if (res.status === "complete") {
        await setActive({ session: res.createdSessionId });
        window.location.href = "/";
      }
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray((err as any).errors) &&
        (err as any).errors[0]?.message
      ) {
        setError((err as any).errors[0].message);
      } else {
        setError("OTP код буруу байна.");
      }
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-200 h-120 mt-40 mx-10", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0 border-[#dbeafe]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <form
              onSubmit={pending ? handleOTPSubmit : handleIdentifierSubmit}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Тавтай морилно уу?</h1>
                <p className="text-muted-foreground text-sm">
                  Login to your LawBridge account
                </p>
              </div>

              {!pending ? (
                <>
                  <div className="grid gap-3">
                    <Label htmlFor="identifier">
                      Имэйл эсвэл утасны дугаар
                    </Label>
                    <Input
                      id="identifier"
                      type="text"
                      placeholder="name@gmail.com эсвэл +97688112233"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#2563eb] text-white"
                  >
                    Үргэлжлүүлэх
                  </Button>
                </>
              ) : (
                <>
                  <div className="grid gap-3">
                    <Label>Баталгаажуулах код</Label>
                    <OtpInput onChange={setOtpCode} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#2563eb] text-white"
                  >
                    Нэвтрэх
                  </Button>
                </>
              )}

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
            </form>
            <div className="flex justify-center text-center text-sm mt-4 gap-1">
              Шинэ хэрэглэгч?
              <a href="/sign-up" className="underline underline-offset-4">
                Бүртгэл үүсгэх
              </a>
            </div>
          </div>

          <div className="bg-muted relative hidden md:block">
            <img
              src="/lawbridgeLOGO.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
