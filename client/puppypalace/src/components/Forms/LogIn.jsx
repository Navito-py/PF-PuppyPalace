import React from "react";
import { useState } from "react";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import loginIcon from "../../media/user.png";
import uiImg from "../../media/uiImg.png";
import "./Login.css";

export default function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function hanleOnChange(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="color-back">
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
            <img className="icon-img" src={loginIcon} alt="icon" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => hanleOnChange(e)}
                  type="email"
                  placeholder="Ingrese el email"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => hanleOnChange(e)}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>

              <Button
                onClick={(e) => handleSubmit(e)}
                variant="primary btn-block"
                type="submit"
              >
                Login
              </Button>

              <div className="text-left mt-3">
                <a href="#">
                  <small className="reset">Olvidaste la Contraseña</small>
                </a>
              </div>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={uiImg} alt="icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
