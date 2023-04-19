import React from 'react';
import "./sidelines.css"
import {GitHub, Linkedin} from "react-feather";
import Xing from "../Xing.jsx";

export default function Sidelines() {

    const mystyle = {
        width: "24px",
        height: "24px"
    };

    return (
        <>
            <div className={"sidelines_sidebar sidelines_left"}>
                <a href={"https://www.xing.com/profile/EnisErdem_Ciftci/cv"} target={"_blank"}><Xing style={mystyle}/></a>
                <a href={"https://github.com/EnisCiftci"} target={"_blank"}><GitHub/></a>
                <a href={"https://www.linkedin.com/in/enis-erdem-c-406b4225b/"} target={"_blank"}><Linkedin/></a>
            </div>
            <div className={"sidelines_sidebar sidelines_right"}>
                <a href={"#about"}>Enis Erdem Ciftci</a>
            </div>
        </>
    )
}