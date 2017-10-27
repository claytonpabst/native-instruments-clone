import React, { Component } from 'react';
import axios from 'axios';
import MainHeader from './../Headers/MainHeader.js';

import './CartLanding.css';


class CartLanding extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
    //bind shit here
  }

  render() {
    return (
      <section className="">
        <MainHeader/>      
      </section>
    );
  }
}


export default CartLanding;