import { HeroScrollDemo } from "@/components/HeroScroll/HeroScrollDemo";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function Diferencial() {
  const cardsData = [
    {
      title: "Melhores Tattoos",
      description:
        "Especialista em uma ampla variedade de estilos de tatuagem, proporcionando aos clientes uma experiência personalizada e única.",
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
      description: "Crie sua própria tatuagem única, expressando sua individualidade através de um design personalizado.",
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
      description: "Dicas e produtos para manter sua tatuagem em ótimo estado, garantindo que a arte continue vibrante e bem cuidada.",
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
      description: "Estilos simples e elegantes para todos, combinando minimalismo com sofisticação para criar tatuagens que são atemporais e versáteis.",
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

  return (
    <main className="flex-1">
      <div className="w-full relative">
        <div className="w-full flex items-center justify-center gap-3 pb-5">
          <Image
            src="/icons/sectionFor/diamond.svg"
            alt="style"
            width={45}
            height={45}
          />
          <h1 className="text-[24px] md:text-3xl font-bold tracking-[.1em] py-[80px]">
            DIFERENCIAL
          </h1>
        </div>
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
                          ? "flex-col-reverse items-center text-center justify-center md:flex-row md:justify-start md:items-start md:text-left"
                          : "flex-col items-center text-center justify-center md:flex-row md:justify-end  md:items-start md:text-left "
                      } w-full`}
                    >
                      {index % 2 === 0 && (
                        <div className="flex w-full md:w-[50%]  ">
                          <div className="w-full p-4">
                            <p className="text-muted-foreground w-full text-[16px] md:text-[20px] my-3">
                              {card.description}
                            </p>
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
                          <div className="w-full p-4">
                          <p className="text-muted-foreground w-full text-[16px] md:text-[20px] my-3">
                              {card.description}
                            </p>
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
