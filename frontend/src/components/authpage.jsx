import React from "react";
import axios from "axios"; // Import axios here
import "./authpage.css";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="beegbox">
      <form className="box" onSubmit={onSubmit}>
        <div className="heading">Bienvenido</div>
        <div className="info">Enter your username to join the chatroom</div>
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" />
        <button className="enter">Enter</button>
      </form>
    </div>
  );
};

export default AuthPage;
