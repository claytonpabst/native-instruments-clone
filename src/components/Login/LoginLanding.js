import React, { Component } from 'react';
import axios from 'axios';

import './LoginLanding.css';


class LoginLanding extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    //bind shit here
    this.login = this.login.bind(this);
  }

  login(){
    console.log('hit')
    axios.post(`/api/login`, {"username":'admin', "userpassword":'admin'})
    .then( res => {
        console.log(res)
    })        
  }

  render() {

    return (
      <section className="">
        <button onClick={this.login}></button>
      </section>
    );
  }
}


export default LoginLanding;