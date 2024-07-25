import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";
import Image from "next/image";

export default function Estilos() {
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
      <div className="flex items-center justify-center gap-2 pb-5">
        <Image
          src="/icons/sectionTwo/style.svg"
          alt="star"
          width={50}
          height={50}
        />
        <h1 className="text-[24px] md:text-3xl font-bold tracking-[.1em] py-[80px]">
          NOSSOS ESTILOS
        </h1>
      </div>
      <section className="flex flex-wrap px-25 w-full px-[2rem] md:px-[7rem]">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 pb-20 w-full sm:w-[50%] items-start text-left sm:odd:items-start sm:odd:text-left sm:even:items-end sm:even:text-right"
          >
            {item.icon}
            <h2 className="text-[24px] md:text-3xl font-semibold tracking-[.1em]">
              {item.title}
            </h2>
            <p className="text-muted-foreground w-full w-[100%] md:w-[50%] lg:w-[60%]">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
