import React from "react";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";

const Home = () => {

    return (
        <div className="w-full h-screen bg-emerald-500 p-0">
            <NavBar />
            <Landing />
        </div>
    );
};

export default Home;