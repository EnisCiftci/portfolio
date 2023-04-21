import React from 'react'
import "./navbar.css"
import icon from '../../assets/icon.svg'
import {Menu} from "react-feather";

export default function Navbar() {

    let isHamburger = false

    function toggleHamburger(){
        let hamburgerNavbar = document.getElementsByClassName("hamburger_list")[0]

        if(isHamburger){
            hamburgerNavbar.classList.remove("hamburger_list_show")
        } else {
            hamburgerNavbar.classList.add("hamburger_list_show")
        }

        isHamburger = !isHamburger
    }

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
            <Menu className={"navbar_hamburger"} onClick={toggleHamburger}/>
            <div className={"hamburger_list"} onClick={toggleHamburger}>
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