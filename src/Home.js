import "./App.css";
import Header from "./Components/Header";
import WhatAccount from "./Components/WhatAccount";
import BookList from "./Components/BookList";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useParams } from "react-router-dom";
import PurchasedItems from "./Components/PurchasedItems";
import SubMenu from "./Components/SubMenu";
import BookDetails from "./Components/BookDetails";
import UserProfile from "./Components/UserProfile";
import WishedBooks from "./Components/WishedBooks";
import Darkmode from "darkmode-js";
import { Link, animateScroll as scroll } from "react-scroll";

new Darkmode().showWidget();

const BooksDetails = (props) => {
  let params = useParams();

  return (
    <div>
      <BookDetails params={params} books={props.books} />
    </div>
  );
};

const BooksList = ({
  books,
  addToCart,
  addToWish,
  title,
  updateWish,
  handleDeleteWish,
  handleDelete,
  updatePurchase,
  updatePurchaseWish,
}) => {
  return (
    <div>
      <BookList
        books={books.filter((book) =>
          book.title.toUpperCase().includes(title.toUpperCase())
        )}
        addToCart={addToCart}
        addToWish={addToWish}
        updateWish={updateWish}
        updatePurchase={updatePurchase}
        updatePurchaseWish={updatePurchaseWish}
        handleDeleteWish={handleDeleteWish}
        handleDelete={handleDelete}
      />
    </div>
  );
};

function shuffleArray(arr) {
  var array = [...arr];
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Home() {
  const [books, setBooks] = useState([
    {
      id: Math.random(),
      title: "Star Wars: Episode IV - A New Hope",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      type: "horror",
      price: "3.99",
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "Star Wars: Episode V - The Empire Strikes Back",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      type: "drama",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "Star Wars: Episode VI - Return of the Jedi",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      type: "comedy",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "Star Wars: Episode VII - The Force Awakens",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
      type: "drama",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "peaky blinders",
      posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
      type: "drama",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "Game of thrones",
      posterUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      type: "fiction",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
    {
      id: Math.random(),
      title: "The good doctor",
      posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      type: "horror",
      price: 4.99,
      addedToWish: false,
      addedToPurchase: false,
    },
  ]);

  const [purchasedBooks, setPurchasedBooks] = useState([]);

  const [wishedList, setWishedList] = useState([]);

  const [title, setTitle] = useState("");

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes?q=react=free-ebooks&key=AIzaSyCERRTM_eU0wmEuf-QhPdMZbNW5c22l5Eo",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setBooks(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    setBooks(shuffleArray(books));
  }, []);

  const updateWish = (index) => {
    let newBooks = [...books];

    newBooks[index] = {
      ...newBooks[index],
      addedToWish: !newBooks[index].addedToWish,
    };

    setBooks(newBooks);
  };

  const updatePurchase = (index) => {
    let newPurchase = [...books];

    newPurchase[index] = {
      ...newPurchase[index],
      addedToPurchase: !newPurchase[index].addedToPurchase,
    };

    setBooks(newPurchase);
  };

  const updatePurchaseWish = (title) => {
    let updateIndex = wishedList.findIndex((item) => item.title === title);

    let newPurchaseWish = [...wishedList];

    newPurchaseWish[updateIndex] = {
      ...newPurchaseWish[updateIndex],
      addedToPurchase: !newPurchaseWish[updateIndex].addedToPurchase,
    };

    setWishedList(newPurchaseWish);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const addToCart = (index) => {
    setPurchasedBooks([...purchasedBooks, books[index]]);
  };

  const addBookToCart = (bookTitle) => {
    let bookIndex = books.findIndex((book) => book.title === bookTitle);
    setPurchasedBooks([...purchasedBooks, books[bookIndex]]);
  };

  const addToWish = (index) => {
    setWishedList([...wishedList, books[index]]);
    console.log(wishedList);
  };

  const handleDelete = (bookTitle) => {
    setPurchasedBooks(
      purchasedBooks.filter((book) => book.title !== bookTitle)
    );
  };

  const handleDeleteWish = (bookWish) => {
    setWishedList(wishedList.filter((book) => book.title !== bookWish));
  };

  return (
    <div>
      <Header title={title} handleChange={handleChange} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SubMenu />
        <div style={{ width: "100%", marginLeft: 250 }}>
          <Routes>
            <Route path="/account" element={<WhatAccount />} />
            <Route
              path="/booklist"
              element={
                <BooksList
                  books={books}
                  addToCart={addToCart}
                  addToWish={addToWish}
                  updateWish={updateWish}
                  handleDeleteWish={handleDeleteWish}
                  handleDelete={handleDelete}
                  updatePurchase={updatePurchase}
                  updatePurchaseWish={updatePurchaseWish}
                  title={title}
                />
              }
            />
            <Route
              path="/booklist/:title"
              element={<BooksDetails books={books} />}
            />
            <Route
              path="/PurchasedItems"
              element={
                <PurchasedItems
                  purchasedBooks={purchasedBooks}
                  handleDelete={handleDelete}
                  updatePurchase={updatePurchase}
                  updatePurchaseWish={updatePurchaseWish}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <WishedBooks
                  wishedList={wishedList}
                  addToWish={addToWish}
                  addToCart={addToCart}
                  addBookToCart={addBookToCart}
                  updateWish={updateWish}
                  handleDelete={handleDelete}
                  updatePurchaseWish={updatePurchaseWish}
                  handleDeleteWish={handleDeleteWish}
                />
              }
            />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
