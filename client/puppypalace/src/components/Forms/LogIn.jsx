import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { postLogin } from "../../redux/actions";
import { Link, Navigate } from "react-router-dom";
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

/*   const tokenvalidate = useSelector(state => state.token)
  
  useEffect(()=> {
    if(tokenvalidate.length === 0){
      alert('no papa')
    }
  }, [tokenvalidate]) */

  
  function hanleOnChange(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postLogin(data))
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
                  placeholder="Ingrese el Nombre de usuario"
                  name="userName"
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
                <Link to='/'>
                  <small className="reset">Volver a inicio</small>
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
