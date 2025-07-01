import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { JSX } from "react";
import {
  AirVent,
  Dumbbell,
  House,
  LandPlot,
  MessageCircle,
  UtensilsCrossed,
  WavesLadder,
  Wifi,
} from "lucide-react";

const propertyFeatures = [
  { icon: <Wifi className="size-4" />, name: "Wifi" },
  { icon: <UtensilsCrossed className="size-4" />, name: "Dining" },
  { icon: <WavesLadder className="size-4" />, name: "Swimming Pool" },
  { icon: <AirVent className="size-4" />, name: "Air Conditioning" },
  { icon: <Dumbbell className="size-4" />, name: "Gym" },
];

const PropertyDetails = (): JSX.Element => (
  <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-[105px] w-full max-w-7xl px-4">
    {/* Left content */}
    <div className="flex flex-col w-full lg:w-[646.1px] items-start gap-6 lg:gap-[31px]">
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex items-center gap-6 flex-wrap">
          <TabsList className="bg-transparent p-0 h-auto gap-[20px] sm:gap-[33px] flex flex-row flex-wrap">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:text-[#007dd0] data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#007dd0] data-[state=active]:rounded-none data-[state=active]:shadow-none px-0 py-0 h-auto"
            >
              Over View
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="text-[#626262] font-normal px-0 py-0 h-auto"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="text-[#626262] font-normal px-0 py-0 h-auto"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          {/* Message button right after last tab */}
          <Badge className="bg-[#007dd0] rounded-[20px] gap-2 px-2.5 py-1 whitespace-nowrap">
            <MessageCircle />
            <span className="font-normal text-white text-sm font-['DM_Sans',Helvetica]">
              Message
            </span>
          </Badge>
        </div>
      </Tabs>

      {/* Property Info */}
      <div className="flex flex-col items-start gap-5 w-full">
        {/* Property Type & Size */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
          {/* Property Type */}
          <div className="flex flex-col w-full sm:w-[117px] items-start gap-2">
            <h3 className="text-base font-semibold text-[#252525]">
              Property Type
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center p-[12px] rounded border border-[#ededf2]">
                <House className="size-4" />
              </div>
              <span className="text-black text-sm">Resorts</span>
            </div>
          </div>

          {/* Property Size */}
          <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
            <h3 className="text-base font-semibold text-[#252525]">
              Property Size
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center p-[12px] rounded border border-[#ededf2]">
                <LandPlot className="size-4" />
              </div>
              <span className="text-black text-sm">12000 sqft</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h3 className="text-base font-semibold text-[#252525]">Features</h3>

          {/* Large & Medium Devices: Two rows layout, Mobile: stacked */}
          <div className="w-full">
            <div className="hidden md:flex items-center gap-[14.4px] mb-3">
              {propertyFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="flex items-center gap-[9.6px]"
                >
                  <div className="flex items-center justify-center p-[11.04px] rounded-[6.62px] border-[0.55px] border-[#b8cdf9]">
                    {feature.icon}
                  </div>
                  <span className="font-normal text-black text-base tracking-[0.24px] leading-[22.4px] whitespace-nowrap font-['Urbanist',Helvetica]">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-[33.6px]">
              {propertyFeatures.slice(3).map((feature, index) => (
                <div
                  key={`feature-${index + 3}`}
                  className="flex items-center gap-[9.6px]"
                >
                  <div className="flex items-center justify-center p-[11.04px] rounded-[6.62px] border-[0.55px] border-[#b8cdf9]">
                    {feature.icon}
                  </div>
                  <span className="font-normal text-black text-base tracking-[0.24px] leading-[22.4px] whitespace-nowrap font-['Urbanist',Helvetica]">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-3 md:hidden">
              {propertyFeatures.map((feature, index) => (
                <div
                  key={`feature-mobile-${index}`}
                  className="flex items-center gap-[9.6px]"
                >
                  <div className="flex items-center justify-center p-[11.04px] rounded-[6.62px] border-[0.55px] border-[#b8cdf9]">
                    {feature.icon}
                  </div>
                  <span className="font-normal text-black text-base tracking-[0.24px] leading-[22.4px] whitespace-nowrap font-['Urbanist',Helvetica]">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Price card */}
    <Card className="w-[268px] h-60 border-[#a3d0ee] shadow-[0px_4px_26.5px_#00000040] rounded-xl">
      <CardContent className="flex flex-col items-center justify-center gap-5 px-[31px] py-[15px] h-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <p className="font-normal text-[#000000] text-base font-['DM_Sans',Helvetica]">
            1 week, 2 adults, 1 child
          </p>
          <p className="font-bold text-[#000000] text-xl font-['DM_Sans',Helvetica]">
            USD $6,112
          </p>
        </div>
        <Button className="w-full bg-[#007ccf] rounded-[24.2px]">
          <span className="font-normal text-white text-sm font-['DM_Sans',Helvetica]">
            Reserve
          </span>
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default PropertyDetails;
