import "./Projects.css";

import GloomyMonsters from "./projects/GloomyMonsters.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section">Personal Projects</h1>
      <div className="projectItems">
        <GloomyMonsters />
      </div>
    </div>
  )
};

export default Projects;
