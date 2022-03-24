import { OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import "./BookList.css";
import { Link } from "react-router-dom";

const Purchase = (props) => {
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
        <Card.Title className="hideText" style={{ textAlign: "center" }}>
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
        <div>
          <p>{props.book.price + "$"} </p>
          <span>
            <Button
              variant="danger"
              onClick={() => {
                props.handleDelete(props.book.title);
                props.updatePurchase(props.index);
                props.updatePurchaseWish(props.index);
              }}
            >
              X
            </Button>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Purchase;
