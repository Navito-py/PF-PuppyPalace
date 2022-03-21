import React from "react";
import './LostCard.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function LostCard({ name, image, type, phone }) {
  return (
    <div >
      <MDBCard className="card-lost">
        <MDBCardImage src={image} position="top" alt="..." height='200px' whidth='' />
        <MDBCardBody className="body-lost">
          <MDBCardTitle className="name"><img src="https://cdn-icons.flaticon.com/png/512/804/premium/804762.png?token=exp=1647828976~hmac=4318917d3e360c43ba5e0107177eb17e" alt="" height="30px"/> {name}</MDBCardTitle>
          <MDBCardText>{type}</MDBCardText>
          <MDBCardText><img src="https://cdn-icons-png.flaticon.com/512/7129/7129257.png" alt="" height="30px" /> {phone}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}