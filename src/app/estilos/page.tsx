"use client";
import Image from "next/image";
import image1 from "@/assets/teste.png";
import useAosAnimation from "@/components/hooks/useWindowWidth";
import React, { forwardRef } from "react";


export type EstilosProps = {
  estilosRef: React.RefObject<HTMLDivElement>;
};
export default function Estilos({ estilosRef }: EstilosProps) {
  const aosAnimation = useAosAnimation();
  const cardsData = [
    {
      icon: (
        <Image
          src="/icons/sectionThree/wolf.svg"
          alt="wolf"
          width={70}
          height={70}
        />
      ),
      title: "REALISTA",
      description:
        "Especialista em tatuagens com detalhes precisos e realistas, criando imagens que parecem fotografias na pele.",
    },
    {
      icon: (
        <Image
          src="/icons/sectionThree/old-school.svg"
          alt="old-school"
          width={70}
          height={70}
        />
      ),
      title: "OLD SCHOOL",
      description:
        "Especialista em tatuagens tradicionais com linhas grossas, cores vibrantes e temas clássicos.",
    },
    {
      icon: (
        <Image
          src="/icons/sectionThree/anchor.svg"
          alt="delicadas"
          width={70}
          height={70}
        />
      ),
      title: "DELICADAS",
      description:
        "Especialista em tatuagens finas e sutis, com traços delicados e minimalistas.",
    },
  ];

  const cardsData2 = [
    {
      icon: (
        <Image
          src="/icons/sectionThree/flower.svg"
          alt="floral"
          width={70}
          height={70}
        />
      ),
      title: "FLORAL",
      description:
        "Especialista em tatuagens de flores, com designs detalhados e artísticos de elementos botânicos.",
    },
    {
      icon: (
        <Image
          src="/icons/sectionThree/black.svg"
          alt="black"
          width={70}
          height={70}
        />
      ),
      title: "BLACK",
      description:
        "Especialista em tatuagens pretas, usando técnicas de sombra e contraste para criar profundidade.",
    },
    {
      icon: (
        <Image
          src="/icons/sectionThree/naruto.svg"
          alt="geek"
          width={50}
          height={50}
        />
      ),
      title: "GEEK",
      description:
        "Especialista em tatuagens de cultura geek, incluindo personagens de anime, jogos e filmes.",
    },
  ];

  return (
    <>
      <div
        ref={estilosRef}
        className="flex items-center justify-center gap-2 pb-5"
      >
        <Image
          src="/icons/sectionTwo/style.svg"
          alt="star"
          width={50}
          height={50}
        />
        <h1 className="text-[24px] md:text-3xl font-bold tracking-[.1em] py-[80px]">
          ESTILOS
        </h1>
      </div>
      <section className="flex flex-col items-center lg:justify-between lg:flex-row w-full overflow-hidden">
        <div className=" w-full flex flex-col items-center lg:w-[30%] gap-8">
          {cardsData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay="300"
              className="w-full"
            >
              <div className="flex flex-col px-20 gap-5 pb-20 w-full items-start text-left lg:pl-20">
                {item.icon}
                <h2 className="text-[24px] md:text-3xl font-semibold tracking-[.1em]">
                  {item.title}
                </h2>
                <p className="text-muted-foreground w-full md:w-[50%] lg:w-[60%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[40%] hidden lg:flex h-[100%] items-center justify-center py-8">
          <div data-aos="zoom-in" data-aos-delay="300">
            <Image src={image1} alt="teste" objectFit="contain" />
          </div>
        </div>
        <div className=" w-full flex flex-col items-center lg:w-[30%] lg:items-end gap-8">
          {cardsData2.map((item, index) => (
            <div
              key={index}
              data-aos={aosAnimation}
              data-aos-delay="300"
              className="w-full"
            >
              <div className="flex flex-col px-20 items-start w-full gap-5 pb-20 lg:items-end lg:text-right lg:pr-20">
                {item.icon}
                <h2 className="text-[24px] md:text-3xl font-semibold tracking-[.1em]">
                  {item.title}
                </h2>
                <p className="text-muted-foreground w-full md:w-[50%] lg:w-[60%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}