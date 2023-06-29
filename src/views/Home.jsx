import React from "react";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";

const Home = () => {

    return (
        <div className="w-full h-screen bg-emerald-500 p-0">
            <NavBar />
            <Landing />
            <About />
        </div>
    );
};

export default Home;