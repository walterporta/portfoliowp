import React from "react";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import ProjectsSections from "../components/ProjectsSections";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skill from "../components/Skill";

const Home = () => {

    return (
        <div className="w-full h-screen  p-0">
            <NavBar />
            <Landing id="landing"/>
            <About id="about" />
            <Skill id="skills"/>
            <ProjectsSections id="projectsSections" />
            <Contact id="contact"/>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;