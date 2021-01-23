import React from "react";

import { BiHeart } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import "../styles/Navigation.css";
const Navigation = () => {
  return (
    <nav className="Navigation">
      <img className="Logo" src="/logo.png" alt="logo" />
      <ul>
        <li>
          <BiHeart size="2rem" color="#7b48ff" />
        </li>
        <li>
          <BiMapAlt size="2rem" color="#7b48ff" />
        </li>

        <li>
          <BiBell size="2rem" color="#7b48ff" />
        </li>
        <li>
          <BiCog size="2rem" color="#7b48ff" />
        </li>
      </ul>
      <img className="Profile-picture" src="/profile.jpg" alt="profile" />
    </nav>
  );
};

export default Navigation;
