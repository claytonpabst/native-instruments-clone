import React, { Component } from 'react';
import axios from 'axios';
import MainHeader from './../Headers/MainHeader.js';
import MainFooter from './../Footers/MainFooter.js';

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

  productTotal(str, qnt){
    let total = str;
    total = total.split('$')[1]
    total = parseInt(total.split(',').join(''))
    total = total * qnt
    total = total.toLocaleString()
    return total
  }

  orderTotal(){
    let x = this.state.productsInCart;
    let total = 0;
    for(let i=0; i<x.length; i++){
      let iteration = x[i].price.split('$')[1];
      iteration = parseInt(iteration.split(',').join(''));
      total = total + (iteration * x[i].quantity);
    }
    total = total.toLocaleString();
    return total
  }

  render() {

    let productsInCart = this.state.productsInCart.length ?
      this.state.productsInCart.map((product, i) => {
        let total = this.productTotal(product.price, product.quantity)
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

    let subTotal = this.state.productsInCart.length ?
      this.orderTotal()
      :'0.00'

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
            <div className='clCheckoutSection'> 
              <div className='clCheckoutWrapperLeft'>
                <h1>CONTINUE SHOPPING</h1>
              </div>
              <div className='clCheckoutWrapperRight'>
                <div>
                  <h1>Subtotal</h1>    
                  <h1>Order Total Excl. Tax</h1>    
                  <h1>incl. Tax</h1>    
                  <h3>Order Total</h3>    
                </div>
                <div>
                  <h1>${subTotal}.00</h1>    
                  <h1>${subTotal}.00</h1>    
                  <h1>0.00</h1>    
                  <h3>${subTotal}.00</h3>
                </div>
              </div>
            </div>
            <div className='clCheckoutButton'><h1>CHECKOUT</h1></div> 
          </div>
        </section>
        <MainFooter/>
      </section>
    );
  }
}


export default CartLanding;