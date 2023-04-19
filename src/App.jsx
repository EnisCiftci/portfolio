import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidelines from "./components/sidelines/Sidelines.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

export default function App() {
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