import React from "react";
import "../styles/CardLugar.css";

const CardLugar = ({ title, url, description, location, category }) => {
  return (
    <div className="CardLugar">
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
