import React, { JSX } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPinned,
  PhoneCall,
  Twitter,
} from "lucide-react";

export const Footer = (): JSX.Element => {
  const navLinks = ["Home", "Hotels", "Deals", "About Us", "Contact Us"];

  const socialIcons = [
    { icon: <Twitter className="size-4 text-white" /> },
    { icon: <Facebook className="size-4 text-white" /> },
    { icon: <Instagram className="size-4 text-white" /> },
    { icon: <Github className="size-4 text-white" /> },
  ];

  return (
    <footer className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-[79px] px-4 py-10 w-full bg-[#00548c] rounded-b-[42px]">
      {/* Left section */}
      <div className="flex flex-col w-full md:w-[436px] items-start gap-6 md:gap-[33px]">
        {/* Logo & description */}
        <div className="flex flex-col items-start gap-3 w-full">
          <Image
            className="w-[90px] h-auto"
            alt="App Logo"
            src="/images/logo2.png"
            width={90}
            height={29}
          />
          <p className="text-white text-sm leading-[17px]">
            [App Name] makes booking your next stay easy, affordable, and
            stress-free. With thousands of hotels worldwide, exclusive deals,
            and secure payment options, we&apos;re here to help you find the
            perfect place to stay, every time.
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <div key={`social-icon-${index}`}>{icon.icon}</div>
          ))}
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPinned className="size-5 text-white mt-[2px]" />
          <p className="text-sm text-white">
            123 Travel St, Suite 100, City, Country
          </p>
        </div>
      </div>

      {/* Divider */}
      <Separator
        orientation="horizontal"
        className="md:hidden h-px w-full my-6 bg-white/30"
      />
      <Separator
        orientation="vertical"
        className="hidden md:block h-[110px] bg-white/50"
      />

      {/* Right section */}
      <div className="flex flex-col w-full md:w-auto items-start md:items-end gap-6">
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-[78px]">
          {/* Navigation links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={`nav-link-${index}`}
                href="#"
                className="text-white text-base hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact & download */}
          <div className="flex flex-col gap-4 w-full md:w-[279px]">
            {/* Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="size-5 text-white" />
                <span className="text-sm text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-5 text-white" />
                <span className="text-sm text-white">
                  support@[yourappname].com
                </span>
              </div>
            </div>

            {/* App download */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-white text-base">Download Our App</span>
              <div className="flex gap-3">
                <Image
                  className="w-9 h-9"
                  alt="Google Play"
                  src="/images/play-store.png"
                  width={36}
                  height={36}
                />
                <Image
                  className="w-9 h-9"
                  alt="Apple Store"
                  src="/images/apple.png"
                  width={36}
                  height={36}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/80 text-center md:text-right w-full">
          &copy; 2023, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
