import React from "react";
import { useDispatch } from "react-redux";
import { filterCity } from "../../redux/actions"
import './ReserveBar.css'

export default function ReserveBar() {
  const dispatch = useDispatch()
  const hours = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  return (
    <div>
      <div className="organizeReserve">

        <div >
          <select className="cities">
            <option >- Selecciona la ciudad -</option>
            <option >Cordoba</option>
            <option >Mendoza</option>
            <option >Rosario</option>
          </select>
        </div>

        <div className="date">
          <label className="fecha-horario">Fecha</label>
          <input type="date" className="fechainput-horarioinput"/>
        </div>

        <div className="horarios">
        <label className="fecha-horario">Horario</label>
          <select className="fechainput-horarioinput">
            <option value="" disabled="">- Horarios -</option>
            {hours?.map((h,index) => (
              <div key={index}>
              <option key={h.id} >{h}</option>
              </div>
            ))}
          </select>
        <button className="btn-reserve"> Reservar</button>
        </div>
        <img src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007" alt="" height="100px" /><img src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007" alt="" height="100px" /><img src="https://media.baamboozle.com/uploads/images/67969/1598325054_298007" alt="" height="100px" />

      </div>
    </div>
  );
}
