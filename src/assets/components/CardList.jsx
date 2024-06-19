import React, { useState } from "react";
import Card from "./Card";
import "../styles/cardList.scss";

const CardList = ({ kitaplar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredKitaplar = kitaplar.filter(
    (kitap) =>
      kitap.kitapKategorisi &&
      kitap.kitapKategorisi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <h3>Tüm Kitaplar</h3>
        <input
          type="text"
          placeholder="Kategoriye göre ara..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span role="img" aria-label="search">
          🔍
        </span>
      </div>

      <div className="card-list">
        {filteredKitaplar.map((kitap) => (
          <Card key={kitap.id} kitap={kitap} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
