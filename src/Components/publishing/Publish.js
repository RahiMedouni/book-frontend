import PublishedBooks from "./PublishedBooks";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useParams } from "react-router-dom";
import PublishBook from "./PublishBook";
import PublishedBookDetails from "./PublishedBookDetails";

const PublishedBooksDetails = (props) => {
  let params = useParams();

  return (
    <div>
      <PublishedBookDetails params={params} authorBooks={props.authorBooks} />
    </div>
  );
};

const PublishedBook = ({ authorBooks, handleDelete, handlePublishBook }) => {
  return (
    <div>
      <PublishBook handlePublishBook={handlePublishBook} />
      <PublishedBooks authorBooks={authorBooks} handleDelete={handleDelete} />
    </div>
  );
};

function Publish() {
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

  const handlePublishBook = (newAuthorBook) => {
    setAuthorBooks([...authorBooks, newAuthorBook]);
  };

  const handleDelete = (bookTitle) => {
    setAuthorBooks(
      authorBooks.filter((authorBook) => authorBook.title !== bookTitle)
    );
  };

  return (
    <div>
      <div style={{ width: "100%", marginLeft: 250 }}>
        <Routes>
          <Route
            path="/approvebooks"
            element={
              <PublishedBook
                authorBooks={authorBooks}
                handleDelete={handleDelete}
                handlePublishBook={handlePublishBook}
              />
            }
          />
          <Route
            path="/publishedbooks/:title"
            element={<PublishedBooksDetails authorBooks={authorBooks} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Publish;
