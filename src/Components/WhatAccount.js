import { OverlayTrigger, Tooltip, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Writer
  </Tooltip>
);

// render(
//   <OverlayTrigger
//     placement="right"
//     delay={{ show: 250, hide: 400 }}
//     overlay={renderTooltip}
//   >
//     <Button variant="success">Hover me to see</Button>
//   </OverlayTrigger>
// );
function WhatAccount() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: 100,
        }}
      >
        <Card
          style={{
            width: 400,
            color: "black",
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src="/kidaccount.jpg"
              style={{ height: "300px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Link to="/home/signup">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: 400, height: 50 }}
                >
                  Reader Account
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: 400,
            color: "black",
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src="/proaccount.jpg"
              style={{ height: "300px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Link to="/home/signupwriter">
                  <Button variant="primary" style={{ width: 400, height: 50 }}>
                    Writer Account
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: 100,
        }}
      >
        <Card
          style={{
            width: 400,
            color: "black",
            marginTop: 20,
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src="/kidaccount.jpg"
              style={{ height: "300px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Link to="/home/signupadmin">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: 400, height: 50 }}
                >
                  Admin Account
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: 400,
            color: "black",
            marginTop: 20,
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src="/proaccount.jpg"
              style={{ height: "300px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Link to="/signin">
                  <Button variant="primary" style={{ width: 400, height: 50 }}>
                    Translator Account
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <Link to="/home/booklist">
          <Button variant="danger">Purchase a book</Button>
        </Link>
      </div>
    </div>
  );
}

export default WhatAccount;
