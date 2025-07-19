import "./Projects.css";

import GloomyMonsters from "./projects/GloomyMonsters.jsx";
import CV from "./projects/CV.jsx";
import Portfolio from "./projects/Portfolio.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section">Personal Projects</h1>
      <div className="projectItems">
        <GloomyMonsters />
        <CV />
        <Portfolio />
      </div>
    </div>
  )
};

export default Projects;
