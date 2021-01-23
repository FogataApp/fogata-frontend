import React, { Fragment } from "react";
import ListaLugares from "../components/ListaLugares";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Buscador from "../components/Buscador";
import data from "../data.js";
import "../styles/Home.css";

const Home = () => {
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
