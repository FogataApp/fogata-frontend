import React from "react";
import CardLugar from "./CardLugar";
import "../styles/ListaLugares.css";

const ListaLugares = ({ lugares }) => {
  return (
    <div className="ListaLugares">
      <h1>Lista de Lugares</h1>
      {lugares.map((lugar) => (
        <CardLugar
          key={lugar.key}
          title={lugar.title}
          url={lugar.url}
          description={lugar.description}
          location={lugar.location}
          category={lugar.category}
        />
      ))}
    </div>
  );
};

export default ListaLugares;
