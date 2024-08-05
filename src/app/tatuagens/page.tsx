"use client";

import { ThreeDCardDemo } from "@/components/3DCardEffect/3DCardEffect";
import Image from "next/image";

export default function Tatuagens() {
  return (
    <section className="w-full py-20 flex flex-col mx-auto overflow-hidden">
      <div className="flex items-center justify-center gap-2 pb-5">
        <Image
          src="/icons/sectionThree/works.svg"
          alt="star"
          width={50}
          height={50}
          className="mb-6"
        />
        <h1 className="text-[24px] md:text-3xl font-bold tracking-[.1em] py-[80px]">
          TRABALHOS
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-4 pb-5 px-5">
        <ThreeDCardDemo />
      </div>
    </section>
  );
}
