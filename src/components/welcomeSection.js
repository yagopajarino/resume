import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function WelcomeSection() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let i = 0;
    let greetings = [
      "page",
      "Hola",
      "Hallo",
      "Ahoj",
      "Hei",
      "Sveiki",
      "Ciao",
      "Olá",
      "привет",
      "Salut",
    ];

    function lastIndexIdem(index) {
      let p = greetings[index];
      let q = greetings[index + (1 % greetings.length)];
      let n = 0;
      while (n < Math.min(p.length, q.length) && p[n] == q[n]) {
        n++;
      }
      return n === 0 ? 0 : n - 1;
    }

    let j = 0;
    const intervalo = setInterval(() => {
      let palActual = greetings[j];
      if (i < palActual.length - 1) {
        setTexto(palActual.slice(0, i + 1));
        i++;
      } else {
        setTexto(palActual);
        clearInterval(intervalo);
      }
    }, 100);
  }, []);

  return (
    <div className="welcomeSection">
      <p>
        Welcome to my <span style={{ fontWeight: 800 }}>{texto}</span>
      </p>
    </div>
  );
}
