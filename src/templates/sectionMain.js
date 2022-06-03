import { useState, useEffect } from "react";
import showdown from "showdown";

let converter = new showdown.Converter();

export default function SectionMain(props) {
  const [mainContent, setMainContent] = useState("");
  useEffect(() => {
    import(`../data/pagesContent/${props.content}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMainContent(converter.makeHtml(text)))
    );
  }, []);

  return <main dangerouslySetInnerHTML={{ __html: mainContent }}></main>;
}
