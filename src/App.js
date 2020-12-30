import { FiberPin } from "@material-ui/icons";
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
import Results from "./Results";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />
      {/* we can pass in this modifier, you can pass in modifier as prop */}

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
