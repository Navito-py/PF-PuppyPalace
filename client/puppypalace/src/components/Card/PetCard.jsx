import React from 'react';
import './PetCard.css';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from "mdb-react-ui-kit";

  export default function PetCard({ name, gender, type, breed, age, height, weight, image, history, vaccines, status, handleClick, id}) {
    return (
      <div key={id} >
        <MDBCard className="card-pet">
          <MDBCardImage src={image} position="top" alt="..." height='200px' whidth='' />
          <MDBCardBody className="body-pet">
            <MDBCardTitle className="name"><img src="https://cdn-icons.flaticon.com/png/512/804/premium/804762.png?token=exp=1647828976~hmac=4318917d3e360c43ba5e0107177eb17e" alt="" height="30px"/> {name}</MDBCardTitle>
            <MDBCardText> Género: {gender}</MDBCardText>
            {/* <MDBCardText>Tipo: {type}</MDBCardText>
            <MDBCardText>Raza: {breed}</MDBCardText>
            <MDBCardText>Edad: {age}</MDBCardText>
            <MDBCardText>Altura: {height}</MDBCardText>
            <MDBCardText>Peso: {weight}</MDBCardText>
            <MDBCardText>Historial clínico: {history}</MDBCardText>
            <MDBCardText> Vacunas: {vaccines}</MDBCardText> */}
            <MDBCardText>Estado: {status}</MDBCardText>
            {
            vaccines === null? <p>Sin vacunas</p> : <MDBCardText>Vacunas: {vaccines.map(e => { return (<p>{e}</p>)})}</MDBCardText>
            }
          </MDBCardBody>
        <Link to ={`/home/profile/pet/${id}`}><MDBBtn>Detalle</MDBBtn></Link>
        </MDBCard>
      </div>
    );
  }