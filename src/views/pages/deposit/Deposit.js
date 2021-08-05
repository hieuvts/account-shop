import "./Deposit.scss";
import { useState } from "react";
import Fuse from "fuse.js";

export default function DepositPage() {
  const [input, setInput] = useState("");

  const characters = [
    {
      name: "Philip ",
      game: "LOL",
      price: "3879624",
      company: "Planet Express",
      species: "human ",
    },
    {
      game: "PUBg",
      name: "Philip J. Fry",
      company: "Planet Express",
      species: "human",
    },
  ];

  const fuse = new Fuse(characters, {
    // keys: ["name", "company", "species"],
    keys: ["game", "species"],
  });

  const results = fuse.search(!input ? " " : input);

  console.log(results);
  return (
    <div className="App">
      <center>
        <input
          placeholder="Enter the name of the character"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </center>

      <ul type="square">
        {results.map((character, i) => {
          return (
            <>
              {
                <li key={i} className="character">
                  <ul className="character-meta">
                    <li>
                      <strong>Name:</strong> {character.item.name}
                    </li>
                    <li>
                      <strong>Game:</strong> {character.item.game}
                    </li>
                    <li>
                      <strong>Company:</strong> {character.item.species}
                    </li>
                    <li>
                      <strong>Species:</strong> {character.item.species}
                    </li>
                  </ul>
                </li>
              }
            </>
          );
        })}
      </ul>
    </div>
  );
}
