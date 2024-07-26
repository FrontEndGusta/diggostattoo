"use client";

import * as React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export function ModeToggleMobile() {
  const menu: string[] = ["Inicio", "Estilos", "Tatuagens", 'Diferencial', 'Clientes'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HamburgerMenuIcon className="w-[30px] h-[30px]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menu.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
