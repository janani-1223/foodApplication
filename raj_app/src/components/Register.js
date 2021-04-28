import React, { Component } from 'react';
import LoginService from '../Services/LoginService';
import './Login.css';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            mailId:"",
            password:"",
            role:"",
            phoneNo:""
        }

        this.changeMailId=this.changeMailId.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeRole=this.changeRole.bind(this);
        this.changePhoneNo=this.changePhoneNo.bind(this);
        this.save=this.save.bind(this);
    }

    save=(p)=>{
        p.preventDefault();
        let register={mailId:this.state.mailId, password:this.state.password, role:this.state.role, phoneNo:this.state.phoneNo};
        console.log("register=>"+JSON.stringify(register));
        LoginService.createAccount(register).then((res)=>{
            alert("Account Created Successfully :)");
            this.props.history.push('/login');
        });
    }



    changeMailId=(event)=>{
        this.setState({mailId:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value});
    }

    changeRole=(event)=>{
        this.setState({role:event.target.value});
    }
    
    changePhoneNo=(event)=>{
        this.setState({phoneNo:event.target.value});
    }

    back(){
        this.props.history.push('/home');
    }
    render() {
        return (
                     <>
<div className="loginmain">
<p className="sign" align="center"><img src="https://api.freelogodesign.org/files/92132c04e7dd48cc8f74d6ac5ac1850a/thumb/logo_200x200.png?v=637551158060000000" alt="my_logo1" width="80px" /><br></br>Create Account</p>
<form className="form1 loginform">
    <input className="un" type="mail" align="center" placeholder="mailId" onChange={this.changeMailId}
    value={this.state.mailId} required/>

<input className="un" type="password" align="center" placeholder="password" onChange={this.changePassword}
    value={this.state.password} required/>
<div className="un" align="center">
            <select id="role" name="role" value={this.state.role} onChange={this.changeRole}>
                <option value="">-Select Option-</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
            </select>
</div>
    <input className="un" type="tel" align="center" placeholder="phoneNo" onChange={this.changePhoneNo}
    value={this.state.phoneNo} required/>
    <div className="btnsubmit">
        <button className="submit" align="center" onClick={this.save}>Sign Up</button>
    </div>

</form>
</div></>
        );
    }
}

export default Register;
