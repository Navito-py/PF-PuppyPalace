import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../redux/actions";
import LostCard from "../Card/LostCard";
import "./AllLost.css";
import { Link } from "react-router-dom";
import vipets from "../../media/logoVIPetsTransparent.png";

export default function AllLost() {
  
  
  const dispatch = useDispatch();
  const allPets = useSelector((state) => state.pets);
  const lost = allPets.filter((e)=> e.status === "Lost")
  
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]); 
  
return (
    <div className="lostCards2">
      <div className="nav-lost">
        <Link to='/'>
          <div>
            <button className="buttonHome1"><img className="vipets-logo" src={vipets} alt="vipetslogo" width="100px" height="100px"/>VIPets<span className="lostIam"> Estoy perdido</span></button>
            </div>

        </Link>
      </div>
      <div className="lostCards" >
        {
            lost.map(e => {
              return (
                <div key={e.id} >
                  {/* <Link to={`/lostpets/${e.id}`}> */}
                  <LostCard name={e.name} image={e.image} type={e.type} phone={e.phone} />
                 {/*  </Link> */}
                </div>
              )
            })
        }
      </div>
      
    </div>
)
}