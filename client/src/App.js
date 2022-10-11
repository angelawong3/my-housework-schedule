import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Narbar";
import Wrapper from "./components/Wrapper/Wrapper";
import MyHouseWork from "./components/MyHousework/MyHousework";
import MyTools from "./components/MyTools/MyTools";
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
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
