import React from "react";

function Splash(){
    // const splash = document.querySelector(".splash");

    document.addEventListener("DOMContentLoaded", (e) => {
        setTimeout(() => {
            document.querySelector(".splash").classList.add("display-none");
        }, 1500);
    });
    
    return(
        <div className="splash">
        <h1 className="fade-in">Welcome Viewer</h1>
        <h2 className="fade-in">I am Tushar Sharma</h2>
        </div>
    );
}

export default Splash;