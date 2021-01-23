import React, { Fragment } from "react";
import CardLugar from "../components/CardLugar";
import Navigation from "../components/Navigation";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="Profile">
        <h1 className="ProfileTitle">Perfil</h1>
        <div className="ProfileInformation">
          <img id="foto" src="/profile.jpg" alt="" />
          <p>
            <b>Nombre: </b>
            Dave Grohl
          </p>
          <p>
            <b>Apodo: </b>
            Foo Fighter
          </p>
          <p>
            <b>Amigos: </b>2
          </p>
        </div>
        <ul>
          <h2>Mis Lugares</h2>
          <CardLugar
            key={"1"}
            _id={"lugar._id"}
            title={"lugar.title"}
            image={
              "https://s0.wklcdn.com/image_15/472831/28482059/18194739.jpg"
            }
            description={"lugar.description"}
            location={"Caldas, Antioquia"}
            category={"lugar.category"}
          />
        </ul>
      </div>
    </Fragment>
  );
};

export default Profile;
