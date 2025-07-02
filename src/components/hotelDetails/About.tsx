import { BusFront, IceCreamBowl, Store, TreePalm } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

const About = (): JSX.Element => {
  const nearbyPlaces = [
    {
      category: "Restaurants & cafes",
      icon: <IceCreamBowl className="size-5" />,
      places: [
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
      ],
    },
    {
      category: "Shops & Markets",
      icon: <Store className="size-5" />,
      places: [
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
      ],
    },
    {
      category: "Beaches",
      icon: <TreePalm className="size-5" />,
      places: [
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
      ],
    },
    {
      category: "Public transport",
      icon: <BusFront className="size-5" />,
      places: [
        { name: "Train - Riverdale Central Station", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start justify-center gap-4 w-full ">
        <h2 className="font-bold text-[#252525] text-xl font-['DM_Sans',Helvetica]">
          About this property
        </h2>
        <p className="w-full font-normal text-[#626262] text-[15.6px] font-['DM_Sans',Helvetica]">
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious
          and spacious experience tailored for both business and leisure
          travelers. With its modern design and panoramic views of the
          Mediterranean Sea, the suite combines comfort, elegance, and
          functionality.
        </p>
      </div>

      {/* Explore the area section */}
      <div className="flex flex-col items-start gap-4 w-full px-2">
        <h2 className="font-bold text-[#252525] text-xl font-['DM_Sans',Helvetica]">
          Explore the Area
        </h2>

        {/* Container that switches from row on large screens to column on smaller */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6">
          {/* Left: Categories */}
          <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-6">
            {/* First two categories */}
            <div className="flex flex-col gap-6 w-full lg:w-[496px]">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                  {nearbyPlaces.slice(0, 2).map((category, index) => (
                    <div
                      key={`category-${index}`}
                      className="flex flex-col w-full lg:w-[220px] items-start gap-3"
                    >
                      <div className="flex items-center gap-3 w-full">
                        {category.icon}
                        <span
                          className={`font-normal text-[#252525] ${
                            index === 1 ? "text-sm" : "text-base"
                          } font-['DM_Sans',Helvetica]`}
                        >
                          {category.category}
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-2 w-full">
                        {category.places.map((place, placeIndex) => (
                          <div
                            key={`place-${index}-${placeIndex}`}
                            className="flex items-center justify-between w-full"
                          >
                            <span className="font-normal text-[#757575] text-xs font-['DM_Sans',Helvetica]">
                              {place.name}
                            </span>
                            <span className="font-normal text-[#757575] text-xs font-['DM_Sans',Helvetica]">
                              {place.distance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Next two categories */}
                <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                  {nearbyPlaces.slice(2).map((category, index) => (
                    <div
                      key={`category-${index + 2}`}
                      className="flex flex-col w-full lg:w-[220px] items-start gap-3"
                    >
                      <div className="flex items-center gap-3 w-full">
                        {category.icon}
                        <span className="font-normal text-[#252525] text-base font-['DM_Sans',Helvetica]">
                          {category.category}
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-2 w-full">
                        {category.places.map((place, placeIndex) => (
                          <div
                            key={`place-${index + 2}-${placeIndex}`}
                            className="flex items-center justify-between w-full"
                          >
                            <span className="font-normal text-[#757575] text-xs font-['DM_Sans',Helvetica]">
                              {place.name}
                            </span>
                            <span className="font-normal text-[#757575] text-xs font-['DM_Sans',Helvetica]">
                              {place.distance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col w-full lg:w-[554.5px] items-start">
            <Image
              className="w-full h-[204.78px] object-cover"
              alt="Map of Bab el Oued, Algiers"
              src="/images/map.png"
              width={555}
              height={205}
              priority
            />
            <div className="flex flex-col items-start w-full bg-white rounded-b-[12.11px] border border-[#ededed] shadow-[0px_2.52px_2.52px_#bfbfbf40]">
              <div className="flex h-[67.59px] items-center justify-center p-[10.09px] w-full">
                <span className="font-normal text-[#007dd0] text-[17.6px] font-['DM_Sans',Helvetica]">
                  Explore the Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
