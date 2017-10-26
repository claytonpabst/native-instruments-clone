import React, { Component } from 'react';
import axios from 'axios';
import MainHeader from './../Headers/MainHeader.js';

import './AdminLanding.css';


class AdminLanding extends Component {
  constructor(props){
    super(props)

    this.state = {
      imageInput:'data:image/jpeg;base64,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',
      titleInput: 'Title',
      descriptionInput: 'Description',
      priceInput: 'Price',
      attributesInput: 'All'
    }
    //bind shit here
    this.handleImageInput = this.handleImageInput.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.handleAttributesInput = this.handleAttributesInput.bind(this);
  }

  handleImageInput(e){
    this.setState({
      imageInput: e.target.value
    })
  }

  handleTitleInput(e){
    this.setState({
      titleInput: e.target.value
    })
  }
  handleDescriptionInput(e){
    this.setState({
      descriptionInput: e.target.value
    })
  }
  handlePriceInput(e){
    this.setState({
      priceInput: e.target.value
    })
  }
  handleAttributesInput(e){
    this.setState({
      attributesInput: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <section className="">
        <MainHeader/>
        <h1>Image Source</h1>
        <input onChange={this.handleImageInput} type="text"/>
        <br/>
        <h1>Title</h1>
        <input onChange={this.handleTitleInput} type="text"/>
        <br/>
        <h1>Description</h1>
        <input onChange={this.handleDescriptionInput} type="text"/>
        <br/>
        <h1>Price</h1>
        <input onChange={this.handlePriceInput} type="text"/>
        <br/>
        <h1>Attributes (Attributes should be capitalized and separated by a space only.)</h1>
        <input onChange={this.handleAttributesInput} type="text"/>
        <br/>
        <button onClick={this.Submit}>Submit</button>
        <br/>
        <div className='plpSingleProductWrapper'>
            <img src={this.state.imageInput} alt="" />
            <h1>{this.state.titleInput}</h1>
            <p>{this.state.descriptionInput}</p>
            <h3>{this.state.priceInput}</h3>
            <h5>Buy Now</h5>
        </div>        
      </section>
    );
  }
}


export default AdminLanding;