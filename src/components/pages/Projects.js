import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";

export default function Projects() {
  let data = pagesData.filter(
    (item) => item.title.toUpperCase() == "PROJECTS"
  )[0];

  function effects() {}

  return (
    <Article
      title={data.title}
      subtitle={data.subtitle}
      fileName="projects"
      effects={effects}
    />
  );
}
