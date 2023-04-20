import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidelines from "./components/sidelines/Sidelines.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import {useEffect} from "react";

export default function App() {

    let offset = (window.innerHeight - 100)

    //Animations
    let sidebar_left
    let sidebar_right
    let sections

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
        sidebar_left = document.getElementsByClassName("sidelines_left")[0]
        sidebar_right = document.getElementsByClassName("sidelines_right")[0]
        sections = document.getElementsByTagName("section")

        sections[0].classList.add("section_show")

        setTimeout(() => {
            navbar.classList.add("navbar_show")
        }, 1500)

        setTimeout(() => {
            sidebar_left.classList.add("sidelines_left_show")
            sidebar_right.classList.add("sidelines_right_show")
        }, 1500)
    })

    window.onscroll = function() {scrollFunctionNavbar(); scrollFunctionExperience(); scrollFunctionSection()};

    function scrollFunctionSection(){
        for(let i = 1; i < sections.length; i++){
            let sectionTop = sections[i].getBoundingClientRect().top
            let sectionStart = sectionTop - offset

            if(sectionStart < 0){
                sections[i].classList.add("section_show")
            }
        }
    }

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