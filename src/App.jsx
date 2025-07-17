import "./App.css";

import HeaderBar from "./components/HeaderBar.jsx";
import Summary from "./components/Summary.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <HeaderBar />
      <Summary />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
