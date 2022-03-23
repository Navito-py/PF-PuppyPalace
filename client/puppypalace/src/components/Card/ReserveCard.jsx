import React from "react";
import './ReserveCard.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";

export default function ReserveCard({ clinicName, date, hourly, clinicPhone, ammount, description }) {
  return (
    <div >
      <MDBCard className="card-reserve">
        <MDBCardBody className="body-reserve">
          <MDBCardTitle className="name"><img src="https://cdn-icons.flaticon.com/png/512/804/premium/804762.png?token=exp=1647828976~hmac=4318917d3e360c43ba5e0107177eb17e" alt="" height="30px"/> {clinicName}</MDBCardTitle>
          <MDBCardText>{date}</MDBCardText>
          <MDBCardText>{hourly}</MDBCardText>
          <MDBCardText>{ammount}</MDBCardText>
          <MDBCardText>{description}</MDBCardText>
          <MDBCardText><img src="https://cdn-icons-png.flaticon.com/512/7129/7129257.png" alt="" height="30px" /> {clinicPhone}</MDBCardText>
        </MDBCardBody>
        <MDBBtn>Cancelar</MDBBtn>
      </MDBCard>
    </div>
  );
}