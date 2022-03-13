import React, { useState, useEffect } from "react";
import "./QrInformation.css"
import { Link } from "react-router-dom";

export default function QrInformation() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(250);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }
  return (
    <div className="qr-generator">
      <div className="topQr">
        <Link to='/'>
        <button className="topQrButton"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
        </Link>
        <h1 className="h1">Generador de QR para tu mascota</h1>
      </div>

      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Ingrese la direccion"
          />
          <button className="qr-btn" onClick={handleClick}>
            Generar
          </button>
        </div>
        <div className="extra">
          <h5 className="h5">Color del fondo</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5 className="h5">Tamaño</h5>
          <div className="qr-generador">
              <input
                type="range"
                min="200"
                max="400"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
          </div>
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button className="qr-btn" type="button">Descargar</button>
        </a>
      </div>
    </div>
  );
}
