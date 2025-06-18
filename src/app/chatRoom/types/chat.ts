
export interface User {
  id: string;
  name: string;
  isLawyer: boolean;
  avatar: string;
}

export interface Message {
  text: string;
  type: "text" | "image" | "video" | "document";
  fileUrl?: string;
  fileName?: string;
  timestamp: Date;
  sender: {
    id: string;
    name: string;
    avatar: string;
    isLawyer: boolean;
  };
}
