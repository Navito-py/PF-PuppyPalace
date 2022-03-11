import React from "react";
import {Link} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function Card({ name, image, schedule }) {
  return (
    <div>
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardImage src={image} position="top" alt="..." height='200px' whidth='' />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{schedule}</MDBCardText>
        </MDBCardBody>
        <Link to='/home/reserves'>
          <button>Reservar</button>
        </Link>
      </MDBCard>
    </div>
  );
}
