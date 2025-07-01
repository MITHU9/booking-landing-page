"use client";

import { BookmarkIcon, ArrowRightIcon, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const HotelHeader = (): JSX.Element => (
  <div className="flex items-end justify-between w-full">
    <div className="flex flex-col items-start gap-3">
      <h1 className="font-medium text-[#252525] text-[31.2px] font-['DM_Sans',Helvetica]">
        El Aurassi Hotel
      </h1>
      <p className="max-w-[486px] text-[#626262] text-[15.6px]">
        Spacious, modern rooms with panoramic views of the Mediterranean Sea.
      </p>
    </div>
    <div className="flex items-center gap-5">
      <div className="flex h-[70px] items-center gap-[15px] p-[15px] bg-[#007dd01a] rounded-[61px]">
        <BookmarkIcon className="w-10 h-[43.64px]" />
      </div>
      <div className="flex w-[70px] h-[70px] items-center justify-center bg-[#007dd01a] rounded-[36px]">
        <div className="relative w-[39px] h-[38px]">
          <Share2 className="w-10 h-[43.64px] text-[#007ccf]" />
        </div>
      </div>
      <Button className="bg-[#007ccf] rounded-[35px] px-[26px] py-2.5">
        <span className="font-semibold text-white text-xl">Reserve</span>
        <ArrowRightIcon className="w-6 h-6 ml-2" />
      </Button>
    </div>
  </div>
);

export default HotelHeader;
