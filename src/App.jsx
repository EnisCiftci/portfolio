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
    let titles_right
    let titles_left
    let projects
    let contact_left
    let contact_right

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
        titles_right = document.getElementsByClassName("title-right")
        titles_left = document.getElementsByClassName("title-left")[0]
        projects = document.getElementsByClassName("project")
        contact_left = document.getElementsByClassName("contact_left")[0]
        contact_right = document.getElementsByClassName("contact_right")[0]

        setTimeout(() => {
            sections[0].classList.add("section_show")
        }, 500)

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
        let contactTopLeft = contact_left.getBoundingClientRect().top
        let contactStartLeft = contactTopLeft - offset
        if(contactStartLeft < 0){
            contact_left.classList.add("contact_left_show")
        }

        let contactTopRight = contact_right.getBoundingClientRect().top
        let contactStartRight = contactTopRight - offset
        if(contactStartRight < 0){
            contact_right.classList.add("contact_right_show")
        }

        let titleTop = titles_left.getBoundingClientRect().top
        let titleStart = titleTop - offset
        if(titleStart < 0){
            titles_left.classList.add("title_show_left")
        }

        for (let i = 0; i < projects.length; i++){
            let projectTop = projects[i].getBoundingClientRect().top
            let projectStart = projectTop - offset

            if(projectStart < 0){
                projects[i].classList.add("project_show")
            }
        }

        for(let i = 0; i < titles_right.length; i++){
            let titleTop = titles_right[i].getBoundingClientRect().top
            let titleStart = titleTop - offset

            if(titleStart < 0){
                titles_right[i].classList.add("title_show_right")
            }
        }

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