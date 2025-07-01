import React, { JSX } from "react";
import { Header } from "./sections/Header";
import { PropertyDescription } from "./sections/PropertyDescription";
import { Footer } from "./sections/Footer";

export const HotelPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <PropertyDescription />
      <Footer />
    </div>
  );
};
