import React from "react";
import "../styles/card.scss";

const Card = ({ kitap, onDelete }) => {
  const handleDelete = () => {
    onDelete(kitap.id);
  };

  return (
    <div className="card">
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="edit">Edit</button>
      <img src={kitap.kitapResmi} alt="kitapKapak" />
      <div className="card-body">
        <h4>{kitap.kitapAdi.split(" ", 3).join(" ")}</h4>
        <p>
          <b>Yazarı:</b> {kitap.kitapYazari}
        </p>
        <p>
          <b>Kategorisi:</b> {kitap.kitapKategorisi}
        </p>
        <p>
          <b>Sayfa Sayısı:</b> {kitap.kitapSayfaSayisi}
        </p>
        <p>
          <b>Açıklaması:</b>{" "}
          {kitap.kitapAciklamasi.substring(
            0,
            kitap.kitapAciklamasi.substring(0, 120).lastIndexOf(" ")
          ) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
