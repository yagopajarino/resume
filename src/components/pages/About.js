import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";

export default function About(props) {
  let data = pagesData.filter((item) => item.title.toUpperCase() == "ABOUT")[0];
  return (
    <Article title={data.title} subtitle={data.subtitle} fileName="about" />
  );
}
