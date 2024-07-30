"use client";
import Inicio from "./inicio/page";
import Clientes from "./clientes/page";
import Estilos from "./estilos/page";
import Diferencial from "./diferencial/page";
import Tatuagens from "./tatuagens/page";
import { useRef } from "react";

export default function Home() {
  const estilosRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex-1 bg-background">
      <Inicio refSession={estilosRef} />
      <Estilos estilosRef={estilosRef} />
      <Tatuagens />
      <Diferencial />
      <Clientes />
    </main>
  );
}
