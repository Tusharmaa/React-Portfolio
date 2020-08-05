import React from "react";
import * as Scroll from 'react-scroll';

function NavBar(){
    return (
      <section id="Navigation">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top  ">
  <a class="navbar-brand font-for-navbar" href="#">Tushar Sharma</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#about">About </a>
      <a class="nav-item nav-link active" href="#portfolio">Portfolio</a>
      <a class="nav-item nav-link active" href="#">CV</a>
      <a class="nav-item nav-link active" href="#Contact">Contact </a>
    </div>
  </div>
</nav>
</section>);
}

export default NavBar;