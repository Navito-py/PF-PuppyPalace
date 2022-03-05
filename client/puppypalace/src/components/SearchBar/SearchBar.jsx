import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameClinic } from "../../redux/actions";


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
        <div>
            <input
            type= "text"
            placeholder="Buscar Clinicas..."
            value= {name}
            autoComplete= "off"
            onChange={(e) => handleInputChange(e)}
            />
            <button type= "submit" onClick={(e) => handleSubmit(e)}>Buscar</button>

        </div>
    )


}