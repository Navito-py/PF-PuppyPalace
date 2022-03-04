import React from "react";
import { useDispatch } from "react-redux";
import { filterCity } from "../../redux/actions"

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

  const handleCitySort = (e) => {
    e.preventDefault()
    dispatch(filterCity(e.target.value))
  }

  return (
    <div>
      <div className="organizeReserve">

          <select onChange={handleCitySort}>
            <option value="">- Selecciona la ciudad -</option>
            <option value="cordoba">Cordoba</option>
            <option value="mendoza">Mendoza</option>
            <option value="rosario">Rosario</option>
          </select>


          <label>Fecha</label>
          <input type="date" />



          <select>
            <option value="">- Horarios -</option>
            {hours?.map((h) => (
              <option>{h}</option>
            ))}
          </select>

        <button>Reservar</button>
      </div>
    </div>
  );
}
