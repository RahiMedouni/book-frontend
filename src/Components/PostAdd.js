import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const PostAdd = ({ handleAddPost }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titlePost, setTitle] = useState("");
  const [typePost, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random,
      titlePost,
      typePost,
      description,
    };
    handleAddPost(newPost);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            TITLE:
            <input
              type="text"
              className="form-control"
              placeholder="enter title here"
              onChange={(e) => setTitle(e.target.value)}
              value={titlePost}
            />
            type:
            <input
              type="text"
              className="form-control"
              placeholder="type of story"
              onChange={(e) => setType(e.target.value)}
              value={typePost}
            />
            DESCRIPTION:
            <input
              type="text"
              className="form-control"
              placeholder="Be creative..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Button variant="primary" type="submit">
              Share Post
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

export default PostAdd;
