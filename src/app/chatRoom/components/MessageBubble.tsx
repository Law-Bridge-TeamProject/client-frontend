
import React from 'react';
import { Shield, Download, Play } from 'lucide-react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
  isOwnMessage: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwnMessage }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMessageContent = () => {
    switch (message.type) {
      case 'image':
        return (
          <div className="max-w-xs">
            <img
              src={message.fileUrl}
              alt={message.fileName}
              className="rounded-lg w-full h-auto"
            />
            <p className="text-sm mt-2">{message.text}</p>
          </div>
        );
      
      case 'video':
        return (
          <div className="max-w-xs">
            <div className="relative bg-slate-800 rounded-lg overflow-hidden">
              <video
                src={message.fileUrl}
                className="w-full h-32 object-cover"
                controls
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-sm mt-2">{message.text}</p>
          </div>
        );
      
      case 'document':
        return (
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg border">
            <div className="p-2 bg-blue-100 rounded">
              <Download className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{message.fileName}</p>
              <p className="text-xs text-slate-600">{message.text}</p>
            </div>
          </div>
        );
      
      default:
        return <p>{message.text}</p>;
    }
  };

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isOwnMessage ? 'order-2' : 'order-1'}`}>
        {!isOwnMessage && (
          <div className="flex items-center space-x-2 mb-1">
            <img
              src={message.sender.avatar}
              alt={message.sender.name}
              className="w-6 h-6 rounded-full"
            />
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-slate-700">{message.sender.name}</span>
              {message.sender.isLawyer && (
                <Shield className="w-4 h-4 text-blue-600">
                  <title>Verified Lawyer</title>
                </Shield>
              )}
            </div>
          </div>
        )}
        
        <div
          className={`rounded-2xl px-4 py-3 ${
            isOwnMessage
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-800 border border-slate-200'
          }`}
        >
          {renderMessageContent()}
        </div>
        
        <div className={`text-xs text-slate-500 mt-1 ${isOwnMessage ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};
