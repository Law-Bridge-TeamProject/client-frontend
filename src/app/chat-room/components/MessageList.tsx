"use client";

import React from "react";
import { useLocalParticipant } from "@livekit/components-react";
import { MessageBubble } from "./MessageBubble";
import { Message } from "../types/chat";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const { localParticipant } = useLocalParticipant();

  return (
    <div className="space-y-4">
      {messages.map((msg, index) => {
        const isOwnMessage = msg.sender?.id === localParticipant.identity;

        const fileMatch = msg.text.match(/\[file:(.+?)\]\((.+?)\)/);

        return (
          <div
            key={index}
            className={`flex ${
              isOwnMessage ? "justify-end" : "justify-start"
            }`}>
            {fileMatch ? (
              <div className="max-w-xs rounded-md p-2 bg-gray-200 dark:bg-neutral-700">
                {fileMatch[2].startsWith("data:image") && (
                  <img
                    src={fileMatch[2]}
                    alt={fileMatch[1]}
                    className="rounded-md"
                  />
                )}
                {fileMatch[2].startsWith("data:audio") && (
                  <audio controls className="w-full">
                    <source src={fileMatch[2]} type="audio/*" />
                  </audio>
                )}
                {!fileMatch[2].startsWith("data:image") &&
                  !fileMatch[2].startsWith("data:audio") && (
                    <a
                      href={fileMatch[2]}
                      download
                      className="text-blue-500 underline break-all">
                      {fileMatch[1]}
                    </a>
                  )}
              </div>
            ) : (
              <MessageBubble message={msg} isOwnMessage={isOwnMessage} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
