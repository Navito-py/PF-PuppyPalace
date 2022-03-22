import React, { useState, useEffect } from "react";
import "./QrInformation.css"
import { Link } from "react-router-dom";
import vipets from "../../media/logoVIPetsTransparent.png";

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
        <img  className="topQrButton" src={vipets} alt="Home" height="90px"/>
        </Link>
      </div>
      <h1 className="h1">Generador de QR para tu mascota</h1>

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
          className="color"
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5 className="h5">Tamaño</h5>
          <div className="qr-generador">
              <input
              className="range"
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
        <img className="qr-img" src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button className="qr-btn" type="button">Descargar</button>
        </a>
      </div>
      <div className="break1"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
    </div>
  );
}
