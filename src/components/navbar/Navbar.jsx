import React from 'react'
import styles from "./navbar.css"

export default function Navbar() {
    return (
        <header>
            <div className={"logo"}>
                <p>Enis</p>
            </div>
            <div className={"list"}>
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