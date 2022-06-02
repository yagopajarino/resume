import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";

export default function Stats() {
  let data = pagesData.filter((item) => item.title.toUpperCase() == "STATS")[0];
  return <Article title={data.title} subtitle={data.subtitle} />;
}
