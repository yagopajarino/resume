import { useEffect, useState } from "react";
import SectionHeader from "../../templates/sectionHeader";
import getAge from "../../data/stats/getAge";
import timeToNextRace from "../../data/stats/getF1";
import getBikes from "../../data/stats/getBikes";
import getAdvice from "../../data/stats/getAdvice";
import getGasPrice from "../../data/stats/gasPrice";

function Row(props) {
  props = props.info;
  return (
    <tr>
      {props[2] ? (
        <td>
          {props[0]}{" "}
          <a href={props[2]} target="_blank">
            here
          </a>
        </td>
      ) : (
        <td>{props[0]}</td>
      )}
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
          return (
            <Row
              info={i.map ? [i.name, i.value, i.map] : [i.name, i.value]}
              key={i.name}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default function Stats() {
  const [age, setAge] = useState(0);
  const [f1, setF1] = useState("Loading...");
  const [bikes, setBikes] = useState("Loading...");
  const [bikesMap, setBikesMap] = useState("");
  const [gasPrice, setgasPrice] = useState("Loading...");
  const [gasPriceMap, setGasPriceMap] = useState("");
  const [advice, setAdvice] = useState("Loading...");

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
      { name: "Avalible bikes in ", value: bikes, map: bikesMap },
      { name: "Petrol price (USD) in ", value: gasPrice, map: gasPriceMap },
      { name: "Need an advice?", value: advice },
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
    console.log("rendered");
    timeToNextRace(setF1);
    getAge(age, setAge);
    getAdvice(advice, setAdvice);
    getGasPrice(setgasPrice, setGasPriceMap);
    getBikes(setBikes, setBikesMap);
  }, []);

  return (
    <article className="main" id="routerContainer">
      <SectionHeader title="Stats" />
      <main className="markdown-body">
        <Table data={personalData} />
        {/* <Table data={githubData} /> */}
        <p>Posible thanks to</p>
        <ul>
          <li>
            <a href="https://ergast.com/mrd/">Ergast F1 API</a>
          </li>
          <li>
            <a href="https://citybik.es/#about">Citybikes</a>
          </li>
          <li>
            <a href="https://docs.apis.is/">Iceland APIs</a>
          </li>
          <li>
            <a href="https://api.adviceslip.com/">Advice slip API</a>
          </li>
        </ul>
      </main>
    </article>
  );
}
