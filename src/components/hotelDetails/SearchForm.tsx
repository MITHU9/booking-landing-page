import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { JSX } from "react";

const SearchForm = (): JSX.Element => {
  return (
    <>
      {" "}
      <Card className="w-full bg-white rounded-[16.56px] border border-[#a3d0ee]">
        <CardContent className="px-5 py-[15.12px]">
          <div className="flex items-end gap-10 h-16">
            <div className="flex items-center gap-[8.8px]">
              <div className="flex flex-col items-start gap-[9.5px] w-[194.83px]">
                <label className="font-medium text-[#626262] text-[13.2px] font-['DM_Sans',Helvetica]">
                  Check-In
                </label>
                <div className="flex flex-col items-start gap-[7.92px] p-[7.92px] w-full bg-neutral-100 rounded-[28.6px]">
                  <div className="flex items-center gap-[9.5px] w-full">
                    <div className="flex w-[22.18px] h-[22.18px] items-center justify-center bg-[#007ccf] rounded-[26.14px]">
                      <Image
                        className="w-[17.42px] h-[17.42px]"
                        alt="Calendar icon"
                        src="/date-today-duotone-line-1.svg"
                        width={17}
                        height={17}
                      />
                    </div>
                    <span className="font-medium text-[#252525] text-[13.2px] font-['DM_Sans',Helvetica]">
                      Tue,23 June 2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[9.5px] w-[194.83px]">
                <label className="font-medium text-[#626262] text-[13.2px] font-['DM_Sans',Helvetica]">
                  Check-Out
                </label>
                <div className="flex flex-col items-start gap-[7.92px] p-[7.92px] w-full bg-neutral-100 rounded-[28.6px]">
                  <div className="flex items-center gap-[9.5px] w-full">
                    <div className="flex w-[22.18px] h-[22.18px] items-center justify-center bg-[#007ccf] rounded-[26.14px]">
                      <Image
                        className="w-[17.42px] h-[17.42px]"
                        alt="Calendar icon"
                        src="/date-today-duotone-line.svg"
                        width={17}
                        height={17}
                      />
                    </div>
                    <span className="font-medium text-[#252525] text-[13.2px] font-['DM_Sans',Helvetica]">
                      Sat,29 June 2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[9.5px]">
                <label className="font-medium text-[#626262] text-[13.2px] font-['DM_Sans',Helvetica]">
                  Room & Guest
                </label>
                <div className="flex flex-col items-start gap-[7.92px] p-[7.92px] bg-neutral-100 rounded-[25.3px]">
                  <div className="flex items-center gap-[9.5px] w-full">
                    <div className="flex w-[22.18px] h-[22.18px] items-center justify-center bg-[#007ccf] rounded-[26.14px]">
                      <Image
                        className="w-[19.01px] h-[19.01px]"
                        alt="Home icon"
                        src="/home-light.svg"
                        width={19}
                        height={19}
                      />
                    </div>
                    <span className="font-medium text-[#252525] text-[13.2px] font-['DM_Sans',Helvetica]">
                      2 Adults&nbsp;&nbsp;- 0 Children - 1 Room
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-[115px] bg-[#007ccf] rounded-[24.2px] ml-auto">
              <span className="font-normal text-white text-[13.2px] font-['DM_Sans',Helvetica]">
                Search
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default SearchForm;
