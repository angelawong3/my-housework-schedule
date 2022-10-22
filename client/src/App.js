import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Narbar";
import Wrapper from "./components/Wrapper/Wrapper";
import MyHouseWork from "./components/MyHousework/MyHousework";
import MyTools from "./components/MyTools/MyTools";
import Login from "./components/Login/Login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/myhousework" element={<MyHouseWork />} />
          <Route path="/mytools" element={<MyTools />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
