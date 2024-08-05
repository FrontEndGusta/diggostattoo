import { HeroScrollDemo } from "@/components/HeroScroll/HeroScrollDemo";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function Diferencial() {
  const cardsData = [
    {
      title: "Melhores Tattoos",
      description: "Especialista em diversos tipos de tatuagens",
      icon: (
        <Image
          src="/icons/sectionTwo/top/award.svg"
          alt="Award Icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Tatuagem Personalizada",
      description: "Crie sua própria tatuagem única",
      icon: (
        <Image
          src="/icons/sectionTwo/top/edit.svg"
          alt="Edit Icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Melhores cuidados",
      description: "Dicas e produtos para manter sua tatuagem",
      icon: (
        <Image
          src="/icons/sectionTwo/top/care.svg"
          alt="Care Icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Tatuagem Minimalista",
      description: "Estilos simples e elegantes para todos",
      icon: (
        <Image
          src="/icons/sectionTwo/top/feather.svg"
          alt="Feather Icon"
          width={50}
          height={50}
        />
      ),
    },
  ];

  const recognition = [
    {
      icon: (
        <Image
          src="/icons/sectionTwo/bottom/happy.svg"
          alt="happy"
          width={50}
          height={50}
        />
      ),
      title: "1.500",
      sup: "+",
      description: "Clientes satisfeitos",
    },
    {
      icon: (
        <Image
          src="/icons/sectionTwo/bottom/intelligent.svg"
          alt="intelligent"
          width={50}
          height={50}
        />
      ),
      title: "1.000",
      sup: "+",
      description: "Artes criadas",
    },
    {
      icon: (
        <Image
          src="/icons/sectionTwo/bottom/award.svg"
          alt="award"
          width={50}
          height={50}
        />
      ),
      title: "10",
      sup: "+",
      description: "Anos de Experiência",
    },
    {
      icon: (
        <Image
          src="/icons/sectionTwo/bottom/professional.svg"
          alt="professional"
          width={50}
          height={50}
        />
      ),
      title: "100",
      sup: "%",
      description: "Profissional",
    },
  ];

  return (
    <main className="flex-1">
      <div className="w-full relative">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <section
            style={{ height: "auto", width: "90vw" }} // Ajusta a altura conforme necessário
            className="w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 px-0 pb-[80px] overflow-hidden"
          >
            <div className="w-full lg:w-[50%]">
              <HeroScrollDemo />
            </div>

            <div className="flex flex-col w-full lg:w-[50%] justify-center gap-4 mb-10">
              {cardsData.map((card, index) => (
                <>
                  <div key={index} data-aos="fade-up-left" data-aos-delay="300">
                    <div
                      className={`flex ${
                        index % 2 === 0
                          ? "flex-col-reverse justify-center md:flex-row md:justify-start"
                          : "flex-col justify-center md:flex-row md:justify-end"
                      } w-full`}
                    >
                      {index % 2 === 0 && (
                        <div className="flex w-full items-center  md:w-[50%] md:items-start  ">
                          <div className="p-4">
                            <CardDescription>
                              {card.description}
                            </CardDescription>
                          </div>
                        </div>
                      )}
                      <Card className="min-w-[300px] min-h-[250px] h-[200px] w-[50%] flex justify-center flex-col p-[40px]">
                        <div className="flex justify-start">{card.icon}</div>
                        <h2 className="scroll-m-20 tracking-[.1em] pb-2 text-[24px] md:text-3xl mt-1 font-semibold first:mt-0">
                          {card.title}
                        </h2>
                      </Card>
                      {index % 2 !== 0 && (
                        <div className="flex w-full items-center  md:w-[50%] md:items-start ">
                          <div className="p-4">
                            <CardDescription>
                              {card.description}
                            </CardDescription>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
