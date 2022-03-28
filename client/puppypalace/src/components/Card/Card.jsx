import React from "react";
import {Link} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import './Card.css';

export default function Card({ name, image, schedule, province, emergency, phone }) {
  return (
  <div class="flip-card">
    <div className="card-clinic">
      <MDBCard className="size-card">
        <div className="flip-card-front">
        <MDBCardImage src={image} className='image-card' />
          <MDBCardTitle className="card-title">{name}</MDBCardTitle>
          <MDBCardText >{province}</MDBCardText>
        <MDBCardBody className="body-card">
          <MDBCardText>{schedule}</MDBCardText>
          <MDBCardText>{phone}</MDBCardText>
          <MDBCardText>{emergency}</MDBCardText>
        </MDBCardBody>
        </div>
      </MDBCard>
        <div class="flip-card-back">
         <h1>Más Info</h1>
       </div>
    </div>
  </div>
  );
}
