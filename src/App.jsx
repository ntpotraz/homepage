import { useState } from "react";
import "./App.css";

import HeaderBar from "./HeaderBar.jsx";
import Summary from "./Summary.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderBar />
      <Summary />
    </>
  );
}

export default App;
