import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../redux/actions";
import LostCard from "../Card/LostCard";
import "./AllLost.css";
import { Link } from "react-router-dom";

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
        <Link to='/home'>
          <button className="buttonHome"><img src="https://cdn-icons-png.flaticon.com/512/5100/5100262.png" alt="Home" height="50px"/></button>
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