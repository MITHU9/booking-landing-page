"use client";

import { BookmarkIcon, ArrowRightIcon, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const HotelHeader = (): JSX.Element => (
  <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-6">
    {/* Left Content */}
    <div className="flex flex-col items-start gap-3">
      <h1 className="font-medium text-[#252525] text-[28px] md:text-[31.2px] font-['DM_Sans',Helvetica] leading-tight">
        El Aurassi Hotel
      </h1>
      <p className="max-w-full md:max-w-[486px] text-[#626262] text-[14px] md:text-[15.6px]">
        Spacious, modern rooms with panoramic views of the Mediterranean Sea.
      </p>
    </div>

    {/* Right Actions */}
    <div className="flex flex-row items-center gap-4 sm:gap-5">
      <div className="flex h-[60px] sm:h-[70px] items-center gap-[12px] p-[12px] sm:p-[15px] bg-[#007dd01a] rounded-full">
        <BookmarkIcon className="text-[#007ccf] w-6 h-6 sm:w-10 sm:h-[43.64px]" />
      </div>

      <div className="flex w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] items-center justify-center bg-[#007dd01a] rounded-full">
        <Share2 className="w-6 h-6 sm:w-10 sm:h-[43.64px] text-[#007ccf]" />
      </div>

      <Button className="bg-[#007ccf] rounded-full px-5 sm:px-[26px] py-2.5 flex items-center justify-center">
        <span className="font-semibold text-white text-base sm:text-xl">
          Reserve
        </span>
        <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
      </Button>
    </div>
  </div>
);

export default HotelHeader;
