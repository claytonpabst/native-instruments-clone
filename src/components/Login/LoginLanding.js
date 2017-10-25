import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainHeader from './../Headers/MainHeader.js';

import './LoginLanding.css';


class LoginLanding extends Component {
  constructor(props){
    super(props)

    this.state = {
      usernameInput: '',
      passwordInput: ''
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
    console.log(this.state);
    return (
      <section className="">
        <MainHeader/>
        <h1>Enter Username</h1>
        <input onChange={this.handleUsernameInput} type="text"/>
        <br/>
        <h1>Enter Password</h1>
        <input onChange={this.handlePasswordInput} type="text"/>
        <Link to='/'><button onClick={this.login}>Login</button></Link>
      </section>
    );
  }
}


export default LoginLanding;