import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddStory = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: Math.random,
      title,
      description,
      posterUrl: url,
      rate,
    };
    handleAdd(newStory);
  };
  return (
    <div className="adding-story">
      <Button variant="primary" onClick={handleShow}>
        Add Story
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Story</Modal.Title>
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
            DESCRIPTION:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            POSTERURL:
            <input
              type="url"
              className="form-control"
              placeholder="enter url here"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <Button variant="primary" type="submit">
              Save Story
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

export default AddStory;
