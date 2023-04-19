import React from 'react'
import "./navbar.css"
import icon from '../../assets/icon.svg'

export default function Navbar() {
    return (
        <header id={"navbar"}>
            <div className={"navbar_logo"}>
                <img src={icon} alt={"ERR"} className={"navbar_icon"}></img>
            </div>
            <div className={"navbar_list"}>
                <a href={"#about"}>
                    <span>01. </span>About
                </a>
                <a href={"#experience"}>
                    <span>02. </span>Experience
                </a>
                <a href={"#projects"}>
                    <span>03. </span>Projects
                </a>
                <a href={"#contact"}>
                    <span>04. </span>Contact
                </a>
            </div>
        </header>
    )
}