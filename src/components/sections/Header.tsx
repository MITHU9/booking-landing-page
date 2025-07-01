import React, { JSX } from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Header = (): JSX.Element => {
  const navItems = [
    { label: "Home", active: true },
    { label: "Hotels", active: false },
    { label: "House", active: false },
    { label: "About Us", active: false },
    { label: "Contact Us", active: false },
  ];

  return (
    <header className="relative w-full h-[76px] bg-[#e9f6ff] rounded-[42px_42px_0px_0px]">
      <div className="flex h-full items-center justify-between px-[83px] max-w-[1270px] mx-auto">
        <div className="flex items-center gap-[30px]">
          <Image
            className="w-[90px] h-[29.23px]"
            alt="Logo"
            src="/images/logo.png"
            width={90}
            height={29}
          />

          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-[18px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`font-['DM_Sans',Helvetica] text-base leading-normal ${
                      item.active
                        ? "font-bold text-[#007ccf]"
                        : "font-normal text-[#626262]"
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-[5px]">
          <Button
            variant="outline"
            className="h-[41px] w-[83px] rounded-[46px] border-[#a5d3f1] bg-transparent flex items-center justify-center gap-2 px-3 py-2"
          >
            <Image
              className="w-6 h-6"
              alt="Euro circle"
              src="/euro-circle.svg"
              width={24}
              height={24}
            />
            <Image
              className="w-6 h-6"
              alt="Arrow down"
              src="/vuesax-outline-arrow-down-3.svg"
              width={24}
              height={24}
            />
          </Button>

          <Button
            variant="outline"
            className="h-[41px] w-[83px] rounded-[46px] border-[#a5d3f1] bg-transparent flex items-center justify-center gap-2 px-3 py-2"
          >
            <Avatar className="w-[31px] h-[31px] rounded-[145px] overflow-hidden">
              <AvatarImage
                src="/image-1.png"
                alt="User avatar"
                className="object-cover"
              />
            </Avatar>
            <Image
              className="w-6 h-6"
              alt="Arrow down"
              src="/vuesax-outline-arrow-down-3.svg"
              width={24}
              height={24}
            />
          </Button>

          <Button
            variant="outline"
            className="h-[41px] rounded-[46px] border-[#a5d3f1] bg-transparent flex items-center justify-center gap-2 px-3 py-2"
          >
            <span className="font-['DM_Sans',Helvetica] font-normal text-[#007dd0] text-base">
              List your property
            </span>
            <Image
              className="w-6 h-6"
              alt="Arrow up right"
              src="/arrow-up-right-01-round.svg"
              width={24}
              height={24}
            />
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="w-[42px] h-[42px] p-2 bg-[#ffffff80] rounded-[28px] flex items-center justify-center"
            >
              <Image
                className="w-6 h-6"
                alt="Notification"
                src="/notification-bubble.svg"
                width={24}
                height={24}
              />
            </Button>

            <Button
              variant="ghost"
              className="h-[42px] px-3 py-0 bg-[#ffffff80] rounded-[26px] flex items-center justify-center gap-1.5"
            >
              <div className="relative w-[26px] h-[26px]">
                <Image
                  className="absolute w-[18px] h-1.5 top-[17px] left-1"
                  alt="Ellipse"
                  src="/ellipse-45-6.svg"
                  width={18}
                  height={6}
                />
                <div className="absolute w-2.5 h-2.5 top-1 left-2 rounded-[5.08px] border-[1.5px] border-solid border-[#007dd0]" />
              </div>
              <span className="font-['DM_Sans',Helvetica] font-normal text-[#007dd0] text-base">
                Sunan
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
