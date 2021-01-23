import React, { Fragment, useEffect, useState } from "react";
import ListaLugares from "../components/ListaLugares";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Buscador from "../components/Buscador";
import "../styles/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/places")
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <Fragment>
      <div className="Home">
        <Navigation />
        <div className="Resultados">
          <Buscador />
          <ListaLugares lugares={data} />
        </div>
        <Map lugares={data} />
      </div>
    </Fragment>
  );
};

export default Home;
