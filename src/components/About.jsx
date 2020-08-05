import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const styles = {
    height: 110,
  };
  
function About(){
    useEffect(() => {
        Aos.init({duration: 2000});

       
    });
    return(
        <div id="about">
        <div  className="row">
            <div data-aos="fade-right" data-aos-duration="1500" className=" col-lg-6 col-md-6 col-sm-6">
            <h1 className="about-font-para1">Me Talking about myself</h1>
            <hr></hr>
            <h4 className="about-font-para2">A web designer and developer from Mumbai, India who loves designing and learning new things</h4>
            <h4 className="about-font-para3">A whizz at website and UI/UX design, from end development. Always on the lookout for some exciting project to work on.</h4>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className=" col-lg-6 col-md-6 col-sm-6">
            <h1 className="about-font-para1">My experience</h1>
            <hr></hr>

            <div data-aos="fade-left" data-aos-duration="1500" className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
            <h4 className="about-font-para2">Company</h4>
            <h4 className="about-font-para3">TechSKillsIT Consultants</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            <h4 className="about-font-para2">Experience/Duration</h4>
            <h4 className="about-font-para3"> Worked as a trainee for 6 months and built a project using JAVA and Spring Boot</h4>
            </div>
            </div>

            </div>
            </div>
      
                <div className="text-align-for-skills about-images inline ">
                    <h1 data-aos="fade-left" data-aos-duration="1500" className="about-font-para1 inline">Skills:
                    <img data-aos="fade-up" data-aos-duration="1500" style={styles}  src="/images/javascript.png" alt="JS image" />
                    <img data-aos="fade-up" data-aos-duration="1500" style={styles}  src="/images/react.png" alt="react image" />
                    <img data-aos="fade-up" data-aos-duration="1500" style={styles}  src="/images/nodejs.png" alt="nodejs image" />
                    </h1>
                    </div>
                    </div>

    );
};
export default About;



// F04413FD-1D04-4EEA-B863-9F3465D29038