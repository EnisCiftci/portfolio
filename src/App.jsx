import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidelines from "./components/sidelines/Sidelines.jsx";
import Experience from "./components/experience/Experience.jsx";

export default function App() {
    return (
        <>
            <Navbar/>
            <Sidelines/>
            <div className={"app_wrapper"}>
                <About/>
                <Experience/>
            </div>
        </>
    )
}