import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
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

var emojisOfNature = Object.keys(emojiDict);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "not in the database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Nature Emojis</h1>
      <input onChange={inputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis Of Nature</h3>
      {emojisOfNature.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
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
