import React from "react";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import ProjectsSections from "../components/ProjectsSections";

const Home = () => {

    return (
        <div className="w-full h-screen bg-emerald-500 p-0">
            <NavBar />
            <Landing />
            <About />
            <ProjectsSections />
        </div>
    );
};

export default Home;