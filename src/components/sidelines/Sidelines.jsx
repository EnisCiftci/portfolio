import React from 'react';
import "./sidelines.css"

export default function Sidelines() {
    return (
        <>
            <div className={"sidelines_sidebar sidelines_left"}>
                <a href={"#"}>X</a>
                <a href={"#"}>G</a>
                <a href={"#"}>L</a>
            </div>
            <div className={"sidelines_sidebar sidelines_right"}>
                <a href={"#about"}>Enis Erdem Ciftci</a>
            </div>
        </>
    )
}