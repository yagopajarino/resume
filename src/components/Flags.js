import emojiFlags from "emoji-flags";
import { useState } from "react";
import Emoji from "../Emoji";

export default function Flags() {
  const [data, setData] = useState(emojiFlags.data);

  const filterData = (e) => {
    const value = e.target.value;
    const reg = new RegExp(`^${value}.*`, "i");
    const filtrado = emojiFlags.data.filter((i) => reg.test(i.name));
    setData(filtrado);
  };

  return (
    <>
      <input
        placeholder="search"
        onChange={filterData}
        className="searchbar"
      ></input>
      <div className="wrapper">
        {data.map((i) => (
          <Emoji symbol={i.emoji} name={i.name} />
        ))}
      </div>
    </>
  );
}
