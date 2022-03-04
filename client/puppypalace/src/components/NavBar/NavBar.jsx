import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";



export default function NavBar(){
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = ()=>{
        setDropdown(!dropdown);
    }


    return (
        <div>
            <Dropdown isOpen={dropdown} toggle={toggleDropdown}>
                <DropdownToggle>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Mi Perfil</DropdownItem>
                    <DropdownItem>Mis Reservas</DropdownItem>
                    <DropdownItem>Ver Mapa</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}