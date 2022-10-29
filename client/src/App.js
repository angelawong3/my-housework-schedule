import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Narbar";
import Wrapper from "./components/Wrapper/Wrapper";
import MyHouseWork from "./components/MyHousework/MyHousework";
import MyTools from "./components/MyTools/MyTools";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";

const httpLink = createHttpLink({
  // uri: `${window.location.origin}/graphql`,
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/myhousework" element={<MyHouseWork />} />
            <Route path="/mytools" element={<MyTools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
        </Wrapper>
      </Router>
    </ApolloProvider>
  );
}

export default App;
