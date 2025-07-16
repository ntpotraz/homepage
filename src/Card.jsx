import "./Card.css";

import gloomhaven from "./assets/gloomhaven.jpeg"

const Card = ({children}) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img className="cardImage" src={gloomhaven} />
      </div>
        {children}
    </div>
  );
};

export default Card;
