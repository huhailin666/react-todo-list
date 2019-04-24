import React from "react";
import ReactDOM from "react-dom";
import TodoBox from "./components/TodoBox";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
