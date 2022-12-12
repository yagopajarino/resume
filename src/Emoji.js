import React, { useState } from "react";

export default function Emoji(props) {
  const [text, setText] = useState(props.symbol);
  const [isEmoji, setIsEmoji] = useState(true);

  return (
    <div
      className={`container ${isEmoji ? "emoji" : ""}`}
      onMouseEnter={() => {
        setText(props.name);
        setIsEmoji(false);
      }}
      onMouseOut={() => {
        setText(props.symbol);
        setIsEmoji(true);
      }}
    >
      {text}
    </div>
  );
}
