"use client";

import { useEffect, useState, useCallback } from "react";
import { useRoomContext } from "@livekit/components-react";

interface ChatMessage {
  message: string;
  from?: { identity: string; name?: string };
}

const useChat = () => {
  const room = useRoomContext();
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!room) return;

    const handleData = (payload: Uint8Array, participant: any) => {
      try {
        const text = new TextDecoder().decode(payload);
        setChatMessages((msgs) => [
          ...msgs,
          {
            message: text,
            from: {
              identity: participant.identity,
              name: participant.name,
            },
          },
        ]);
      } catch {
      }
    };

    room.on("dataReceived", handleData);

    return () => {
      room.off("dataReceived", handleData);
    };
  }, [room]);

  const send = useCallback(
    (msg: string) => {
      if (!room) return;
      setIsSending(true);
      try {
        room.localParticipant?.publishData(new TextEncoder().encode(msg), {
          reliable: true,
        });
        setChatMessages((msgs) => [
          ...msgs,
          {
            message: msg,
            from: {
              identity: room.localParticipant.identity,
              name: room.localParticipant.name,
            },
          },
        ]);
      } finally {
        setIsSending(false);
      }
    },
    [room]
  );

  return { chatMessages, send, isSending };
};

export default useChat;
