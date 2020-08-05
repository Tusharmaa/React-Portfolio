import React from "react";
import Splash from "./splash";
import NavBar from "./NavBar";
import NewHome from "./NewHome";
import Portfolio from "./Portfloio";
import About from "./About"
import Contact from "./Contact"
// import Cv from "./Cv";

function App(){
    return (
    <div>
    <Splash />
    <NewHome />
    <NavBar />
    <About />
    <Portfolio />
    {/* <Cv /> */}
    <Contact />
    </div>
    );
}

export default App;