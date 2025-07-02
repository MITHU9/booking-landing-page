import { JSX } from "react";
import { Button } from "../ui/button";
import {
  Bath,
  BedSingle,
  ChevronDown,
  Hotel,
  Maximize2,
  Monitor,
  User,
  Wifi,
  Wind,
} from "lucide-react";

// Room data
const roomTypes = [
  {
    name: "Twin Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
    reserved: true,
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
    reserved: false,
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: "$282",
    features: ["Breakfast included", "Only 4 rooms left"],
    reserved: false,
  },
];

// Vertical separator
const ColumnSeparator = () => <div className="w-px bg-[#a3d0ee] mx-1 my-3" />;

const RoomAvailability = (): JSX.Element => {
  return (
    <div className="w-full border-b border-[#a3d0ee] overflow-hidden">
      {/* Header */}
      <div className="flex bg-[#007dd0] text-white font-bold text-sm">
        {[
          "Room type",
          "Number of guests",
          "Price for 1 week",
          "Your choices",
          "Select rooms",
          "Your choices",
        ].map((header, idx) => (
          <div key={idx} className="flex items-center justify-start p-2 flex-1">
            {header}
            {idx < 5 && <ColumnSeparator />}
          </div>
        ))}
      </div>

      {/* Rows */}
      {roomTypes.map((room, idx) => (
        <div
          key={idx}
          className="flex border-t border-[#a3d0ee] text-xs text-[#252525] flex-wrap"
        >
          {/* Column 1 */}
          <div className="flex flex-col p-3 flex-1 min-w-[180px] items-start justify-start text-left gap-2">
            <h4 className="text-[#007dd0] font-bold text-sm">{room.name}</h4>
            <div className="flex items-center gap-1.5">
              <span>2 single beds</span>
              <BedSingle className="size-4" />
              <BedSingle className="size-4" />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Hotel className="size-4" />
                <span>Room</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize2 className="size-4" />
                <span>{room.size}</span>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1">
                <Wind className="size-4" />
                <span>Air condition</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="size-4" />
                <span>Bathroom</span>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1">
                <Monitor className="size-4" />
                <span>TV</span>
              </div>
              <div className="flex items-center gap-1">
                <Wifi className="size-4" />
                <span>WIFI</span>
              </div>
            </div>
          </div>

          <ColumnSeparator />

          {/* Column 2: Guests */}
          <div className="flex flex-1 min-w-[100px] p-3 items-start justify-start gap-2">
            <User className="size-5" />
            <User className="size-5" />
          </div>

          <ColumnSeparator />

          {/* Column 3: Price */}
          <div className="flex flex-1 min-w-[100px] p-3 items-start justify-start">
            <span className="text-xl font-bold text-black">{room.price}</span>
          </div>

          <ColumnSeparator />

          {/* Column 4: Features */}
          <div className="flex flex-col flex-1 min-w-[140px] p-3 items-start justify-start gap-1">
            <span>{room.features[0]}</span>
            <span className="text-[#fe0d05]">{room.features[1]}</span>
          </div>

          <ColumnSeparator />

          {/* Column 5: Dropdown */}
          <div className="flex flex-1 min-w-[100px] p-3 items-start justify-start">
            <div className="flex items-center gap-2 border border-[#ebebeb] px-3 py-2 rounded-full">
              <span className="text-[#626262]">0</span>
              <ChevronDown className="size-4 text-[#626262]" />
            </div>
          </div>

          {/* Conditional separator: Only show if reserved */}
          {room.reserved && <ColumnSeparator />}

          {/* Column 6: Button */}
          <div className="flex flex-1 min-w-[120px] p-3 items-start justify-start">
            {room.reserved && (
              <Button className="bg-[#007ccf] text-white rounded-full px-6 text-sm">
                Reserve
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomAvailability;
