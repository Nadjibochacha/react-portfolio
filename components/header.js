import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './header.css'
const Header = () =>{

  return(
     <Navbar expand="md" className="bg-drk navbar-dark">
      <Container className="">
        <Navbar.Brand className="nav-logo text-light" href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle className="text-light" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            navbarScroll
          >
            <Nav.Link className="navlink text-light" href="/">Home</Nav.Link>
            <Nav.Link className="navlink text-light" href="/Projects">Projects</Nav.Link> 
            <Nav.Link className="navlink text-light" href="/about">About</Nav.Link>
            <Nav.Link className="navlink text-light" href="/contact">Contact</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
