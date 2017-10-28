import React, { Component } from 'react';
import axios from 'axios';
import MainHeader from './../Headers/MainHeader.js';

import './CartLanding.css';


class CartLanding extends Component {
  constructor(props){
    super(props)

    this.state = {
      productsInCart:[]
    }
    //bind shit here
  }

  componentDidMount() {
    axios.get(`/api/getProductsInCart`)
      .then(res => {
        this.setState({
            productsInCart: res.data
        })
      })
  }

  strToInt(str, qnt){
    let total = str;
    total = total.split('$')[1]
    total = parseInt(total.split(',').join(''))
    total = total * qnt
    total = total.toLocaleString()
    return total
  }

  render() {

    let productsInCart = this.state.productsInCart.length ?
      this.state.productsInCart.map((product, i) => {
        let total = this.strToInt(product.price, product.quantity)
        return (
          <div className='clContentSingleItem' key={i}>
            <div style={{"width":"12%"}}>
              <img src={product.image} alt=""/>
            </div>
            <div style={{"width":"53%"}}>{product.title}</div>
            <div style={{"width":"10%"}}>{product.price}</div>
            <div style={{"width":"15%"}}>{product.quantity}</div>
            <div style={{"width":"10%"}}>${total}.00</div>
          </div>          
        )
      }): null;

    return (
      <section className="">
        <MainHeader/>
        <div className='clCartHeader'>
          <h1>Shopping Cart</h1>
        </div>   
        <section className='clContentSection'>
          <div className='clContentWrapper'>
            <div className='clContentDescriptionHeader'>
              <h1 style={{"width":"12%"}}></h1>
              <h1 style={{"width":"53%"}}>Product</h1>
              <h1 style={{"width":"10%"}}>Price</h1>
              <h1 style={{"width":"15%"}}>Quantity</h1>
              <h1 style={{"width":"10%"}}>Total</h1>
            </div>
            { productsInCart }
          </div>
        </section>
      </section>
    );
  }
}


export default CartLanding;