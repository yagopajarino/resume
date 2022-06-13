import { useEffect } from "react";
import pagesData from "../../data/pagesData.json";
import Article from "../../templates/article";
import scoreBoard from "../../data/countriesScoreboard.json";

export default function Contact() {
  let data = pagesData.filter(
    (item) => item.title.toUpperCase() == "CONTACT"
  )[0];

  function effects() {}

  return (
    <Article
      title={data.title}
      subtitle={data.subtitle}
      fileName="contact"
      effects={effects}
    />
  );
}
