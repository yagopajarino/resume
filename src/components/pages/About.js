import Article from "../../templates/article";
import { useEffect, useState } from "react";

export default function About(props) {
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

  return <Article title="About" fileName="about" effects={effects} />;
}
