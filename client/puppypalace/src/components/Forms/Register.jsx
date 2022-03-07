import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    userName: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    province: "",
    city: "",
    image: "",
  });

  function hanleOnChange(e) {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postUser(info));
    setInfo({
      userName: "",
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      province: "",
      city: "",
      image: "",
    });
  }

  function handleSelectProvice(e) {
    e.preventDefault();
    setInfo({
      ...info,
      province: e.target.value,
    });
  }

  function handleSelectCity(e) {
    e.preventDefault();
    setInfo({
      ...info,
      city: e.target.value,
    });
  }

  return (
    <div className="container mt-5">
      <h1>Crea una cuenta</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="row g-3">
        <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input type="text" className="form-control" required onChange={(e) => hanleOnChange(e)} name="userName"/>
        </div>

        <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input type="text" className="form-control" required onChange={(e) => hanleOnChange(e)}  name="lastName"/>
        </div>

        <div className="col-md-8">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="text" className="form-control" required onChange={(e) => hanleOnChange(e)} name="email" />
        </div>

        <div className="col-md-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => hanleOnChange(e)} name="password"/>
        </div>
        
        <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Numero de telefono</label>
            <input type="text" className="form-control" onChange={(e) => hanleOnChange(e)} placeHolder="Colocar aca un ejemplo del formato de telefono" name="phone"/>
        </div>
        
        <div className="col-md-6">
            <label htmlFor="address" className="form-label">Direccion</label>
            <input type="text" className="form-control" onChange={(e) => hanleOnChange(e)} placeHolder="Colocar aca un ejemplo del formato direccion" name="address"/>
        </div>
        
        <div className="col-md-6">
            <label htmlFor="floatingSelect">Selecciona la provincia</label>
            <select class="form-select" id="floatingSelect" onChange={(e) => handleSelectProvice(e)}>
                <option hidden selected>Clic para abrir el menu</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Córdoba">Córdoba</option>
            </select>
        </div>

        <div className="col-md-6">
            <label htmlFor="floatingSelect">Selecciona la ciudad</label>
            <select class="form-select" id="floatingSelect" onChange={(e) => handleSelectCity(e)}>
                <option hidden selected>Clic para abrir el menu</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Rosario">Rosario</option>
                <option value="Córdoba">Córdoba</option>
            </select>
        </div>

        <div className="col-md-12">
            <label htmlFor="image" className="form-label">Foto de perfil</label>
            <input type="text" className="form-control" onChange={(e) => hanleOnChange(e)} placeholder="Opcional" name="image"/>
        </div>

        <div className="col-md-12">
            <button type="submit" class="btn btn-primary">Registrar</button>
        </div>

      </form>
      <br /> 
      <Link to="/">
        <button class="btn btn-primary">Inicio</button>
      </Link>
    </div>
  );
}
