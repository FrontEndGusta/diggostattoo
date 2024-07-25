import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import Tatuagens from "./diferencial/page";
import Inicio from "./inicio/page";
import Clientes from "./clientes/page";
import Estilos from "./estilos/page";


export default function Home() {
  return (
    <main className="flex-1">
      <Inicio />
      <Estilos />
      <Tatuagens />
      <Clientes />
      
    </main>
  );
}
