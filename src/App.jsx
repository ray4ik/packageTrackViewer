//React Core 
import { useState } from "react" 

//Component test
import Card from "./components/Card"
import information from "./information.json"

import "./styles/style.css"


function App() {
console.log(information);
  return (
    <div className="App">
      <h1>Package track Viewer </h1>
      <Card data={information[0]} />
    </div>
  );
}

export default App;
