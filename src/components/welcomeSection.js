import { text } from "@fortawesome/fontawesome-svg-core";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function WelcomeSection() {
  const [texto, setTexto] = useState("");

  useEffect((t) => {
    let i = 0;
    let greetings = [
      "Hello",
      "Salut",
      "Hola",
      "Ciao",
      "привет",
      "Hei",
      "Sveiki",
      "Hallo",
      "Olá",
      "Ahoj",
    ];

    escribirPalabra(greetings[0]);
    i++;
    setInterval(() => {
      if (i < greetings.length) {
        escribirPalabra(greetings[i]);
        i++;
      } else {
        i = 0;
      }
    }, 150 * greetings[i].length + 1000);

    function escribirPalabra(palabra) {
      let j = 0;
      const intervalo = setInterval(() => {
        if (j < palabra.length) {
          setTexto(palabra.slice(0, j + 1));
          j++;
        } else {
          setTexto(palabra);
          clearInterval(intervalo);
        }
      }, 150);
    }
  }, []);

  return (
    <div className="welcomeSection">
      <header>
        <span className="welcomeTitle">&#x1f44b; {texto}</span>
      </header>
    </div>
  );
}
