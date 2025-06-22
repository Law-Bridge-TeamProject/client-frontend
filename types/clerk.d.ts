import type { PublicUserMetadata } from "@clerk/types";

declare global {
  declare module "@clerk/types" {
    interface PublicUserMetadata {
      role?: "user" | "lawyer";
    }
  }
}

export {}; 