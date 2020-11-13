import { useState } from "react";
import facade from "../facades/starWarsFacade";

export default function StarWars() {
  const [example, setExample] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    facade.getStarWarsQuote().then((data) => setExample(data));
  };
  return (
    <div>
      <h1>Star Wars</h1>
      <p>Click to get a quote</p>
      <button onClick={handleClick} className="btn btn-secondary">
        Click me
      </button>
      <br />
      <h3>{typeof example.quote !== "undefined" ? "Star Wars API" : ""}</h3>
      <p>{example.starWarsQuote}</p>
    </div>
  );
}
