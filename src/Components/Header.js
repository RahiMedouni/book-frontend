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

            <NavDropdown title="Sign in" id="navbarScrollingDropdown">
              <NavDropdown
                title={<span style={{ color: "black" }}>User Account</span>}
              >
                <NavDropdown.Item href="#actionadult">
                  <Link to="/home/signin">Sign in as reader</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link to="/home/signinwriter">Sign in as writer</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  <Link to="/Home/signinadmin">Sign in as admin</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                <Link to="/">Logout</Link>
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
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
