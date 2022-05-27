import SectionHeader from "../../templates/sectionHeader";
import pagesData from "../../data/pagesData.json";

export default function Resume() {
  let data = pagesData.filter((item) => item.title == "RESUME")[0];
  return <SectionHeader title={data.title} subtitle={data.subtitle} />;
}
