import React from 'react';
import logo from './../logo.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <Container>
    <Row>
    <Col xs={12} md={8}>
        <img src={logo} height="50" width="50"/>
     </Col>
    <Col xs={6} md={4}>
    <Nav variant="pills" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="1" href="/register">
          Register
        </Nav.Link>
        </Nav.Item>
    </Nav>
    </Col>
    </Row>
  </Container>
  );
}

export default Header;
