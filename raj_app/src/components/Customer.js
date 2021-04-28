import React, { Component } from 'react';

class Customer extends Component {
    constructor(props){
        super(props);
        this.state={
            admin:[],
            mailId:this.props.match.params.mailId,
        };
        
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top sticky-top">
            <a class="navbar-brand" href="food_logo.png"></a>
                <img src="https://api.freelogodesign.org/files/92132c04e7dd48cc8f74d6ac5ac1850a/thumb/logo_200x200.png?v=637551158060000000" alt="my_logo" width="100px" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

                <form class="form-inline justify-content-center" text-align= "center">
      <input class="form-control mr-sm-2"type="text" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Profile</a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href={`/view-admin/${this.state.mailId}`} class="dropdown-item">My Profile</a>
                        <div class="dropdown-divider"></div>
                        <a href="/"class="dropdown-item">Logout</a>
                    </div>
                </li>
            </ul>
 
  </nav>
        
            </div>
        );
    }
}

export default Customer;
