import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const Footer = (): JSX.Element => {
  const navLinks = ["Home", "Hotels", "Deals", "About Us", "Contact Us"];

  const socialIcons = [
    {
      url: "/group.png",
      width: "w-[15px]",
      height: "h-3",
      top: "top-1",
      left: "left-0",
    },
    {
      url: "/group-1.png",
      width: "w-2",
      height: "h-4",
      top: "top-px",
      left: "left-[46px]",
    },
    {
      url: "/group-2.png",
      width: "w-[18px]",
      height: "h-[18px]",
      top: "top-0",
      left: "left-[86px]",
    },
    {
      url: "/group-3.png",
      width: "w-[17px]",
      height: "h-[17px]",
      top: "top-0",
      left: "left-[136px]",
    },
  ];

  return (
    <footer className="flex items-center justify-center gap-[79px] py-[60px] relative w-full bg-[#00548c] rounded-[0px_0px_42px_42px]">
      {/* Left section - Logo and description */}
      <div className="flex flex-col w-[436px] items-start gap-[33px]">
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <Image
            className="w-[90px] h-[29.23px]"
            alt="App Logo"
            src="/frame-1597882000.svg"
            width={90}
            height={29}
          />

          <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-white text-[12.4px] leading-[17px]">
            [App Name] makes booking your next stay easy, affordable, and
            stress-free. With thousands of hotels worldwide, exclusive deals,
            and secure payment options, we&apos;re here to help you find the
            perfect place to stay, every time.
          </p>
        </div>

        {/* Social media icons */}
        <div className="relative w-[152.87px] h-[17.78px]">
          {socialIcons.map((icon, index) => (
            <div
              key={`social-icon-${index}`}
              className={`absolute ${icon.width} ${icon.height} ${icon.top} ${icon.left}`}
            >
              <Image
                src={icon.url}
                alt={`Social icon ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 w-full">
          <div className="relative w-[23px] h-6">
            <div className="absolute w-[17px] h-5 top-0.5 left-[3px]">
              <Image
                className="absolute w-[17px] h-1.5 top-3.5 left-0"
                alt="Location pin base"
                src="/ellipse-40.svg"
                width={17}
                height={6}
              />
              <Image
                className="absolute w-[15px] h-[18px] top-0 left-px"
                alt="Location pin"
                src="/ellipse-41.svg"
                width={15}
                height={18}
              />
              <div className="absolute w-2 h-2 top-1 left-[5px] rounded-[3.83px/4px] border border-solid border-white" />
            </div>
          </div>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[13.3px] text-right leading-[19.6px] whitespace-nowrap">
            123 Travel St, Suite 100, City, Country
          </p>
        </div>
      </div>

      {/* Divider */}
      <Separator orientation="vertical" className="h-[110px] bg-white/50" />

      {/* Right section - Navigation, contact info, and app download */}
      <div className="flex flex-col items-end justify-end gap-5">
        <div className="flex items-start justify-center gap-[78px]">
          {/* Navigation links */}
          <nav className="flex flex-col items-start justify-center gap-3">
            {navLinks.map((link, index) => (
              <a
                key={`nav-link-${index}`}
                href="#"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-base hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact info and app download */}
          <div className="flex flex-col w-[279px] h-[153px] items-start justify-between pb-4">
            <div className="flex flex-col items-start gap-3 w-full">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Image
                  className="w-6 h-6"
                  alt="Phone icon"
                  src="/phone-light.svg"
                  width={24}
                  height={24}
                />
                <span className="[font-family:'Poppins',Helvetica] text-white text-[13.3px] text-right leading-[19.6px] whitespace-nowrap">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Image
                  className="w-6 h-6"
                  alt="Email icon"
                  src="/message-light.svg"
                  width={24}
                  height={24}
                />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[13.3px] text-right leading-[19.6px] whitespace-nowrap">
                  support@[yourappname].com
                </span>
              </div>
            </div>

            {/* App download section */}
            <div className="flex items-center gap-[23.64px]">
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-[18.9px]">
                Download Our App
              </span>
              <div className="flex items-center gap-[19.86px]">
                <Image
                  className="w-[34.01px] h-[34.07px]"
                  alt="Google Play Store"
                  src="/play-store.svg"
                  width={34}
                  height={34}
                />
                <Image
                  className="w-[34.01px] h-[34.07px]"
                  alt="Apple App Store"
                  src="/apple.svg"
                  width={34}
                  height={34}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#f0f0f0] text-[13.3px] text-right leading-[19.6px] whitespace-nowrap">
          © 2023, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};