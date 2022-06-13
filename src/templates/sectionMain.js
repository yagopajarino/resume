import { useState, useEffect } from "react";
import showdown from "showdown";

let converter = new showdown.Converter();
showdown.setFlavor("github");

export default function SectionMain(props) {
  const [mainContent, setMainContent] = useState("");

  useEffect(() => {
    import(`../data/pagesContent/${props.content}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => {
          setMainContent(converter.makeHtml(text));
        })
    );
  }, []);

  useEffect(() => props.effects(mainContent, setMainContent), [mainContent]); //About effects

  return (
    <main
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: mainContent }}
    ></main>
  );
}
