import React from "react";
import "../styles/navi.scss";
import { katagoriler } from "../data/data";

const Navi = () => {
  return (
    <nav>
      <div className="brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDGO8ofo2Feey6f49_sPNUEikQbvGGJjtTw&s"
          alt="logo"
        />
        <h3>Onl-7 Lib</h3>
      </div>
      <ul>
        {katagoriler.map((katagori) => (
          <li key={katagori.id}>{katagori.kategoriAdi}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navi;
