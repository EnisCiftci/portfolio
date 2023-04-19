import React from 'react';
import togethAR from "../../assets/togethAR.jpeg"
import wip from "../../assets/wip.png"
import "./projects.css"

export default function Projects() {
    return (
        <section id={"projects"}>
            <h2 className={"title-left"}>Projects</h2>
            <div className={"project"}>
                <div className={"image_overlay"}>
                    <a className={"image_link"}>
                        <img src={togethAR} alt={"ERR"} className={"project_img"}/>
                    </a>
                </div>
                <div className={"project_content"}>
                    <a className={"project_title accent"}>TogethAR</a>
                    <p className={"project_desc"}>iPad App for a collaborative AR-Session with collaborative tools and a lobby system</p>
                    <ul className={"project_tags"}>
                        <li className={"text-secondary"}>XCode</li>
                        <li className={"text-secondary"}>Swift</li>
                        <li className={"text-secondary"}>SwiftUI</li>
                        <li className={"text-secondary"}>ARKit</li>
                    </ul>
                </div>
            </div>

            <div className={"project project_left"}>
                <div className={"project_content content_left"}>
                    <p className={"project_title accent"}>Halal Hub</p>
                    <p className={"project_desc"}>Islamic Companion-App that will help muslim with their everyday duties</p>
                    <ul className={"project_tags"}>
                        <li className={"text-secondary"}>Kotlin</li>
                        <li className={"text-secondary"}>Android Views</li>
                        <li className={"text-secondary"}>API</li>
                    </ul>
                </div>
                <div className={"image_overlay"}>
                    <img src={wip} alt={"ERR"} className={"project_img"}/>
                </div>

            </div>
        </section>
    )
}