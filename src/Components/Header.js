import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ title, handleChange, rate, ratingChanged }) => {
  return (
    <Navbar
      bg="primary"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-around"
      sticky="top"
      style={{ height: 60 }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <h2>Twin Book</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Contact Us</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>

            <NavDropdown title="Sign up" id="navbarScrollingDropdown">
              <NavDropdown
                title={<span style={{ color: "black" }}>Reader Account</span>}
              >
                <NavDropdown.Item href="#actionadult">
                  Create adult account
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Create child account
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Create writer account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Create seller account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Create editor account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Create translator account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Books..."
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={title}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
