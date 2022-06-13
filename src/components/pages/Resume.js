import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";

export default function Resume() {
  let data = pagesData.filter(
    (item) => item.title.toUpperCase() == "RESUME"
  )[0];

  function effects() {}

  return (
    <Article
      title={data.title}
      subtitle={data.subtitle}
      fileName="resume"
      effects={effects}
    />
  );
}
