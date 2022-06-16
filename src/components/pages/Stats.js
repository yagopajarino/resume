import { useEffect, useState } from "react";
import SectionHeader from "../../templates/sectionHeader";
import getAge from "../../data/stats/getAge";
import timeToNextRace from "../../data/stats/f1";

function Row(props) {
  props = props.info;
  return (
    <tr>
      <td>{props[0]}</td>
      <td>{props[1]}</td>
    </tr>
  );
}

function Table(props) {
  props = props.data;
  return (
    <table>
      <thead>
        <tr>
          <th>{props.header}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.content.map((i) => {
          return <Row info={[i.name, i.value]} key={i.name} />;
        })}
      </tbody>
    </table>
  );
}

export default function Stats() {
  const [age, setAge] = useState(0);
  const [f1, setF1] = useState(0);
  const [messi, setMessi] = useState(0);
  const [books, setBooks] = useState(0);
  const [blog, setBlog] = useState(0);

  const [commmits, setCommits] = useState(0);
  const [stars, setStars] = useState(0);
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [achievs, setAchievs] = useState(1);

  const personalData = {
    header: "Personal | Fun",
    content: [
      { name: "Age", value: age },
      { name: "Time until next F1 race", value: f1 },
      { name: "Messi total goals", value: messi },
      { name: "Books I read", value: books },
      { name: "Blog entries", value: blog },
    ],
  };

  const githubData = {
    header: "Github activity",
    content: [
      { name: "Commits", value: commmits },
      { name: "Stars earned", value: stars },
      { name: "Public repositories", value: repos },
      { name: "Followers", value: followers },
      { name: "Achievements", value: achievs },
    ],
  };

  useEffect(() => {
    getAge(age, setAge);
    timeToNextRace(f1, setF1);
  }, []);

  return (
    <article className="main" id="routerContainer">
      <SectionHeader title="Stats" />
      <main className="markdown-body">
        <Table data={personalData} />
        <Table data={githubData} />
      </main>
    </article>
  );
}
