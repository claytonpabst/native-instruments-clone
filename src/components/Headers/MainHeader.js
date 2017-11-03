import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginLanding from './../Login/LoginLanding.js';

import './MainHeader.css';


class MainHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAdmin: false,
            showLogin: false,
            userName: ''
        }
        //bind shit here
        this.updateShowLogin = this.updateShowLogin.bind(this);
        this.updateIsAdmin = this.updateIsAdmin.bind(this);
    }

    updateShowLogin(){
        let val = this.state.showLogin ? false : true;
        this.setState({
            showLogin: val
        })
    }

    updateIsAdmin(val, name){
        this.setState({
            isAdmin:val,
            userName: name
        })
    }

    render() {

        let headerName = {
            "transform": "scale(1, .6)",
            "font-weight": "bolder",
            "letter-spacing": "-1px",
            "font-size": "20px"
        }

        let adminProtalLink = this.state.isAdmin ?
            <Link to='/admin' className='navTextMedium'>ADMIN PORTAL</Link> :
            null;
        
        let loginIcon = this.state.userName === '' ?
            <img onClick={this.updateShowLogin} className='aLink' style={{ "height": "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETV_iGZaujVjXGEEhzClQMErGjomXPTr7XfTj_qIltNDzqUwmAQ" alt="" />:
            <h1>{this.state.userName}</h1>

        return (
            <section>
                <div className="mainHeaderWrapper">
                    <Link to='/' style={{ "width": "230px" }} className='flexRow'>
                        <img className='aLink' style={{ "height": "40px" }} src="https://cdn.rekkerd.org/wp-content/uploads/2017/03/Native-Instruments-logo.png" alt="" />
                        {/*<ul style={headerName} >Native Instruments</ul>*/}
                    </Link>
                    <div style={{ "width": "500px" }} className='flexRow'>
                        <Link to='/products' className='navTextMedium'>PRODUCTS</Link>
                        <Link to='/' className='navTextMedium'>BLOG</Link>
                        <Link to='/' className='navTextMedium'>COMMUNITY</Link>
                        <Link to='/' className='navTextMedium'>SUPPORT</Link>
                        {adminProtalLink}
                    </div>
                    <div style={{ "width": "150px" }} className='flexRow'>
                        <img onClick={this.updateShowLogin} className='aLink' style={{ "height": "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETV_iGZaujVjXGEEhzClQMErGjomXPTr7XfTj_qIltNDzqUwmAQ" alt="" />
                        <Link to='/cart'><img className='aLink' style={{ "height": "20px" }} src="https://d30y9cdsu7xlg0.cloudfront.net/png/5641-200.png" alt="" /></Link>
                        <img className='aLink' style={{ "height": "20px" }} src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png" alt="" />
                    </div>
                </div>
                <LoginLanding   showLogin={this.state.showLogin}
                                updateIsAdmin={this.updateIsAdmin}
                                updateShowLogin={this.updateShowLogin}/>
            </section>
        );
    }
}


export default MainHeader;