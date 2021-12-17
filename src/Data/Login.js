//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  /* NAVIGATE TO FEED PAGE WHEN USERNAME/PASSWORD IS TYPED IN */
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const id_check = (id) => {
    const username_data = [
      {
        username: "ashley_fillmore",
        password: "password",
      },
    ];
    let user_id = false;
    username_data.forEach((user) => {
      if (user.username === user_name && user.password === password) {
        return (user_id = true);
      }
    });
    /* ALERT WILL POP UP IF FIELDS LEFT BLANK OR USERNAME/PASSWORD IS INCORRECT */
    if (!user_id) {
      return alert("User ID not found");
    } else {
      navigate(`/Feed`);
    }
  };
  return (
    // LOGIN PAGE
    <div className="loginPage">
      <h1 id="inspo">Inspogram</h1>
      <form id="loginForm">
        <label>
          <p id="username">Username</p>
          <input /* REQUIRES USERNAME: ashley_fillmore */
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input /* REQUIRES PASSWORD: password */
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </label>{" "}
        <br />
        <button onClick={id_check} type="submit">
          Log in!
        </button>
      </form>
      <div>
        <p id="p3">Forgot password? Click here.</p>
      </div>
      <div>
        <p id="p4">Don't have an account with us?</p>
      </div>
      <form action="/Signup">
        <button href="">Sign up here!</button>
      </form>
    </div>
  );
}
