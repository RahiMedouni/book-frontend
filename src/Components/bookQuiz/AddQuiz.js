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
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [isCorrect4, setIsCorrect4] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = {
      text: question,
      options: [
        { id: 0, text: one, isCorrect: isCorrect1 },
        { id: 1, text: two, isCorrect: isCorrect2 },
        { id: 2, text: three, isCorrect: isCorrect3 },
        { id: 3, text: four, isCorrect: isCorrect4 },
      ],
    };
    handleAddQuiz(newQuiz);
  };

  const handleCheck1 = () => {
    setIsCorrect1(!isCorrect1);
  };

  const handleCheck2 = () => {
    setIsCorrect2(!isCorrect2);
  };

  const handleCheck3 = () => {
    setIsCorrect3(!isCorrect3);
  };

  const handleCheck4 = () => {
    setIsCorrect4(!isCorrect4);
  };

  const takeOut = () => {
    setIsCorrect1(false);
    setIsCorrect2(false);
    setIsCorrect3(false);
    setIsCorrect4(false);
    setOne("");
    setTwo("");
    setThree("");
    setFour("");
    setQuestion("");
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
                  onChange={handleCheck1}
                  value={isCorrect1}
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
                  onChange={handleCheck2}
                  value={isCorrect2}
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
                  onChange={handleCheck3}
                  value={isCorrect3}
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
                  onChange={handleCheck4}
                  value={isCorrect4}
                />
              </div>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save question
              </Button>
              <Button variant="danger" onClick={takeOut}>
                Next question
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
