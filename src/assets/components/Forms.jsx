import React, { useState, useEffect } from "react";
import "../styles/forms.scss";
import { katagoriler } from "../data/data";

const Forms = ({ addBook, editBook, currentBook, setCurrentBook }) => {
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapYazari, setKitapYazari] = useState("");
  const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
  const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState("");
  const [kitapResmi, setKitapResmi] = useState("");
  const [kitapAciklamasi, setKitapAciklamasi] = useState("");

  useEffect(() => {
    if (currentBook) {
      setKitapAdi(currentBook.kitapAdi);
      setKitapYazari(currentBook.kitapYazari);
      setKitapKategorisi(currentBook.kitapKategorisi);
      setKitapSayfaSayisi(currentBook.kitapSayfaSayisi);
      setKitapResmi(currentBook.kitapResmi);
      setKitapAciklamasi(currentBook.kitapAciklamasi);
    }
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      editBook({
        id: currentBook.id,
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapSayfaSayisi,
        kitapResmi,
        kitapAciklamasi,
      });
      setCurrentBook(null);
    } else {
      const newBook = {
        id: Date.now(),
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapSayfaSayisi,
        kitapResmi,
        kitapAciklamasi,
      };
      addBook(newBook);
    }
    resetForm();
  };

  const resetForm = () => {
    setKitapAdi("");
    setKitapYazari("");
    setKitapKategorisi("Kategori Seçiniz");
    setKitapSayfaSayisi("");
    setKitapResmi("");
    setKitapAciklamasi("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{currentBook ? "Kitap Güncelle" : "Kitap Ekle"}</h3>
      <input
        type="text"
        placeholder="Kitap Adı"
        value={kitapAdi}
        onChange={(e) => setKitapAdi(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kitap Yazarı"
        value={kitapYazari}
        onChange={(e) => setKitapYazari(e.target.value)}
      />
      <select
        style={{ color: "grey" }}
        value={kitapKategorisi}
        onChange={(e) => setKitapKategorisi(e.target.value)}
      >
        <option>Kategori Seçiniz</option>
        {katagoriler.map((katagori) => (
          <option key={katagori.id}>{katagori.kategoriAdi}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Kitap Sayfa Sayısı"
        value={kitapSayfaSayisi}
        onChange={(e) => setKitapSayfaSayisi(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kitap Resmi(url)"
        value={kitapResmi}
        onChange={(e) => setKitapResmi(e.target.value)}
      />
      <textarea
        placeholder="Kitap Açıklaması"
        value={kitapAciklamasi}
        onChange={(e) => setKitapAciklamasi(e.target.value)}
      ></textarea>
      <input type="submit" value={currentBook ? "Güncelle" : "Ekle"} />
    </form>
  );
};

export default Forms;
