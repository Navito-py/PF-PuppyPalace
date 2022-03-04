import React from "react";

export default function ReserveBar() {
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

          <select >
            <option >- Selecciona la ciudad -</option>
            <option >Cordoba</option>
            <option >Mendoza</option>
            <option >Rosario</option>
          </select>


          <label>Fecha</label>
          <input type="date" />



          <select>
            <option value="" disabled="">- Horarios -</option>
            {hours?.map((h) => (
              <option key={h.id}>{h}</option>
            ))}
          </select>

        <button>Reservar</button>
      </div>
    </div>
  );
}
