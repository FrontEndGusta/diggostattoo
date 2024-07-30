// hooks/useWindowWidth.ts
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Estado para armazenar a largura da janela
  const [aosAnimation, setAosAnimation] = useState<string>("fade-right");
  useEffect(() => {
    const handleResize = () => {
        setAosAnimation(window.innerWidth < 800 ? "fade-right" : "fade-left");
    };

    // Adiciona o listener para o redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return aosAnimation;
};

export default useWindowWidth;
