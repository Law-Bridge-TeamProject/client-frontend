import "@clerk/types";

declare module "@clerk/types" {
  interface PublicUserMetadata {
    role?: "user" | "lawyer" | "admin";
    approved?: boolean;
  }
}
