import React, { useState, useEffect } from "react";
import "./QrInformation.css"

export default function QrInformation() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
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
      <h1>Generador de QR para tu mascota</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Enter text to encode"
          />
          <button className="qr-btn" onClick={handleClick}>
            Generar
          </button>
        </div>
        <div className="extra">
          <h5>Color del fondo</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Tamaño</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
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
