//React Core 
import { useState } from "react" 

//Component test
import Cards from "./components/Cards"

//Media
import logo from './assets/logo.svg';


function App() {
  //States test
  const [total, setTotal] = useState(10);
  const [myTitle] = useState("Title");

  return (
    <div className="App">
      <h1>Package track Viewer </h1>
    </div>
  );
}

export default App;
