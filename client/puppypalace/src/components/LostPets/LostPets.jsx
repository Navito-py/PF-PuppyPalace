import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../redux/actions";

export default function LostPets() {
  const dispatch = useDispatch();
  const allPets = useSelector((state) => state.pets);
  const token = sessionStorage.getItem('token');
  const lost = allPets.filter((e)=> e.status === "Lost")
  
  useEffect(() => {
    dispatch(getPets(token));
  }, [dispatch]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={lost[0]?.image} className="d-block w-100" alt="not found" width='640px' height='360px'/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="inner">{lost[0]?.name}</h5>
          <p className="inner">{lost[0]?.type}</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={lost[1]?.image} className="d-block w-100" alt="not found" width='640px' height='360px'/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="inner">{lost[1]?.name}</h5>
          <p className="inner">{lost[1]?.type}</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={lost[2]?.image} className="d-block w-100" alt="not found" width='640px' height='360px'/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="inner">{lost[2]?.name}</h5>
          <p className="inner">{lost[2]?.type}</p>
        </div>
      </div>
     </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}
