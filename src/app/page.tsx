import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import Tatuagens from "./tatuagens/page";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <section
          style={{ height: "calc(100vh - 60px)" }}
          className="mx-auto flex flex-col items-start gap-4 px-4"
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="flex gap-3 flex-col">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                Sua Jornada, Sua Essência, Nossa Arte.
              </h1>
              <p className="max-w-2xl text-lg font-light text-foreground">
                Experimente fazer um orçamento
              </p>
              <div>
                <Button>Fazer orçamento</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mb-4">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </section>
      </div>
      <Tatuagens />
    </main>
   
  );
}
