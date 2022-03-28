import React, { useState, useEffect } from "react";
import "./QrInformation.css"
import { Link } from "react-router-dom";
import vipets from "../../media/logoVIPetsTransparent.png";
import Chapita from '../../media/chapitaDog.jpg'
import logoVipets from "../../media/VIPETS_LOGO.png"

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
      
<div className="First">
        <div className="Second">
          <div className="welcome-text">
            <Link to='/'>
             <h1 className="h1-title">VIPets <img src={logoVipets} alt="" height='70px'/></h1>
            </Link>
            <div className="rigth">
           </div>
          </div>
        </div>
     </div> 
      <div className="contenedorQrcomplete">
      <div className="contenedorQr">
      <div className="input-box">
       <h3 className="h1">Generador gratuito QR</h3>
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
      </div>

      <div className="containerQr">
        <div className="inner-qr">
          <div className="frontqr">
            <h3 className="h3Qr">La importancia del identificador para tu mascota</h3>
            <img src={Chapita} alt="" height='300' />
            <p className="p´s">La identificación de los animales de compañía es una de las principales estrategias para luchar contra el abandono y con ello, facilitar su recuperación en caso de pérdida.
               El factor clave en la recuperación de un animal extraviado, es la posibilidad de localizar a sus propietarios y para lograrlo, es fundamental que el animal esté correctamente identificado.
           Muchos animales que a diario vemos en la calle, son mascotas que alguna vez tuvieron un hogar, que tal vez no fueron abandonadas, sino que un día decidieron salir a dar un paseo por los alrededores de su casa, y que cuando trataron de volver, no pudieron hacerlo porque se desorientaron y jamás dieron con la dirección de sus dueños.
              Cuando una mascota se pierde y no está identificada de ninguna manera, es muy difícil que la persona que la encuentre pueda regresarla a su familia. Es aquí donde radica la importancia de ponerles una placa de identificación.
              Dichas placas, son aquellas que se encuentran colgadas del collar, y que debería llevar el nombre de la mascota y el de su propietario, con el respectivo teléfono de contacto. Esto es importante porque con ello se asume una responsabilidad por parte del dueño otorgado. Y es lo que justamente VIPets propone a través del Código Qr que aquí les proveemos.</p>
          </div>
        </div>
      </div>
     </div>
    <div className="break1"><img className="center-img" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/> VIPets <img className="centerimg" src="https://cdn-icons-png.flaticon.com/512/1581/1581645.png" alt="" height="50px"/></div>
  </div>
  );
}
