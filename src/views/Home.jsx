import React from "react";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import ProjectsSections from "../components/ProjectsSections";


const Home = () => {

    return (
        <div className="w-full h-screen  p-0">
            <NavBar />
            <Landing id="landing"/>
            <About id="about" />
            <ProjectsSections id="projectsSections" />
        </div>
    );
};

export default Home;