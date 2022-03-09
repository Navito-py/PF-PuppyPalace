import React from "react";
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
      </MDBCard>
    </div>
  );
}

/* 

<p>{name}</p>
<img src={image} alt='' width='230px' height='160px' />
<p>{schedule}</p> */
