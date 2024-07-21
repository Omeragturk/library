import React, { useState } from "react";
import Navi from "./assets/components/Navi";
import Forms from "./assets/components/Forms";
import CardList from "./assets/components/CardList";
import { data } from "./assets/data/data";

const App = () => {
  const [kitaplar, setKitaplar] = useState(data);
  const [currentBook, setCurrentBook] = useState(null);

  const addBook = (newBook) => {
    setKitaplar([...kitaplar, newBook]);
  };

  const deleteBook = (id) => {
    const newBooks = kitaplar.filter((kitap) => kitap.id !== id);
    setKitaplar(newBooks);
  };

  const editBook = (updatedBook) => {
    const newBooks = kitaplar.map((kitap) =>
      kitap.id === updatedBook.id ? updatedBook : kitap
    );
    setKitaplar(newBooks);
  };

  return (
    <>
      <Navi />
      <Forms
        addBook={addBook}
        editBook={editBook}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
      />
      <CardList
        kitaplar={kitaplar}
        deleteBook={deleteBook}
        editBook={editBook}
        setCurrentBook={setCurrentBook}
      />
    </>
  );
};

export default App;
