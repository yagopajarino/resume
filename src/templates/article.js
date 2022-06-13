import SectionHeader from "./sectionHeader";
import SectionMain from "./sectionMain";

export default function Article(props) {
  return (
    <article className="main" id="routerContainer">
      <SectionHeader title={props.title} subtitle={props.subtitle} />
      <SectionMain content={props.fileName} effects={props.effects} />
    </article>
  );
}
