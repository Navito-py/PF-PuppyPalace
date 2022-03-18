import React from "react";
import { useState } from "react";
import { postUser } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'


export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
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
  };

  const [info, setInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsValidate = validate();
    setFormErrors(errorsValidate);
    if (Object.keys(errorsValidate).length === 0) {
      await postUser(info)();
      navigate("/login");
    }
  };

  function handleSelectProvice(e) {
    if (!e.target.value) {
      return;
    }
    setInfo({
      ...info,
      province: e.target.value,
    });
  }

  function handleSelectCity(e) {
    if (!e.target.value) {
      return;
    }
    setInfo({
      ...info,
      city: e.target.value,
    });
  }

  const validate = () => {
    const errors = {};
    var validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(info.email)

    if (!info.name) {
      errors.name = "Ingrese su nombre";
    }
    if (!info.lastName) {
      errors.lastName = "Ingrese su apellido";
    }
    if (!info.userName) {
      errors.userName = "Ingrese su usuario";
    }
    if (!info.email) {
      errors.email = "Ingrese su email";
    } else if (!validEmail) {
      errors.email = "El email debe ser valido";
    }
    if (!info.password) {
      errors.password = "Ingrese su password";
    } else if (info.password.length < 9) {
      errors.password = "El password debe tener mas de 8 caracteres";
    }
    if (!info.phone) {
      errors.phone = "Ingrese su telefono";
    } else if (info.phone.length !== 10) {
      errors.phone = "El telefono debe tener 10 numeros";
    } 
    return errors;
  };

  return (
    <div className="container-mt-5">
      <h1 className="titleAcount">Crea una cuenta</h1>
      <form onSubmit={handleSubmit} className="row-g-3">
        <div className="top1">
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label1">
              Nombre
            </label>
            <input
              type="text"
              className="form-control1"
              onChange={handleOnChange}
              name="name"
              placeholder="Juan"
              autoComplete="off"
              value={info.name}
            />
          </div>
          <p style={{ color: "red" }} className='errors' >{formErrors.name}</p>
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label1">
              Apellido
            </label>
            <input
              type="text"
              className="form-control1"
              onChange={handleOnChange}
              placeholder="Lopez"
              name="lastName"
              autoComplete="off"
              value={info.lastName}
            />
          </div>
          <p style={{ color: "red" }} className='errors'>{formErrors.lastName}</p>
        
          <div className="col-md-4">
            <label htmlFor="username" className="form-label1">
              UserName
            </label>
            <input
              type="text"
              className="form-control1"
              onChange={handleOnChange}
              name="userName"
              placeholder="Juanito97"
              autoComplete="off"
              value={info.userName}
            />
          </div>
          <p style={{ color: "red" }} className='errors'>{formErrors.userName}</p>
        </div>

        <div className="top1">
            
          <div className="col-md-4">
            <label htmlFor="email" className="form-label1">
              E-mail
            </label>
            <input
              type="text"
              className="form-control2"
              onChange={handleOnChange}
              placeholder="ejemplo@gmail.com"
              name="email"
              autoComplete="off"
              value={info.email}
            />
          </div>
          <p style={{ color: "red" }} className='errors'>{formErrors.email}</p>
          <div className="col-md-4">
            <label htmlFor="password" className="form-label1">
              Password
            </label>
            <input
              type="password"
              className="form-control2"
              onChange={handleOnChange}
              placeholder="********"
              name="password"
              value={info.password}
            />
          </div>
          <p style={{ color: "red" }} className='errors'>{formErrors.password}</p>
        </div>
        
        <div className="Phone-adress">
          
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label2">
              Número de teléfono
            </label>
            <input
              type="text"
              className="form-control3"
              onChange={handleOnChange}
              placeholder="1122222222"
              name="phone"
              autoComplete="off"
              value={info.phone}
            />
          </div>
          <p style={{ color: "red" }} className='errors'>{formErrors.phone}</p>
          <div className="col-md-4">
            <label htmlFor="address" className="form-label-dir">
              Dirección
            </label>
            <input
              type="text"
              className="form-control4"
              onChange={handleOnChange}
              placeholder="Av. San Martín 524 7A"
              name="address"
              autoComplete="off"
              value={info.address}
            />
          </div>
        </div>


        <div className="prov-ciudad">

          <div className="col-md-6">
            <label htmlFor="floatingSelect" className="titleProv-city">Selecciona la provincia</label>
            <select
              className="form-select"
              id="floatingSelect"
              onChange={(e) => handleSelectProvice(e)}
            >
              <option disabled="">Clic para abrir el menu</option>
              <option value="mendoza">Mendoza</option>
              <option value="santaFe">Santa Fe</option>
              <option value="cordoba">Córdoba</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="floatingSelect" className="titleProv-city">Selecciona la ciudad</label>
            <select
              className="form-select"
              id="floatingSelect"
              onChange={(e) => handleSelectCity(e)}
            >
              <option disabled="">Clic para abrir el menu</option>
              <option value="mendoza">Mendoza</option>
              <option value="rosario">Rosario</option>
              <option value="cordoba">Córdoba</option>
            </select>
          </div>

        </div>

      <div className="Photo-Register-inicio">
        <div >
           <label htmlFor="image" className="form-label-profile">
             Foto de perfil
           </label>
           <input
             type="text"
             className="form-control-Img"
             onChange={handleOnChange}
              placeholder="Load URL..."
              name="image"
             value={info.image}
           />
          </div>

           <div >
             <button type="submit" className="btn-register">
               Registrar
             </button>
           </div>
            <Link to="/">
            <button className="btn-register">Inicio</button>
            </Link>
         </div>
        <br />
      </form>
      
    </div>
  );
}
