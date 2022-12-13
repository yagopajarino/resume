import emojiFlags from "emoji-flags";
import { useState } from "react";
import Emoji from "./Emoji";
import Loading from "./Loading";

export default function Flags({ setShowScores }) {
  const [data, setData] = useState(emojiFlags.data);
  const [isLoading, setIsLoading] = useState(false);

  const filterData = (e) => {
    const value = e.target.value;
    const reg = new RegExp(`^${value}.*`, "i");
    const filtrado = emojiFlags.data.filter((i) => reg.test(i.name));
    setData(filtrado);
  };

  return (
    <>
      {/* <input
        placeholder="search"
        onChange={filterData}
        className="searchbar"
      ></input> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          {data.map((i) => (
            <Emoji
              symbol={i.emoji}
              name={i.name}
              setShowScores={setShowScores}
              setIsLoading={setIsLoading}
              code={i.code}
            />
          ))}
        </div>
      )}
    </>
  );
}
