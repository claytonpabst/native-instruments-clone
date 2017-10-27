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
              <h1 style={{"width":"12%"}}>Image</h1>
              <h1 style={{"width":"53%"}}>Product</h1>
              <h1 style={{"width":"10%"}}>Price</h1>
              <h1 style={{"width":"15%"}}>Quantity</h1>
              <h1 style={{"width":"10%"}}>Total</h1>
            </div>
            <div className='clContentSingleItem'>
              <div style={{"width":"12%"}}>
                <img src="https://shop.native-instruments.com/media/catalog/product/cache/1/thumbnail/120x/9df78eab33525d08d6e5fb8d27136e95/s/y/symphony-series-collection_shop_1.png" alt=""/>
              </div>
              <div style={{"width":"53%"}}>Product</div>
              <div style={{"width":"10%"}}>Price</div>
              <div style={{"width":"15%"}}>Quantity</div>
              <div style={{"width":"10%"}}>Total</div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}


export default CartLanding;