import React from "react";

export default function LostPets(){
    return(
        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwgQOlONHQep1Zi6fUDzOJB2CaA4chihhcQ&usqp=CAU" className="d-block w-100" alt="not found" width='640px' height='360px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rocky</h5>
        <p>Perdido en Córdoba el dia 5/02.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrELxACNohSIVpnTO2YBy8SyFN24lS6RgLaw&usqp=CAU" className="d-block w-100" alt="not found" width='640px' height='360px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Coqui</h5>
        <p>Perdido en Rosario el día 10/01.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/60dd8da05bafe884f4c6c56c/gato-slide.jpg" className="d-block w-100" alt="not found" width='640px' height='360px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rodolfa</h5>
        <p>Perdida en Mendoza el día 07/03</p>
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

        
    )
}