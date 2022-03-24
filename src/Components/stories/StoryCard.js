import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StoryCard = (props) => {
  return (
    <Card
      style={{
        width: 400,
        color: "black",
        background: "rgb(0,89,255,0.5)",
        margin: 5,
      }}
    >
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.story.posterUrl}
          style={{ height: "300px" }}
        />
        <Card.Title className="hideText">{props.story.title}</Card.Title>

        <p className="hideText">{props.story.description}</p>
        <Link to={"/storylist/" + props.story.title}>
          <Button variant="outline-danger">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StoryCard;
