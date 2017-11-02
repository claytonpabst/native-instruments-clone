import React, { Component } from 'react';
import axios from 'axios';


class AdminDeleteProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/getProducts`)
            .then(res => {
                console.log(res)
                this.setState({
                    products: res.data
                })
            })
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
                            <h5 onClick={() => this.addToCart(product.id, product.title)}>Delete</h5>
                            <h5 onClick={() => this.addToCart(product.id, product.title)}>Edit</h5>
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