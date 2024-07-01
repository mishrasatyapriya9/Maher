import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/icon Mehar HSMK (1).svg";
import "./Header.css";
import list from "../../assets/list.jpeg"
function Header({ scrollToComponent }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "sticky" : ""}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary background navbar"
        bg="primary"
        variant="dark"
      >
        <Container fluid>
          <img src={logo} alt="Mehar Hospitality Services" className="icon" />
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              <h5 style={{ color: "black" }} className="textmehar">
                Mehar Hospitality Services
              </h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="toggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-between w-100">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  <h6 style={{ color: "black" }}>Home</h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("services")}
                >
                  <h6 style={{ color: "black" }}>Services</h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("pricing")}
                >
                  <h6 style={{ color: "black" }}>Pricing</h6>
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                  <h6 style={{ color: "black" }}>About Us</h6>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => scrollToComponent("contact")}
                >
                  <h6 style={{ color: "black" }}>Contact Us</h6>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
