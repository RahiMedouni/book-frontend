import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddStory = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: Math.random,
      title,
      thoughts,
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
            Title:
            <input
              type="text"
              className="form-control"
              placeholder="enter title here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Your Thoughts:
            <input
              type="text"
              className="form-control"
              placeholder="enter thoughts here"
              onChange={(e) => setThoughts(e.target.value)}
              value={thoughts}
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
