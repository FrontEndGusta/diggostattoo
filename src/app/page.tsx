import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import Tatuagens from "./tatuagens/page";
import Inicio from "./inicio/page";
import { Clients } from "./clientes/page";

export default function Home() {
  return (
    <main className="flex-1">
      <Inicio />
      <Tatuagens />
      <Clients />
    </main>
  );
}
