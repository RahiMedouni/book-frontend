import { OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import "./BookList.css";
import { Link } from "react-router-dom";
import Ratestar from "./Ratestar";

const WishCard = (props) => {
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Text>
            <Ratestar />
          </Card.Text>
          <span>
            <Button
              variant="danger"
              onClick={() => {
                props.handleDeleteWish(props.book.title);
                props.updateWish(props.index);
              }}
            >
              X
            </Button>
          </span>
          {!props.book?.addedToPurchase && (
            <Button
              variant="danger"
              style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
              onClick={() => {
                props.addToCart(props.index);
                props.updatePurchaseWish(props.book.title);
              }}
            >
              Purchase
            </Button>
          )}

          {props.book?.addedToPurchase && (
            <Button
              variant="outline-Danger"
              style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
              onClick={() => {
                props.handleDelete(props.index);
                props.updatePurchaseWish(props.book.title);
              }}
            >
              Added
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default WishCard;
