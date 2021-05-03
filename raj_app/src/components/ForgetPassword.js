import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LoginService from '../Services/LoginService';
import './Forget.css';
class ForgetPassword extends Component {

    constructor(props){
        super(props);
        this.state={
            mailId:this.props.match.params.mailId,
           admin:{},
           isShow: false,
      showChangePassword: false,
        };
        this.OnChangePassword = this.OnChangePassword.bind(this);
    }

    changeMailId=(e)=>{
        this.setState({mailId:e.target.value});
    }
    changeNewpassword = (e) => {
        this.setState({
          newPassword: e.target.value,
        });
      };
      changeOldpassword = (e) => {
        this.setState({
          oldPassword: e.target.value,
        });
      };

      OnChangePassword(e) {
        e.preventDefault();
        if (this.state.showChangePassword === false) {
          this.setState({
            showChangePassword: true,
          });
        } else {
          this.setState({
            showChangePassword: false,
          });
        }
    
        let changeLogin = {
          mailId: this.state.mailId,
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword,
        };
        LoginService.resetPassword(changeLogin).then((res) => {
          alert("Password Changed Successfully");
          console.log(res.data);
          this.props.history.push('/login');
        });
      }
     
      

      render(){
          return(
            <div className="col-sm-8">
                  <div className="card col-md-6 offset-md-3 card">
                    <form className="form1">
                      <input
                        className="un comman"
                        type="mail"
                        align="center"
                        placeholder="MailId"
                        onChange={this.changeMailId}
                        value={this.state.mailId}
                        required
                      />
                      <input
                        className="pass comman"
                        type="password"
                        align="center"
                        placeholder="oldPassword"
                        onChange={this.changeOldpassword}
                        value={this.state.oldPassword}
                      />
                      <input
                        className="pass comman"
                        type="password"
                        align="center"
                        placeholder="newPassword"
                        onChange={this.changeNewpassword}
                        value={this.state.newPassword}
                      />
                      <div className="btnchange">
                        <button
                          className="changebtn"
                          onClick={this.OnChangePassword}
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
              </div>
          );
              }
    }
export default ForgetPassword;
