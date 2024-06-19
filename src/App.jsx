import React, { useState } from "react";
import Navi from "./assets/components/Navi";
import Forms from "./assets/components/Forms";
import CardList from "./assets/components/CardList";
import { data } from "./assets/data/data";

const App = () => {
  const [kitaplar, setKitaplar] = useState(data);

  const addBook = (newBook) => {
    setKitaplar([...kitaplar, newBook]);
  };
  const deleteBook = (id) => {
    const newBooks = kitaplar.filter((kitap) => kitap.id !== id);
    setKitaplar(newBooks);
  };

  return (
    <>
      <Navi />
      <Forms addBook={addBook} />
      <CardList kitaplar={kitaplar} deleteBook={deleteBook} />
    </>
  );
};

export default App;
