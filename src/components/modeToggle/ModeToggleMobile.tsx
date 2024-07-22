"use client";

import * as React from "react";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggleMobile() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HamburgerMenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <span className="flex gap-1 items-center">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
            Modo Claro
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <span className="flex gap-1 items-center">
            <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />
            Modo Escuro
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
