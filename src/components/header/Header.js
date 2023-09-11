import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import useCartItemsCount from '../../hooks/useCartItemsCount';
import './Header.css'


function Header() {

  const cartItemsCount = useCartItemsCount();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="body-tertiary sticky-top navbar"
    >
      <Container>
        <Navbar.Brand href="/">
            
         <img
              alt="Logo de 7ème Arche"
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}

        Septième Arche
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/myAccount">Espace Client</Nav.Link>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Categories</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Livres_V2</Dropdown.Item>
                <Dropdown.Item>Dvds_V2</Dropdown.Item>
                <Dropdown.Item>Autres_V2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
          <Nav>

            <Nav.Link href="/signUp">Inscription</Nav.Link>

            <Nav.Link href="/signIn">Connexion</Nav.Link>

       

            <Nav.Link href='/cart'>
            <div className="cartWrapper">
              <span className="cartCount">
              PANIER:{ " " + cartItemsCount}
              </span>
              
              {/* <i className="bi bi-cart2" style={{ fontSize: "20px", cursor: 'pointer' }} /> */}
            </div>
          </Nav.Link> 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;