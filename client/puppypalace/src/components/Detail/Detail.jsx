import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, cleanDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Reserves from "../Reserves/Reserves";
import vipets from "../../media/logoVIPetsTransparent.png";
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
      <div className="home-allinfo">
        <p className="home-text">Regresar Home</p>
        <Link to="/home">
          <img className="img-btn" src={vipets} alt="Home" height="100px" />
        </Link>
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
            <img src={vipets} alt="noInfo" />
          )}
        <div className="calendar-reserve">
          <CreateReserve />
        </div>
      </div>
    </div>
  );
}
