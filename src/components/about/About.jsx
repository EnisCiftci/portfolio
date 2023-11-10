import React from 'react';
import "./about.css"
import portrait from '../../assets/portrait.png'
import cv from '../../assets/cv.pdf'
import Typed from 'typed.js';


export default function About() {

    React.useEffect(() => {
        document.getElementById("about").style.height = ""+window.innerHeight

        const typed = new Typed("#typed", {
            strings: ["Bonjour!","Hola!","Privet!","Salve!","Hallo!","Merhaba!","Ola!","Salaam!"],
            typeSpeed: Math.floor(Math.random() * (120 - 70 + 1) + 70),
            backSpeed: Math.floor(Math.random() * (120 - 70 + 1) + 70),
            startDelay: 2000,
            backDelay: 2000,
            shuffle: true,
            loop:true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section id={"about"} className={"about_wrapper"} style={{transition: "all ease-in-out 2s"}}>
            <div className={"about_upper"}>
                <div className={"about_greeting"}>
                    <div>
                        <h3 className={"text-secondary"}>Hello, I'm</h3>
                        <h1>Enis Ciftci</h1>
                    </div>
                </div>
                <div className={"about_portrait"}>
                    <img src={portrait} alt={"ERR"} className={"about_img"}/>
                </div>
            </div>
            <div className={"about_lower"}>
                <div className={"about_buttons"}>
                    <a href={"#contact"} className={"about_btn about_btn-primary"}>Contact Me</a>
                    <a href={cv} className={"about_btn"} target={"_blank"}>Download CV</a>
                </div>
                <div className={"about_text"}>
                    <p>
                        <span className={"about_text_greeting"}> <span id={"typed"}></span></span>
                        My name is Enis and I'm a 21-year-old
                        student at Ruhr-Universität Bochum majoring in applied computer science.
                        <br></br>
                        My passion for coding started at a young age. I learned Java in school and fell in
                        love with it right away, creating a range of projects for both school and for myself.
                        <br></br>
                        Throughout my university studies and various student job roles, I've honed my programming skills and gained
                        experience in a variety of programming languages while also developing and adopting good coding
                        ethics and practices.
                        <br></br>
                        I'm always trying to further my knowledge and my skill set, and I'm
                        interested in where my love of coding may lead me in the future.
                        <br></br>
                        <span className={"accent"}>Tip:</span> Mobile might lead to *some* problems <span className={"accent"}>!!!</span>
                    </p>
                </div>
            </div>
            <div className={"about_skills"}>
                <ul>
                    <li><span className={"accent"}>&gt;</span>Python</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>Java</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>Swift</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>Kotlin</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>Angular</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>React</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>C#</li>
                </ul>
                <ul>
                    <li><span className={"accent"}>&gt;</span>SQL</li>
                </ul>
            </div>
        </section>
    )
}