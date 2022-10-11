import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Narbar";
import Wrapper from "./components/Wrapper/Wrapper";
import MyHouseWork from "./components/MyHousework/MyHousework";
import MyTools from "./components/MyTools/MyTools";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Homepage />
        <MyHouseWork />
        <MyTools />
      </Wrapper>
    </>
  );
}

export default App;
