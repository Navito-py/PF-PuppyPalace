import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postReserve, getPaymentRedir } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import Reserves from "../Reserves/Reserves";
import "./CreateReserve.css";
import BookDate from "./BookDate";


/* function validate(info) {
  let errors = {};
  if (!info.ammount) {
    errors.name = "Debe introducir el monto";
  }
  if (!info.date) {
    errors.date = "Debe poner una fecha valida";
  }
  if (!info.hourly) {
    errors.hourly = "Debe introducir una hora";
  }
  if (!info.description) {
    errors.description = "Debe introducir una descripcion";
  }
  if (!info.city) {
    errors.city = "Debe introducir una ciudad";
  }
} */




export default function CreateReserve() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const {id} = useParams()
  const [info, setInfo] = useState({
    description: "",
  });
  React.useEffect(()=>{
    dispatch (getPaymentRedir())
  },[]);
  const paypal = useSelector(state => state.paypal.data);
 

  const [formErrors, setFormErrors] = useState({});


  function hanleOnChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

 async function handleSubmit(e) {
    e.preventDefault();
    const errorsValidate = validate();
    setFormErrors(errorsValidate);
    if (Object.keys(errorsValidate).length === 0) {
      await dispatch(postReserve(info, id, token));
       window.location =paypal;
    }

  }

  function callDateAndHours (date, hour) {
    if (!hour) {
      return;
    }
    const hourString = hour.slice(0,5)
    setInfo({
      ...info,
      date: date,
      hourly: hourString,
      ammount: 1000
    });
  }

  const validate = () => {
    const errors = {};

    if (!info.description) {
      errors.description = "La razon de consulta es requerida";
    } 
    if (!info.date) {
      errors.date = "La fecha es requerida";
    } 
    if (!info.hourly) {
      errors.hourly = "La hora es requerida";
    } 
    return errors;
  };


  return (
    <div className="wrapper">
      <h2 className="pe">Pago Electronico</h2>
      <div className="payment">
        <form

          onSubmit={(e) => handleSubmit(e)}
        >
          <p>El valor de la reserva tendrá un costo de $1000</p>
          
          <BookDate dateAndHours={callDateAndHours} />
          <p className="formError">{formErrors.date}</p>
          <p className="formError">{formErrors.hourly}</p>

          <div className="center">
            <input
              className="display-size"
              onChange={(e) => hanleOnChange(e)}
              type="text"
              name="description"
              placeholder="Razon de consulta"
              autoComplete="off"
            />
          </div>
          <p className="formError">{formErrors.description}</p>

{/*           <div className="center">
            <Reserves />
          </div> */}
        </form>
        <div className="reserva">
          <button className="reserve-button" type="submit" onClick={handleSubmit}>Reservar</button>
        </div>
      </div>
    </div>
  );
}
