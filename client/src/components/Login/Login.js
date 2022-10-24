import React, { useState } from "react";
import "./Login.css";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [login] = useMutation(LOGIN);

  const handleLogin = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const { data } = await login({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-pic">
        <img
          src="https://images.unsplash.com/photo-1610816391550-d17219aedac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="drying-clothes"
        />
      </div>
      <div className="login-form">
        <form>
          <div className="login-form-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
            />
            <br />
            <button type="submit" onSubmit={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
