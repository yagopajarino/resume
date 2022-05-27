export default function SectionHeader(props) {
  return (
    <div className="boxContainer">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
