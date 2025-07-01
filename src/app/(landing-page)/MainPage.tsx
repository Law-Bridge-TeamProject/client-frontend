"use client";

import React from "react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import FooterPage from "./components/FooterPage";
import { MessageCircleMore } from "lucide-react";
import HeroSection from "./components/HeroSection";
import RecommendLawyers from "./components/RecommendLawyers";
import ShowArticleFromLawyers from "./components/ShowArticleFromLawyers";
const MainPage = () => {
  const { push } = useRouter();

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 py-2  text-[18px] px-100 border border-dashed">
        <div>
          <h1 className="font-bold text-2xl items-center justify-center">LawBridge</h1>
        </div>

        <div className="flex items-center justify-center">
          <Button onClick={() => push("/sign-in")} className="text-2xl">
            login
          </Button>
          <Button onClick={() => push("/sign-up")} className="text-2xl">
            sign up
          </Button>
        </div>
      </div>
      <HeroSection />
      <RecommendLawyers />
      <ShowArticleFromLawyers />
      <FooterPage />
      <div className="fixed right-20 bottom-20 rounded-full size-16 bg-[#1453b4] flex justify-center items-center hover:opacity-90">
        <MessageCircleMore className="size-[60%] text-white" />
      </div>
    </div>
  );
};

export default MainPage;
