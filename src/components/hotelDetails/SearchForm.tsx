import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CalendarDays, House } from "lucide-react";
import { JSX } from "react";

const SearchForm = (): JSX.Element => {
  return (
    <div>
      <Card className="w-full bg-white rounded-[16.56px] border border-[#a3d0ee]">
        <CardContent className="px-4 py-4 md:px-5 md:py-[15.12px]">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end lg:flex-nowrap lg:gap-6">
            {/* Check-In */}
            <div className="flex flex-col w-full md:w-[48%] lg:w-[194.83px] gap-2">
              <label className="text-sm text-[#626262] font-medium font-['DM_Sans',Helvetica]">
                Check-In
              </label>
              <div className="flex items-center gap-2 p-2 bg-neutral-100 rounded-full">
                <div className="flex items-center justify-center w-5 h-5 bg-[#007ccf] rounded-full">
                  <CalendarDays className="text-white size-4" />
                </div>
                <span className="text-sm text-[#252525] font-medium font-['DM_Sans',Helvetica]">
                  Tue, 23 June 2024
                </span>
              </div>
            </div>

            {/* Check-Out */}
            <div className="flex flex-col w-full md:w-[48%] lg:w-[194.83px] gap-2">
              <label className="text-sm text-[#626262] font-medium font-['DM_Sans',Helvetica]">
                Check-Out
              </label>
              <div className="flex items-center gap-2 p-2 bg-neutral-100 rounded-full">
                <div className="flex items-center justify-center w-5 h-5 bg-[#007ccf] rounded-full">
                  <CalendarDays className="text-white size-4" />
                </div>
                <span className="text-sm text-[#252525] font-medium font-['DM_Sans',Helvetica]">
                  Sat, 29 June 2024
                </span>
              </div>
            </div>

            {/* Room & Guest */}
            <div className="flex flex-col w-full md:w-[100%] lg:w-auto gap-2">
              <label className="text-sm text-[#626262] font-medium font-['DM_Sans',Helvetica]">
                Room & Guest
              </label>
              <div className="flex items-center gap-2 p-2 bg-neutral-100 rounded-full">
                <div className="flex items-center justify-center w-5 h-5 bg-[#007ccf] rounded-full">
                  <House className="text-white size-4" />
                </div>
                <span className="text-sm text-[#252525] font-medium font-['DM_Sans',Helvetica] whitespace-nowrap">
                  2 Adults - 0 Children - 1 Room
                </span>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto mt-2 md:mt-0 lg:ml-auto">
              <Button className="w-full md:w-[115px] bg-[#007ccf] rounded-full">
                <span className="text-sm text-white font-normal font-['DM_Sans',Helvetica]">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchForm;
