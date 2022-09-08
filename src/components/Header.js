import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to='/' className="HeaderTitle">Lucas Maul</NavLink>
            <ul>
                <li><NavLink to='/about'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/about'>Portfolio</NavLink></li>
                <li><NavLink to='/about'>Contact</NavLink></li>
            </ul>
        </header>
    )
}

export default Header