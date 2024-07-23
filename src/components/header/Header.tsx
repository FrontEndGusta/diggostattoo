"use client";
import React from "react";
import { ModeToggle } from "../modeToggle/ModeToggle";
import { ModeToggleMobile } from "../modeToggle/ModeToggleMobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationMenuDemo from "../navigationMenu/NavigationMenu";

export default function Header() {
  return (
    <div className="flex gap-4 p-3 px-4 flex-wrap justify-between">
      <div className="hidden md:flex gap-4 justify-between w-full">
        <div className="flex">
          <Avatar>
            <AvatarImage src="/logo/logo.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <NavigationMenuDemo />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>

      <div className="flex md:hidden justify-between w-full">
        <div className="flex">
          <ModeToggleMobile />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
