"use client";

import React, { useEffect, useState } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import {VideoCallModal}  from './VideoCallModal';

import "@livekit/components-styles";

import { ChatHeader } from "./ChatHeader";
import Chat from "./Chat";

interface ChatInterfaceProps {
  token: string;
}

const ChatInterface = ({ token }: ChatInterfaceProps) => {
  const [livekitToken, setLivekitToken] = useState<string>(token);
  const [activeCall, setActiveCall] = useState<"video" | "audio" | null>(null);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  const currentUserId = "client1";

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/chatRoom/api/livekit-token?userId=${currentUserId}&room=lawyer-room`
      );
      const data = await res.json();
      setLivekitToken(data.token);
    };
    fetchToken();
  }, [currentUserId]);

  const handleVideoCall = () => {
    setActiveCall("video");
    setIsVideoCallOpen(true);
  };

  const handleAudioCall = () => {
    setActiveCall("audio");
    setIsVideoCallOpen(true);
  };

  const handleEndCall = () => {
    setActiveCall(null);
    setIsVideoCallOpen(false);
  };

  if (!livekitToken) return <div>Connecting...</div>;

  const otherUser = {
    id: "lawyer1",
    name: "Sarah Johnson",
    isLawyer: true,
    avatar: "/placeholder.svg",
  };

  return (
    <LiveKitRoom
      token={livekitToken}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect
      data-lk-theme="default"
      style={{ height: "100vh" }}>
      <div className="flex flex-col h-full bg-slate-50">
        <ChatHeader
          user={otherUser}
          onVideoCall={handleVideoCall}
          onAudioCall={handleAudioCall}
          isCallActive={activeCall !== null}
          onEndCall={handleEndCall}
        />

        <div className="flex-1 flex overflow-hidden flex-col md:flex-row transition-all duration-300">
          {isVideoCallOpen && activeCall && (
            <VideoCallModal
              user={otherUser}
              callType={activeCall}
              onEndCall={handleEndCall}
            />
          )}

          <div
            className={`transition-all ${
              isVideoCallOpen ? "w-full md:w-1/3 h-1/2 md:h-auto" : "w-full"
            }`}>
            <Chat />
          </div>
        </div>
      </div>
    </LiveKitRoom>
  );
};

export default ChatInterface;
