import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = (props) => {
  const { logo, navLinks } = props;

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <a className="navbar-brand" href="#Home">
          <img src={logo} width={75} alt={logo} />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => {
              const linkElement = (
                <Nav.Link className="text-light" href="#">
                  {link}
                </Nav.Link>
              );
              return linkElement;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const Header = (props) => {
  const { bgColor, textColor, titleText } = props;

  return (
    <Container
      fluid
      className={`py-5 mb-2 ${bgColor ? bgColor : "bg-info"} ${textColor}`}
    >
      <h2 className={`ms-5 ${textColor}`}>{titleText && titleText}</h2>
      <h2>{!titleText && "Title haven't been set :("}</h2>
    </Container>
  );
};

export default NavBar;
