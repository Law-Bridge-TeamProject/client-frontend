"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLocalParticipant } from "@livekit/components-react";

import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import useChat from "../hooks/useChat";
import { Message } from "../types/chat";

const Chat = () => {
  const { chatMessages, send, isSending } = useChat();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { localParticipant } = useLocalParticipant();

  const messages: Message[] = chatMessages.map((msg) => {
    const fileMatch = msg.message.match(/^\[file\](.+)\((.+)\)$/);
    let type: Message["type"] = "text";
    let text = msg.message;
    let fileUrl: string | undefined = undefined;
    let fileName: string | undefined = undefined;

    if (fileMatch) {
      const [_, name, mimeType] = fileMatch;
      text = name.trim();
      fileName = name.trim();
      fileUrl = `/uploads/${fileName}`; 
      if (mimeType.startsWith("image/")) type = "image";
      else if (mimeType.startsWith("video/")) type = "video";
      else type = "document";
    }

    return {
      text,
      type,
      timestamp: new Date(),
      fileUrl,
      fileName,
      sender: {
        id: msg.from?.identity || "unknown",
        name: msg.from?.name || "Anonymous",
        avatar: "/placeholder.svg",
        isLawyer: msg.from?.identity?.startsWith("lawyer") || false,
      },
    };
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    return () => setPreviewUrl(null);
  }, [file]);

  const handleSend = (msg: string) => {
    if (isSending) return;

    const hasText = msg.trim().length > 0;
    const hasFile = Boolean(file);

    if (!hasText && !hasFile) return;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileDataUrl = reader.result as string;
        send(`[file:${file.name}](${fileDataUrl})`);
      };
      reader.readAsDataURL(file);
      setFile(null);
      setPreviewUrl(null);
    }

    if (hasText) {
      send(msg.trim());
    }
  };
  

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      </h2>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-neutral-600 dark:scrollbar-track-neutral-700">
        <MessageList messages={messages} />
      </div>

      {previewUrl && (
        <div className="mb-3 rounded-md overflow-hidden border border-gray-300 dark:border-neutral-600">
          {file?.type.startsWith("image/") && (
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-40 object-contain w-full"
            />
          )}
          {file?.type.startsWith("audio/") && (
            <audio controls className="w-full">
              <source src={previewUrl} type={file.type} />
            </audio>
          )}
        </div>
      )}

      <ChatInput
        onSend={handleSend}
        onFileChange={setFile}
        isSending={isSending}
      />
    </div>
  );
};

export default Chat;
