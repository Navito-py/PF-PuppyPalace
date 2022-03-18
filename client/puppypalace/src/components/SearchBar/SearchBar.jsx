import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameClinic } from "../../redux/actions";
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState("")

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
         let replaced = name.split(' ').join('%');
         dispatch(getNameClinic(replaced))
        setName("")
    }

    return (
        <div className="searching">
            <input
            className="search-bar"
            type= "text"
            placeholder="Buscar Clinicas..."
            value= {name}
            autoComplete= "off"
            onChange={(e) => handleInputChange(e)}
            />
            <button className="btn-search" type= "submit" onClick={(e) => handleSubmit(e)}>Buscar</button>

        </div>
    )


}
