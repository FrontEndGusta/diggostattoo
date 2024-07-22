import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <section
          style={{ height: "calc(100vh - 60px)" }}
          className="mx-auto flex flex-col justify-center items-start gap-4 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10"
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Sua Jornada, Sua Essência, Nossa Arte.
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            Experimente fazer um orçamento
          </p>
          <div>
            <Button>Fazer orçamento</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
