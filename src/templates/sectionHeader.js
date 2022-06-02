export default function SectionHeader(props) {
  return (
    <div className="boxContainer">
      <header>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </header>
    </div>
  );
}
