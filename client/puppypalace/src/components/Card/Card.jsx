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

export default function Card({ name, image, schedule }) {
  return (
    <div className="card-clinic">
      <MDBCard className="size-card">
        <MDBCardImage src={image} className='image-card' />
        <MDBCardBody className="body-card">
          <MDBCardTitle className="card-title">{name}</MDBCardTitle>
          <MDBCardText>{schedule}</MDBCardText>
        </MDBCardBody>
        <Link to='/home/reserves'>
          <button className="reserve">Reservar</button>
        </Link>
      </MDBCard>
    </div>
  );
}
