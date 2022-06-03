import pagesData from "../../data/pagesData.json";
import Article from "../../templates/article";

export default function Contact() {
  let data = pagesData.filter(
    (item) => item.title.toUpperCase() == "CONTACT"
  )[0];
  return (
    <Article title={data.title} subtitle={data.subtitle} fileName="contact" />
  );
}
