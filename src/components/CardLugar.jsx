import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/CardLugar.css";

const CardLugar = ({ _id, title, image, description, location, category }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/detalle?id=${_id}`);
  return (
    <div className="CardLugar" onClick={handleClick}>
      <img src={image} alt="site" />
      <div className="CardLugar--text">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{location}</p>
        <p>{category}</p>
        <span>❤</span>
      </div>
    </div>
  );
};

export default CardLugar;
