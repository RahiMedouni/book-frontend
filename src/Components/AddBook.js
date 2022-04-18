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
  const [category, setCategory] = useState("Unknown");
  const [price, setPrice] = useState("");

  // function handleChangeImage(e) {
  //   console.log(e.target.files);
  //   setCoverUrl(URL.createObjectURL(e.target.files[0]));
  // }

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
    <div className="adding-movie" style={{ textAlign: "center" }}>
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
            {/* <input type="file" onChange={handleChangeImage} value={coverUrl} /> */}
            <input
              type="url"
              className="form-control"
              placeholder="enter url here"
              onChange={(e) => setCoverUrl(e.target.value)}
              value={coverUrl}
            />
            Category:
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="Unknown">Unknown</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Fiction">Fiction</option>
            </Form.Select>
            setPrice:
            <input
              type="number"
              className="form-control"
              placeholder="enter price here"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
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
