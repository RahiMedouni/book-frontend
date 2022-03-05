import { OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import "./BookList.css";
import { Link } from "react-router-dom";
import Ratestar from "./Ratestar";

const BookCard = (props) => {
  return (
    <Card
      style={{
        width: 250,
        color: "black",
        background: "rgb(0,89,255,0.5)",
        marginLeft: 10,
        marginBottom: 10,
      }}
    >
      <Card.Body>
        {!props.book?.addedToWish && (
          <Button
            variant="light"
            style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
            onClick={() => {
              console.log("btn favori " + props.index);
              props.addToWish(props.index);
              props.updateWish(props.index);
            }}
          >
            Wish list
          </Button>
        )}

        {props.book?.addedToWish && (
          <Button
            variant="outline-light"
            style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
            onClick={() => {
              console.log("btn favori");
              props.handleDeleteWish(props.book.title);
              props.updateWish(props.index);
            }}
          >
            Added wish
          </Button>
        )}
        <Card.Img
          variant="top"
          src={props.book.posterUrl}
          style={{ height: 210, width: 150, marginLeft: 35 }}
        />
        <Card.Title className="hideText">
          <OverlayTrigger
            overlay={<Tooltip id="tooltip">{props.book.title}</Tooltip>}
          >
            <Link to={"/home/booklist/" + props.book.title}>
              <span className="d-inline-block" style={{ color: "white" }}>
                {props.book.title}
              </span>
            </Link>
          </OverlayTrigger>
        </Card.Title>

        <p className="hideText">{props.book.price + "$"}</p>
        <p className="hideText">{props.book.type}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Text>
            <Ratestar />
          </Card.Text>

          {!props.book?.addedToPurchase && (
            <Button
              variant="danger"
              style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
              onClick={() => {
                props.addToCart(props.index);
                props.updatePurchase(props.index);
              }}
            >
              Purchase book
            </Button>
          )}

          {props.book?.addedToPurchase && (
            <Button
              variant="outline-Danger"
              style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
              onClick={() => {
                props.handleDelete(props.book.title);
                props.updatePurchase(props.index);
              }}
            >
              Added basket
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
