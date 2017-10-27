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
        <div className='clCartHeader'>
          <h1>Shopping Cart</h1>
        </div>   
        <section className='clContentSection'>
          <div className='clContentWrapper'>
            <div className='clContentDescriptionHeader'>
              <h1 style={{"width":"10%"}}>Image</h1>
              <h1 style={{"width":"10%"}}>Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
            </div>
          </div>
        </section>
      </section>
    );
  }
}


export default CartLanding;