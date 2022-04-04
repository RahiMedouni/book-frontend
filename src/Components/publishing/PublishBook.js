import "./App.css";
import Header from "./Components/Header";
import PublishedBooks from "./PublishedBooks";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AddBook from "./PublishBook";
import Darkmode from "darkmode-js";
import axios from "axios";
import { Link, animateScroll as scroll } from "react-scroll";

new Darkmode().showWidget();

const PublishedBook = ({ books, title, handleDelete }) => {
  return (
    <div>
      <PublishBook handleAddBook={handleAddBook} />
      <PublishedBooks
        authorBooks={authorBooks.filter((authorBook) =>
          authorBook.title.toUpperCase().includes(title.toUpperCase())
        )}
        handleDelete={handleDelete}
      />
    </div>
  );
};

function PublishBooks() {
  const [authorBooks, setAuthorBooks] = useState([
    {
      title: "Title",
      author: "Your author name",
      pages: "Number of pages",
      isbn: "Internation standard book number",
      description: "Introduce your book",
      coverUrl: "Cover image",
      category: "horror/drama/fiction/romance...",
      price: "Price in $",
      addedToWish: false,
      addedToPurchase: false,
    },
  ]);

  const [accountType, setAccountType] = useState("");
  const accountTypeHandler = (type) => {
    setAccountType(type);
  };

  const handleAddBook = (newAuthorBook) => {
    setAuthorBooks([...authorbooks, newAuthorBook]);
  };

  const handleDelete = (bookTitle) => {
    setAuthorBooks(
      authorBooks.filter((authorBook) => authorBook.title !== bookTitle)
    );
  };

  return (
    <div>
      <Header title={title} handleChange={handleChange} />
      <div style={{ width: "100%", marginLeft: 250 }}>
        <Routes>
          <Route
            path="/booklist"
            element={
              accountType === "admin" ? (
                <BooksAdminList
                  books={books}
                  handleDelete={handleDelete}
                  handleAddBook={handleAddBook}
                  title={title}
                />
              ) : (
                <PublishedBook
                  authorBooks={authorBooks}
                  handleDelete={handleDelete}
                  title={title}
                />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
