import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jest Enzyme Testing</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/todo" className={'nav-link'}>Todo</NavLink>
            <NavLink to="/form" className={'nav-link'}>Form</NavLink>
            <NavLink to="/posts" className={'nav-link'}>Posts</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
