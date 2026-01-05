import "./Projects.css";

import PicHealth from "./projects/PicHealth.jsx";
import GloomyMonsters from "./projects/GloomyMonsters.jsx";
import Cv from "./projects/Cv.jsx";
import Portfolio from "./projects/Portfolio.jsx";
import Devlog from "./projects/Devlog.jsx";
import Translator from "./projects/Translator.jsx";
import Compiler from "./projects/Compiler.jsx";
import Networking from "./projects/Networking.jsx";
import Aow from "./projects/Aow.jsx";
import Dnd from "./projects/Dnd.jsx";
import Instalink from "./projects/Instalink.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section">Personal Projects</h1>
      <div className="projectItems">
        <Devlog />
        <PicHealth />
        <GloomyMonsters />
        <Cv />
        <Translator />
        <Compiler />
        <Networking />
        <Instalink />
        <Dnd />
        <Aow />
        <Portfolio />
      </div>
    </div>
  )
};

export default Projects;
