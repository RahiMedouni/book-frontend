import { Button, Card } from "react-bootstrap";

const UserProfile = (props) => {
  return (
    <div>
      <Card
        bg="info"
        expand="lg"
        variant="light"
        style={{
          height: "100%",
          width: 250,
          float: "right",
          color: "white",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              variant="top"
              src={"/imagevictor.jpg"}
              style={{ height: 80, width: 80, borderRadius: "50%" }}
            />
          </div>
          <Card.Title
            className="hideText"
            style={{ textAlign: "center", lineHeight: 0.5 }}
          >
            <h3>Victor Image</h3>
            <h6>Reader</h6>
          </Card.Title>
        </Card.Body>
        <Card.Body style={{ display: "inline-block" }}>
          <Button variant="light" style={{ height: 50, width: "100%" }}>
            aaaa1
          </Button>
          <br />
          <Button variant="light" style={{ height: 50, width: "100%" }}>
            aaaa2
          </Button>
          <br />
          <Button
            variant="light"
            bg="dark"
            style={{
              height: 50,
              width: "100%",
              border: "solid",
              borderRadius: 0,
              borderWidth: 0.1,
              borderColor: "gray",
              outline: "none",
            }}
          >
            aaaa3
          </Button>
          <br />
          <Button variant="light" style={{ height: 50, width: "100%" }}>
            aaaa4
          </Button>
          <br />
          <Button variant="light" style={{ height: 50, width: "100%" }}>
            aaaa5
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserProfile;
