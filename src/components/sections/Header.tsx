"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  ArrowUpRight,
  BadgeCent,
  ChevronDown,
  MessageCircle,
  User,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  active: boolean;
}

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", active: true },
    { label: "Hotels", active: false },
    { label: "House", active: false },
    { label: "About Us", active: false },
    { label: "Contact Us", active: false },
  ];

  return (
    <header className="relative w-full bg-[#e9f6ff] rounded-t-[42px]">
      <div className="flex items-center justify-between h-[76px] px-4 md:px-10 lg:px-2 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Image
            className="w-[90px] h-[29.23px]"
            alt="Logo"
            src="/images/logo.png"
            width={90}
            height={29}
            priority
          />

          <button
            className="lg:hidden ml-auto"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={`font-['DM_Sans'] text-base leading-normal ${
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

        {/* Controls (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="outline"
            className="h-[41px] rounded-full border-[#a5d3f1] bg-transparent px-3 py-2 gap-2"
          >
            <BadgeCent />
            <ChevronDown className="text-[#007dd0]" />
          </Button>

          <Button
            variant="outline"
            className="h-[41px] rounded-full border-[#a5d3f1] bg-transparent px-3 py-2 gap-2"
          >
            <Avatar className="w-[31px] h-[31px]">
              <AvatarImage src="/images/flag.png" alt="Flag" />
            </Avatar>
            <ChevronDown className="text-[#007dd0]" />
          </Button>

          <Button
            variant="outline"
            className="h-[41px] rounded-full border-[#a5d3f1] bg-transparent px-3 py-2 gap-2"
          >
            <span className="font-['DM_Sans'] text-[#007dd0] text-base">
              List your property
            </span>
            <ArrowUpRight className="text-[#007dd0]" />
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="w-[42px] h-[42px] p-2 bg-[#ffffff80] rounded-full"
            >
              <MessageCircle className="text-[#007dd0]" />
            </Button>

            <Button
              variant="ghost"
              className="h-[42px] px-3 bg-[#ffffff80] rounded-full flex items-center gap-2"
            >
              <User className="text-[#007dd0]" />
              <span className="text-[#007dd0] font-['DM_Sans'] text-base">
                Sunan
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-[#e9f6ff] space-y-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`text-base font-['DM_Sans'] ${
                item.active ? "font-bold text-[#007ccf]" : "text-[#626262]"
              }`}
            >
              {item.label}
            </div>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              List your property
            </Button>
            <Button variant="outline" className="w-full flex justify-between">
              <span>Currency</span>
              <ChevronDown className="text-[#007dd0]" />
            </Button>
            <Button variant="outline" className="w-full flex justify-between">
              <span>Language</span>
              <ChevronDown className="text-[#007dd0]" />
            </Button>
            <div className="flex gap-2">
              <Button className="flex-1" variant="ghost">
                <MessageCircle className="text-[#007dd0]" />
              </Button>
              <Button className="flex-1" variant="ghost">
                <User className="text-[#007dd0]" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
