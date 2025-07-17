import "./Projects.css";

import PicHealth from "./experience/PicHealth.jsx";
import Store from "./experience/Store.jsx";

const Experience = () => {
  return (
    <div className="projects">
      <h1 className="section">Experience</h1>
      <div className="projectItems">
        <PicHealth />
        <Store />
      </div>
    </div>
  )
};

export default Experience;
