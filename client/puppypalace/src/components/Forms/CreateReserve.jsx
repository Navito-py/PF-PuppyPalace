import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postReserve } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Reserves from "../Reserves/Reserves";
import "./CreateReserve.css";
import BookDate from "./BookDate";

export default function CreateReserve() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const {id} = useParams()
  const [info, setInfo] = useState({
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});

  function hanleOnChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsValidate = validate();
    setFormErrors(errorsValidate);
    if (Object.keys(errorsValidate).length === 0) {
      await dispatch(postReserve(info, id, token));
      alert("Su reserva se ha creado correctamente")
      window.location.reload();
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
          /* action="https://mpago.la/1bfm6Un" */
          /* onSubmit={(e) => handleSubmit(e)} */
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
