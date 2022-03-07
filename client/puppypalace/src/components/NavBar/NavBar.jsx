import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                    <Link to='profile' style={{ textDecoration: 'none' }}>
                    <DropdownItem >Mi Perfil</DropdownItem>
                    </Link>
                    <Link to='profile/reserves' style={{ textDecoration: 'none' }}>
                    <DropdownItem>Mis Reservas</DropdownItem>
                    </Link>
                    <Link to='map' style={{ textDecoration: 'none' }}>
                    <DropdownItem>Ver Mapa</DropdownItem>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}