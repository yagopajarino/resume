import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import showdown from "showdown";
import content from "../../data/pagesContent/welcome.md";
import Flags from "../Flags";
import Scoreboard from "../Scoreboard";

let converter = new showdown.Converter();

export default function Welcome() {
  const [texto, setTexto] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    import("../../data/pagesContent/welcome.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMainContent(converter.makeHtml(text)))
    );
  }, []);

  const flags = (
    <div className="flags">
      <Flags setShowScores={setShowScores} />
    </div>
  );

  const scores = (
    <div className="scores">
      <Scoreboard />
    </div>
  );

  return (
    <article className="main welcomeSection">
      <header>
        <span className="welcomeTitle">&#x1f44b; {texto}</span>
      </header>
      <main
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: mainContent }}
      ></main>
      <div className="flags-container">
        <h2>Say Hi</h2>
        <p>
          Select your country and see where it is in the visitors scoreboard :)
        </p>
        {showScores ? scores : flags}
      </div>
    </article>
  );
}
