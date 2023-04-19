import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidelines from "./components/sidelines/Sidelines.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import {useEffect} from "react";

export default function App() {

    //Experience
    let timeline
    let oldScrollExperience = 0
    let maxLength = 1400
    let timelineSections = []
    let finished = false

    //Navbar
    let navbar
    let oldScrollNavbar = 0;

    useEffect(() => {
        timeline = document.getElementById("timeline")
        timelineSections = document.getElementsByClassName("timeline_section")
        navbar = document.getElementById("navbar")
    })

    window.onscroll = function() {scrollFunctionNavbar(); scrollFunctionExperience()};

    function scrollFunctionNavbar() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.classList.add("navbar_scrolled");
            if(oldScrollNavbar < scrollY){
                navbar.classList.add("navbar_hide")
            } else {
                navbar.classList.remove("navbar_hide")
            }

            oldScrollNavbar = scrollY
        } else {
            navbar.classList.remove("navbar_scrolled");
        }
    }

    function scrollFunctionExperience() {
        if(!finished){
            let timelineTop = timeline.getBoundingClientRect().top
            let offset = (window.innerHeight - 100)
            let startY = timelineTop - offset

            if(startY < 0 && startY >= -maxLength){

                if(oldScrollExperience > startY){
                    oldScrollExperience = startY
                    timeline.classList.add("experience_line_after")
                    timeline.style.height = -startY+"px"

                    for(let i= 0; i < timelineSections.length; i++){
                        let sectionTop = timelineSections[i].getBoundingClientRect().top
                        let sectionStart = sectionTop - offset
                        if(sectionStart < -20){
                            timelineSections[i].classList.remove("timeline_show")
                        }
                    }

                    if(startY <= -maxLength + 10){
                        finished = true
                    }
                }
            }
        }
    }

    return (
        <>
            <Navbar/>
            <Sidelines/>
            <div className={"app_wrapper"}>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}