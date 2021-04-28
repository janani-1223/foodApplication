import React, { Component } from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import LoginService from '../Services/LoginService';
class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            admin:[],
            mailId:this.props.match.params.mailId,
        };
        
    }
    view(mailId){
        this.props.history.push(`/view-admin/${mailId}`);
    }
    componentDidMount(){
        LoginService.getAll().then((response)=>{
            this.setState({admin:response.data});
            console.log(this.state.admin);
        });
    }
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top sticky-top">
            <a class="navbar-brand" href="logo.png"></a>
                <img src="https://api.freelogodesign.org/files/92132c04e7dd48cc8f74d6ac5ac1850a/thumb/logo_200x200.png?v=637551158060000000" alt="my_logo1" width="100px" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

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
                        {/* <a href="#" class="dropdown-item">Settings</a> */}
                        <div class="dropdown-divider"></div>
                        <a href="/"class="dropdown-item">Logout</a>
                    </div>
                </li>
            </ul>
  </nav>
  <div className="container">
            <h2 className="text-center headingtitle">Customer Details</h2>
               <div className="row">
                   <table class="table table-striped table-hover table-md table-responsive">
                       <thead className="thead-dark"  style={{whiteSpace:"nowrap"}}>
                       <tr class="table-success text-center">
                           <th>Mail Id</th>
                           <th>Password</th>
                           <th>Role</th>
                           <th>Phone No</th>
                           <th colspan="2" style={{textAlign:"center"}}>Actions</th>
                       </tr>
                       </thead>
                       <tbody className="table-light text-center">
                       {this.state.admin.map((ad)=>(
                           <tr key={ad.mailId}>
                           <th scope="row">{ad.mailId}</th>
                           <td>{ad.password}</td>
                           <td>{ad.role}</td>
                           <td>{ad.phoneNo}</td>
                           <td>
                               <div className="actions">
                                   <button id="margin" onClick={()=>this.edit(ad.mailId)} class="button">Update</button>
                               </div>
                           </td>
                           <td>
                               <div className="actions">
                                   <button id="margin" onClick={()=>this.view(ad.mailId)} class="button">View</button>
                               </div>
                           </td>
                           </tr>
                       ))}
                       </tbody>

                   </table>
               </div> 
            </div>

  </div>
                  
        );
    }
}

export default Admin;
