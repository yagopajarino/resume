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

  useEffect(() => {
    if (
      window.location.href.includes("/about") == true &&
      mainContent.includes("//wordCount//")
    ) {
      let cont = mainContent.replace(/<[^>]*>/g, " ");
      cont = cont.replace(/[,.]/g, " ");
      cont = cont.replace(/\s+/g, " ");
      cont = cont.trim();
      var n = cont.split(" ").length;
      setMainContent(mainContent.replace("//wordCount//", n));
    }
  }, [mainContent]);

  return (
    <main
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: mainContent }}
    ></main>
  );
}
