import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import "../styles/DetalleLugar.css";

const DetalleLugar = () => {
  const [data, setData] = useState([]);
  const query = useQuery();
  const id = query.get("id");
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/api/places/${id}`)
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, [id]);

  console.log(data);
  return (
    <Fragment>
      <Navigation />
      <div className="DetalleLugar">
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
        <p>
          <b>Descripción: </b>
          {data.description}. Un lugar tranquilo y agradable para esparcirse en
          familia
        </p>
        <p>
          <b>Ubicación: </b>
          {data.location}
        </p>
        <p>
          <b>Categoría: </b>
          {data.category}
        </p>
        <p>
          <b>Transporte: </b>
          Chiva <b>Precio: </b> $5000
        </p>
        <p>
          <b>Facilidades: </b> Tienda en la entrada
        </p>
        <Map lugares={data} />
      </div>
    </Fragment>
  );
};

export default DetalleLugar;
