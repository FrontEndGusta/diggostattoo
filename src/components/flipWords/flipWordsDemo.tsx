import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Sua Jornada", "Sua Essência", "Nossa Arte"];

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold tracking-[.1em]">
        Tatuagem que combina com<FlipWords words={words} />
      </h1>
    </div>
  );
}
