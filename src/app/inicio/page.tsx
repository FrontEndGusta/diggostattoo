import { CarouselDApiDemo } from "@/components/carrousel/carrousel";
import { FlipWordsDemo } from "@/components/flipWords/flipWordsDemo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Inicio() {
  return (
    <main className="flex-1">
      <div className="w-full p-0 md:container">
        <section
          style={{ height: "calc(100vh - 100px)" }}
          className="mx-auto flex flex-col items-start gap-4 " // Adiciona padding-top para evitar sobreposição
        >
          <div className="flex-1 w-full flex-wrap md:flex-nowrap w-full flex items-center justify-between">
            <div className="flex justify-center w-full md:w-[50%] items-center text-center md:text-left items-left gap-3 flex-col">
              <FlipWordsDemo />
              <p className="w-full text-lg font-light text-foreground tracking-[1.5px] text-center md:text-left">
                Experimente fazer um orçamento
              </p>
              <div className="w-full">
                <Button>Fazer orçamento</Button>
              </div>
            </div>
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <CarouselDApiDemo />
            </div>
          </div>

          <div className="flex justify-center w-full mb-10">
            <span>
              <svg
                className="animate-bounce"
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
