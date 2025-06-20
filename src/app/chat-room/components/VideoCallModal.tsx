"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Monitor,
  MessageSquare,
} from "lucide-react";
import {
  useLocalParticipant,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { User } from "../types/chat";

interface VideoCallModalProps {
  user: User;
  onEndCall: () => void;
  callType: "video" | "audio";
}

export const VideoCallModal: React.FC<VideoCallModalProps> = ({
  user,
  onEndCall,
  callType,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(callType === "audio");
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [previewPosition, setPreviewPosition] = useState({
    x: window.innerWidth - 350,
    y: window.innerHeight - 780,
  });

  const previewRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // clamp function - утга хязгаарлах
  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  // Хулгана татах үйлдэл дээр хариу үйлдэл
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!previewRef.current) return;
    const rect = previewRef.current.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsDragging(true);
  };

  // Видео контейнер дотор draggable preview-г хязгаарлах mousemove эвэнт
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !videoContainerRef.current) return;

      const containerRect = videoContainerRef.current.getBoundingClientRect();

      let newX = e.clientX - containerRect.left - dragOffset.x;
      let newY = e.clientY - containerRect.top - dragOffset.y;

      // Хязгаарлалт хийх (preview элемент: 210x154)
      newX = clamp(newX, 0, containerRect.width - 210);
      newY = clamp(newY, 0, containerRect.height - 154);

      setPreviewPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const { localParticipant } = useLocalParticipant();

  const cameraTracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: false },
  ]);
  const cameraTrackRef = cameraTracks.find(
    (t) => t.participant?.isLocal && t.publication !== undefined
  );

  const screenShareTracks = useTracks([
    { source: Track.Source.ScreenShare, withPlaceholder: false },
  ]);
  const screenShareTrackRef = screenShareTracks.find(
    (t) => t.participant?.isLocal && t.publication !== undefined
  );

  const toggleMute = () => {
    localParticipant.setMicrophoneEnabled(!isMuted);
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    localParticipant.setCameraEnabled(isVideoOff);
    setIsVideoOff(!isVideoOff);
  };

  const toggleScreenShare = () => {
    if (isScreenSharing) {
      localParticipant.setScreenShareEnabled(false);
      setIsScreenSharing(false);
    } else {
      localParticipant.setScreenShareEnabled(true);
      setIsScreenSharing(true);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl w-full max-w-7xl shadow-2xl overflow-hidden border border-blue-500 flex flex-col md:flex-row transition-all duration-300">
        {/* Main Video/Content Section */}
        <div
          ref={videoContainerRef}
          style={{ minHeight: "400px" }}
          className="relative flex-1 bg-blue-800 rounded-t-2xl md:rounded-l-2xl h-[24rem] sm:h-[32rem] md:h-auto flex items-center justify-center">
          {isScreenSharing &&
          screenShareTrackRef &&
          screenShareTrackRef.publication ? (
            <VideoTrack
              trackRef={screenShareTrackRef}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl"
            />
          ) : callType === "video" &&
            !isVideoOff &&
            cameraTrackRef &&
            cameraTrackRef.publication ? (
            <VideoTrack
              trackRef={cameraTrackRef}
              className="absolute inset-0 rounded-lg w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl"
            />
          ) : (
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 border-4 border-blue-500 shadow-lg"
              />
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                {user.name}
              </h3>
              <p className="text-indigo-300 text-base sm:text-lg font-medium select-none">
                {callType === "audio"
                  ? "Audio Call in Progress"
                  : "Video is turned off"}
              </p>
            </div>
          )}

          {/* Self Preview (Draggable) */}
          {callType === "video" &&
            !isVideoOff &&
            cameraTrackRef &&
            cameraTrackRef.publication &&
            !isScreenSharing && (
              <div
                ref={previewRef}
                className="absolute top-[-100] w-[210px] h-[154px] bg-black rounded-lg border-2 border-white/50 shadow-lg cursor-move z-100 overflow-hidden"
                style={{
                  left: previewPosition.x,
                  top: previewPosition.y,
                }}
                onMouseDown={handleMouseDown}>
                <VideoTrack
                  trackRef={cameraTrackRef}
                  className="w-full h-full object-cover rounded-lg pointer-events-none bg-black"
                />
              </div>
            )}
        </div>

        {/* Chat Section */}
        <div
          className={`bg-blue-800 border-l border-blue-700 rounded-b-2xl md:rounded-r-2xl p-4 transition-all duration-300 ease-in-out flex flex-col ${
            isChatOpen
              ? "max-w-[320px] opacity-100 pointer-events-auto"
              : "max-w-0 opacity-0 pointer-events-none"
          }`}
          style={{ overflow: "hidden" }}>
          {/* Header */}
          <div className="text-indigo-300 font-semibold mb-4 text-lg select-none">
            Chat
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto bg-blue-900 rounded-lg p-3 text-white scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-blue-800">
            <p className="mb-2">
              <span className="font-bold">User:</span> Hello, how's it going?
            </p>
            <p>
              <span className="font-bold">Lawyer:</span> All good here! How
              about you?
            </p>
          </div>

          {/* Input Section */}
          <form
            className="mt-4 flex space-x-2"
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-lg px-3 py-2 text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-2 rounded-lg text-white font-semibold transition">
              Send
            </button>
          </form>
        </div>

        {/* Controls */}
        <div className="p-4 bg-blue-900 flex justify-center space-x-3 sm:space-x-4 border-t border-indigo-700 md:flex-col md:justify-start md:space-x-0 md:space-y-4 md:p-3 md:w-16">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute Microphone" : "Mute Microphone"}
            title={isMuted ? "Unmute Microphone" : "Mute Microphone"}
            className={`relative group flex items-center justify-center p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 ${
              isMuted
                ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                : "bg-blue-500 hover:bg-blue-700 focus:ring-indigo-500"
            } focus:outline-none focus:ring-2`}>
            {isMuted ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-white" />
            )}
            <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded mt-12 md:mt-0 md:-ml-24">
              {isMuted ? "Unmute" : "Mute"}
            </span>
          </button>

          {callType === "video" && (
            <button
              onClick={toggleVideo}
              aria-label={isVideoOff ? "Turn on Video" : "Turn off Video"}
              title={isVideoOff ? "Turn on Video" : "Turn off Video"}
              className={`relative group flex items-center justify-center p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 ${
                isVideoOff
                  ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                  : "bg-blue-500 hover:bg-blue-700 focus:ring-indigo-500"
              } focus:outline-none focus:ring-2`}>
              {isVideoOff ? (
                <VideoOff className="w-5 h-5 text-white" />
              ) : (
                <Video className="w-5 h-5 text-white" />
              )}
              <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded mt-12 md:mt-0 md:-ml-24">
                {isVideoOff ? "Video On" : "Video Off"}
              </span>
            </button>
          )}

          <button
            onClick={toggleScreenShare}
            aria-label={
              isScreenSharing ? "Stop Screen Sharing" : "Start Screen Sharing"
            }
            title={
              isScreenSharing ? "Stop Screen Sharing" : "Start Screen Sharing"
            }
            className={`relative group flex items-center justify-center p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 ${
              isScreenSharing
                ? "bg-green-400 hover:bg-green-700 focus:ring-green-500"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-900"
            } focus:outline-none focus:ring-2`}>
            <Monitor className="w-5 h-5 text-white" />
            <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded mt-12 md:mt-0 md:-ml-24">
              {isScreenSharing ? "Stop Sharing" : "Share Screen"}
            </span>
          </button>

          <button
            onClick={toggleChat}
            aria-label={isChatOpen ? "Close Chat" : "Open Chat"}
            title={isChatOpen ? "Close Chat" : "Open Chat"}
            className={`relative group flex items-center justify-center p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 ${
              isChatOpen
                ? "bg-emerald-400 hover:bg-emerald-500 focus:ring-emerald-400"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-900"
            } focus:outline-none focus:ring-2`}>
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded mt-12 md:mt-0 md:-ml-24">
              {isChatOpen ? "Close Chat" : "Open Chat"}
            </span>
          </button>

          <button
            onClick={onEndCall}
            aria-label="End Call"
            title="End Call"
            className="relative group flex items-center justify-center p-2 sm:p-3 rounded-full bg-red-700 hover:bg-red-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200">
            <PhoneOff className="w-5 h-5 text-white" />
            <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded mt-12 md:mt-0 md:-ml-24">
              End Call
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
