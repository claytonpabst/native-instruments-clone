import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';


class MainHeader extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
        //bind shit here
    }


  render() {

    let headerName = {
        "transform":"scale(1, .6)",
        "font-weight":"bolder",
        "letter-spacing":"-1px",
        "font-size":"20px"
    }

    return (
      <div className="mainHeaderWrapper">
        <Link to='/' style={{"width":"230px"}} className='flexRow'>
            <img className='aLink' style={{"height":"40px"}} src="https://cdn.rekkerd.org/wp-content/uploads/2017/03/Native-Instruments-logo.png" alt=""/>
            {/*<ul style={headerName} >Native Instruments</ul>*/}
        </Link>
        <div style={{"width":"500px"}} className='flexRow'>
            <Link to='/products' className='navTextMedium'>PRODUCTS</Link>
            <Link to='/' className='navTextMedium'>BLOG</Link>
            <Link to='/' className='navTextMedium'>COMMUNITY</Link>
            <Link to='/' className='navTextMedium'>SUPPORT</Link>
        </div>
        <div style={{"width":"150px"}} className='flexRow'>
            <img className='aLink' style={{"height":"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETV_iGZaujVjXGEEhzClQMErGjomXPTr7XfTj_qIltNDzqUwmAQ" alt=""/>
            <img className='aLink' style={{"height":"20px"}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/5641-200.png" alt=""/>
            <img className='aLink' style={{"height":"20px"}} src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png" alt=""/>
        </div>
      </div>
    );
  }
}


export default MainHeader;