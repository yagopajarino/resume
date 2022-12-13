import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Emoji(props) {
  const [text, setText] = useState(props.symbol);
  const [isEmoji, setIsEmoji] = useState(true);

  const handleClick = (e) => {
    const code = e.target.id;
    api.postCountry(code);
    props.setIsLoading(true);
    setTimeout(() => {
      props.setShowScores(true);
    }, 2000);
  };

  return (
    <div
      className={`container ${isEmoji ? "emoji" : ""}`}
      id={props.code}
      onMouseEnter={() => {
        setText(props.name);
        setIsEmoji(false);
      }}
      onMouseOut={() => {
        setText(props.symbol);
        setIsEmoji(true);
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
