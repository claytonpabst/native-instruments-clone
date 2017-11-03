import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './LoginLanding.css';


class LoginLanding extends Component {
  constructor(props){
    super(props)

    this.state = {
      usernameInput: '',
      passwordInput: '',
      adminLogin: false
    }
    //bind shit here
    this.login = this.login.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  login(){
    console.log('hit')
    axios.post(`/api/login`, {"username":this.state.usernameInput, "userpassword":this.state.passwordInput})
    .then( res => {
      if(res.data[0].isadmin === true){
        this.setState({
          adminLogin: true,
          usernameInput: '',
          passwordInput: ''
        })
        this.props.updateIsAdmin(true);
      }
      if(res.data.length){
        alert('Logged in as ' + res.data[0].username)
      }
    })   
  }

  handleUsernameInput(e){
    this.setState({
      usernameInput: e.target.value
    })
  }
  handlePasswordInput(e){
    this.setState({
      passwordInput: e.target.value
    })
  }

  render() {

    let loginLandingSectionStyle = !this.props.showLogin ?
      {"height": "0px","padding": "0px"}:
      {"height": "fit-content","padding": "30px"};

    return (
      <section style={loginLandingSectionStyle} id="loginLandingSection">
        <div>
          <h1>Enter Username</h1>
          <input value={this.state.usernameInput} onChange={this.handleUsernameInput} type="text"/>
          <br/>
          <h1>Enter Password</h1>
          <input value={this.state.passwordInput} onChange={this.handlePasswordInput} type="text"/>
          <button onClick={this.login}>Login</button>
          <br/>
        </div>
      </section>
    );
  }
}


export default LoginLanding;