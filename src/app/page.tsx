import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import Inicio from "./inicio/page";
import Clientes from "./clientes/page";
import Estilos from "./estilos/page";
import Diferencial from "./diferencial/page";
import Tatuagens from "./tatuagens/page";




export default function Home() {
  return (
    <main className="flex-1 bg-background">
      <Inicio />
      <Estilos />
      <Tatuagens />
      <Diferencial />
      <Clientes />
    </main>
  );
}
