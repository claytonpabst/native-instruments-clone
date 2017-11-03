import React, { Component } from 'react';
import axios from 'axios';


class AdminDeleteProducts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
    
  }

  componentDidMount() {
    this.props.onRef(this)
    axios.get(`/api/getProducts`)
      .then(res => {
        this.setState({
          products: res.data
        })
      })
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  deleteProduct(id, title){
    console.log(id, title)
    axios.delete(`/api/deleteProduct`, {params: {"productID":id, "productTitle":title}})
      .then(res => {
        alert(res.data)
      })
    this.componentDidMount()
  }

  render() {
    let products;
    if (this.state.products.length) {
      products = this.state.products.map((product, i) => {
        return (
          <div className='plpSingleProductWrapper' key={i}>
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <h5 onClick={() => this.deleteProduct(product.id, product.title)}>Delete</h5>
            <h5 onClick={() => this.props.editProduct(product.id, 
                                                      product.image, 
                                                      product.title, 
                                                      product.description, 
                                                      product.price, 
                                                      product.attributes)}>Edit</h5>
          </div>
        )
      })
    } else {
      products =
        <div className='plpSingleProductWrapper'>
            <h1>No 'products' in the database were found</h1>
        </div>
    }

    return (
      <section className="plpSection">
        <div className='plpContentWrapper'>
          {products}
        </div>
      </section>
    );
  }
}


export default AdminDeleteProducts;