import Card from "../Card.jsx";

import aow from "../../assets/aow.jpg";

const Aow = () => {
  return (
    <Card image={aow} title="Art of War Strategy Game">
      <ul className="techStack">
        <li>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/> <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/> <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/></svg>
          Java
        </li>
        <li>
          <svg width="30" height="30" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"> <path style={{ fill: "#dc514a", fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: ".99684", }} d="M64.166 2.191c-15.303-.292-29.9 3.746-42.39 15.293-26.137 24.174-26.915 65.564-1.67 90.63 4.544 4.512 9.952 8.686 15.89 11.228 1.551-5.215 1.249-11.511.758-17.7-.118-.122-.24-.243-.33-.378-1.659-2.473-.428-8.929-.428-11.866 10.436 1.85 18.936 7.59 30.108 4.256 10.933-3.263 15.49-19.03 5.851-26.494-5.821-4.51-14.457-3.895-21.322-3.068-4.123.498-9.271 2.02-12.117-2.365-1.68-2.581.054-8.916.336-11.836.07-.736.147-1.486.22-2.225.731-9.068 1.944-18.234 1.944-27.307H85.34V4.975C78.224 3.35 71.122 2.325 64.166 2.19z" /> <path style={{ display: "inline", fill: "#23a161", fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: ".998488", }} d="M84.982 4.947v27.08H52.729l-1.676 20.827c7.157-.561 13.792-1.824 20.944-.143 4.903 1.155 9.505 3.47 12.91 7.227C94.41 70.41 92.54 90.068 81.63 98.9c-3.07 2.486-6.578 4.119-10.282 5.169-3.42 1.093-6.856 1.556-10.304 1.588a70.94 70.94 0 0 1-3.708.104c-5.37 0-10.741-.698-15.917-2.146-1.316-.369-3.352-.882-4.632-1.84-.271-.058-.543-.121-.814-.18l-.417 17.497c33.24 17.626 75.585-1.233 87.508-35.825 10.079-29.233-5.53-70.647-38.082-78.32Z" /></svg>
          JUnit
        </li>
        <li>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/> </svg>
          Git
        </li>
      </ul>
      <ul>
        <li>
          Developed a <strong>turn-based strategy game engine</strong> focused on resource management and tactical military simulation
        </li>
        <li>
          Architected the <strong>core Combat System</strong>, implementing a "rock-paper- scissors" balance mechanic (Melee, Archery, Cavalry) influenced by dynamic <strong>Terrain</strong> types and <strong>Army Formations</strong>
        </li>
        <li>
          Programmed detailed <strong>Ambush and Morale</strong> logic, where successful stealth checks grant free turns and heavy losses cause armies to flee or suffer penalty modifiers
        </li>
        <li>
          Implemented an <strong>Object-Oriented architecture</strong> for Army and Enemy entities to track persistent stats like unit size, gold, and food supplies across battle instances
        </li>
        <li>
          Integrated <strong>RNG-based damage calculations</strong> (d20 rolls) with statistical modifiers for general leadership and unit type advantages to create <strong>varied and replayable</strong> battle outcomes
        </li>
      </ul>
      <div className="cardBtns">
        <a href="https://github.com/immunooo/ArtOfWar" rel="noreferrer" target="_blank">
          <svg width="30" height="30" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/> </svg>
          Source Code
        </a>
      </div>
    </Card>
  )
};

export default Aow;

