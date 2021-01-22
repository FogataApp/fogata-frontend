import React, { Fragment } from "react";
import ListaLugares from "../components/ListaLugares";
import Map from "../components/Map";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import data from "../data.js";
import "../styles/Home.css";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="Home">
        <Navigation />
        <ListaLugares lugares={data} />
        <Map />
      </div>
    </Fragment>
  );
};

export default Home;
