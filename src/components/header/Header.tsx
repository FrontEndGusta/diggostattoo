"use client";
import React from "react";
import { ModeToggle } from "../modeToggle/ModeToggle";
import { ModeToggleMobile } from "../modeToggle/ModeToggleMobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationMenuDemo from "../navigationMenu/NavigationMenu";

export default function Header() {

  return (
    <div className="flex gap-4 p-3 px-4 flex-wrap justify-between ">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="/logo/logo.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <NavigationMenuDemo />
      </div>

      <ModeToggle />
      <div className="flex sm:hidden">
        <ModeToggleMobile />
      </div>
    </div>
  );
}
