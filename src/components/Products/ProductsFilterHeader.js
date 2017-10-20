import React, { Component } from 'react';

import './ProductsFilterHeader.css';


class ProductsFilterHeader extends Component {
    constructor(props){
        super(props)

        this.state = {
            itemColors:['#19f','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc']
        }
        //bind shit here
    }

    updateItemColors(num){
        let newItemColors = [...this.state.itemColors]
        newItemColors[num] = '#19f'
        for(let i=0; i<newItemColors.length; i++){
            if(i !== num){
                newItemColors[i] = '#ccc';
            }
        }
        this.setState({
            itemColors: newItemColors
        })
    }

  render() {

    return (
      <section className="pfhSection">
        <div className='pfhContentWrapper'>
            <ul style={{"flex-wrap":"wrap"}} className='flexRow'>
                <li onClick={ ()=> { this.updateItemColors(0) }} style={{"color":`${this.state.itemColors[0]}`}}>All</li>
                <li onClick={ ()=> { this.updateItemColors(1) }} style={{"color":`${this.state.itemColors[1]}`}}>Free</li>
                <li onClick={ ()=> { this.updateItemColors(2) }} style={{"color":`${this.state.itemColors[2]}`}}>Bundles</li>
                <li onClick={ ()=> { this.updateItemColors(3) }} style={{"color":`${this.state.itemColors[3]}`}}>Keyboards</li>
                <li onClick={ ()=> { this.updateItemColors(4) }} style={{"color":`${this.state.itemColors[4]}`}}>Synths</li>
                <li onClick={ ()=> { this.updateItemColors(5) }} style={{"color":`${this.state.itemColors[5]}`}}>Samplers</li>
                <li onClick={ ()=> { this.updateItemColors(6) }} style={{"color":`${this.state.itemColors[6]}`}}>Effects</li>
                <li onClick={ ()=> { this.updateItemColors(7) }} style={{"color":`${this.state.itemColors[7]}`}}>Drums</li>
                <li onClick={ ()=> { this.updateItemColors(8) }} style={{"color":`${this.state.itemColors[8]}`}}>Keys</li>
                <li onClick={ ()=> { this.updateItemColors(9) }} style={{"color":`${this.state.itemColors[9]}`}}>Guitars</li>
                <li onClick={ ()=> { this.updateItemColors(10) }} style={{"color":`${this.state.itemColors[10]}`}}>Strings</li>
                <li onClick={ ()=> { this.updateItemColors(11) }} style={{"color":`${this.state.itemColors[11]}`}}>Brass/Woodwinds</li>
                <li onClick={ ()=> { this.updateItemColors(12) }} style={{"color":`${this.state.itemColors[12]}`}}>Cinematic</li>
                <li onClick={ ()=> { this.updateItemColors(13) }} style={{"color":`${this.state.itemColors[13]}`}}>World</li>
                <li onClick={ ()=> { this.updateItemColors(14) }} style={{"color":`${this.state.itemColors[14]}`}}>Audio Interfaces</li>
            </ul>
        </div>
      </section>
    );
  }
}


export default ProductsFilterHeader;