import React from "react";
import "../styles/card.scss";

const Card = ({ kitap, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(kitap.id);
  };

  const handleEdit = () => {
    onEdit(kitap);
  };

  return (
    <div className="card">
      <img src={kitap.kitapResmi} alt="kitapKapak" />
      <div className="card-info">
        <h4>{kitap.kitapAdi}</h4>
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
          <b>Açıklaması:</b> {kitap.kitapAciklamasi.substring(0, 120) + "..."}
        </p>
      </div>
      <div className="card-buttons">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
