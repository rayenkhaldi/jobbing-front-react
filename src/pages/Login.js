import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function checkEntries() {
    if (username == "" || password == "") {
      alert("Enter usernname and password");
    } else if (username == "admin") {
      if (password == "admin") {
        localStorage.setItem("username", username);
        navigate("/");

        console.log("logged succ");
      } else {
        console.log("wrong password");
        alert("user not found");
      }
    } else {
      console.log("User NOT found");
      alert("User NOT found");
    }
  }

  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                className="button login__submit"
                onClick={(e) => {
                  checkEntries(username, password);
                  e.preventDefault();
                }}
              >
                <a></a>

                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
