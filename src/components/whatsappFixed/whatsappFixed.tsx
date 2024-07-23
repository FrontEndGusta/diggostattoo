"use client";
import React from "react";
import Image from "next/image";

export default function WhatsappFixed() {
  const handleClick = () => {
    const phoneNumber = "5511996952488"; // Inclua o código do país 55 para o Brasil
    const message = encodeURIComponent("Olá, gostaria de saber mais sobre seus serviços.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-20 overflow-hidden cursor-pointer" onClick={handleClick}>
      <Image
        src="/icons/whatsapp/whatsapp.svg"
        alt="whatsapp"
        width={45}
        height={45}
      />
    </div>
  );
}
