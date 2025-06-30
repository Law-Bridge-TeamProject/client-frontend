"use client";

import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

type Props = {
  onChange: (code: string) => void;
};

export default function OtpInput({ onChange }: Props) {
  const length = 6;
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const updateOtp = (newOtp: string[]) => {
    setOtp(newOtp);
    const joined = newOtp.join("");
    onChange(joined);
  };

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    updateOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, length);
    if (!/^[0-9]+$/.test(paste)) return;

    const newOtp = paste.split("").slice(0, length);
    for (let i = 0; i < length; i++) {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = newOtp[i] || "";
      }
    }
    updateOtp(newOtp);
    inputsRef.current[length - 1]?.focus();
  };

  return (
    <div className="flex justify-center gap-2" onPaste={handlePaste}>
      {otp.map((digit, i) => (
        <Input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el!;
          }}
          defaultValue={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="w-10 h-10 text-center text-lg font-bold"
        />
      ))}
    </div>
  );
}
