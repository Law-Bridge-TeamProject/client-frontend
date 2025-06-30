"use client";

import React from "react";
import { Button, Input } from "@/components/ui";
import { useRouter } from "next/navigation";
import FooterPage from "./components/FooterPage";
import Introduction from "./components/Introduction";

const MainPage = () => {
  const { push } = useRouter();

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4  text-center p-6 items-center text-[18px] px-100">
        <div className="flex">
          {/* <img src="LOGO.png" alt="" className="w-10" /> */}
          <h1 className="font-bold text-2xl">LawBridge</h1>
        </div>
        <nav className="space-x-5">
          <a href="">legal articles</a>
          <a href="">about</a>
          <a href="">contact</a>
        </nav>
        <div className="flex">
          <Button onClick={() => push("/sign-up")}>login</Button>
          <Button onClick={() => push("/sign-up")}>sign up</Button>
        </div>
      </div>
      <Introduction /> <FooterPage />
    </div>
  );
};

export default MainPage;
