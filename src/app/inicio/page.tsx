"use client";
import { useRef } from "react";
import { CarouselDApiDemo } from "@/components/carrousel/carrousel";
import FadeUp from "@/components/fadeUp/FadeUp";
import { FlipWordsDemo } from "@/components/flipWords/flipWordsDemo";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";

interface InicioProps {
  refSession: React.RefObject<HTMLDivElement>;
}

export default function Inicio({ refSession }: InicioProps) {
  const scrollToEstilos = () => {
    if (refSession.current) {
      refSession.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FadeUp>
      <main className="flex-1 relative">
        <div className="w-full p-0 md:w-full">
          <section
            style={{ height: "calc(100vh - 60px)" }}
            className="relative mx-auto flex flex-col items-start gap-4"
          >
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
              <CarouselDApiDemo />
            </div>
            <div className="relative z-10 flex-1 w-full flex-wrap md:flex-nowrap flex items-center justify-between">
              <div className="flex justify-center w-full px-0 md:w-[50%] lg:px-40 items-center text-center md:text-left items-left gap-3 flex-col">
                <FlipWordsDemo />
                <div className="w-full">
                  <p className="text-[16px] md:text-2xl text-muted-foreground pb-4">
                    Consulte o melhor da sua arte
                  </p>
                  <Button>Fazer orçamento</Button>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-center w-full mb-10">
              <span onClick={scrollToEstilos} style={{ cursor: "pointer" }}>
                <svg
                  className="animate-bounce"
                  width="40"
                  height="40"
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
    </FadeUp>
  );
}
