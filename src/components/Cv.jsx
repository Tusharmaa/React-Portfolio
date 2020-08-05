
import React from "react";
// import Spotlight from "react-spotlight";



        let spotlightSize = 'transparent 100px, rgba(0, 0, 0, 0.85) 120px)';

        window.addEventListener("mousemove", (e) => {
            requestAnimationFrame(() => updateSpotlight(e));
        });

        function updateSpotlight(e){
            const xPos = e.PageX / window.innerWidth * 100;
            const yPos = e.pageY / window.innerWidth * 100; 
            document.querySelector('.spotlight').style.background = `radial-gradient(circle at ${xPos}% ${yPos}, ${spotlightSize})`;
        }




function Cv(){
    return(
        <section id="Cv">
                {/* <a className="cv-para" href="#">CV</a> */}

        <div className="spotlight">
        </div>

        </section>
    );
}

export default Cv;

