import { useState } from "react";
import starWarsFacade from "../facades/starWarsFacade";

export default function StarWars() {
  const [example, setExample] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    starWarsFacade.starWarsMethod1().then((data) => setExample(data));
  };
  return (
    <div>
      <h1>Example</h1>
      <p>Click the button to get some random data from various APIs</p>
      <button onClick={handleClick} className="btn btn-secondary">
        Click me
      </button>
      <br />
      <h3>{typeof example.quote !== "undefined" ? "Star Wars API" : ""}</h3>
      <p>{example.starWarsQuote}</p>
    </div>
  );
}
