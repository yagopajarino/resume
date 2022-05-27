import SectionHeader from "../../templates/sectionHeader";
import pagesData from "../../data/pagesData.json";

export default function Contact() {
  let data = pagesData.filter((item) => item.title == "CONTACT")[0];
  return <SectionHeader title={data.title} subtitle={data.subtitle} />;
}
