import { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { Bath, BedSingle, InfoIcon, Maximize2, StarIcon } from "lucide-react";

const RoomCard = (): JSX.Element => {
  const similarProperties = Array(8).fill({
    name: "Sofitel Algiers Hamma Garden",
    description:
      "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: "699",
    bedrooms: "2",
    bathrooms: "2",
    size: "1,200",
  });

  return (
    <>
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-bold text-[#252525] text-[20.8px] font-['DM_Sans',Helvetica]">
          You may also like
        </h2>
        <div className="flex flex-col items-start gap-10 w-full">
          {[0, 1].map((rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-col items-start gap-5 w-full"
            >
              <div className="flex items-start gap-[30px] w-full overflow-hidden">
                {similarProperties
                  .slice(rowIndex * 4, (rowIndex + 1) * 4)
                  .map((property, index) => (
                    <Card
                      key={`property-${rowIndex}-${index}`}
                      className="w-[326px] bg-transparent border-none shadow-none"
                    >
                      <CardContent className="flex flex-col items-start justify-center gap-3 p-0">
                        <div className="flex flex-col items-start">
                          <Image
                            className="w-[326px] h-[243px]"
                            alt="Property"
                            src="/images/image-2.jpg"
                            width={326}
                            height={243}
                          />
                          <div className="flex items-center gap-0.5 px-4 py-[15px] mt-[-52px] bg-[#0000001a] rounded-[0px_33px_0px_29px]">
                            <StarIcon className="text-[#FFD700] fill-[#FFD700] size-5" />
                            <span className="w-[21px] font-medium text-white text-sm font-['DM_Sans',Helvetica]">
                              4.5
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-2 w-full">
                          <h3 className="font-semibold text-[#252525] text-xl font-['DM_Sans',Helvetica]">
                            {property.name}
                          </h3>
                          <p className="font-light text-[#626262] text-xs font-['DM_Sans',Helvetica]">
                            {property.description}
                          </p>
                          <div className="flex items-center gap-2 w-full">
                            <span className="font-normal text-[#000000] text-lg font-['DM_Sans',Helvetica]">
                              <span>{property.price} </span>
                              <span className="text-[10px]">Per Night</span>
                            </span>
                          </div>
                          <div className="flex items-center justify-between w-[326px] px-[7px]">
                            <div className="flex items-center gap-1">
                              <BedSingle className="size-4" />
                              <div className="flex items-end gap-1">
                                <span className="font-normal text-[#252525] text-sm font-['DM_Sans',Helvetica]">
                                  {property.bedrooms}
                                </span>
                                <span className="font-normal text-[#252525] text-[10px] font-['DM_Sans',Helvetica]">
                                  Bedroom
                                </span>
                              </div>
                            </div>
                            <Separator
                              orientation="vertical"
                              className="h-2.5"
                            />
                            <div className="flex items-center gap-1">
                              <Bath className="size-4" />
                              <div className="flex items-end gap-1">
                                <span className="font-normal text-[#252525] text-sm font-['DM_Sans',Helvetica]">
                                  {property.bathrooms}
                                </span>
                                <span className="font-normal text-[#252525] text-[10px] font-['DM_Sans',Helvetica]">
                                  Bathroom
                                </span>
                              </div>
                            </div>
                            <Separator
                              orientation="vertical"
                              className="h-2.5"
                            />
                            <div className="flex items-center gap-1">
                              <Maximize2 className="size-4" />
                              <div className="flex items-end gap-1">
                                <span className="font-normal text-[#252525] text-sm font-['DM_Sans',Helvetica]">
                                  {property.size}
                                </span>
                                <span className="font-normal text-[#252525] text-[10px] font-['DM_Sans',Helvetica]">
                                  sq ft
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                          <Button className="w-[245px] bg-[#007ccf] rounded-[35px]">
                            <span className="font-semibold text-white text-xl font-['DM_Sans',Helvetica]">
                              Book Now
                            </span>
                          </Button>
                          <div className="flex w-[46px] h-[46px] items-center p-[11px] bg-[#007dd01a] rounded-[35px]">
                            <InfoIcon className="flex-1 h-6 text-[#007ccf]" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RoomCard;
