import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, cleanDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Reserves from "../Reserves/Reserves";
import logoVipets from "../../media/VIPETS_LOGO.png";
import "./Detail.css";
import CreateReserve from "../Forms/CreateReserve";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const clinicsDetails = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch, id]);

  return (
    <div className="content">
      <div className="First">
        <div className="Second">
          <div className="welcome-text">
            <Link to='/home'>
             <h1 className="h1-title">VIPets <img src={logoVipets} alt="" height='70px'/></h1>
            </Link>
            <div className="rigth">
           </div>
          </div>
        </div>
     </div> 
      <div className="container">
          {clinicsDetails ? (
            <div className="card-detail-clinic">
              <div className="foto-nombre">
                <p>
                  <img
                    className="img-clinic"
                    src={clinicsDetails.image}
                    alt="vipetslogo"
                    width="200px"
                    height="200px"
                  />
                </p>
                <p className="titleClinic">{clinicsDetails.name}</p>
              </div>
              <div className="address">
                {`${clinicsDetails.address} Provincia ${clinicsDetails.province} Ciudad de ${clinicsDetails.city}`}
              </div>
              <div className="rest-data">
                <p>Horarios de atencion: {clinicsDetails.activeHours}</p>
                <p>Telefono: {clinicsDetails.phone}</p>
                <p>Emergencia: {clinicsDetails.emergency}</p>
                <p>Hospitalizacion: {clinicsDetails.hospitalization}</p>
              </div>
            </div>
          ) : (
            <img src={logoVipets} alt="noInfo" />
          )}
        <div className="calendar-reserve">
          <CreateReserve />
        </div>
      </div>
      <p className="red">*(El valor abonado es en concepto de SEÑA, para su exclusivo uso de reserva de espacio y tiempo en la clinica solicitada.</p>
      <p className="red">La Clinica solicitada deberá cobrar la diferencia corresponidente al tratamiento brindado.)</p>
    </div>
  );
}
