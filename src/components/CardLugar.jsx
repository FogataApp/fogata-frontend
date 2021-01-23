import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../styles/CardLugar.css";

const CardLugar = ({ title, url, description, location, category }) => {
  const history = useHistory();
  const handleClick = () => history.push("/detalle");
  return (
    <div className="CardLugar" onClick={handleClick}>
      <img src={url} alt="site" />
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
