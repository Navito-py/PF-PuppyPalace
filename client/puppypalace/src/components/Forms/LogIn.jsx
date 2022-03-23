import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { postLogin, getProfile } from "../../redux/actions";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import loginIcon from "../../media/user.png";
import uiImg from "../../media/uiImg.png";
import "./Login.css";

export default function LogIn() {

  const dispatch = useDispatch()

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();
  const token = useSelector(state => state.token)
  
  function hanleOnChange(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postLogin(data))
    navigate('/'); 
  }


  if(token){
    sessionStorage.setItem(
      'token', token
    )
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
                  type="text"
                  placeholder="Ingrese Usuario"
                  name="userName"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => hanleOnChange(e)}
                  type="password"
                  placeholder="Contraseña"
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
                <Link to='/'>
                  <small className="reset">Volver a inicio</small>
                </Link>
              </div>
              <div className="text-left mt-3">
                <Link to='/register'>
                <small className="reset">¿No tienes cuenta? ¡Regístrate aquí!</small>
                </Link>
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
