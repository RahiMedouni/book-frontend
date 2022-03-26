import { FourGMobiledata } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddQuiz = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [question, setQuestion] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = {
      id: Math.random,
      question,
      one,
      two,
      three,
      four,
    };
    handleAdd(newQuiz);
  };
  return (
    <div className="adding-story">
      <Button variant="primary" onClick={handleShow}>
        Add Quiz
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Question:
            <input
              type="text"
              className="form-control"
              placeholder="add question..."
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
            Option 1:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setOne(e.target.value)}
              value={One}
            />
            Option 2:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setTwo(e.target.value)}
              value={two}
            />
            Option 3:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setThree(e.target.value)}
              value={three}
            />
            Option 4:
            <input
              type="text"
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setFour(e.target.value)}
              value={Four}
            />
            <Button variant="primary" type="submit">
              Save question
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

export default AddQuiz;
