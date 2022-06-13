import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";
import { useEffect, useState } from "react";

export default function About(props) {
  const [data, setData] = useState(
    pagesData.filter((item) => item.title.toUpperCase() == "ABOUT")[0]
  );

  function effects(mainContent, setMainContent) {
    if (mainContent.includes("//wordCount//")) {
      let cont = mainContent.replace(/<[^>]*>/g, " ");
      cont = cont.replace(/[,.]/g, " ");
      cont = cont.replace(/\s+/g, " ");
      cont = cont.trim();
      var n = cont.split(" ").length;
      setMainContent(mainContent.replace("//wordCount//", n));
    }
  }

  return (
    <Article
      title={data.title}
      subtitle={data.subtitle}
      fileName="about"
      effects={effects}
    />
  );
}
