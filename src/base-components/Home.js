import React, { useState, useEffect} from "react";
import { REMOTE_URL } from "../utils/settings";
import starwars from "../images/starwars.svg";


export let URL = REMOTE_URL;

export default function Home() {

  return (
    <div>
      <h1>Welcome to this simple page</h1>
      <img src={starwars} className="img-fluid" alt="logo" />
      <p>When logged in you can enjoy a variety of random Star Wars quotes by clicking a button</p>
      <br /><br />
    </div>
  );
}
