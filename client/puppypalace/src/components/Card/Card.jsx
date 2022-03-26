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
    <div className="card-clinic">
      <MDBCard className="size-card">
        <div className="card-front">
        <MDBCardImage src={image} className='image-card' />
        </div>
        <MDBCardBody className="body-card">
          <MDBCardTitle className="card-title">{name}</MDBCardTitle>
          <MDBCardText >{province}</MDBCardText>
          <MDBCardText>{schedule}</MDBCardText>
          <MDBCardText>{phone}</MDBCardText>
          <MDBCardText>{emergency}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
