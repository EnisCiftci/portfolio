import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidelines from "./components/sidelines/Sidelines.jsx";

export default function App() {
    return (
        <>
            <Navbar/>
            <Sidelines/>
            <div className={"wrapper"}>
                <About/>
            </div>
        </>
    )
}