import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to='/' className="HeaderTitle">Lucas Maul</NavLink>
            <ul>
                <li><button className="headerbutton" onClick={() => {
                    window.scrollTo({behavior: "smooth", top: 0, left: 0})
                }}>Home</button></li>
                <li><button className="headerbutton" onClick={() => {
                    window.scrollTo({behavior: "smooth", top: 1000, left: 0})
                }}>About</button></li>
                <li><button className="headerbutton" onClick={() => {
                    window.scrollTo({behavior: "smooth", top: 1900, left: 0})
                }}>Portfolio</button></li>
                <li><button className="headerbutton" onClick={() => {
                    window.scrollTo({behavior: "smooth", top: 3900, left: 0})
                }}>Contact</button></li>
            </ul>
        </header>
    )
}

export default Header