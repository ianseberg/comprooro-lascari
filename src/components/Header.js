import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1><strong>COMPRO ORO LASCARI <br />acquistiamo e valutiamo oro, argento e preziosi <a href="http://maps.google.com/?q=via Alcide de Gasperi, 64 Lascari, PA 90010 Italia/@38.000296,13.9391984" target="_blank">a Lascari (Palermo)</a>. <br /> 
                    Dal <a href="https://1000sunny.social" target="_blank">1960</a>.</strong></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
