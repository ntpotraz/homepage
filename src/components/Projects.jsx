import "./Projects.css";

import PicHealth from "./projects/PicHealth.jsx";
import GloomyMonsters from "./projects/GloomyMonsters.jsx";
import CV from "./projects/CV.jsx";
import Portfolio from "./projects/Portfolio.jsx";
import Devlog from "./projects/Devlog.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section">Personal Projects</h1>
      <div className="projectItems">
        <Devlog />
        <PicHealth />
        <GloomyMonsters />
        <CV />
        <Portfolio />
      </div>
    </div>
  )
};

export default Projects;
