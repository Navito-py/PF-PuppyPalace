import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postReserve } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import Reserves from "../Reserves/Reserves";
/* import "./CreateReserve.css"; */
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
/*   const [error, setError] = useState({}); */
  const [info, setInfo] = useState({
    ammount: "",
    date: "",
    hourly: "",
    description: "",
    city: "",
  });

  function hanleOnChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    console.log(info);
  }

  function handleSelectCity(e) {
    e.preventDefault();
    setInfo({
      ...info,
      city: e.target.value,
    });
  }

  /* function handleSubmit(e) {
    if (
      !error.ammount &&
      !error.date &&
      !error.hourly &&
      !error.description &&
      !error.city
    ) {
      e.preventDefault();
      setError(
        validate({
          ...info,
          [e.target.value]: e.target.value,
        })
      );
      info.ammount = parseInt(info.ammount);
      dispatch(postReserve(info));
      setInfo({
        ammount: "1000",
        date: "",
        hourly: "",
        description: "",
        city: "",
      });
    } else {
      e.preventDefault();
      alert("Por favor complete todas las casillas correctamente");
    }
  }
 */

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postReserve(info, id, token));
  }

  function callDateAndHours(date, hour) {
    setInfo({
      ...info,
      date: date,
      hourly: hour,
      ammount: 1000
    });
  }

  return (
    <div className="wrapper">
      <h2 className="pe">Pago Electronico</h2>
      <div className="payment">
        <form
          /* action="https://mpago.la/1bfm6Un" */
          onSubmit={(e) => handleSubmit(e)}
        >
          <img
            className="cat"
            src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007"
            alt=""
            height="100px"
          />
          <img
            className="cat"
            src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007"
            alt=""
            height="100px"
          />

          <div className="center">
            <input
              className="display-size"
              onChange={(e) => hanleOnChange(e)}
              type="text"
              readOnly
              name="ammount"
              placeholder="1000$"
            />
          </div>

          <BookDate dateAndHours={callDateAndHours} />

          <div className="center">
            <input
              className="display-size"
              onChange={(e) => hanleOnChange(e)}
              type="text"
              name="description"
              placeholder="Descripcion"
            />
          </div>

          <div className="center">
            <select
              className="display-size"
              onChange={(e) => handleSelectCity(e)}
            >
              <option className="option-size" hidden value="">
                Ciudad
              </option>
              <option value="Cordoba">Cordoba</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Rosario">Rosario</option>
            </select>
          </div>
          <div className="center">
            <Reserves />
          </div>

          <button type="submit">Crear</button>
        </form>
        <Link to="/home">
          <button className="btn-center">Volver</button>
        </Link>
      </div>
    </div>
  );
}
