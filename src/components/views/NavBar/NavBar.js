import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/">Blog.app</Navbar.Brand>
          <Nav >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;