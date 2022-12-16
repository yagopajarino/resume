import { useEffect, useState } from "react";
import SectionHeader from "../../templates/sectionHeader";
import getAge from "../../data/stats/getAge";
import timeToNextRace from "../../data/stats/getF1";
import getBikes from "../../data/stats/getBikes";
import getAdvice from "../../data/stats/getAdvice";
import getGasPrice from "../../data/stats/gasPrice";
import api from "../../api/api";

function Row(props) {
  props = props.info;
  return (
    <tr>
      {props[2] ? (
        <td>
          {props[0]}{" "}
          <a href={props[2]} target="_blank">
            {props[3]}
          </a>
        </td>
      ) : (
        <td>{props[0]}</td>
      )}
      <td className={props[0] == "My" ? "odometer" : ""}>{props[1]}</td>
    </tr>
  );
}

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>{props.data.header}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.content.map((i) => {
          return (
            <Row
              info={
                i.ref ? [i.name, i.value, i.ref, i.anchor] : [i.name, i.value]
              }
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
  const [count, setCount] = useState("Loading...");
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
      {
        name: "Avalible bikes in ",
        value: bikes,
        ref: bikesMap,
        anchor: "here",
      },
      {
        name: "Petrol price (USD) in ",
        value: gasPrice,
        ref: gasPriceMap,
        anchor: "here",
      },
      { name: "Need an advice?", value: advice },
      {
        name: "Views of the greatest",
        value: count,
        ref: "https://youtu.be/dQw4w9WgXcQ",
        anchor: "YouTube video",
      },
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
    timeToNextRace(setF1);
    getAge(age, setAge);
    getAdvice(advice, setAdvice);
    getGasPrice(setgasPrice, setGasPriceMap);
    getBikes(setBikes, setBikesMap);
    api.getCount().then((r) => setCount(r.toLocaleString()));
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
          <li>
            <a href="https://developers.google.com/youtube/v3">
              Youtube API v3
            </a>
          </li>
        </ul>
      </main>
    </article>
  );
}
