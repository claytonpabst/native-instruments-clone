import React, { Component } from 'react';

import './MainHeader.css';


class MainHeader extends Component {



  render() {

    let headerName = {
        "transform":"scale(1, .6)",
        "font-weight":"bolder",
        "letter-spacing":"-1px",
        "font-size":"20px"
    }

    return (
      <div className="mainHeaderWrapper">
        <div style={{"width":"230px"}} className='flexRow'>
            <img style={{"height":"40px"}} src="https://static1.squarespace.com/static/57684221579fb3ab7144f54d/57ee4f38893fc0c995dad73a/57ee4f39d1758e241444feb2/1475235642440/native+instruments.png" alt=""/>
            <ul style={headerName} >Native Instruments</ul>
        </div>
        <div style={{"width":"500px"}} className='flexRow'>
            <ul className='navTextMedium'>PRODUCTS</ul>
            <ul className='navTextMedium'>BLOG</ul>
            <ul className='navTextMedium'>COMMUNITY</ul>
            <ul className='navTextMedium'>SUPPORT</ul>
        </div>
        <div style={{"width":"150px"}} className='flexRow'>
            <img style={{"height":"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETV_iGZaujVjXGEEhzClQMErGjomXPTr7XfTj_qIltNDzqUwmAQ" alt=""/>
            <img style={{"height":"20px"}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/5641-200.png" alt=""/>
            <img style={{"height":"20px"}} src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png" alt=""/>
        </div>
      </div>
    );
  }
}


export default MainHeader;