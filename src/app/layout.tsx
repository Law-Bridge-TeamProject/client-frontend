import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloWrapper } from "@/providers/ApolloWrapper";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { type Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LawBridge",
  description: "LawBridge - Next.js with Clerk & Apollo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
      <ApolloWrapper>
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
          <body
            className={`min-h-screen bg-background font-sans antialiased ${geistSans.variable} ${geistMono.variable}`}
          >
            <SignedOut>
              <header className="flex justify-between items-center px-6 h-16 ">
                <div className="text-lg font-bold text-blue-600">LawBridge</div>
                <div className="flex gap-2">
                  <a
                    href="/sign-in"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition flex justify-center items-center"
                  >
                    Log In
                  </a>
                  <a
                    href="/sign-up"
                    className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md transition flex justify-center items-center"
                  >
                    Sign Up
                  </a>
                </div>
              </header>
            </SignedOut>
            <SignedIn>
              <header className="flex justify-between items-center px-6 h-16">
                <div className="text-lg font-bold text-blue-600">LawBridge</div>
                <UserButton afterSignOutUrl="/sign-in" />
              </header>
            </SignedIn>

            <main className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
              {children}
            </main>
          </body>
        </html>
      </ApolloWrapper>
    </ClerkProvider>
  );
}
