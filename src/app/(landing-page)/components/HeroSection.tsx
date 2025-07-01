import React from "react";
import { Users, Clock8, Shield } from "lucide-react";
import { Button, Input } from "@/components/ui";

const HeroSection = () => {
  return (
    <div className=" h-170 p-50 bg-linear-to-t to-[#003366] from-[#1453b4] flex flex-col items-center justify-center space-y-10 text-center text-[#f8f8f8]">
      <div>
        <h1 className="text-5xl font-bold font-mont mt-10">Монголын хууль зүйн шийдлүүдэд хүрэх таны гүүр.</h1>
        <h2 className="mt-5 text-2xl font-semibold font-opensans">
          LawBridge нь хууль зүйн туслалцаа хайж буй хувь хүмүүсийг чадварлаг хуульчидтай холбож, хялбар цаг товлох
          болон үнэ цэнэтэй мэдээлэл өгдөг.
        </h2>
      </div>

      <div className="space-y-5 mt-10 mb-20 ">
        <div className="flex flex-row space-x-5">
          <Button className="bg-[#D4AF37] text-[#333333] text-[20px] p-6 hover:cursor-pointer hover:opacity-85">
            Өмгөөлөгчдийг харах
          </Button>
          <Button className="bg-[#f8f8f8] text-[#0a2342] text-[20px] p-6 hover:cursor-pointer hover:opacity-85">
            Хууль зүйн туслалцаа авах
          </Button>
        </div>
        <div className="relative w-full">
          <Input placeholder="Хууль зүйн талбар эсвэл өмгөөлөгч хайх" className="bg-[#eee] text-[#333333] p-6" />
          <Button className="absolute top-1/2 -translate-y-1/2 right-2 text-[#eee] bg-[#003366] text-[16px] p-5 hover:cursor-pointer hover:opacity-85">
            Хайх
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 text-2xl text-[#f8f8f8] mx-40">
        <div className="flex flex-col">
          <Shield className="w-full h-20 mb-5 opacity-80" />
          <h3>Verified Lawyers</h3>
          <p className="opacity-70 text-[16px]">All lawyers are licensed and verified for your peace of mind</p>
        </div>
        <div className="flex flex-col">
          <Clock8 className="w-full h-20 mb-5 opacity-80" />
          <h3>24/7 Availability</h3>
          <p className="opacity-70 text-[16px]">Get legal help when you need it, day or night</p>
        </div>
        <div className="flex flex-col">
          <Users className="w-full h-20 mb-5 opacity-80" />
          <h3>Expert Network</h3>
          <p className="opacity-70 text-[16px]">Access thousands of specialized legal professionals</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default HeroSection;
