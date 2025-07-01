import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { JSX } from "react";

const propertyFeatures = [
  { icon: "/vuesax-bold-wifi-square.svg", name: "Wifi" },
  { icon: "/food.svg", name: "Dining" },
  { icon: "/swimming-3.svg", name: "Swimming Pool" },
  { icon: "/air-conditioner-2.svg", name: "Air Conditioning" },
  { icon: "/dumbbell-2.svg", name: "Gym" },
];

const PropertyDetails = (): JSX.Element => (
  <div className="flex items-start gap-[105px] w-full max-w-7xl">
    <div className="flex flex-col w-[646.1px] items-start gap-[31px]">
      <div className="flex flex-col items-start gap-[26px] w-full">
        {/* Tabs navigation */}
        <div className="flex items-center gap-[30px] w-full">
          <Tabs defaultValue="overview" className="w-auto">
            <TabsList className="bg-transparent p-0 h-auto gap-[33px]">
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
          </Tabs>

          <div className="ml-auto">
            <Badge className="bg-[#007dd0] rounded-[20px] gap-2 px-2.5 py-1">
              <Image
                className="w-6 h-6"
                alt="Notification bubble"
                src="/notification-bubble-1.svg"
                width={24}
                height={24}
              />
              <span className="font-normal text-white text-sm font-['DM_Sans',Helvetica]">
                Message
              </span>
            </Badge>
          </div>
        </div>

        {/* Property details */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-5">
            <div className="flex flex-col w-[117px] items-start gap-4">
              <h3 className="h-[29px] font-body-xlarge-semibold text-[#252525]">
                Property Type
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-[11.95px] rounded-[7.17px] border-[0.6px] border-[#ededf2]">
                  <Image
                    className="w-[12.1px] h-[12.1px]"
                    alt="House icon"
                    src="/vuesax-bulk-house-2.svg"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="font-body-large-regular text-black whitespace-nowrap">
                  Resorts
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <h3 className="h-[29px] font-body-xlarge-semibold text-[#252525] text-right whitespace-nowrap">
                Property Size
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-[11.95px] rounded-[7.17px] border-[0.6px] border-[#ededf2]">
                  <Image
                    className="w-3 h-3"
                    alt="Home icon"
                    src="/vuesax-bulk-home.svg"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="font-body-large-regular text-black whitespace-nowrap">
                  12000 sqft
                </span>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="h-[29px] font-body-xlarge-semibold text-[#252525] whitespace-nowrap">
              Features
            </h3>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-[14.4px] w-full">
                <div className="flex items-center gap-5">
                  {propertyFeatures.slice(0, 3).map((feature, index) => (
                    <div
                      key={`feature-${index}`}
                      className="flex items-center gap-[9.6px]"
                    >
                      <div className="flex items-center justify-center p-[11.04px] rounded-[6.62px] border-[0.55px] border-[#b8cdf9]">
                        <Image
                          className="w-[13.24px] h-[13.24px]"
                          alt={feature.name}
                          src={feature.icon}
                          width={13}
                          height={13}
                        />
                      </div>
                      <span className="font-normal text-black text-base tracking-[0.24px] leading-[22.4px] whitespace-nowrap font-['Urbanist',Helvetica]">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-[33.6px]">
                {propertyFeatures.slice(3).map((feature, index) => (
                  <div
                    key={`feature-${index + 3}`}
                    className="flex items-center gap-[9.6px]"
                  >
                    <div className="flex items-center justify-center p-[11.04px] rounded-[6.62px] border-[0.55px] border-[#b8cdf9]">
                      <Image
                        className="w-[13.93px] h-[13.93px]"
                        alt={feature.name}
                        src={feature.icon}
                        width={14}
                        height={14}
                      />
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
