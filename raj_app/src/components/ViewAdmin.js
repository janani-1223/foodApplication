import React, { Component } from 'react';
import LoginService from '../Services/LoginService';
import {Link} from "react-router-dom";
class ViewAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            mailId:this.props.match.params.mailId,
           admin:{},
        };
       
    }

    componentDidMount(){
        LoginService.getDetailsById(this.state.mailId).then((res)=>{
            this.setState({admin:res.data});
        });
    }

      

    cancel(){
        if(this.state.admin.role==="admin"){
            this.props.history.push(`/admin/${this.state.mailId}`);
        }else if(this.state.admin.role==="customer"){
            this.props.history.push(`/customer/${this.state.mailId}`);
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3 card">
                    <h3 className="text-center headingtitle"> <img src="https://api.freelogodesign.org/files/92132c04e7dd48cc8f74d6ac5ac1850a/thumb/logo_200x200.png?v=637551158060000000" alt="my_logo1" width="100px" />
                    <br></br>View Profile<br></br>_____________________________________________</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Mail Id:</label>&nbsp;&nbsp;
                            <div>{this.state.admin.mailId}</div>
                        </div>
                        <div className="row">
                            <label>Password:</label>&nbsp;&nbsp;
                            <div>{this.state.admin.password}</div>
                        </div>
                        <div className="row">
                            <label>Role:</label>&nbsp;&nbsp;
                            <div>{this.state.admin.role}</div>
                        </div>
                        <div className="row">
                            <label>Phone No:</label>&nbsp;&nbsp;
                            <div>{this.state.admin.phoneNo}</div>
                        </div>
                       
                        {/* <button className="margin" onClick={this.onClickShow} class="button">Update</button> */}
              
                        <button className="button cancel" onClick={this.cancel.bind(this)}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAdmin;
