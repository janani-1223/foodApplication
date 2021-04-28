import React, { Component } from 'react';
import './Login.css';
import LoginService from "../Services/LoginService";
import {Link} from "react-router-dom";
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            mailId:"",
            password:"",
            role:"",
            isLoaded: false,
        };

        this.onSubmit=this.onSubmit.bind(this);
        this.OnRoleChange=this.OnRoleChange.bind(this);
        this.changeMailId=this.changeMailId.bind(this);
    }


    componentDidMount(){

    }

    onSubmit=(e)=>{
        e.preventDefault();
        let login={mailId:this.state.mailId, password:this.state.password,role:this.state.role};
        console.log(this.state.role);
        LoginService.signIn(login).then((res)=>{alert("Login Successful");
        let l=res.data;
    if(l.role==="admin"){
        this.props.history.push(`/admin/${this.state.mailId}`);
    }else if(l.role==="customer"){
        this.props.history.push(`/customer/${this.state.mailId}`);
    }
console.log(JSON.stringify(login));
})
.catch((res)=>{
alert("Incorrect Credentails:(");
});
    };

    OnRoleChange =(e)=>{
        this.setState({role:e.target.value});
        console.log(this.state.role);
    };

    onRoleChange1=(e)=>{
        this.setState({role:e.target.value});
        console.log(this.state.role);
    }

    changeMailId=(e)=>{
        this.setState({mailId:e.target.value});
    }

    changePassword=(e)=>{
        this.setState({password:e.target.value});
    }

    render() {
        return (
            <>
<div className="loginmain" >
<p className="sign" align="center"><img src="https://api.freelogodesign.org/files/92132c04e7dd48cc8f74d6ac5ac1850a/thumb/logo_200x200.png?v=637551158060000000" alt="my_logo1" width="100px" /></p>
<form className="form1 loginform">
    <input className="un" type="mail" align="center" placeholder="mailId" onChange={this.changeMailId}
    value={this.state.mailId} required/>

<input className="un" type="password" align="center" placeholder="password" onChange={this.changePassword}
    value={this.state.password} required/>

    <div className="radioGroup">
        <div className="radiobtn">
            <label>
                <input type="radio" value="admin" checked={this.state.role==="admin"}
                onChange={this.OnRoleChange} />Admin
            </label>
        </div>

        <div className="radiobtn">
            <label>
                <input type="radio" value="customer" checked={this.state.role==="customer"}
                onChange={this.onRoleChange1} />Customer
            </label>
        </div>
    </div>
    <div className="btnsubmit">
        <button className="submit" align="center" onClick={this.onSubmit}>Log In</button>
    </div>
    <div className="forgot" align="center">
        <Link to="/forgotPassword">Forget Password</Link>
    </div>
</form>
 </div>
 </>
        );
    }
}

export default Login;
