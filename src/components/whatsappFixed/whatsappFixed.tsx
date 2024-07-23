"use client";
import React from "react";
import Image from "next/image";


export default function WhatsappFixed() {
 

  const handleClick = () => {
    window.open("https://wa.me/11996952488/?teste=urlencodedtext", "_blank");
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
