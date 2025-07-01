import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Button } from "../ui/button";
import { JSX } from "react";

const roomTypes = [
  {
    name: "Twin Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
  },
];

const RoomAvailability = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full border-b border-[#a3d0ee]">
      {/* Table header */}
      <div className="flex items-center justify-between w-full bg-[#007dd0]">
        {[
          "Room type",
          "Number of guests",
          "Price for 1 week",
          "Your choices",
          "Select rooms",
          "Your choices",
        ].map((header, index) => (
          <div
            key={`header-${index}`}
            className={`flex ${
              index === 4 ? "h-[41.5px]" : "w-[174px] h-[41.5px]"
            } items-center gap-[5px] p-[5px]`}
          >
            <span className="font-bold text-white text-base font-['DM_Sans',Helvetica]">
              {header}
            </span>
          </div>
        ))}
      </div>

      {/* Room rows */}
      {roomTypes.map((room, roomIndex) => (
        <div
          key={`room-${roomIndex}`}
          className={`flex items-start justify-between px-0 py-2.5 w-full ${
            roomIndex > 0 ? "border-t border-[#a3d0ee]" : ""
          }`}
        >
          {/* Room details */}
          <div className="flex flex-col w-[190.5px] items-start gap-2 px-[5px]">
            <h4 className="font-bold text-[#007dd0] text-xs font-['DM_Sans',Helvetica]">
              {room.name}
            </h4>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-end gap-1.5">
                <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                  <span className="font-bold">2 </span>
                  <span>single beds</span>
                </span>
                <Image
                  className="w-[18px] h-[18px]"
                  alt="Bed icon"
                  src="/bed-single-01.svg"
                  width={18}
                  height={18}
                />
                <Image
                  className="w-[18px] h-[18px]"
                  alt="Bed icon"
                  src="/bed-single-01.svg"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex items-center gap-[21.75px]">
                <div className="flex items-center gap-1.5">
                  <Image
                    className="w-[18px] h-[18px]"
                    alt="Door icon"
                    src="/door.svg"
                    width={18}
                    height={18}
                  />
                  <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                    Room
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    className="w-[18px] h-[18px]"
                    alt="Size icon"
                    src="/full-screen-corner-light.svg"
                    width={18}
                    height={18}
                  />
                  <div className="flex items-end gap-[3px]">
                    <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                      1,200
                    </span>
                    <span className="font-normal text-[#252525] text-[9px] font-['DM_Sans',Helvetica]">
                      sq ft
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <Image
                    className="w-[18px] h-[18px]"
                    alt="AC icon"
                    src="/fast-wind.svg"
                    width={18}
                    height={18}
                  />
                  <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                    Air condition
                  </span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <Image
                    className="w-[15px] h-[15px]"
                    alt="Bathroom icon"
                    src={
                      roomIndex === 0 ? "/bathtub-01-1.svg" : "/bathtub-01.svg"
                    }
                    width={15}
                    height={15}
                  />
                  <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                    Bathroom
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-[175.5px]">
                <div className="flex items-center gap-[3px]">
                  <Image
                    className="w-[18px] h-[18px]"
                    alt="TV icon"
                    src="/presentation-01.svg"
                    width={18}
                    height={18}
                  />
                  <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                    TV
                  </span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <Image
                    className="w-[18px] h-[18px]"
                    alt="WiFi icon"
                    src="/wifi-square.svg"
                    width={18}
                    height={18}
                  />
                  <span className="font-normal text-[#252525] text-xs font-['DM_Sans',Helvetica]">
                    WIFI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Separator orientation="vertical" className="h-auto" />

          {/* Guests */}
          <div className="flex w-[174px] items-center gap-2 px-[5px]">
            {[0, 1].map((_, i) => (
              <div key={`guest-icon-${i}`} className="relative w-6 h-6">
                <Image
                  className="absolute w-[17px] h-1.5 top-[15px] left-[3px]"
                  alt="Guest icon"
                  src="/ellipse-45.svg"
                  width={17}
                  height={6}
                />
                <div className="absolute w-2.5 h-2.5 top-[3px] left-[7px] rounded-[5px] border-2 border-solid border-[#626262]" />
              </div>
            ))}
          </div>

          <Separator orientation="vertical" className="h-auto" />

          {/* Price */}
          <div className="flex w-[174px] items-center justify-center px-[5px]">
            <span className="flex-1 font-bold text-[#000000] text-xl font-['DM_Sans',Helvetica]">
              {room.price}
            </span>
          </div>

          <Separator orientation="vertical" className="h-auto" />

          {/* Features */}
          <div className="flex flex-col w-[174px] items-start gap-1 px-[5px]">
            {room.features.map((feature, index) => (
              <p
                key={`feature-${index}`}
                className={`font-normal ${
                  index === 1 ? "text-[#fe0d05]" : "text-[#000000]"
                } text-base font-['DM_Sans',Helvetica]`}
              >
                {feature}
              </p>
            ))}
          </div>

          <Separator orientation="vertical" className="h-auto" />

          {/* Room selection */}
          <div
            className={`flex flex-col w-[114px] items-start ${
              roomIndex === 0
                ? "gap-2.5 py-[5px]"
                : "justify-center gap-2.5 py-1"
            } px-0`}
          >
            <div className="flex items-center justify-center gap-3 px-[7px] py-[5px] bg-white rounded-[42px] border border-[#ebebeb]">
              <span className="font-normal text-[#626262] text-base font-['DM_Sans',Helvetica]">
                0
              </span>
              <Image
                className="w-[21.36px] h-[21.36px]"
                alt="Arrow down"
                src="/vuesax-outline-arrow-down.svg"
                width={21}
                height={21}
              />
            </div>
          </div>

          <Separator orientation="vertical" className="h-auto" />

          {/* Reserve button - only show for first room */}
          {roomIndex === 0 && (
            <Button className="w-[174px] bg-[#007ccf] rounded-[24.2px]">
              <span className="font-normal text-white text-sm font-['DM_Sans',Helvetica]">
                Reserve
              </span>
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
export default RoomAvailability;
