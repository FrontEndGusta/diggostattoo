"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// Gera URLs diferentes para cada imagem
const imageUrls = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {" "}
      {/* Wrapper para disposição flexível */}
      {imageUrls.map((src, index) => (
        <CardContainer key={index} className="inter-var">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-60 object-cover group-hover/card:shadow-xl"
              alt={`thumbnail-${index}`}
            />
          </CardItem>
        </CardContainer>
      ))}
    </div>
  );
}
