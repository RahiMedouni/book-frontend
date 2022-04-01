import { FourGMobiledata } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddQuiz = ({ handleAddQuiz }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [question, setQuestion] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = {
      question,
      one,
      two,
      three,
      four,
      isCorrect,
    };
    handleAddQuiz(newQuiz);
  };

  const handleCheck = () => {
    setIsCorrect(!isCorrect);
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
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="add question..."
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Option 1:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter description here"
                  onChange={(e) => setOne(e.target.value)}
                  value={one}
                />
                <input
                  type="checkbox"
                  className="form-check"
                  onChange={handleCheck}
                  value={isCorrect}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Option 2:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter description here"
                  onChange={(e) => setTwo(e.target.value)}
                  value={two}
                />
                <input
                  type="checkbox"
                  className="form-check"
                  onChange={handleCheck}
                  value={isCorrect}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Option 3:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter description here"
                  onChange={(e) => setThree(e.target.value)}
                  value={three}
                />
                <input
                  type="checkbox"
                  className="form-check"
                  onChange={handleCheck}
                  value={isCorrect}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Option 4:</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="enter description here"
                  onChange={(e) => setFour(e.target.value)}
                  value={four}
                />
                <input
                  type="checkbox"
                  className="form-check"
                  onChange={handleCheck}
                  value={isCorrect}
                />
              </div>
              <Button variant="primary" type="submit">
                Save question
              </Button>
            </div>
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
