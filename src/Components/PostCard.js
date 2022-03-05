import { Card, Button } from "react-bootstrap";

const PostCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.post.titlePost}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.post.type}
        </Card.Subtitle>
        <Card.Text>
          <p>{props.post.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
