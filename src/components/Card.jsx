import "./Card.css";

const Card = ({image, title, children}) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img className="cardImage" src={image} />
      </div>
      <div className="infoContainer">
        <h1 className="cardTitle">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Card;
