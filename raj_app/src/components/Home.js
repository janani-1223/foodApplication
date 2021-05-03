import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (
            
        <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top sticky-top">
            <a class="navbar-brand" href="food_logo.png"></a>
                <img src="food_logo.png" alt="my_logo" width="100px" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

                <form class="form-inline justify-content-center" text-align= "center">
      <input class="form-control mr-sm-2"type="text" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="/login" >Login</a>
    </li>&nbsp;&nbsp;
    <li class="nav-item">
      <a class="nav-link" href="/sign-up">Sign Up</a>
    </li>
  </ul>
  </nav>
  
           
        );
    }
}

export default Home;
