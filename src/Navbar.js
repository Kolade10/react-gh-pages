import React from "react";
import "./index.css"
import Logo from "./images/airbnb.png"

export default function Navbar(){
    return(
        <header className="nav">
            <img className="logo" src={Logo} alt="airbnb"/>
        </header>
    )
}