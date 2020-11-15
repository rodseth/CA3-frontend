import { useState } from "react";
import facade from "../facades/starWarsFacade";
import starwars from "../images/starwars.svg";

export default function StarWars() {
  const [example, setExample] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    facade.getStarWarsQuote().then((data) => setExample(data));
  };
  return (
    <div>
      <br/>
      <img src={starwars} alt="logo" />
      <br/>
      <button onClick={handleClick} className="btn btn-secondary">
        May the Force be with you
      </button>
      <br />
      <br />
      <h3>{typeof example.quote !== "undefined" ? "Star Wars API" : ""}</h3>
      <p>{example.starWarsQuote}</p>
    </div>
  );
}
