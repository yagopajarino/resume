import react, { useEffect, useState } from "react";
import api from "../api/api";
import emojiFlags from "emoji-flags";
import Loading from "./Loading";

export default function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const callScores = async () => {
      const data = await api.getScores();
      setScores(data);
    };
    callScores();
  }, []);

  const table = (
    <table>
      <thead>
        <th>Flag</th>
        <th>Country</th>
        <th>Visitors</th>
      </thead>
      <tbody>
        {scores.map((i) => {
          const country = emojiFlags[i.code];
          return (
            <tr>
              <td className="flag">{country.emoji}</td>
              <td>{country.name}</td>
              <td>{i.count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return scores.length == <Loading /> ? "" : table;
}
