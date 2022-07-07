import SectionHeader from "../../templates/sectionHeader";
import projectsData from "../../data/projects/projects.json";
import img_mmanager from "../../static/mmanager.png";
import img_wengine from "../../static/wengine.png";
import img_top from "../../static/TOP.png";
import img_uba from "../../static/dc-uba.png";
import { useState } from "react";

export default function Projects() {
  const [pros, setPros] = useState(projectsData);

  function effects() {}

  const imagenes = [img_wengine, img_top, img_mmanager, img_uba];
  pros.forEach((element) => {
    for (let index = 0; index < pros.length; index++) {
      pros[index].img = imagenes[index];
    }
  });

  const proyectos = pros.map((p) => {
    return (
      <section key={p.id}>
        <h2>
          {p.title} | <span>{p.date}</span>
        </h2>
        <div>
          <a href={p.link} target="_blank">
            <img src={p.img} />
          </a>
          <p>{p.description}</p>
        </div>
      </section>
    );
  });

  console.log(pros);
  return (
    <article className="main" id="routerContainer">
      <SectionHeader title="Projects" />
      <main className="project-body">{proyectos}</main>
    </article>
  );
}
