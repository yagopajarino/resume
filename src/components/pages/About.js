import Article from "../../templates/article";
import pagesData from "../../data/pagesData.json";
import { useState } from "react";

export default function About(props) {
  const [data, setData] = useState(
    pagesData.filter((item) => item.title.toUpperCase() == "ABOUT")[0]
  );

  return (
    <Article title={data.title} subtitle={data.subtitle} fileName="about" />
  );
}
