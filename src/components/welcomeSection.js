import { useState, useEffect } from "react";
import typing from "../templates/typing";

export default function WelcomeSection() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let i = 0;
    let s = "hola que tal como le va?";

    const intervalo = setInterval(() => {
      if (i < s.length - 1) {
        setTexto(s.slice(0, i + 1));
        i++;
      } else {
        setTexto(s);
        clearInterval(intervalo);
      }
    }, 100);
  }, []);

  return (
    <div className="welcomeSection">
      <h1>{texto}</h1>
    </div>
  );
}
