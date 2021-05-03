import React, { Component } from 'react';

class Customer extends Component {
    constructor(props){
        super(props);
        this.state={
            admin:[],
            mailId:this.props.match.params.mailId,
            quantity: 1,
            show: true,
            max:5,
            min:0
        };
        
    }

    IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity < 9) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }
    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }
    handleChange = (event) => {
      this.setState({quantity: event.target.value});
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
                        <a href={'/view-order/${this.state.orderId}'} class="dropdown-item">My Orders</a>
                        <div class="dropdown-divider"></div>
                        <a href="/"class="dropdown-item">Logout</a>
                    </div>
                </li>
            </ul>
 
  </nav>
  <br></br>
  
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJpSaaE0Dc3n05PHEgwKt8OtGzF9_HOAIpQ&usqp=CAU" class="rounded float-left" alt="chicken biryani"></img>
<br></br>
<div>
<label>Quantity:</label>
<br></br>
  <button onClick={this.IncrementItem}>+</button>
      <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
      <button onClick = {this.DecreaseItem}>-</button>
      </div>
    </div>
           
            
          
        );
    }
}

export default Customer;
