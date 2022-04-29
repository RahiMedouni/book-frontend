import { OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import "./BookList.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <Card
      style={{
        width: 250,
        color: "black",
        background: "rgb(0,89,255,0.5)",
        marginLeft: 20,
        marginBottom: 20,
      }}
    >
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.authorBook.coverUrl}
          style={{ height: 210, width: 150, marginLeft: 35 }}
        />
        <Card.Title className="hideText">
          <OverlayTrigger
            overlay={<Tooltip id="tooltip">{props.authorBook.title}</Tooltip>}
          >
            <Link to={"/publish/publishedbooks/" + props.authorBook.title}>
              <span className="d-inline-block" style={{ color: "white" }}>
                {props.authorBook.title}
              </span>
            </Link>
          </OverlayTrigger>
        </Card.Title>

        <p className="hideText">{props.authorBook.price + "$"}</p>
        <p className="hideText">{props.authorBook.category}</p>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
