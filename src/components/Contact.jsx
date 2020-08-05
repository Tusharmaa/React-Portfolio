import React from "react";

function Contact(){
    return(
        <section id="Contact">
            <form className="form-alignment" action="">
            <label className="contact-label-style">Enter your name</label>
            <br></br>
            <input className="contact-input-style" type="text" name="fname" placeholder="Name" ></input>
            <br></br>
            <br></br>
            <label className="contact-label-style">Enter your e-mail ID</label>
            <br></br>
            <input className="contact-input-style" type="email" name="email" placeholder="Email"></input>
            <br></br>
            <br></br>
            <input className="contact-submit-style" type="submit" value="Submit"></input>
            </form>
            <br></br>
            <br />
            <br />
            <p className="connect-line-style ">or connect with me through</p>
            <br />
            <div className="contact-icons-alignment">
            <a href="https://www.facebook.com/profile.php?id=100009263987412" target="_blank" ><i className="fab fa-facebook-f fa-2x contact-icons-style"></i> </a>
            <a href="https://instagram.com/sharmatushar_?igshid=tysbfn3gju7z" target="_blank"> <i className="fab fa-instagram fa-2x contact-icons-style"></i></a>
            <a href="https://www.linkedin.com/in/tushar-sharma-7a24961a4" target="_blank" ><i className="fab fa-linkedin-in fa-2x contact-icons-style"></i></a>
            <a href="mailto:saytotushar@gmail.com" target="_blank" ><i className="far fa-envelope fa-2x contact-icons-style"></i></a>
            <a href="" target="_blank" ><i className="fab fa-github fa-2x contact-icons-style"></i></a>
            </div>
            <p className="copyright">Tushar Sharma © 2020</p>

        </section>
    );
}

export default Contact;