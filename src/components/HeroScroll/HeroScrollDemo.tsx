"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
              Rodrigo
            </span>
            <p className="text-muted-foreground w-full text-[16px] md:text-2xl my-3">Tatuador Profissional</p>
          </>
        }
      >
        <Image
          src='/images/sectionFor/tatuador.jpg'
          alt="hero"
          height={800}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
