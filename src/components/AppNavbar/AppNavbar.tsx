import { Button, Form, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function AppNavbar() {
  return (
    <Navbar expand="sm" className="mb-3" style={{ backgroundColor: "#22c749" }}>
      <Container fluid>
        <Navbar.Brand href="/home">Stay Hard</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown
                title="Workouts"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="/workouts">View</NavDropdown.Item>
                <NavDropdown.Item href="/workouts/add">Add</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Exercises"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="/exercises">View</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/add">Add</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="User"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
