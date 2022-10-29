import React, { useState } from "react";
import "./Signup.css";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { SIGNUP } from "../../utils/mutations";

function Signup() {
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const [signup] = useMutation(SIGNUP);

  const handleSignup = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const { data } = await signup({
        variables: {
          ...signupData,
        },
      });

      Auth.login(data.signup.token);
      console.log("signupppppp");
    } catch (err) {
      console.error(err);
    }

    setSignupData({
      userName: "",
      email: "",
      password: "",
      profilePic: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-pic">
        <img
          src="https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="dish washing"
        />
      </div>
      <div className="signup-form">
        <form onSubmit={handleSignup}>
          <div className="signup-form-input">
            <input
              type="userName"
              name="userName"
              placeholder="Username"
              value={signupData.userName}
              onChange={(event) =>
                setSignupData({
                  ...signupData,
                  userName: event.target.value,
                })
              }
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(event) => {
                setSignupData({
                  ...signupData,
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
              value={signupData.password}
              onChange={(event) => {
                setSignupData({
                  ...signupData,
                  password: event.target.value,
                });
              }}
            />
            <input
              type="profilePic"
              name="profilePic"
              id="profilePic"
              placeholder="URL of Your Profile Picture"
              value={signupData.profilePic}
              onChange={(event) => {
                setSignupData({
                  ...signupData,
                  profilePic: event.target.value,
                });
              }}
            />
            <br />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
