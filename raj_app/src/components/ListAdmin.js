import React, { Component } from 'react';
import LoginService from '../Services/LoginService';

class ListAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            mailId:this.props.match.params.mailId,
            admin:[],
        };

    }

    componentDidMount(){
        LoginService.getDetailsById(this.state.mailId).then((response)=>{
            this.setState({admin:response.data});
        });
    }
    render() {
        return (
            <div className="container">
            <h2 className="text-center headingtitle">Customer Details</h2>
               <div className="row">
                   <table class="table table-striped table-bordered table-hover table-md table-responsive">
                       <thead className="thead-dark"  style={{whiteSpace:"nowrap"}}>
                       <tr class="table-success text-center">
                           <th>Mail Id</th>
                           <th>Password</th>
                           <th>Role</th>
                           <th>Phone No</th>
                       </tr>
                       </thead>
                       <tbody className="table-info text-center">
                           <th scope="row">{this.state.admin.mailId}</th>
                           <td>{this.state.admin.password}</td>
                           <td>{this.state.admin.role}</td>
                           <td>{this.state.admin.phoneNo}</td>
                       </tbody>

                   </table>
               </div> 
            </div>
        );
    }
}

export default ListAdmin;
