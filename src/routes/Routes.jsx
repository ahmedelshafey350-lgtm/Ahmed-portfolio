
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Work from "../Pages/Work/Work";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";



export default function BasicExample() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    );
}