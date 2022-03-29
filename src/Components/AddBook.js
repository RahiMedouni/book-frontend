import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddBook = ({ handleAddBook }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [addedToWish, setAddedToWish] = useState(false);
  const [addedToPurchase, setAddedToPurchase] = useState(false);

  function handleChangeImage(e) {
    console.log(e.target.files);
    setCoverUrl(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      pages,
      isbn,
      description,
      coverUrl,
      category,
      price,
      addedToWish: false,
      addedToPurchase: false,
    };
    handleAddBook(newBook);
  };
  return (
    <div className="adding-movie">
      <Button variant="primary" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            TITLE:
            <input
              type="text"
              className="form-control"
              placeholder="enter title here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            AUTHOR:
            <input
              type="text"
              className="form-control"
              placeholder="author name"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
            PAGES:
            <input
              type="text"
              className="form-control"
              placeholder="number of pages"
              onChange={(e) => setPages(e.target.value)}
              value={pages}
            />
            ISBN
            <input
              type="text"
              className="form-control"
              placeholder="enter title here"
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
            />
            DESCRIPTION:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            Add image:
            <input type="file" onChange={handleChangeImage} value={coverUrl} />
            {/* COVERURL:
            <input
              type="url"
              className="form-control"
              placeholder="enter url here"
              onChange={(e) => setCoverUrl(e.target.value)}
              value={coverUrl}
            /> */}
            <Form.Select aria-label="Default select example">
              <option>Unknown</option>
              <option value="1">Drama</option>
              <option value="2">Action</option>
              <option value="3">Comedy</option>
              <option value="4">Horror</option>
              <option value="5">Fiction</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Save Movie
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBook;
