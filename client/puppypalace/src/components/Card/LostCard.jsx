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
          <MDBCardTitle className="name">{name}</MDBCardTitle>
          <MDBCardText>{type}</MDBCardText>
          <MDBCardText>{phone}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}