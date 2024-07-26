"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

export default function MenuNavigation() {
  const menu: string[] = ["Inicio", "Estilos", "Tatuagens", 'Diferencial', 'Clientes'];
  return (
    <NavigationMenu>
      {menu.map((item, index) => (
        <NavigationMenuItem key={index} className="list-none">
          <Link href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
}
