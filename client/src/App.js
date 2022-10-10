import Homepage from "./components/Homepage";
import Wrapper from "./components/Wrapper";
import MyHouseWork from "./components/MyHousework";
import MyTools from "./components/MyTools";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <Homepage />
      <MyHouseWork />
      <MyTools />
    </Wrapper>
  );
}

export default App;
