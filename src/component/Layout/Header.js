import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from './logon.png'

export const Header=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img src={logo} alt=' image'/>
        <Navbar.Brand className='navss' style={{color:'white'}} href="#">My Resturant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:'white'}} />
        <Navbar.Collapse id="navbarScroll" style={{color:'white'}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navs' style={{color:'white'}} href="/">Home</Nav.Link>
            <Nav.Link className='navs' style={{color:'white'}} href="/about">About</Nav.Link>
            <Nav.Link className='navs' style={{color:'white'}} href="/contact">Contact</Nav.Link>
            
            <Nav.Link className='navs' style={{color:'white'}} href="menu">
              Menu
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

