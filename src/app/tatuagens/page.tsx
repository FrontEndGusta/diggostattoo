import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function Tatuagens() {
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
      <div className="container relative">
        <section
          style={{ height: "auto" }} // Ajusta a altura conforme necessário
          className="mx-auto flex flex-col items-center justify-center gap-4 px-5 pt-20"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                className="w-[280px] h-[300px] flex justify-center flex-col p-[40px] m-4"
              >
                <div className="flex justify-start">{card.icon}</div>
                <h2 className="scroll-m-20 pb-2 text-3xl mt-1 font-semibold first:mt-0">
                  {card.title}
                </h2>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </div>

          <div className="flex justify-center w-full mb-4">
          <Card className="w-full min-w-[280px] mx-auto min-h-[200px] flex flex-col gap-4 justify-center items-center p-6 m-4 lg:flex-row lg:flex-nowrap">

              {recognition.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-3 sm:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  {item.icon}
                  <div className="relative">
                    <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold">
                      {item.title}{" "}
                      <span className="absolute text-[#facc15] text-[20px] sm:text-[24px] bottom-[-12px]">
                        {item.sup}
                      </span>
                    </h2>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              ))}
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
