//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
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
    // SIGN UP PAGE
    <div className="signupPage">
      <h1 id="inspo2">Inspogram</h1>
      <form id="form2">
        <label>
          <p id="username">Create username</p>
          <input /* REQUIRES USERNAME: ashley_fillmore */
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
          />
        </label>
        <label>
          <p>Create Password</p>
          <input /* REQUIRES PASSWORD: password */
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </label>
        <div>
          <button id="signup" onClick={id_check} type="submit">
            Sign up!
          </button>
        </div>
      </form>
      <div>
        <p id="agree">
          By signing up, you agree to our <strong>Terms</strong>,
          <strong> Data Policy</strong>, and<strong> Cookies Policy</strong>.
        </p>
      </div>
      <div>
        <p id="already">Already have an account with us?</p>
      </div>
      <form action="/">
        <button id="loginButton" href="">
          Log in here!
        </button>
      </form>
    </div>
  );
}
