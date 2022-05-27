import SectionHeader from "../../templates/sectionHeader";
import pagesData from "../../data/pagesData.json";

export default function Projects() {
  let data = pagesData.filter((item) => item.title == "PROJECTS")[0];
  return <SectionHeader title={data.title} subtitle={data.subtitle} />;
}
