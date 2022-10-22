import React from "react";
import "./Login.css";

function Login() {
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
            <input type="email" name="email" id="email" placeholder="Email" />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
