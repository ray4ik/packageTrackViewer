//React Core 
import { useState } from "react" 

import information from "./information.json"
import HomePage from "./components/templates/HomePage"
import "./styles/style.css"


function App() {
  return (
    <div className="App">
          <HomePage information={information} />
    </div>
  );
}

export default App;
