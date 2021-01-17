import React, { useState } from "react";
import "./styles.css";

const emojisOfNature = {
  "☀": "sunny",
  "☂": "umbrella",
  "☁": "cloud",
  "❄": "snowflake",
  "⛄": "snowman",
  "⚡": "zap",
  "🌀": "cyclone",
  "🌁": "foggy",
  "🐄": "cow",
  "🌹": "rose"
};

var emojis = Object.keys(emojisOfNature);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojisOfNature[userInput];
    if (meaning === undefined) {
      meaning = "sorry not in our database ☹";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojisOfNature[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emojis of Nature</h1>
      <input onChange={onChangeHandler} />
      <h2>{meaning}</h2>
      <h3>List of Emojis</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
