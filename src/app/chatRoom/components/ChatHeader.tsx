import React from "react";
import { Video, PhoneCall, Shield } from "lucide-react";

interface ChatHeaderProps {
  user: {
    id: string;
    name: string;
    isLawyer: boolean;
    avatar: string;
  };
  onVideoCall: () => void;
  onAudioCall: () => void;
  isCallActive: boolean;
  onEndCall: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  user,
  onVideoCall,
  onAudioCall,
  isCallActive,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-slate-800">
                {user.name}
              </h2>
              {user.isLawyer && (
                <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  <Shield className="w-3 h-3" />
                  <span>Verified Lawyer</span>
                </div>
              )}
            </div>
            <p className="text-sm text-slate-600">
              {isCallActive ? "In call" : "Online • Available for consultation"}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onAudioCall}
            disabled={isCallActive}
            className="p-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors duration-200"
            title="Start audio call">
            <PhoneCall className="w-5 h-5 text-slate-700" />
          </button>

          <button
            onClick={onVideoCall}
            disabled={isCallActive}
            className="p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-colors duration-200"
            title="Start video call">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
