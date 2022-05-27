import SectionHeader from "../../templates/sectionHeader";
import pagesData from "../../data/pagesData.json";

export default function About(props) {
  let data = pagesData.filter((item) => item.title == "ABOUT")[0];
  return <SectionHeader title={data.title} subtitle={data.subtitle} />;
}
