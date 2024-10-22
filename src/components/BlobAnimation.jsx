// components/BlobAnimation.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

const BlobAnimation = () => {
  useEffect(() => {
    const ball = document.getElementById("blob");

    const moveBall = (event) => {
      const { clientX, clientY } = event;
      const ballWidth = ball.offsetWidth / 2; // Metade da largura do blob
      const ballHeight = ball.offsetHeight / 2; // Metade da altura do blob

      // Centralizando a bolinha no cursor
      ball.style.left = `${clientX - ballWidth}px`;
      ball.style.top = `${clientY - ballHeight}px`;
    };

    window.addEventListener("pointermove", moveBall);

    // Limpar o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("pointermove", moveBall);
    };
  }, []);

  return (
    <div
      id="blob"
      className="absolute h-[50rem] w-[50rem] rounded-full opacity-70 transition-all z-2" // Aumentando para 50rem
      style={{
        pointerEvents: "none",
        transition: "left 0.1s ease, top 0.1s ease",
        background: "radial-gradient(circle, black, #4b0082)", // Gradiente com roxo mais escuro
        filter: "blur(250px)", // Blur mais intenso
      }}
    />
  );
};

export default BlobAnimation;
