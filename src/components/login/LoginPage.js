import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://3.23.132.211:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.text())
      .then((data) => console.log("me", data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Login Below</h3>
      <LoginForm onSubmit={handleSubmit} onChange={handleChange} user={user} />
    </div>
  );
}
