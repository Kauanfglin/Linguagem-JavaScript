import React from "react";
import Lorem from './components/Lorem'; 
import Planets from "./components/Planets";
import Grayimg from "./components/Grayimg";

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Lorem />
      <Planets />
      <Grayimg/>
    </div>
  );
}

export default App;


