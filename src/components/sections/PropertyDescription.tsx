import React, { JSX } from "react";
import HotelHeader from "../hotelDetails/Hero";
import ImageGallery from "../hotelDetails/ImageGallery";
import PropertyDetails from "../hotelDetails/PropertyDetails";
import SearchForm from "../hotelDetails/SearchForm";
import RoomAvailability from "../hotelDetails/RoomAvailability";
import About from "../hotelDetails/About";
import Reviews from "../hotelDetails/Reviews";
import Policies from "../hotelDetails/Policies";
import RoomCard from "../hotelDetails/RoomCard";

export const PropertyDescription = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-[30px] px-4 py-8">
      {/* Header section with hotel name and actions */}
      <div className="flex flex-col items-start justify-center gap-[30px] w-full max-w-7xl">
        <HotelHeader />
        <ImageGallery />
      </div>

      {/* Property details and booking section */}
      <PropertyDetails />

      {/* Availability section */}
      <div className="flex flex-col items-start justify-center gap-4 w-full max-w-7xl">
        <h2 className="font-bold text-[#000000] text-xl font-['DM_Sans',Helvetica]">
          Availability
        </h2>

        <div className="flex flex-col items-start gap-3 w-full">
          {/* Search form */}
          <SearchForm />

          {/* Room availability table */}
          <RoomAvailability />
        </div>
      </div>

      {/* About property section */}
      <div className="flex flex-col items-start justify-center gap-[30px] w-full max-w-7xl">
        <About />

        {/* Guest reviews section */}
        <Reviews />

        {/* Policies section */}
        <Policies />

        {/* Similar properties section */}
        <RoomCard />
      </div>
    </div>
  );
};
