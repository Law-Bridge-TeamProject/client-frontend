"use client";

import { Input } from "@/components/ui/input";
import { Paperclip } from "lucide-react";
import React, { useState, useRef } from "react";

interface Props {
  onSend: (msg: string) => void;
  onFileChange: (file: File | null) => void;
  isSending: boolean;
}

const ChatInput: React.FC<Props> = ({ onSend, onFileChange, isSending }) => {
  const [msg, setMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    onSend(msg.trim());
    setMsg("");
  };

  const handleFileIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(file);
    e.target.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-2">
      <button
        type="button"
        onClick={handleFileIconClick}
        title="Attach file"
        className="text-xl text-gray-500 hover:text-blue-600 transition">
        <Paperclip/>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        hidden
        accept="image/*,audio/*,application/*"
        onChange={handleFileChange}
      />

      <Input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
        disabled={isSending}
      />

      <button
        type="submit"
        disabled={!msg.trim() || isSending}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full transition disabled:opacity-50">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
