import React, { useState, useEffect } from "react";
import apiFacade from "../base-facades/apiFacade";
import { LOCAL_URL, REMOTE_URL } from "../utils/settings";

export let URL = "";

export const Login = ({ isLoggedIn, loginMsg, setLoginStatus }) => {
 
  const [currentURL, setCurrentURL] = useState(
    URL === LOCAL_URL ? "Local API" : URL === REMOTE_URL ? "Remote API" : "none"
  );

  useEffect(() => {}, [currentURL]);

  const changeURL = (e) => {
    URL = e.target.value;
    if (URL === LOCAL_URL) {
      setCurrentURL("Local API");
    } else {
      setCurrentURL("Remote API");
    }
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (URL === "") {
      setError("Remember to select an API on the Home page.");
    } else {
      apiFacade
      .login(user)
      .then((res) => setLoginStatus(!isLoggedIn))
      .catch((promise) => {
        if (promise.fullError) {
          printError(promise, setError);
        } else {
          setError("No response from API. Make sure it is running.");
        }
      });
    }
  };

  const logout = () => {
    setLoginStatus(false);
    apiFacade.logout();
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>{loginMsg}</h2>
        <br />
      <p style={{ fontWeight: "bold" }}>
        Select which API to use <br />
        Currently using: {currentURL}
      </p>
      <select onChange={changeURL}>
        <option value="">Choose...</option>
        <option value={LOCAL_URL}>Local API</option>
        <option value={REMOTE_URL}>Remote API</option>
      </select>
      <br /><br />
        <br />
        <form onSubmit={handleSubmit}>
        <label>Username</label><br />
          <input
            id="username"
            onChange={handleChange}
          />
          <br />
          <label>Password</label><br />
          <input
            id="password"
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Log in" className="btn btn-secondary"/>
          <br />
          <p style={{ color: "red" }}>{error}</p>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{loginMsg}</h2>
        <br />
        <button onClick={logout} className="btn btn-secondary">Log out</button>
      </div>
    );
  }
};;

const printError = (promise, setError) => {
  promise.fullError.then(function (status) {
    setError(`${status.message}`);
  });
};