import SectionHeader from "../../templates/sectionHeader";
import pagesData from "../../data/pagesData.json";

export default function Stats() {
  let data = pagesData.filter((item) => item.title.toUpperCase() == "STATS")[0];
  return <SectionHeader title={data.title} subtitle={data.subtitle} />;
}
