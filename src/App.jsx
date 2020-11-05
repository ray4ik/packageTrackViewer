//React Core 
import { useState } from "react" 

//Component test
import Card from "./components/Card"
import information from "./information.json"

import "./styles/style.css"


function App() {

//Instead of <Card data={information[0]} />
//<Card data={information[1]} />

const Cards = information.map((item) => {
  return <Card key= {item.id} data={item} />
}
);

  return (
    <div className="App">
      <h1>Package track Viewer </h1>
      {Cards}
    </div>
  );
}

export default App;
