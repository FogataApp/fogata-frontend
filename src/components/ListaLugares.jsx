import React from "react";
import CardLugar from "./CardLugar";
import "../styles/ListaLugares.css";

const ListaLugares = ({ lugares }) => {
  return (
    <div className="ListaLugares">
      <h1>
        Lista de Lugares <span>{lugares.length} resultados</span>
      </h1>
      {lugares.map((lugar) => (
        <CardLugar
          key={lugar._id}
          _id={lugar._id}
          title={lugar.title}
          image={lugar.image}
          description={lugar.description}
          location={lugar.location}
          category={lugar.category}
        />
      ))}
    </div>
  );
};

export default ListaLugares;
