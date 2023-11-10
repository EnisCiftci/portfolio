import React from 'react';
import togethAR from "../../assets/togethAR.jpeg"
import wip from "../../assets/wip.png"
import rub from "../../assets/RUB.png"
import "./projects.css"

export default function Projects() {
    return (
        <section id={"projects"}>
            <h2 className={"title-left"}>Projects</h2>
            <div className={"project"}>
                <div className={"image_overlay"}>
                    <a className={"image_link"} href={"https://github.com/EnisCiftci/TogethAR"} target={"_blank"}>
                        <img src={togethAR} alt={"ERR"} className={"project_img"}/>
                    </a>
                </div>
                <div className={"project_content"}>
                    <a className={"project_title accent"} href={"https://github.com/EnisCiftci/TogethAR"} target={"_blank"}>TogethAR</a>
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
                    <a className={"project_title accent"}>Bachelor Thesis</a>
                    <p className={"project_desc"}>iOS App that utilizes generative AI and photogrammetry to generate usable and fast-developed 3D Models</p>
                    <ul className={"project_tags"}>
                        <li className={"text-secondary"}>Swift</li>
                        <li className={"text-secondary"}>ARKit</li>
                        <li className={"text-secondary"}>OpenAI</li>
                        <li className={"text-secondary"}>ObjectCapture</li>
                        <li className={"text-secondary"}>Two-Server-Architecture</li>
                    </ul>
                </div>
                <div className={"image_overlay"}>
                    <img src={rub} alt={"ERR"} className={"project_img"}/>
                </div>
            </div>

            <div className={"project"}>
                <div className={"image_overlay"}>
                    <a className={"image_link"} target={"_blank"}>
                        <img src={wip} alt={"ERR"} className={"project_img"}/>
                    </a>
                </div>
                <div className={"project_content"}>
                    <a className={"project_title accent"}>GeneticForecast</a>
                    <p className={"project_desc"}>Website that helps people understand probabilities of genetic disorders that run in the family</p>
                    <ul className={"project_tags"}>
                        <li className={"text-secondary"}>React</li>
                        <li className={"text-secondary"}>UI/UX</li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}